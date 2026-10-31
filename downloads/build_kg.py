"""Build the ConCreCen knowledge graph (ABox) from data/cases.csv and data/sources.csv.

v2.2 changes:
- multiple performers supported (";"-separated performer_id / performer_name)
- event dates / years may be ranges like "1941-1945" (stored as plain literals)
- rows whose work_type is CreativePractice are linked via cc:targetsPractice
  (not targetsWork) and get no createdBy link (domain of createdBy is CreativeWork)
"""
import csv
from rdflib import Graph, Namespace, Literal, URIRef, RDF, RDFS, OWL, XSD

CC = Namespace("http://example.org/censorcreate#")
g = Graph()
g.bind("cc", CC); g.bind("owl", OWL); g.bind("rdfs", RDFS); g.bind("xsd", XSD)
kg = URIRef("http://example.org/censorcreate/cases")
g.add((kg, RDF.type, OWL.Ontology))
g.add((kg, OWL.imports, URIRef("http://example.org/censorcreate")))
g.add((kg, RDFS.label, Literal("ConCreCen — documented case studies (knowledge graph)", lang="en")))

def ind(i, cls, label=None):
    u = CC[i]
    g.add((u, RDF.type, OWL.NamedIndividual)); g.add((u, RDF.type, CC[cls]))
    if label: g.add((u, RDFS.label, Literal(label, lang="en")))
    g.add((u, CC.dataProvenance, Literal("documented case")))
    return u

def many(v): return [x.strip() for x in v.split(";") if x.strip()]

def lit_year(v):
    v = v.strip()
    try: return Literal(int(v))
    except ValueError: return Literal(v)  # e.g. "1941-1945"

for s in csv.DictReader(open("data/sources.csv", encoding="utf-8-sig")):
    u = ind(s["source_id"], s["source_type"], s["title"])
    g.add((u, CC.sourceTitle, Literal(s["title"])))
    g.add((u, CC.bibliographicCitation, Literal(s["citation"])))
    g.add((u, CC.sourceURL, Literal(s["url"], datatype=XSD.anyURI)))
    if s["publication_year"]: g.add((u, CC.publicationYear, lit_year(s["publication_year"])))

for r in csv.DictReader(open("data/cases.csv", encoding="utf-8-sig")):
    is_practice = (r["work_type"] == "CreativePractice")
    w = ind(r["work_id"], r["work_type"], r["work_title"])
    g.add((w, CC.title, Literal(r["work_title"])))
    if r["creation_year"]: g.add((w, CC.creationYear, lit_year(r["creation_year"])))
    creators = [ind(pid, "Creator", pname) for pid, pname in zip(many(r["creator_id"]), many(r["creator_name"]))]
    c = creators[0]
    if not is_practice:
        for cr in creators: g.add((w, CC.createdBy, cr))
    e = ind(r["event_id"], "CensorshipEvent")
    if is_practice:
        g.add((e, CC.targetsPractice, w))
    else:
        g.add((e, CC.targetsWork, w))
    if r["event_description"]: g.add((e, CC.description, Literal(r["event_description"])))
    if r["event_date"]: g.add((e, CC.eventDate, lit_year(r["event_date"])))
    if r["agent_id"]:
        a = ind(r["agent_id"], r["agent_type"] or "CensoringAgent", r["agent_name"] or None)
        g.add((e, CC.imposedBy, a))
    for m in many(r["mechanisms"]): g.add((e, CC.usesMechanism, CC[m]))
    k = ind(r["constraint_id"], "CensorshipConstraint"); g.add((e, CC.imposesConstraint, k))
    for t in many(r["constraint_types"]): g.add((k, CC.hasConstraintType, CC[t]))
    if r["constraint_description"]: g.add((k, CC.description, Literal(r["constraint_description"])))
    if r["element_id"]:
        el = ind(r["element_id"], r["element_type"])
        g.add((k, CC.constrainsElement, el))
        g.add((el, CC.description, Literal(r["element_description"])))
    cl = ind(r["claim_id"], "Claim")
    g.add((cl, CC.aboutCensorshipEvent, e))
    g.add((cl, CC.claimText, Literal(r["claim_text"])))
    g.add((cl, CC.confidenceLevel, Literal(r["confidence"])))
    for sid in many(r["sources"]):
        g.add((cl, CC.supportedBy, CC[sid])); g.add((e, CC.documentedBy, CC[sid]))
    if r["response_id"]:
        re_ = ind(r["response_id"], "CreativeResponse")
        g.add((e, CC.hasResponse, re_)); g.add((re_, CC.respondsTo, k))
        g.add((re_, CC.description, Literal(r["response_description"])))
        if r["response_date"]: g.add((re_, CC.eventDate, lit_year(r["response_date"])))
        performers = []
        for pid, pname in zip(many(r["performer_id"]), many(r["performer_name"])):
            p = ind(pid, "Creator", pname)
            g.add((re_, CC.performedBy, p)); performers.append(p)
        for st in many(r["strategies"]): g.add((re_, CC.usesStrategy, CC[st]))
        if r["outcome"]: g.add((re_, CC.hasOutcome, CC[r["outcome"]]))
        g.add((cl, CC.aboutCreativeResponse, re_))
        for sid in many(r["sources"]): g.add((re_, CC.documentedBy, CC[sid]))
        if r["result_id"]:
            res = ind(r["result_id"], r["result_type"], r["result_title"])
            g.add((res, CC.title, Literal(r["result_title"])))
            if r["result_year"]: g.add((res, CC.creationYear, lit_year(r["result_year"])))
            for cr in list(dict.fromkeys(creators + performers)): g.add((res, CC.createdBy, cr))
            if r["result_type"] == "WorkVersion":
                g.add((re_, CC.producesVersion, res)); g.add((res, CC.versionOf, w))
            else:
                g.add((re_, CC.resultsInWork, res))
    elif r["outcome"] or r["result_id"]:
        # row documents an outcome / resulting version without an identified
        # creative response (e.g. suppression side of a case): mirror Artem's
        # modelling — outcome on the event, result version linked via versionOf
        if r["outcome"]: g.add((e, CC.hasOutcome, CC[r["outcome"]]))
        if r["result_id"]:
            res = ind(r["result_id"], r["result_type"], r["result_title"])
            g.add((res, CC.title, Literal(r["result_title"])))
            if r["result_year"]: g.add((res, CC.creationYear, lit_year(r["result_year"])))
            if not is_practice:
                for cr in creators: g.add((res, CC.createdBy, cr))
            if r["result_type"] == "WorkVersion":
                g.add((res, CC.versionOf, w))
            else:
                g.add((e, CC.resultsInWork, res))

g.serialize("cases-triples.ttl", format="turtle")
core = Graph(); core.parse("censorcreate-core-v2.2.ttl", format="turtle")
full = core + g
for t in list(full.triples((kg, None, None))): full.remove(t)
full.serialize("censorcreate-v2.2-with-cases.owl", format="xml")
full.serialize("censorcreate-v2.2-with-cases.ttl", format="turtle")
print("cases triples:", len(g), "| full:", len(full))
