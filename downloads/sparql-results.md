# ConCreCen — SPARQL results for CQ1–CQ10

Run on `censorcreate-v2-with-cases.owl` (asserted triples only, without reasoning). The synthetic test individuals are filtered out.


## CQ1. Which creative works were subjected to censorship?

Query file: `queries/cq01_censored_works.rq` — 4 rows

| work | title | year |
|---|---|---|
| LadyMacbethMtsensk | Lady Macbeth of the Mtsensk District | 1932 |
| ShostakovichSymphony4 | Symphony No. 4 in C minor, Op. 43 | 1936 |
| Notorious1946 | Notorious | 1946 |
| HinzeKunzeRoman | Hinze-Kunze-Roman | 1981 |

## CQ2. Who or which institution imposed censorship on a work?

Query file: `queries/cq02_censoring_agents.rq` — 4 rows

| title | event | agentName |
|---|---|---|
| Hinze-Kunze-Roman | EV_HKR_PrintApproval | Hauptverwaltung Verlage und Buchhandel (GDR Ministry of Culture) |
| Lady Macbeth of the Mtsensk District | EV_Pravda1936 | Pravda (Communist Party newspaper; editorial expressing the official Party line) |
| Notorious | EV_Notorious_PCAReview | Production Code Administration (headed by Joseph Breen) |
| Symphony No. 4 in C minor, Op. 43 | EV_Sym4_Cancellation | Union of Soviet Composers and Party officials |

## CQ3. Which censorship mechanism was used?

Query file: `queries/cq03_mechanisms.rq` — 9 rows

| title | event | mechanism |
|---|---|---|
| Hinze-Kunze-Roman | EV_HKR_DistributionStop | Distribution restriction |
| Hinze-Kunze-Roman | EV_HKR_PrintApproval | Modification requirement |
| Hinze-Kunze-Roman | EV_HKR_PrintApproval | Prior approval |
| Lady Macbeth of the Mtsensk District | EV_Pravda1936 | Ban |
| Lady Macbeth of the Mtsensk District | EV_Pravda1936 | Removal |
| Notorious | EV_Notorious_PCAReview | Modification requirement |
| Notorious | EV_Notorious_PCAReview | Prior approval |
| Symphony No. 4 in C minor, Op. 43 | EV_Sym4_Cancellation | Ban |
| Symphony No. 4 in C minor, Op. 43 | EV_Sym4_Cancellation | Self-censorship |

## CQ4. What element or aspect of the work was constrained?

Query file: `queries/cq04_constrained_elements.rq` — 5 rows

| title | elementType | element |
|---|---|---|
| Lady Macbeth of the Mtsensk District | Audio element | Dissonant, modernist musical idiom of Lady Macbeth (and of the Fourth Symphony in progress). |
| Symphony No. 4 in C minor, Op. 43 | Audio element | Dissonant, modernist musical idiom of Lady Macbeth (and of the Fourth Symphony in progress). |
| Notorious | Scene | Love scene between Devlin (Cary Grant) and Alicia (Ingrid Bergman) in her Rio apartment. |
| Hinze-Kunze-Roman | Theme | Ironic portrayal of a Party functionary (Kunze) and his chauffeur (Hinze); apparatchik privilege at the heart of the plot. |
| Notorious | Theme | Characterisation of Alicia Huberman's sexual morality. |

## CQ5. What constraint resulted from the censorship event?

Query file: `queries/cq05_constraints.rq` — 7 rows

| event | constraintType | constraint |
|---|---|---|
| EV_HKR_DistributionStop | Content restriction | Circulation of the already published novel halted. |
| EV_HKR_PrintApproval | Subject restriction | Objections that the irony targets socialism, distorts the concept of freedom and represents the Liebknecht-Luxemburg commemoration unworthily (Neubert report, July 1984). |
| EV_Notorious_PCAReview | Subject restriction | Alicia must not appear as a 'grossly immoral woman'; any suggestion of sexual promiscuity to be avoided; the word 'tramp' to be removed. |
| EV_Notorious_PCAReview | Content restriction | Production Code: 'Excessive and lustful kissing ... are not to be shown'; enforced through an unofficial rule of thumb that a screen kiss should not exceed about three seconds. |
| EV_Notorious_PCAReview | Direct representation restriction | Production Code: 'Excessive and lustful kissing ... are not to be shown'; enforced through an unofficial rule of thumb that a screen kiss should not exceed about three seconds. |
| EV_Pravda1936 | Stylistic restriction | Condemnation of 'formalism': dissonant, modernist musical language declared unacceptable; Kerzhentsev demanded a concrete demonstration of reform in future works. |
| EV_Sym4_Cancellation | Stylistic restriction | Condemnation of 'formalism': dissonant, modernist musical language declared unacceptable; Kerzhentsev demanded a concrete demonstration of reform in future works. |

## CQ6. How did the creator respond to the constraint?

Query file: `queries/cq06_responses.rq` — 5 rows

| title | creator | response | description |
|---|---|---|---|
| Hinze-Kunze-Roman | Volker Braun | RE_HKR_IronicNarration | Braun frames the critique in an ironic, Diderot-like master-servant narrative with an intrusive narrator who comments on what 'cannot be said directly'. |
| Hinze-Kunze-Roman | Dieter Schlenstedt | RE_HKR_Lesehilfe | Dieter Schlenstedt, one of the manuscript's first reviewers, writes an appended 'schöngeistige Lesehilfe': five fictional letters that ironise the review process and guide readers; the text was meant both to placate the censors and to guide reading. |
| Lady Macbeth of the Mtsensk District | Dmitri Shostakovich | RE_Shost_FifthSymphony | Fifth Symphony (composed 18 April–20 July 1937; premiered 21 November 1937, Leningrad Philharmonic, Mravinsky): a turn 'towards greater accessibility, towards greater simplicity', classical form and tonal harmony, with a finale whose triumph has been heard as sincere or ironic. |
| Notorious | Alfred Hitchcock | RE_Notorious_FragmentedKiss | Hitchcock stages a scene of about two and a half to three minutes as a chain of short kisses (none longer than ~3 seconds), interrupted by talk and a telephone call, so the scene stays within the rule but reads as one continuous embrace. |
| Symphony No. 4 in C minor, Op. 43 | Dmitri Shostakovich | RE_Sym4_Withdrawal | Shostakovich withdraws the Fourth Symphony; it remains unperformed until 1961. |

