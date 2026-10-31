# ConCreCen — SPARQL results for CQ1–CQ10 (v2.2)

Run on `censorcreate-v2.2-with-cases.owl` (asserted triples only, without reasoning).
8 documented case studies: Braun/»Hinze-Kunze-Roman«, Shostakovich, Hitchcock/»Notorious«, Panahi, Nolde, »A Streetcar Named Desire«, Verdi/»Un ballo in maschera«, Bulgakov.

## CQ1. Which creative works (including creative practices) were subjected to censorship?

Query file: `queries/cq01_censored_works.rq` — 10 rows

| work | title | year |
|---|---|---|
| NoldeArtisticPractice | Emil Nolde's artistic practice | None |
| PanahiFilmmakingPractice | Jafar Panahi's filmmaking practice | None |
| LadyMacbethMtsensk | Lady Macbeth of the Mtsensk District | 1932 |
| ShostakovichSymphony4 | Symphony No. 4 in C minor, Op. 43 | 1936 |
| MasterAndMargarita | The Master and Margarita | 1940 |
| Notorious1946 | Notorious | 1946 |
| Streetcar1951 | A Streetcar Named Desire | 1951 |
| HinzeKunzeRoman | Hinze-Kunze-Roman | 1981 |
| GustavoIII_OperaProject | Gustavo III / Una vendetta in dominò (opera project) | 1857-1858 |
| MasterAndMargarita | The Master and Margarita | 1928-1940 |

## CQ2. Who or which institution imposed censorship on a work?

Query file: `queries/cq02_censoring_agents.rq` — 14 rows

| title | event | agentName |
|---|---|---|
| A Streetcar Named Desire | EV_Streetcar_LegionCuts1951 | Catholic Legion of Decency, with MPAA involvement |
| A Streetcar Named Desire | EV_Streetcar_PCAReview1950 | Production Code Administration (MPAA) |
| A Streetcar Named Desire | EV_Streetcar_PCAReview1950 | Production Code Administration (headed by Joseph Breen) |
| Emil Nolde's artistic practice | EV_Nolde_ProfessionalBan1941 | Reich Chamber of Fine Arts (Reichskammer der bildenden Künste) |
| Gustavo III / Una vendetta in dominò (opera project) | EV_Ballo_RomeCensorship1858 | Censors of the Papal States in Rome |
| Gustavo III / Una vendetta in dominò (opera project) | EV_Ballo_NaplesCensorship1858 | Censors of the Kingdom of Naples |
| Hinze-Kunze-Roman | EV_HKR_PrintApproval | Hauptverwaltung Verlage und Buchhandel (GDR Ministry of Culture) |
| Jafar Panahi's filmmaking practice | EV_Panahi_2010FilmmakingBan | Branch 26 of the Tehran Revolutionary Court / Iranian judiciary |
| Lady Macbeth of the Mtsensk District | EV_Pravda1936 | Pravda (Communist Party newspaper; editorial expressing the official Party line) |
| Notorious | EV_Notorious_PCAReview | Production Code Administration (MPAA) |
| Notorious | EV_Notorious_PCAReview | Production Code Administration (headed by Joseph Breen) |
| Symphony No. 4 in C minor, Op. 43 | EV_Sym4_Cancellation | Union of Soviet Composers and Party officials |
| The Master and Margarita | EV_Bulgakov_LiterarySuppression1930s | Soviet literary and censorship establishment |
| The Master and Margarita | EV_MasterMargarita_MoskvaCensorship1966 | Soviet censorship and the editors of Moskva |

## CQ3. Which censorship mechanism was used?

Query file: `queries/cq03_mechanisms.rq` — 22 rows

