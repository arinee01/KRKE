/* ConCreCen — interactive ontology & knowledge graph (D3 v7) */
(function () {
  const GROUPS = {
    event:      { color: "#cf222e", label: "Censorship event" },
    response:   { color: "#1a7f37", label: "Creative response" },
    agent:      { color: "#8250df", label: "Agent" },
    work:       { color: "#0969da", label: "Creative work" },
    constraint: { color: "#bc4c00", label: "Constraint" },
    element:    { color: "#9a6700", label: "Work element" },
    vocab:      { color: "#57606a", label: "Controlled vocabulary" },
    evidence:   { color: "#1b7c83", label: "Evidence (source / claim)" },
    other:      { color: "#6e7781", label: "Other" },
  };

  let sim = null;
  let currentView = "ontology";
  let showSub = true;
  let showEvidence = false;
  let zoomBeh = null, svgSel = null, gSel = null;

  function legend() {
    const el = document.getElementById("og-legend");
    if (!el) return;
    el.innerHTML = Object.entries(GROUPS)
      .filter(([k]) => k !== "other")
      .map(([, g]) => `<span class="og-legend-item"><span class="og-dot" style="background:${g.color}"></span>${g.label}</span>`)
      .join("") +
      `<span class="og-legend-item"><span class="og-line"></span>object property</span>` +
      `<span class="og-legend-item"><span class="og-line og-line-dash"></span>subClassOf</span>`;
  }

  function info(d, links) {
    const box = document.getElementById("og-info");
    if (!box) return;
    if (!d) {
      box.innerHTML = `<p class="og-info-hint">Click a node to see its definition and relations. Drag nodes, scroll to zoom.</p>`;
      return;
    }
    const out = links.filter(l => l.source.id === d.id).map(l => `<li><code>${l.label}</code> → ${l.target.label}</li>`).join("");
    const inc = links.filter(l => l.target.id === d.id).map(l => `<li>${l.source.label} → <code>${l.label}</code></li>`).join("");
    box.innerHTML = `
      <div class="og-info-type" style="color:${(GROUPS[d.group] || GROUPS.other).color}">${d.kind === "class" ? "Class" : (d.type || "Individual")}</div>
      <h3 class="og-info-title">${d.label}</h3>
      <div class="og-info-iri"><code>cc:${d.id}</code></div>
      ${d.comment ? `<p class="og-info-comment">${d.comment}</p>` : ""}
      ${out ? `<div class="og-info-sub">Outgoing</div><ul>${out}</ul>` : ""}
      ${inc ? `<div class="og-info-sub">Incoming</div><ul>${inc}</ul>` : ""}`;
  }

  function draw() {
    const wrap = document.getElementById("og-canvas");
    if (!wrap || !window.d3 || !window.CONCRECEN_GRAPH) return;
    const d3 = window.d3;
    wrap.innerHTML = "";
    if (sim) sim.stop();

    const raw = window.CONCRECEN_GRAPH[currentView];
    const nodes = raw.nodes.map(n => ({ ...n }));
    let links = raw.links.map(l => ({ ...l }));
    if (currentView === "ontology" && !showSub) links = links.filter(l => l.kind !== "sub");
    let nodesF = nodes;
    if (currentView === "kg" && !showEvidence) {
      const keep = new Set(nodes.filter(n => n.group !== "evidence").map(n => n.id));
      nodesF = nodes.filter(n => keep.has(n.id));
      links = links.filter(l => keep.has(l.source) && keep.has(l.target));
    }

    const W = wrap.clientWidth || 900;
    const H = Math.max(600, Math.min(820, window.innerHeight * 0.8));

    const svg = d3.select(wrap).append("svg")
      .attr("viewBox", [0, 0, W, H]).attr("width", "100%").attr("height", H)
      .attr("role", "img").attr("aria-label", "Interactive graph of the ConCreCen ontology");

    const defs = svg.append("defs");
    defs.append("marker").attr("id", "og-arrow").attr("viewBox", "0 -5 10 10")
      .attr("refX", 10).attr("refY", 0).attr("markerWidth", 7).attr("markerHeight", 7).attr("orient", "auto")
      .append("path").attr("d", "M0,-4L10,0L0,4").attr("fill", "#8c959f");
    defs.append("marker").attr("id", "og-arrow-sub").attr("viewBox", "0 -5 10 10")
      .attr("refX", 10).attr("refY", 0).attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto")
      .append("path").attr("d", "M0,-4L10,0L0,4Z").attr("fill", "#fff").attr("stroke", "#8c959f");

    const g = svg.append("g");
    zoomBeh = d3.zoom().scaleExtent([0.2, 3]).on("zoom", e => g.attr("transform", e.transform));
    svg.call(zoomBeh); svgSel = svg; gSel = g;

    const deg = {};
    links.forEach(l => { deg[l.source] = (deg[l.source] || 0) + 1; deg[l.target] = (deg[l.target] || 0) + 1; });
    const r = d => (currentView === "ontology" ? 7 : 5) + Math.min(10, Math.sqrt(deg[d.id] || 1) * 2.2);

    // handle parallel edges between the same pair
    const pairCount = {};
    links.forEach(l => {
      const k = [l.source, l.target].sort().join("|");
      pairCount[k] = (pairCount[k] || 0) + 1;
      l.pairIndex = pairCount[k];
    });

    sim = d3.forceSimulation(nodesF)
      .force("link", d3.forceLink(links).id(d => d.id).distance(l => l.kind === "sub" ? 55 : (currentView === "ontology" ? 140 : 80)).strength(l => l.kind === "sub" ? 0.9 : 0.35))
      .force("charge", d3.forceManyBody().strength(currentView === "ontology" ? -520 : -260))
      .force("center", d3.forceCenter(W / 2, H / 2))
      .force("collide", d3.forceCollide().radius(d => r(d) + (currentView === "ontology" ? 26 : 14)))
      .force("x", d3.forceX(W / 2).strength(0.04))
      .force("y", d3.forceY(H / 2).strength(0.06));

    const link = g.append("g").attr("class", "og-links").selectAll("path").data(links).join("path")
      .attr("class", d => "og-link " + (d.kind === "sub" ? "og-link-sub" : "og-link-prop"))
      .attr("marker-end", d => d.kind === "sub" ? "url(#og-arrow-sub)" : "url(#og-arrow)");

    const linkLabel = g.append("g").selectAll("text").data(links.filter(l => l.kind !== "sub")).join("text")
      .attr("class", "og-link-label" + (currentView === "kg" ? " og-label-hidden" : "")).text(d => d.label);

    const node = g.append("g").selectAll("g").data(nodesF).join("g").attr("class", "og-node")
      .call(d3.drag()
        .on("start", (e, d) => { if (!e.active) sim.alphaTarget(0.25).restart(); d.fx = d.x; d.fy = d.y; })
        .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
        .on("end", (e, d) => { if (!e.active) sim.alphaTarget(0); }));

    node.append("circle").attr("r", r)
      .attr("fill", d => (GROUPS[d.group] || GROUPS.other).color)
      .attr("stroke", "#fff").attr("stroke-width", 1.5);
    node.append("text").attr("class", "og-node-label")
      .attr("dy", d => r(d) + 12).attr("text-anchor", "middle")
      .text(d => d.label.length > 34 ? d.label.slice(0, 32) + "…" : d.label);
    node.append("title").text(d => d.label);

    function focus(d) {
      if (!d) {
        node.classed("og-dim", false); link.classed("og-dim", false).classed("og-hl", false); linkLabel.classed("og-dim", false).classed("og-label-show", false);
        info(null, links); return;
      }
      const nb = new Set([d.id]);
      links.forEach(l => { if (l.source.id === d.id) nb.add(l.target.id); if (l.target.id === d.id) nb.add(l.source.id); });
      node.classed("og-dim", n => !nb.has(n.id));
      link.classed("og-dim", l => l.source.id !== d.id && l.target.id !== d.id)
          .classed("og-hl", l => l.source.id === d.id || l.target.id === d.id);
      linkLabel.classed("og-dim", l => l.source.id !== d.id && l.target.id !== d.id)
               .classed("og-label-show", l => l.source.id === d.id || l.target.id === d.id);
      info(d, links);
    }
    node.on("click", (e, d) => { e.stopPropagation(); focus(d); });
    svg.on("click", () => focus(null));

    sim.on("tick", () => {
      link.attr("d", d => {
        const dx = d.target.x - d.source.x, dy = d.target.y - d.source.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (d.source.id === d.target.id) {
          const x = d.source.x, y = d.source.y, rr = r(d.source);
          return `M${x},${y - rr} C${x + 40},${y - 50} ${x + 50},${y + 10} ${x + rr},${y}`;
        }
        const tr = r(d.target) + 2;
        const tx = d.target.x - dx / dist * tr, ty = d.target.y - dy / dist * tr;
        if (d.pairIndex > 1) {
          const dr = dist * (1.6 / (d.pairIndex - 0.5));
          return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${tx},${ty}`;
        }
        return `M${d.source.x},${d.source.y}L${tx},${ty}`;
      });
      linkLabel
        .attr("x", d => (d.source.x + d.target.x) / 2 + (d.pairIndex > 1 ? 10 * d.pairIndex : 0))
        .attr("y", d => (d.source.y + d.target.y) / 2 - 3 - (d.pairIndex > 1 ? 8 * d.pairIndex : 0));
      node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    function fit() {
      const b = g.node().getBBox();
      if (!b.width || !b.height) return;
      const pad = 30;
      const k = Math.min(2, 0.95 / Math.max((b.width + pad * 2) / W, (b.height + pad * 2) / H));
      const tx = W / 2 - k * (b.x + b.width / 2), ty = H / 2 - k * (b.y + b.height / 2);
      svg.transition().duration(500).call(zoomBeh.transform, d3.zoomIdentity.translate(tx, ty).scale(k));
    }
    sim.on("end", fit);
    setTimeout(fit, 1800);
    const fitBtn = document.getElementById("og-fit");
    if (fitBtn) fitBtn.onclick = fit;

    const counts = document.getElementById("og-counts");
    if (counts) counts.textContent = `${nodesF.length} nodes · ${links.length} edges`;
    info(null, links);
  }

  function setView(v) {
    currentView = v;
    document.querySelectorAll(".og-tab").forEach(b => b.classList.toggle("active", b.dataset.view === v));
    const sub = document.getElementById("og-sub-toggle");
    if (sub) sub.style.display = v === "ontology" ? "" : "none";
    const ev = document.getElementById("og-ev-toggle");
    if (ev) ev.style.display = v === "kg" ? "" : "none";
    draw();
  }

  function init() {
    legend();
    document.querySelectorAll(".og-tab").forEach(b => b.addEventListener("click", () => setView(b.dataset.view)));
    const sub = document.getElementById("og-sub-cb");
    if (sub) sub.addEventListener("change", () => { showSub = sub.checked; draw(); });
    const ev = document.getElementById("og-ev-cb");
    if (ev) ev.addEventListener("change", () => { showEvidence = ev.checked; draw(); });
    const evl = document.getElementById("og-ev-toggle");
    if (evl) evl.style.display = "none";
    const maybeDraw = () => {
      const sec = document.getElementById("knowledge-graph");
      if (sec && sec.classList.contains("active")) draw();
    };
    window.addEventListener("hashchange", () => setTimeout(maybeDraw, 30));
    window.addEventListener("resize", () => { clearTimeout(window.__ogR); window.__ogR = setTimeout(maybeDraw, 200); });
    setTimeout(maybeDraw, 50);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