## CQ7. Which creative strategy was used in the response?

Query file: `queries/cq07_strategies.rq` — 7 rows

| title | response | strategy |
|---|---|---|
| Hinze-Kunze-Roman | RE_HKR_IronicNarration | Allegory |
| Hinze-Kunze-Roman | RE_HKR_IronicNarration | Irony |
| Hinze-Kunze-Roman | RE_HKR_Lesehilfe | Irony |
| Hinze-Kunze-Roman | RE_HKR_Lesehilfe | Paratextual framing |
| Lady Macbeth of the Mtsensk District | RE_Shost_FifthSymphony | Ambiguity |
| Notorious | RE_Notorious_FragmentedKiss | Fragmentation |
| Notorious | RE_Notorious_FragmentedKiss | Indirect representation |

## CQ8. What was the outcome: adaptation, modification, suppression, abandonment, etc.?

Query file: `queries/cq08_outcomes.rq` — 5 rows

| title | response | outcome |
|---|---|---|
| Hinze-Kunze-Roman | RE_HKR_Lesehilfe | Alternative version produced |
| Lady Macbeth of the Mtsensk District | RE_Shost_FifthSymphony | Creative adaptation |
| Hinze-Kunze-Roman | RE_HKR_IronicNarration | Creative adaptation |
| Notorious | RE_Notorious_FragmentedKiss | Creative adaptation |
| Symphony No. 4 in C minor, Op. 43 | RE_Sym4_Withdrawal | Unpublished work |

## CQ9. Which creative strategies recur across different media or censorship mechanisms?

Query file: `queries/cq09_recurring_strategies.rq` — 6 rows

| strategy | media | mechanisms |
|---|---|---|
| Allegory | 1 | 2 |
| Irony | 1 | 2 |
| ParatextualFraming | 1 | 2 |
| Fragmentation | 1 | 2 |
| IndirectRepresentation | 1 | 2 |
| Ambiguity | 1 | 2 |

## CQ10. Which sources support the claimed relationship between a censorship event and a creative response?

Query file: `queries/cq10_evidence.rq` — 13 rows

| event | response | confidence | source |
|---|---|---|---|
| EV_HKR_PrintApproval | RE_HKR_IronicNarration | medium | Darnton, R. (1991). The Good Old Days. The New York Review of Books, 16 May 1991. |
| EV_HKR_PrintApproval | RE_HKR_IronicNarration | medium | Lance, A. Preface to V. Braun, Le Roman de Hinze et Kunze. Éditions Métailié (reissue of the 1988 French translation). |
| EV_HKR_PrintApproval | RE_HKR_Lesehilfe | high | Guibert-Yeche, H. Censure et autocensure en RDA. ENS Éditions (OpenEdition Books), pp. 127–144. |
| EV_HKR_PrintApproval | RE_HKR_Lesehilfe | high | Höpcke, K. (1985). Über Volker Brauns Hinze-Kunze-Roman. Die Weltbühne 33–34/1985; reprinted in Das Blättchen, April 2025. |
| EV_HKR_PrintApproval | RE_HKR_Lesehilfe | high | Lance, A. Preface to V. Braun, Le Roman de Hinze et Kunze. Éditions Métailié (reissue of the 1988 French translation). |
| EV_HKR_PrintApproval | RE_HKR_Lesehilfe | high | Das Wechselspiel von Selbstzensur und Literaturlenkung in der DDR. Aus Politik und Zeitgeschichte, Bundeszentrale für politische Bildung. |
| EV_Notorious_PCAReview | RE_Notorious_FragmentedKiss | high | Billheimer, J. (2019). Hitchcock and the Censors. University Press of Kentucky, pp. 118–128. DOI 10.5810/kentucky/9780813177427.003.0015 |
| EV_Notorious_PCAReview | RE_Notorious_FragmentedKiss | high | Production Code Administration. The Alfred Hitchcock Wiki (quotes the Production Code and Bergman's recollection). |
| EV_Pravda1936 | RE_Shost_FifthSymphony | medium | Frolova-Walker, M. & Walker, J. (2023). Shostakovich's Symphony No. 5. Oxford University Press. DOI 10.1093/oso/9780197566329.003.0001 |
| EV_Pravda1936 | RE_Shost_FifthSymphony | medium | Robinson, H. Symphony No. 5 (Shostakovich). Boston Symphony Orchestra programme note. |
| EV_Pravda1936 | RE_Shost_FifthSymphony | medium | Muddle Instead of Music. Wikipedia (tertiary source, used for orientation only). |
| EV_Sym4_Cancellation | RE_Sym4_Withdrawal | high | Frolova-Walker, M. & Walker, J. (2023). Shostakovich's Symphony No. 5. Oxford University Press. DOI 10.1093/oso/9780197566329.003.0001 |
| EV_Sym4_Cancellation | RE_Sym4_Withdrawal | high | Symphony No. 4 (Shostakovich). Wikipedia (tertiary source, used for orientation only). |