| title | event | mechanism |
|---|---|---|
| A Streetcar Named Desire | EV_Streetcar_LegionCuts1951 | Removal |
| A Streetcar Named Desire | EV_Streetcar_LegionCuts1951 | Modification requirement |
| A Streetcar Named Desire | EV_Streetcar_PCAReview1950 | Modification requirement |
| A Streetcar Named Desire | EV_Streetcar_PCAReview1950 | Prior approval |
| Emil Nolde's artistic practice | EV_Nolde_ProfessionalBan1941 | Ban |
| Gustavo III / Una vendetta in dominò (opera project) | EV_Ballo_NaplesCensorship1858 | Prior approval |
| Gustavo III / Una vendetta in dominò (opera project) | EV_Ballo_NaplesCensorship1858 | Modification requirement |
| Gustavo III / Una vendetta in dominò (opera project) | EV_Ballo_RomeCensorship1858 | Modification requirement |
| Gustavo III / Una vendetta in dominò (opera project) | EV_Ballo_RomeCensorship1858 | Prior approval |
| Hinze-Kunze-Roman | EV_HKR_DistributionStop | Distribution restriction |
| Hinze-Kunze-Roman | EV_HKR_PrintApproval | Modification requirement |
| Hinze-Kunze-Roman | EV_HKR_PrintApproval | Prior approval |
| Jafar Panahi's filmmaking practice | EV_Panahi_2010FilmmakingBan | Ban |
| Lady Macbeth of the Mtsensk District | EV_Pravda1936 | Removal |
| Lady Macbeth of the Mtsensk District | EV_Pravda1936 | Ban |
| Notorious | EV_Notorious_PCAReview | Prior approval |
| Notorious | EV_Notorious_PCAReview | Modification requirement |
| Symphony No. 4 in C minor, Op. 43 | EV_Sym4_Cancellation | Ban |
| Symphony No. 4 in C minor, Op. 43 | EV_Sym4_Cancellation | Self-censorship |
| The Master and Margarita | EV_Bulgakov_LiterarySuppression1930s | Publication restriction |
| The Master and Margarita | EV_MasterMargarita_MoskvaCensorship1966 | Redaction |
| The Master and Margarita | EV_MasterMargarita_MoskvaCensorship1966 | Publication restriction |

## CQ4. What element or aspect of the work was constrained?

Query file: `queries/cq04_constrained_elements.rq` — 13 rows

| title | elementType | element |
|---|---|---|
| Lady Macbeth of the Mtsensk District | Audio element | Dissonant, modernist musical idiom of Lady Macbeth (and of the Fourth Symphony in progress). |
| Hinze-Kunze-Roman | Theme | Ironic portrayal of a Party functionary (Kunze) and his chauffeur (Hinze); apparatchik privilege at the heart of the plot. |
| A Streetcar Named Desire | Scene | Several scenes and lines, including the Stella stairway sequence and dialogue surrounding Stanley's attack on Blanche. |
| A Streetcar Named Desire | Theme | Allan Grey's homosexuality, Blanche's sexuality, Stanley's rape of Blanche, and the moral consequences of Stanley's actions. |
| Gustavo III / Una vendetta in dominò (opera project) | Theme | Historical setting, political status of the protagonist, character identities, and context of the assassination. |
| Gustavo III / Una vendetta in dominò (opera project) | Theme | The historical regicide plot based on the assassination of King Gustav III of Sweden. |
| Notorious | Scene | Love scene between Devlin (Cary Grant) and Alicia (Ingrid Bergman) in her Rio apartment. |
| Notorious | Theme | Characterisation of Alicia Huberman's sexual morality. |
| The Master and Margarita | Theme | Satirical and political treatment of Soviet institutions and social life. |
| The Master and Margarita | Textual element | Politically sensitive passages, references to arrests and the secret police, attacks on the Soviet literary establishment, sexual/nudity material, and |
| Symphony No. 4 in C minor, Op. 43 | Audio element | Dissonant, modernist musical idiom of Lady Macbeth (and of the Fourth Symphony in progress). |
| Jafar Panahi's filmmaking practice | Creative activity | Film directing and screenplay writing. |
| Emil Nolde's artistic practice | Creative activity | Professional production and public circulation of visual art. |

## CQ5. What constraint resulted from the censorship event?

Query file: `queries/cq05_constraints.rq` — 22 rows

| event | constraintType | constraint |
|---|---|---|
| EV_Ballo_NaplesCensorship1858 | Subject restriction | A royal assassination and the sovereign status of the protagonist could not be represented in the proposed form. |
| EV_Ballo_NaplesCensorship1858 | Direct representation restriction | A royal assassination and the sovereign status of the protagonist could not be represented in the proposed form. |
| EV_Ballo_RomeCensorship1858 | Direct representation restriction | The central assassination plot could remain only after the sovereign and European political context were transformed. |
| EV_Ballo_RomeCensorship1858 | Subject restriction | The central assassination plot could remain only after the sovereign and European political context were transformed. |
| EV_Bulgakov_LiterarySuppression1930s | Publication restriction | Political and satirical expression had to be developed in an environment in which Bulgakov could not expect normal publication of original fiction. |
| EV_Bulgakov_LiterarySuppression1930s | Expression restriction | Political and satirical expression had to be developed in an environment in which Bulgakov could not expect normal publication of original fiction. |
| EV_HKR_DistributionStop | Content restriction | Circulation of the already published novel halted. |
| EV_HKR_PrintApproval | Subject restriction | Objections that the irony targets socialism, distorts the concept of freedom and represents the Liebknecht-Luxemburg commemoration unworthily (Neubert |
| EV_MasterMargarita_MoskvaCensorship1966 | Content restriction | Only a substantially abridged version of the novel could appear in the Soviet journal. |
| EV_Nolde_ProfessionalBan1941 | Material restriction | The professional ban prevented Nolde from officially practising, exhibiting, and selling art and limited his access to normal artistic materials and c |
| EV_Nolde_ProfessionalBan1941 | Professional practice restriction | The professional ban prevented Nolde from officially practising, exhibiting, and selling art and limited his access to normal artistic materials and c |
| EV_Notorious_PCAReview | Subject restriction | Alicia must not appear as a 'grossly immoral woman'; any suggestion of sexual promiscuity to be avoided; the word 'tramp' to be removed. |
| EV_Notorious_PCAReview | Direct representation restriction | Production Code: 'Excessive and lustful kissing ... are not to be shown'; enforced through an unofficial rule of thumb that a screen kiss should not e |
| EV_Notorious_PCAReview | Content restriction | Production Code: 'Excessive and lustful kissing ... are not to be shown'; enforced through an unofficial rule of thumb that a screen kiss should not e |
| EV_Panahi_2010FilmmakingBan | Expression restriction | Panahi was prohibited from making or directing films and from writing screenplays for twenty years. |
| EV_Panahi_2010FilmmakingBan | Professional practice restriction | Panahi was prohibited from making or directing films and from writing screenplays for twenty years. |
| EV_Pravda1936 | Stylistic restriction | Condemnation of 'formalism': dissonant, modernist musical language declared unacceptable; Kerzhentsev demanded a concrete demonstration of reform in f |
| EV_Streetcar_LegionCuts1951 | Content restriction | Sexual and 'carnal' material had to be reduced or removed for release without condemnation. |
| EV_Streetcar_PCAReview1950 | Subject restriction | The adaptation could not directly represent or clearly state several sexual themes in the same form as the play, and the filmmakers were pressed to al |
| EV_Streetcar_PCAReview1950 | Direct representation restriction | The adaptation could not directly represent or clearly state several sexual themes in the same form as the play, and the filmmakers were pressed to al |
| EV_Streetcar_PCAReview1950 | Content restriction | The adaptation could not directly represent or clearly state several sexual themes in the same form as the play, and the filmmakers were pressed to al |
| EV_Sym4_Cancellation | Stylistic restriction | Condemnation of 'formalism': dissonant, modernist musical language declared unacceptable; Kerzhentsev demanded a concrete demonstration of reform in f |

## CQ6. How did the creator respond to the constraint?

Query file: `queries/cq06_responses.rq` — 15 rows

| title | creator | response | description |
|---|---|---|---|
| A Streetcar Named Desire | Tennessee Williams | RE_Streetcar_ScreenplayRewrite | Kazan and Williams negotiated and altered the screenplay. Williams rewrote the ending so that Stella appears, somewhat ambiguously, to leave Stanley r |
| A Streetcar Named Desire | Elia Kazan | RE_Streetcar_ScreenplayRewrite | Kazan and Williams negotiated and altered the screenplay. Williams rewrote the ending so that Stella appears, somewhat ambiguously, to leave Stanley r |
| Emil Nolde's artistic practice | Emil Nolde | RE_Nolde_UnpaintedPictures | Nolde continued working privately and produced further small-format watercolours in Seebüll. Museum accounts describe these works as being made secret |
| Gustavo III / Una vendetta in dominò (opera project) | Antonio Somma | RE_Ballo_Transposition | Verdi and Somma transformed the setting and identities while preserving the dramatic structure: Sweden became colonial Boston, Gustav III became Gover |
| Gustavo III / Una vendetta in dominò (opera project) | Giuseppe Verdi | RE_Ballo_Transposition | Verdi and Somma transformed the setting and identities while preserving the dramatic structure: Sweden became colonial Boston, Gustav III became Gover |
| Gustavo III / Una vendetta in dominò (opera project) | Giuseppe Verdi | RE_Ballo_LeaveNaples | Verdi rejected the most drastic demanded alterations, broke the contract with Teatro San Carlo, and moved the project to Rome. |
| Hinze-Kunze-Roman | Volker Braun | RE_HKR_IronicNarration | Braun frames the critique in an ironic, Diderot-like master-servant narrative with an intrusive narrator who comments on what 'cannot be said directly |
| Hinze-Kunze-Roman | Dieter Schlenstedt | RE_HKR_Lesehilfe | Dieter Schlenstedt, one of the manuscript's first reviewers, writes an appended 'schöngeistige Lesehilfe': five fictional letters that ironise the rev |
| Jafar Panahi's filmmaking practice | Jafar Panahi | RE_Panahi_ThisIsNotAFilm | Panahi and Mojtaba Mirtahmasb made a self-reflexive video diary largely inside Panahi's apartment. Panahi stages and describes an unproduced screenpla |
| Jafar Panahi's filmmaking practice | Mojtaba Mirtahmasb | RE_Panahi_ThisIsNotAFilm | Panahi and Mojtaba Mirtahmasb made a self-reflexive video diary largely inside Panahi's apartment. Panahi stages and describes an unproduced screenpla |
| Lady Macbeth of the Mtsensk District | Dmitri Shostakovich | RE_Shost_FifthSymphony | Fifth Symphony (composed 18 April–20 July 1937; premiered 21 November 1937, Leningrad Philharmonic, Mravinsky): a turn 'towards greater accessibility, |
| Notorious | Alfred Hitchcock | RE_Notorious_FragmentedKiss | Hitchcock stages a scene of about two and a half to three minutes as a chain of short kisses (none longer than ~3 seconds), interrupted by talk and a  |
| Symphony No. 4 in C minor, Op. 43 | Dmitri Shostakovich | RE_Sym4_Withdrawal | Shostakovich withdraws the Fourth Symphony; it remains unperformed until 1961. |
| The Master and Margarita | Mikhail Bulgakov | RE_Bulgakov_AesopianExpression | The novel uses satire, ambiguity, fantastic displacement, and passages that scholars have discussed in terms of Aesopian language: indirect expression |
| The Master and Margarita | Elena Bulgakova | RE_MasterMargarita_TextRestoration | Elena Bulgakova preserved and prepared the text for publication; omitted passages circulated outside the censored journal version, and complete versio |

## CQ7. Which creative strategy was used in the response?

Query file: `queries/cq07_strategies.rq` — 25 rows

| title | response | strategy |
|---|---|---|
| A Streetcar Named Desire | RE_Streetcar_ScreenplayRewrite | Indirect representation |
| A Streetcar Named Desire | RE_Streetcar_ScreenplayRewrite | Narrative modification |
| A Streetcar Named Desire | RE_Streetcar_ScreenplayRewrite | Ambiguity |
| Emil Nolde's artistic practice | RE_Nolde_UnpaintedPictures | Medium adaptation |
| Emil Nolde's artistic practice | RE_Nolde_UnpaintedPictures | Secret production |
| Gustavo III / Una vendetta in dominò (opera project) | RE_Ballo_Transposition | Historical displacement |
| Gustavo III / Una vendetta in dominò (opera project) | RE_Ballo_Transposition | Narrative transposition |
| Gustavo III / Una vendetta in dominò (opera project) | RE_Ballo_Transposition | Character transformation |
| Gustavo III / Una vendetta in dominò (opera project) | RE_Ballo_LeaveNaples | Institutional circumvention |
| Hinze-Kunze-Roman | RE_HKR_IronicNarration | Allegory |
| Hinze-Kunze-Roman | RE_HKR_IronicNarration | Irony |
| Hinze-Kunze-Roman | RE_HKR_Lesehilfe | Irony |
| Hinze-Kunze-Roman | RE_HKR_Lesehilfe | Paratextual framing |
| Jafar Panahi's filmmaking practice | RE_Panahi_ThisIsNotAFilm | Circumvention |
| Jafar Panahi's filmmaking practice | RE_Panahi_ThisIsNotAFilm | Minimal production |
| Jafar Panahi's filmmaking practice | RE_Panahi_ThisIsNotAFilm | Self-reflexivity |
| Lady Macbeth of the Mtsensk District | RE_Shost_FifthSymphony | Ambiguity |
| Notorious | RE_Notorious_FragmentedKiss | Fragmentation |
| Notorious | RE_Notorious_FragmentedKiss | Indirect representation |
| The Master and Margarita | RE_Bulgakov_AesopianExpression | Indirect representation |
| The Master and Margarita | RE_Bulgakov_AesopianExpression | Aesopian language |
| The Master and Margarita | RE_Bulgakov_AesopianExpression | Satire |
| The Master and Margarita | RE_Bulgakov_AesopianExpression | Ambiguity |
| The Master and Margarita | RE_MasterMargarita_TextRestoration | Alternative publication |
| The Master and Margarita | RE_MasterMargarita_TextRestoration | Textual restoration |

## CQ8. What was the outcome: adaptation, modification, suppression, abandonment, etc.?

Query file: `queries/cq08_outcomes.rq` — 13 rows

| title | response | outcome |
|---|---|---|
| Gustavo III / Una vendetta in dominò (opera project) | RE_Ballo_LeaveNaples | Abandonment |
| Hinze-Kunze-Roman | RE_HKR_Lesehilfe | Alternative version produced |
| The Master and Margarita | RE_MasterMargarita_TextRestoration | Alternative version produced |
| Lady Macbeth of the Mtsensk District | RE_Shost_FifthSymphony | Creative adaptation |
| Hinze-Kunze-Roman | RE_HKR_IronicNarration | Creative adaptation |
| A Streetcar Named Desire | RE_Streetcar_ScreenplayRewrite | Creative adaptation |
| Gustavo III / Una vendetta in dominò (opera project) | RE_Ballo_Transposition | Creative adaptation |
| Notorious | RE_Notorious_FragmentedKiss | Creative adaptation |
| The Master and Margarita | RE_Bulgakov_AesopianExpression | Creative adaptation |
| Jafar Panahi's filmmaking practice | RE_Panahi_ThisIsNotAFilm | Creative adaptation |
| Emil Nolde's artistic practice | RE_Nolde_UnpaintedPictures | Creative adaptation |
| A Streetcar Named Desire | (no documented response) | Suppression |
| Symphony No. 4 in C minor, Op. 43 | RE_Sym4_Withdrawal | Unpublished work |

## CQ9. Which creative strategies recur across different media or censorship mechanisms?

Query file: `queries/cq09_recurring_strategies.rq` — 20 rows

| strategy | media | mechanisms |
|---|---|---|
| Ambiguity | 3 | 5 |
| IndirectRepresentation | 2 | 3 |
| Allegory | 1 | 2 |
| Irony | 1 | 2 |
| ParatextualFraming | 1 | 2 |
| NarrativeModification | 1 | 2 |
| HistoricalDisplacement | 1 | 2 |
| NarrativeTransposition | 1 | 2 |
| CharacterTransformation | 1 | 2 |
| InstitutionalCircumvention | 1 | 2 |
| Fragmentation | 1 | 2 |
| AlternativePublication | 1 | 2 |
| TextualRestoration | 1 | 2 |
| AesopianLanguage | 1 | 1 |
| Satire | 1 | 1 |
| Circumvention | 1 | 1 |
| MinimalProduction | 1 | 1 |
| SelfReflexivity | 1 | 1 |
| MediumAdaptation | 1 | 1 |
| SecretProduction | 1 | 1 |

## CQ10. Which sources support the claimed relationship between a censorship event and a creative response?

Query file: `queries/cq10_evidence.rq` — 30 rows

| event | response | confidence | source |
|---|---|---|---|
| EV_Ballo_NaplesCensorship1858 | RE_Ballo_LeaveNaples | high | Giger, A. (1999). Social control and the censorship of Giuseppe Verdi's operas in Rome (1844–1859). Cambridge Opera Journal, 11(3), 233–265. DOI: 10.1 |
| EV_Ballo_NaplesCensorship1858 | RE_Ballo_LeaveNaples | high | Narici, I. (ed.). (2000). Giuseppe Verdi: Un ballo in maschera – Critical Edition. Ricordi. |
| EV_Ballo_RomeCensorship1858 | RE_Ballo_Transposition | high | Narici, I. (ed.). (2000). Giuseppe Verdi: Un ballo in maschera – Critical Edition. Ricordi. |
| EV_Ballo_RomeCensorship1858 | RE_Ballo_Transposition | high | Giger, A. (1999). Social control and the censorship of Giuseppe Verdi's operas in Rome (1844–1859). Cambridge Opera Journal, 11(3), 233–265. DOI: 10.1 |
| EV_Ballo_RomeCensorship1858 | RE_Ballo_Transposition | high | The Metropolitan Opera. Un Ballo in Maschera (work/season guide). |
| EV_Bulgakov_LiterarySuppression1930s | RE_Bulgakov_AesopianExpression | medium | Pope, R. W. F. (1977). Ambiguity and Meaning in The Master and Margarita: The Role of Afranius. Slavic Review, 36(1), 1–24. DOI: 10.2307/2494668. |
| EV_Bulgakov_LiterarySuppression1930s | RE_Bulgakov_AesopianExpression | medium | Rosenshield, G. (1997). The Master and Margarita and the Poetics of Aporia: A Polemical Article. Slavic Review, 56(2), 187–211. DOI: 10.2307/2500782. |
| EV_HKR_PrintApproval | RE_HKR_IronicNarration | medium | Darnton, R. (1991). The Good Old Days. The New York Review of Books, 16 May 1991. |
| EV_HKR_PrintApproval | RE_HKR_IronicNarration | medium | Lance, A. Preface to V. Braun, Le Roman de Hinze et Kunze. Éditions Métailié (reissue of the 1988 French translation). |
| EV_HKR_PrintApproval | RE_HKR_Lesehilfe | high | Das Wechselspiel von Selbstzensur und Literaturlenkung in der DDR. Aus Politik und Zeitgeschichte, Bundeszentrale für politische Bildung. |
| EV_HKR_PrintApproval | RE_HKR_Lesehilfe | high | Höpcke, K. (1985). Über Volker Brauns Hinze-Kunze-Roman. Die Weltbühne 33–34/1985; reprinted in Das Blättchen, April 2025. |
| EV_HKR_PrintApproval | RE_HKR_Lesehilfe | high | Lance, A. Preface to V. Braun, Le Roman de Hinze et Kunze. Éditions Métailié (reissue of the 1988 French translation). |
| EV_HKR_PrintApproval | RE_HKR_Lesehilfe | high | Guibert-Yeche, H. Censure et autocensure en RDA. ENS Éditions (OpenEdition Books), pp. 127–144. |
| EV_MasterMargarita_MoskvaCensorship1966 | RE_MasterMargarita_TextRestoration | high | Pope, R. W. F. (1977). Ambiguity and Meaning in The Master and Margarita: The Role of Afranius. Slavic Review, 36(1), 1–24. DOI: 10.2307/2494668. |
| EV_MasterMargarita_MoskvaCensorship1966 | RE_MasterMargarita_TextRestoration | high | Curtis, J. A. E. (2019). A Reader's Companion to Mikhail Bulgakov's The Master and Margarita. Boston: Academic Studies Press. |
| EV_Nolde_ProfessionalBan1941 | RE_Nolde_UnpaintedPictures | high | National Gallery of Ireland. Entartete Kunst / Degenerate Art (Emil Nolde: Colour is Life exhibition material). |
| EV_Nolde_ProfessionalBan1941 | RE_Nolde_UnpaintedPictures | high | Nolde Museum Seebüll. The Artist (biographical chronology of Emil Nolde). |
| EV_Notorious_PCAReview | RE_Notorious_FragmentedKiss | high | Production Code Administration. The Alfred Hitchcock Wiki (quotes the Production Code and Bergman's recollection). |
| EV_Notorious_PCAReview | RE_Notorious_FragmentedKiss | high | Billheimer, J. (2019). Hitchcock and the Censors. University Press of Kentucky, pp. 118–128. DOI 10.5810/kentucky/9780813177427.003.0015 |
| EV_Panahi_2010FilmmakingBan | RE_Panahi_ThisIsNotAFilm | high | Festival de Cannes. (2011). Jafar Panahi and Mohammad Rasoulof in the Cannes Official Selection! 7 May 2011. |
| EV_Panahi_2010FilmmakingBan | RE_Panahi_ThisIsNotAFilm | high | Cinema Iranica. This Is Not a Film (film entry). |
| EV_Panahi_2010FilmmakingBan | RE_Panahi_ThisIsNotAFilm | high | Center for Human Rights in Iran. (2010). Jafar Panahi Sentenced To Six Years In Prison, Banned From Making Films For 20 Years. 20 December 2010. |
| EV_Panahi_2010FilmmakingBan | RE_Panahi_ThisIsNotAFilm | high | Festival de Cannes. (2011). In Film Nist (This Is Not A Film) by Jafar Panahi. 20 May 2011. |
| EV_Pravda1936 | RE_Shost_FifthSymphony | medium | Muddle Instead of Music. Wikipedia (tertiary source, used for orientation only). |
| EV_Pravda1936 | RE_Shost_FifthSymphony | medium | Robinson, H. Symphony No. 5 (Shostakovich). Boston Symphony Orchestra programme note. |
| EV_Pravda1936 | RE_Shost_FifthSymphony | medium | Frolova-Walker, M. & Walker, J. (2023). Shostakovich's Symphony No. 5. Oxford University Press. DOI 10.1093/oso/9780197566329.003.0001 |
| EV_Streetcar_PCAReview1950 | RE_Streetcar_ScreenplayRewrite | high | Szabó, H. (2019). Censorship and Stardom in Various Adaptations of Tennessee Williams's A Streetcar Named Desire. AMERICANA E-Journal of American Stud |
| EV_Streetcar_PCAReview1950 | RE_Streetcar_ScreenplayRewrite | high | American Film Institute. AFI Catalog: A Streetcar Named Desire (1951), production history and PCA/Legion of Decency documentation. |
| EV_Sym4_Cancellation | RE_Sym4_Withdrawal | high | Symphony No. 4 (Shostakovich). Wikipedia (tertiary source, used for orientation only). |
| EV_Sym4_Cancellation | RE_Sym4_Withdrawal | high | Frolova-Walker, M. & Walker, J. (2023). Shostakovich's Symphony No. 5. Oxford University Press. DOI 10.1093/oso/9780197566329.003.0001 |
