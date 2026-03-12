// ============================================================
// BW-BERND – Musterlösungen & Aufgaben HAK
// Datei: solutions_hak.js
// Schultyp: HAK (Handelsakademie)
// Jahrgang: 3
// Musterunternehmen: AlpenFresh GmbH
// (c) GALS
// ============================================================

const loesungenhak3 = {

  // ============================================================
  // MODUL 1: UNTERNEHMENSFÜHRUNG
  // ============================================================
  unternehmensfuehrung: {

    situation: `Die **AlpenFresh GmbH** mit Sitz in Innsbruck (Tirol) wurde 2008 gegründet
und ist auf die Produktion und Vermarktung frischer Alpenprodukte spezialisiert:
Bio-Milchprodukte, alpine Kräutersäfte und regionale Feinkost.
Das Unternehmen beschäftigt ca. 340 Mitarbeitende, erzielt einen Jahresumsatz
von 48 Mio. € und beliefert Lebensmittelketten in Österreich, Deutschland und Südtirol.
Geschäftsführerin: Mag. Susanne Hofer (CEO). Betriebsleiter: Ing. Klaus Berger.`,

    klassische_aufgaben: [
      {
        id: "uf_k1",
        titel: "Managementebenen bei AlpenFresh",
        situation: `Bei der AlpenFresh GmbH sind folgende Personen tätig:
Mag. Susanne Hofer ist Geschäftsführerin und verantwortet die strategische Ausrichtung.
Ing. Klaus Berger leitet die Produktion in Reutte.
Lena Müller ist Teamleiterin in der Qualitätskontrolle und führt 8 Mitarbeitende.
Tobias Fink ist Produktionsmitarbeiter in der Abfüllung.`,
        fragen: [
          "a) Ordnen Sie jede Person der richtigen Managementebene zu und begründen Sie Ihre Entscheidung.",
          "b) Beschreiben Sie die typischen Aufgaben jeder Hierarchieebene.",
          "c) Erklären Sie, warum klare Hierarchieebenen für ein Unternehmen wie AlpenFresh wichtig sind."
        ],
        musterloesung: `a) Zuordnung:
• Mag. Susanne Hofer → Topmanagement (Geschäftsführung, strategische Entscheidungen, Vertretung nach außen)
• Ing. Klaus Berger → Middle Management (Leitet Abteilung/Betrieb, setzt Strategien operational um)
• Lena Müller → Lower Management (Teamleiterin, direkter Führungskontakt, operative Tagesaufgaben)
• Tobias Fink → Ausführungsebene (Kein Führungsauftrag, ausführende Tätigkeit)

b) Aufgaben je Ebene:
• Topmanagement: Festlegung von Vision, Mission, Unternehmenszielen; Verhandlung mit Banken/Investoren; Öffentlichkeitsarbeit
• Middle Management: Koordination zwischen Abteilungen; Umsetzung strategischer Vorgaben; Personalplanung für Abteilung
• Lower Management: Dienstplaneinteilung; tägliche Qualitätskontrolle; Mitarbeitergespräche auf Teamebene
• Ausführungsebene: Ausführung von Produktionsaufgaben; Einhaltung von Qualitäts- und Sicherheitsvorschriften

c) Klare Hierarchien ermöglichen: eindeutige Verantwortlichkeiten, kürzere Entscheidungswege, effiziente Kommunikation (top-down und bottom-up), Kontrolle über Ergebnisse je Ebene.`
      },
      {
        id: "uf_k2",
        titel: "SWOT-Analyse AlpenFresh",
        situation: `AlpenFresh GmbH erwägt die Expansion nach Norditalien. Folgende Informationen liegen vor:
Stärken: starke Marke in Österreich, zertifizierte Bio-Qualität, gut ausgebildetes Personal
Schwächen: hohe Produktionskosten, begrenzte Lagerkapazitäten, keine Fremdsprachenkenntnisse im Vertrieb
Chancen: wachsende Nachfrage nach Bio-Produkten in Italien, neue EU-Förderungen für Lebensmittelbetriebe
Risiken: starke lokale Konkurrenz in Norditalien, Wechselkursrisiken, mögliche Importzölle nach Brexit-Folgewirkungen`,
        fragen: [
          "a) Stellen Sie die SWOT-Analyse in Tabellenform dar.",
          "b) Leiten Sie aus der SWOT-Analyse zwei konkrete Strategieempfehlungen ab.",
          "c) Erklären Sie den Unterschied zwischen SO-, ST-, WO- und WT-Strategien."
        ],
        musterloesung: `a) SWOT-Tabelle:
| | Chancen (O) | Risiken (T) |
|Stärken (S)| SO-Strategie | ST-Strategie |
|Schwächen (W)| WO-Strategie | WT-Strategie |

Inhalte:
Stärken: Bio-Zertifizierung, Markenbekanntheit, qualifiziertes Personal, regionale Verankerung
Schwächen: hohe Kosten, kleine Lagerkapazität, fehlende Sprachkompetenzen im Vertrieb
Chancen: Bio-Boom in Italien, EU-Förderprogramme, Nachhaltigkeitstrend
Risiken: lokale Mitbewerber, Lieferkettenprobleme, regulatorische Unterschiede

b) Strategieempfehlungen:
• SO-Strategie: Die Bio-Zertifizierung nutzen, um den wachsenden Bio-Markt in Norditalien aktiv zu erschließen (z. B. Partnerschaft mit italienischem Bio-Händler)
• WO-Strategie: Vertriebsmitarbeitende mit Italienischkenntnissen einstellen/schulen, um EU-Förderungen für Expansion optimal zu nutzen

c) SO = Stärken nutzen, Chancen wahrnehmen (Angriffsstrategie)
ST = Stärken einsetzen, um Risiken abzuwehren (Diversifikationsstrategie)
WO = Schwächen abbauen, um Chancen wahrzunehmen (Aufholstrategie)
WT = Schwächen reduzieren, Risiken vermeiden (Defensivstrategie)`
      },
      {
        id: "uf_k3",
        titel: "BCG-Matrix und Wachstumsstrategien",
        situation: `Das Produktportfolio der AlpenFresh GmbH umfasst:
• Bio-Joghurt: relativer Marktanteil 1,8; Marktwachstum 2 %
• Kräutersaft: relativer Marktanteil 0,4; Marktwachstum 15 %
• Alpenkäse: relativer Marktanteil 1,2; Marktwachstum 4 %
• Energy-Drink «Alp": relativer Marktanteil 0,3; Marktwachstum 1 %`,
        fragen: [
          "a) Ordnen Sie die Produkte in die BCG-Matrix ein und benennen Sie die jeweilige Kategorie.",
          "b) Welche Investitionsstrategie empfehlen Sie für den Kräutersaft? Begründen Sie.",
          "c) Was würden Sie mit dem Energy-Drink 'Alp' tun? Begründen Sie mit Hilfe der BCG-Matrix."
        ],
        musterloesung: `a) BCG-Zuordnung:
• Bio-Joghurt → Cash Cow (hoher Marktanteil, geringes Wachstum) → Erträge abschöpfen
• Kräutersaft → Question Mark (geringer Marktanteil, hohes Wachstum) → Investitionsentscheidung nötig
• Alpenkäse → Star (hoher Marktanteil, mittleres Wachstum) → investieren und halten
• Energy-Drink "Alp" → Poor Dog (geringer Marktanteil, geringes Wachstum) → Desinvestition prüfen

b) Kräutersaft (Question Mark): Hohe Investitionen rechtfertigen, wenn das Marktpotential ausreichend groß ist.
Empfehlung: Gezielte Investition in Marketing und Produktionskapazität mit dem Ziel, Marktführer zu werden → Entwicklung zum Star.
Begründung: 15 % Marktwachstum signalisiert attraktiven Markt; frühzeitige Investition sichert Wettbewerbsvorteile.

c) Energy-Drink "Alp" (Poor Dog): Desinvestition oder Produkteinstellung empfehlen.
Begründung: Geringer Marktanteil bei stagnierendem Markt → kaum Perspektive auf Profitabilität.
Das freiwerdende Kapital sollte besser in den Kräutersaft oder Alpenkäse investiert werden.`
      }
    ],

    interaktive_aufgaben: [
      {
        id: "uf_i1",
        typ: "multiple_choice",
        frage: "Welche Aussage beschreibt das Topmanagement korrekt?",
        antworten: [
          "Das Topmanagement führt operative Tagesaufgaben wie Dienstplaneinteilung durch.",
          "Das Topmanagement legt die strategische Ausrichtung fest und verhandelt mit externen Partnern.",
          "Das Topmanagement ist direkt für die Ausführung von Produktionsaufgaben verantwortlich.",
          "Das Topmanagement kontrolliert ausschließlich die Qualität der Produkte."
        ],
        richtig: 1,
        feedback_richtig: "Genau! Das Topmanagement (z. B. Geschäftsführung) trägt die Gesamtverantwortung und bestimmt die langfristige Ausrichtung.",
        feedback_falsch: "Das ist nicht korrekt. Operative Aufgaben wie Dienstpläne oder Qualitätskontrolle liegen beim Lower Management.",
        erklaerung: "Das Topmanagement umfasst die oberste Führungsebene (Geschäftsführung, Vorstand). Es definiert Vision, Mission und Strategie und trifft richtungsweisende Entscheidungen."
      },
      {
        id: "uf_i2",
        typ: "zuordnung",
        frage: "Ordnen Sie die Managementaufgaben der richtigen Ebene zu.",
        paare: [
          { links: "Jahresstrategie entwickeln", rechts: "Topmanagement" },
          { links: "Abteilungsbudget planen", rechts: "Middle Management" },
          { links: "Dienstplan erstellen", rechts: "Lower Management" },
          { links: "Produkte abfüllen", rechts: "Ausführungsebene" }
        ],
        feedback_richtig: "Perfekt! Sie haben alle Aufgaben korrekt zugeordnet.",
        feedback_falsch: "Nicht ganz richtig. Denken Sie daran: Je höher die Ebene, desto langfristiger und strategischer die Aufgaben.",
        erklaerung: "Die vier Managementebenen unterscheiden sich durch den zeitlichen Horizont und den Abstraktionsgrad der Aufgaben: Topmanagement (strategisch/langfristig) → Ausführungsebene (operativ/täglich)."
      },
      {
        id: "uf_i3",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Eine Vision beschreibt den langfristigen Wunschzustand eines Unternehmens.", richtig: true },
          { text: "Die Mission legt fest, wie viel Gewinn ein Unternehmen erzielen soll.", richtig: false },
          { text: "CSR steht für Corporate Social Responsibility.", richtig: true },
          { text: "Ein Leitbild ist für interne Mitarbeitende gedacht, nicht für externe Stakeholder.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie kennen die Grundbegriffe des normativen Managements.",
        feedback_falsch: "Überprüfen Sie nochmals die Definitionen von Vision, Mission und Leitbild.",
        erklaerung: "Vision = Zukunftsbild; Mission = Unternehmenszweck; Leitbild = schriftlich formulierte Grundsätze für interne UND externe Stakeholder; CSR = gesellschaftliche Verantwortung."
      },
      {
        id: "uf_i4",
        typ: "multiple_choice",
        frage: "AlpenFresh GmbH hat ein Produkt mit hohem Marktanteil und geringem Marktwachstum. Wie nennt man dieses Produkt in der BCG-Matrix?",
        antworten: ["Star", "Question Mark", "Cash Cow", "Poor Dog"],
        richtig: 2,
        feedback_richtig: "Richtig! Cash Cows generieren stabile Erträge ohne hohe Investitionen – ideal zum Abschöpfen.",
        feedback_falsch: "Nicht korrekt. Hoher Marktanteil + geringes Wachstum = Cash Cow.",
        erklaerung: "Die BCG-Matrix bewertet Produkte nach relativem Marktanteil (horizontal) und Marktwachstum (vertikal): Stars (hoch/hoch), Cash Cows (hoch/niedrig), Question Marks (niedrig/hoch), Poor Dogs (niedrig/niedrig)."
      },
      {
        id: "uf_i5",
        typ: "multiple_choice",
        frage: "AlpenFresh-Geschäftsführer Markus Hofer definiert die Unternehmenswerte und eine 10-Jahres-Vision. Welcher Managementebene ist diese Aufgabe zuzuordnen?",
        antworten: [
          "Operatives Management",
          "Mittleres Management",
          "Normatives Management",
          "Strategisches Management"
        ],
        richtig: 2,
        feedback_richtig: "Richtig! Normatives Management befasst sich mit Werten, Vision und Mission – also dem «Warum existiert das Unternehmen?\".",
        feedback_falsch: "Normatives Management = Werte, Vision, Mission (langfristig, sinngebend). Strategisches Management = Wettbewerbsstrategie. Operatives Management = Tagesgeschäft.",
        erklaerung: "Managementebenen: Normativ (Warum? – Vision, Werte, Mission), Strategisch (Wie? – SWOT, BCG, 3–10 Jahre), Operativ (Was täglich? – Planung, Kontrolle, bis 1 Jahr)."
      },
      {
        id: "uf_i6",
        typ: "rechenaufgabe",
        frage: `AlpenFresh verkauft zwei Produktlinien:
Linie A: Marktvolumen 40 Mio. €, eigener Umsatz 8 Mio. €, stärkster Mitbewerber hat 12 Mio. €
Linie B: Marktvolumen 20 Mio. €, eigener Umsatz 9 Mio. €, stärkster Mitbewerber hat 6 Mio. €

Berechnen Sie den relativen Marktanteil für beide Produktlinien.
Formel: Relativer Marktanteil = eigener Marktanteil / Marktanteil des stärksten Mitbewerbers`,
        loesung: `Linie A:
Eigener Marktanteil = 8 Mio. / 40 Mio. = 20 %
Marktanteil Mitbewerber = 12 Mio. / 40 Mio. = 30 %
Relativer Marktanteil = 20 % / 30 % = 0,67 → Question Mark (unter 1)

Linie B:
Eigener Marktanteil = 9 Mio. / 20 Mio. = 45 %
Marktanteil Mitbewerber = 6 Mio. / 20 Mio. = 30 %
Relativer Marktanteil = 45 % / 30 % = 1,5 → Star oder Cash Cow (über 1)`,
        feedback_richtig: "Sehr gut! Werte über 1,0 bedeuten Marktführerschaft.",
        feedback_falsch: "Tipp: Erst den Marktanteil in % berechnen, dann dividieren. Relativer Marktanteil > 1 = Marktführer.",
        erklaerung: "Ein relativer Marktanteil > 1 bedeutet, dass das eigene Unternehmen Marktführer ist. Unter 1 bedeutet, ein Mitbewerber ist stärker positioniert."
      },
      {
        id: "uf_i7",
        typ: "entscheidung",
        frage: `AlpenFresh steht vor der Entscheidung: Soll das Unternehmen einen neuen Kräuterdrink für den deutschen Markt einführen?
Argumente PRO: Marktwachstum 18%, EU-Förderung vorhanden, Bio-Trend stark
Argumente CONTRA: Hohe Investitionskosten (2,5 Mio. €), starke Mitbewerber, kein Vertriebsnetz in Deutschland

Welche Wachstumsstrategie nach Ansoff würde dieser Schritt entsprechen?`,
        antworten: [
          "Marktdurchdringung – vorhandenes Produkt auf vorhandenem Markt",
          "Marktentwicklung – vorhandenes Produkt auf neuem Markt",
          "Produktentwicklung – neues Produkt auf vorhandenem Markt",
          "Diversifikation – neues Produkt auf neuem Markt"
        ],
        richtig: 3,
        feedback_richtig: "Richtig! Neues Produkt + neuer Markt = Diversifikation. Das ist die riskanteste, aber auch chancenreichste Strategie.",
        feedback_falsch: "Überdenken Sie: Das Produkt (Kräuterdrink) ist neu, der Markt (Deutschland) ist neu → beide Dimensionen neu.",
        erklaerung: "Die Ansoff-Matrix unterscheidet vier Strategien: Marktdurchdringung, Marktentwicklung, Produktentwicklung und Diversifikation – je nachdem ob Produkt und Markt neu oder bekannt sind."
      },
      {
        id: "uf_i8",
        typ: "multiple_choice",
        frage: "Welches Modell analysiert die Wettbewerbssituation in einer Branche anhand von 5 Kräften?",
        antworten: [
          "SWOT-Analyse",
          "BCG-Matrix",
          "Porters Five Forces",
          "PESTEL-Analyse"
        ],
        richtig: 2,
        feedback_richtig: "Genau! Porters Five Forces analysiert: Lieferantenmacht, Kundenmacht, Substitutionsprodukte, neue Mitbewerber und bestehenden Wettbewerb.",
        feedback_falsch: "Nicht ganz. Die SWOT analysiert intern und extern. BCG bewertet Produkte. PESTEL analysiert das Makroumfeld.",
        erklaerung: "Porters Five Forces: (1) Bedrohung durch neue Anbieter, (2) Verhandlungsmacht der Lieferanten, (3) Verhandlungsmacht der Kunden, (4) Bedrohung durch Substitutionsprodukte, (5) Rivalität unter bestehenden Anbietern."
      },

      {
        id: "uf_i9",
        typ: "rechenaufgabe",
        frage: `AlpenFresh GmbH BCG-Matrix: Analysieren Sie das Produktportfolio.
Produkt A – Bio-Joghurt: Marktanteil 28%, Branchenwachstum 3%
Produkt B – Kräutersaft: Marktanteil 8%, Branchenwachstum 18%
Produkt C – Alpenkäse: Marktanteil 45%, Branchenwachstum 2%
Produkt D – Energy-Drink: Marktanteil 3%, Branchenwachstum 25%

Ordnen Sie die Produkte der BCG-Matrix zu (Cash Cow, Star, Question Mark, Poor Dog).
Begründen Sie je mit einem Satz.`,
        loesung: `Produkt A – Bio-Joghurt (28% Marktanteil, 3% Wachstum):
→ CASH COW: Hoher Marktanteil, niedriges Wachstum → bringt stabile Erträge, wenig Investitionsbedarf.

Produkt B – Kräutersaft (8% Marktanteil, 18% Wachstum):
→ QUESTION MARK: Niedriger Marktanteil, hohes Wachstum → Chancen vorhanden, aber noch unklar ob Investition lohnt.

Produkt C – Alpenkäse (45% Marktanteil, 2% Wachstum):
→ CASH COW (Marktführer): Sehr hoher Marktanteil, stagnierender Markt → wichtigster Gewinnbringer.

Produkt D – Energy-Drink (3% Marktanteil, 25% Wachstum):
→ QUESTION MARK / potenzieller STAR: Niedrigster Marktanteil, höchstes Wachstum → größtes Potenzial aber höchstes Risiko.`,
        erklaerung: "BCG-Matrix: Star (hoch/hoch) = Marktführer in Wachstumsmarkt. Cash Cow (hoch/niedrig) = stabiler Gewinnbringer. Question Mark (niedrig/hoch) = Chancen unklar. Poor Dog (niedrig/niedrig) = desinvestieren."
      },
      {
        id: "uf_i10",
        typ: "zuordnung",
        frage: "Ordnen Sie die Wachstumsstrategien nach Ansoff dem richtigen Beispiel der AlpenFresh GmbH zu.",
        paare: [
          { links: "AlpenFresh versucht, mehr Bio-Joghurt an bestehende Supermarktkunden zu verkaufen.", rechts: "Marktdurchdringung" },
          { links: "AlpenFresh expandiert mit dem bestehenden Joghurt-Sortiment nach Deutschland.", rechts: "Marktentwicklung" },
          { links: "AlpenFresh entwickelt einen neuen Kräuter-Energy-Drink für österreichische Kunden.", rechts: "Produktentwicklung" },
          { links: "AlpenFresh eröffnet Wellness-Hotels in einer völlig neuen Zielgruppe.", rechts: "Diversifikation" }
        ],
        feedback_richtig: "Ausgezeichnet! Sie beherrschen die Ansoff-Matrix.",
        feedback_falsch: "Marktdurchdringung: altes Produkt/alter Markt. Marktentwicklung: altes Produkt/neuer Markt. Produktentwicklung: neues Produkt/alter Markt. Diversifikation: alles neu.",
        erklaerung: "Ansoff-Matrix (Produkt-Markt-Matrix): 4 Wachstumsstrategien mit steigendem Risiko: Marktdurchdringung (geringstes Risiko) → Marktentwicklung → Produktentwicklung → Diversifikation (höchstes Risiko)."
      },
      {
        id: "uf_i11",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Das Topmanagement ist für die tägliche Betriebsplanung zuständig.", richtig: false },
          { text: "Eine SWOT-Analyse untersucht Stärken, Schwächen, Chancen und Risiken.", richtig: true },
          { text: "Die BCG-Matrix klassifiziert Produkte nach Marktanteil und Marktwachstum.", richtig: true },
          { text: "Management by Exception bedeutet, dass die Führungskraft alle Entscheidungen selbst trifft.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie kennen die Strategiebegriffe.",
        feedback_falsch: "Topmanagement = strategische Entscheidungen, NICHT Tagesgeschäft. MbE = nur bei Abweichungen eingreifen, nicht alles selbst entscheiden.",
        erklaerung: "Managementebenen: Topmanagement (Strategie, 3–10 Jahre), Middle Management (Taktik, 1–3 Jahre), Lower Management / operatives Management (Tagesgeschäft, bis 1 Jahr). BCG und SWOT sind strategische Analysetools."
      },
      {
        id: "uf_i12",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Die SWOT-Analyse untersucht Stärken und Schwächen (intern) sowie Chancen und Risiken (extern).", richtig: true },
          { text: "Eine Strategie beschreibt ausschließlich kurzfristige Maßnahmen für das nächste Quartal.", richtig: false },
          { text: "Interne Faktoren in der SWOT-Analyse sind vom Unternehmen selbst beeinflussbar.", richtig: true },
          { text: "Das normative Management legt die operative Tagesplanung fest.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie beherrschen SWOT und Managementebenen.",
        feedback_falsch: "Strategie = langfristig (3–10 Jahre), nicht kurzfristig. Normatives Management = Vision/Werte, NICHT Tagesplanung.",
        erklaerung: "SWOT: Stärken/Schwächen = intern (kontrollierbar). Chancen/Risiken = extern (Markt, Umwelt). Strategie = langfristiger Plan für Wettbewerbsvorteile. Normativ ≠ operativ."
      },
      {
        id: "uf_i13",
        typ: "multiple_choice",
        frage: "AlpenFresh GmbH analysiert den Bio-Lebensmittelmarkt mit PESTEL. Steigende Inflation (10%) und sinkende Konsumausgaben fallen in welche Kategorie?",
        antworten: [
          "Political (politisch)",
          "Economic (wirtschaftlich)",
          "Social (gesellschaftlich)",
          "Environmental (ökologisch)"
        ],
        richtig: 1,
        feedback_richtig: "Richtig! Inflation, Zinsen, BIP, Kaufkraft sind wirtschaftliche (Economic) Faktoren im PESTEL-Modell.",
        feedback_falsch: "Wirtschaftliche Faktoren umfassen: Inflation, Zinsniveau, BIP-Wachstum, Kaufkraft, Arbeitslosigkeit, Währungskurse.",
        erklaerung: "PESTEL: Politisch (Gesetze, Steuern), Economic (Konjunktur, Inflation), Social (Trends, Demografie), Technological (Digitalisierung), Environmental (Klima, Nachhaltigkeit), Legal (Arbeitsrecht, Wettbewerbsrecht). Wirtschaftliche Faktoren beeinfussen direkt die Absatz- und Kostenstruktur."
      }

    ]
  },

  // ============================================================
  // MODUL 2: PERSONALMANAGEMENT
  // ============================================================
  personalmanagement: {

    situation: `Die AlpenFresh GmbH wächst und benötigt neue Mitarbeitende.
HR-Leiterin Mag. Anna Steinlechner ist verantwortlich für Personalplanung,
Recruiting und Personalentwicklung. Das Unternehmen hat eine Fluktuation
von 8 % und möchte Employer Branding stärken, um Top-Talente zu gewinnen.`,

    klassische_aufgaben: [
      {
        id: "pm_k1",
        titel: "Stellenausschreibung erstellen",
        situation: `AlpenFresh sucht eine/n Produktionsleiter/in für den neuen Standort Wörgl.
Aufgaben: Führung von 25 Mitarbeitenden, Qualitätsmanagement, Produktionsplanung.
Voraussetzungen: HTL oder FH Lebensmitteltechnologie, mind. 3 Jahre Führungserfahrung,
Kenntnisse in Lean Management, Teamfähigkeit, Deutsch fließend.`,
        fragen: [
          "a) Erstellen Sie eine strukturierte Stellenanzeige für diese Position.",
          "b) Welche Angaben sind laut Gleichbehandlungsgesetz (§9 GlBG) in Stellenanzeigen verpflichtend?",
          "c) Nennen Sie zwei Vor- und zwei Nachteile der externen Personalsuche gegenüber der internen Suche."
        ],
        musterloesung: `a) Stellenanzeige AlpenFresh GmbH:
PRODUKTIONSLEITER/IN (m/w/d) – Standort Wörgl
Wir bieten: Vollzeit (38,5h), Monatsgehalt ab € 3.800 brutto (Überzahlung je nach Qualifikation)

Ihr Aufgabengebiet:
• Fachliche und disziplinäre Führung von 25 Mitarbeitenden
• Sicherstellung der Produktionsqualität nach Bio-Zertifizierungsstandards
• Planung und Optimierung der Produktionsprozesse
• Enge Zusammenarbeit mit HR und Logistik

Ihr Profil:
• Abschluss HTL Lebensmitteltechnologie oder FH Lebensmittelwirtschaft
• Mind. 3 Jahre Führungserfahrung in der Lebensmittelproduktion
• Kenntnisse in Lean Management von Vorteil
• Teamorientierte, kommunikative Persönlichkeit
• Sehr gute Deutschkenntnisse (C1)

Wir freuen uns auf Ihre Bewerbung: jobs@alpenfresh.at

b) Laut § 9 GlBG: Pflichtangabe des kollektivvertraglichen oder ortsüblichen Mindestlohns/Mindestgehalts für die ausgeschriebene Stelle. Diskriminierende Formulierungen (Alter, Geschlecht, Religion etc.) sind verboten. Stellenanzeigen müssen geschlechtsneutral formuliert sein (m/w/d).

c) Externe Personalsuche:
Vorteile: Frisches Know-how von außen, keine betriebsinternen Konflikte durch Beförderung, größerer Bewerberpool
Nachteile: Höhere Kosten (Inserate, Headhunter), längere Einarbeitungszeit, Risiko Fehlbesetzung

Interne Personalsuche:
Vorteile: Mitarbeitende kennen das Unternehmen, motivation durch Aufstiegschancen, geringere Kosten
Nachteile: Bringt keine neuen Impulse, Neidgefühle unter Kollegen möglich`
      },
      {
        id: "pm_k2",
        titel: "Personalentwicklungsmaßnahmen",
        situation: `AlpenFresh hat folgende Situation: Neue Mitarbeiterin Laura Heis (25) beginnt als Buchhalterin.
Produktionsleiter Klaus Berger soll seine Führungskompetenzen ausbauen.
Senior-Vertriebsmitarbeiterin Brigitte Huber (58) geht in 2 Jahren in Pension.
Auszubildender Tobias (18) macht eine Lehre als Lebensmitteltechniker.`,
        fragen: [
          "a) Welche Personalentwicklungsmaßnahme empfehlen Sie für jede Person? Begründen Sie.",
          "b) Unterscheiden Sie die Maßnahmen 'Into the Job', 'On the Job' und 'Off the Job' anhand je eines konkreten Beispiels.",
          "c) Was versteht man unter Onboarding und warum ist es wichtig?"
        ],
        musterloesung: `a) Empfehlungen:
• Laura Heis → Into the Job: strukturiertes Onboarding, Einarbeitungsplan, Paten-System (erfahrene Kollegin als Mentorin)
• Klaus Berger → Off the Job: externes Führungsseminar oder Coaching durch externen Business Coach, da Führungskompetenzen spezifisches Expertenwissen erfordern
• Brigitte Huber → Along the Job: Wissenstransfer-Programm, sie dokumentiert Prozesse und schult Nachfolger/in → Wissenssicherung für das Unternehmen
• Tobias → On the Job: Ausbildung am Arbeitsplatz durch Lehrling-Ausbilder, praktische Unterweisung, Job-Rotation durch verschiedene Abteilungen

b) Unterscheidung:
• Into the Job: Maßnahmen VOR oder BEI Arbeitsbeginn → z. B. Onboarding-Programm, Einführungsschulung
• On the Job: Lernen WÄHREND der Arbeit am Arbeitsplatz → z. B. Coaching durch Vorgesetzte/n, Job-Rotation
• Off the Job: Lernen AUSSERHALB des Arbeitsplatzes → z. B. Seminar, Fernkurs, E-Learning-Programm

c) Onboarding = strukturierte Einarbeitung neuer Mitarbeitender.
Wichtig, weil: neue Mitarbeitende schneller produktiv werden, das Zugehörigkeitsgefühl gestärkt wird, die Fluktuation in den ersten Monaten gesenkt wird (kritische Phase). Studien zeigen: Mitarbeitende, die gut onboarded wurden, bleiben länger im Unternehmen.`
      }
    ],

    interaktive_aufgaben: [
      {
        id: "pm_i1",
        typ: "multiple_choice",
        frage: "AlpenFresh sucht intern nach einem neuen Teamleiter. Ein Mitarbeiter bewirbt sich auf die ausgeschriebene Stelle. Welche Beschäftigungsform liegt vor, wenn er die Stelle bekommt und einen neuen Vertrag erhält?",
        antworten: [
          "Freier Dienstvertrag",
          "Werkvertrag",
          "Echter Dienstvertrag (Arbeitsvertrag)",
          "Honorarvertrag"
        ],
        richtig: 2,
        feedback_richtig: "Richtig! Ein echter Dienstvertrag (Arbeitsvertrag) liegt vor, wenn jemand weisungsgebunden, persönlich und auf Dauer für ein Unternehmen tätig ist.",
        feedback_falsch: "Nicht korrekt. Bei einem Angestelltenverhältnis mit persönlicher Arbeitspflicht und Weisungsbindung handelt es sich um einen echten Dienstvertrag.",
        erklaerung: "Echter Dienstvertrag = Arbeitsvertrag mit Weisungsbindung, persönlicher Arbeitspflicht, laufendem Entgelt. Freier Dienstvertrag = mehr Selbstständigkeit. Werkvertrag = Erfolgshaftung für ein Ergebnis."
      },
      {
        id: "pm_i2",
        typ: "zuordnung",
        frage: "Ordnen Sie die Personalentwicklungsmaßnahmen dem richtigen Konzept zu.",
        paare: [
          { links: "Führungsseminar außerhalb des Unternehmens", rechts: "Off the Job" },
          { links: "Einarbeitungsprogramm für neue Mitarbeitende", rechts: "Into the Job" },
          { links: "Rotation durch verschiedene Abteilungen", rechts: "On the Job" },
          { links: "Ruhestand-Vorbereitung, gleitender Übergang", rechts: "Out of the Job" }
        ],
        feedback_richtig: "Perfekt! Sie kennen alle Personalentwicklungskonzepte.",
        feedback_falsch: "Nochmals überdenken: Into = vor/bei Eintritt, On = am Arbeitsplatz, Off = außerhalb, Out = beim Austritt.",
        erklaerung: "Die Personalentwicklungsmaßnahmen werden nach dem Zeitpunkt und Ort unterschieden. Into/On/Near/Off/Along/Out the Job sind die klassischen Kategorien."
      },
      {
        id: "pm_i3",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Die Normalarbeitszeit in Österreich beträgt 8 Stunden pro Tag und 40 Stunden pro Woche.", richtig: true },
          { text: "Überstunden dürfen ohne Zustimmung des Arbeitnehmers angeordnet werden.", richtig: false },
          { text: "Karenz ist ein unbezahlter Urlaub zur Kinderbetreuung, der Jobschutz bleibt aufrecht.", richtig: true },
          { text: "Die Höchstarbeitszeit in Österreich beträgt 50 Stunden pro Woche.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie kennen die wichtigsten Arbeitsrechtlichen Grundlagen.",
        feedback_falsch: "Achtung: Überstunden brauchen eine gesetzliche oder kollektivvertragliche Grundlage. Die Höchstarbeitszeit ist 60h/Woche.",
        erklaerung: "Österreichisches Arbeitsrecht: Normalarbeitszeit 8h/Tag, 40h/Woche. Höchstarbeitszeit bis 60h/Woche möglich. Überstunden bedürfen Anordnung oder Zustimmung. Karenz schützt den Arbeitsplatz."
      },
      {
        id: "pm_i4",
        typ: "multiple_choice",
        frage: "HR-Leiterin Anna Steinlechner bewertet Mitarbeitende immer besonders gut, wenn diese kurz vor dem Beurteilungsgespräch eine gute Leistung zeigen – auch wenn das Jahr davor durchwachsen war. Welchen Beurteilungsfehler begeht sie?",
        antworten: [
          "Halo-Effekt",
          "Recency-Effekt",
          "Stereotype-Effekt",
          "Milde-Effekt"
        ],
        richtig: 1,
        feedback_richtig: "Genau! Der Recency-Effekt (Aktualitätseffekt) beschreibt die Übergewichtung jüngster Ereignisse bei der Beurteilung.",
        feedback_falsch: "Nein. Beim Halo-Effekt strahlt eine Eigenschaft auf alle anderen aus. Hier geht es um den Zeitpunkt der Ereignisse.",
        erklaerung: "Beurteilungsfehler im Personalcontrolling: Halo-Effekt = eine Eigenschaft dominiert alles andere. Recency-Effekt = aktuelle Ereignisse dominieren. Milde-Effekt = grundsätzlich zu positive Beurteilung."
      },
      {
        id: "pm_i5",
        typ: "rechenaufgabe",
        frage: `AlpenFresh GmbH hat 340 Mitarbeitende. Im letzten Jahr haben 27 Mitarbeitende das Unternehmen verlassen.
Berechnen Sie die Fluktuationsrate.
Formel: Fluktuationsrate = (Anzahl Abgänge / Durchschnittlicher Mitarbeiterstand) × 100`,
        loesung: `Fluktuationsrate = (27 / 340) × 100 = 7,94 % ≈ 8 %

Interpretation: Eine Fluktuationsrate von 8 % liegt im branchenüblichen Bereich (5–15 % je nach Branche). Da AlpenFresh in der Lebensmittelproduktion tätig ist, sollte die Rate idealerweise unter 10 % liegen. Handlungsbedarf besteht, wenn die Rate weiter steigt.`,
        feedback_richtig: "Sehr gut! Und denken Sie auch an die Interpretation der Kennzahl.",
        feedback_falsch: "Tipp: Abgänge durch durchschnittlichen Mitarbeiterstand dividieren, dann ×100.",
        erklaerung: "Die Fluktuationsrate zeigt, wie viel Prozent der Belegschaft ein Unternehmen jährlich verlässt. Zu hohe Fluktuation = hohe Rekrutierungskosten, Wissensverlust. Zu niedrige Fluktuation = stagnierende Strukturen."
      },
      {
        id: "pm_i6",
        typ: "multiple_choice",
        frage: "Maslow's Bedürfnispyramide ordnet menschliche Bedürfnisse hierarchisch. Welche Bedürfnisse stehen an der UNTERSTEN Stufe?",
        antworten: [
          "Soziale Bedürfnisse (Zugehörigkeit, Freundschaft)",
          "Sicherheitsbedürfnisse (Schutz, Stabilität)",
          "Grundbedürfnisse (Essen, Schlafen, Wärme)",
          "Selbstverwirklichung (Entfaltung, Kreativität)"
        ],
        richtig: 2,
        feedback_richtig: "Richtig! Physiologische Grundbedürfnisse bilden die Basis – sie müssen zuerst erfüllt sein, bevor höhere Bedürfnisse wirken.",
        feedback_falsch: "Nicht korrekt. Die Pyramide startet von unten mit physiologischen Grundbedürfnissen.",
        erklaerung: "Maslow-Pyramide (unten nach oben): 1. Physiologische Bedürfnisse → 2. Sicherheit → 3. Soziale Bedürfnisse → 4. Wertschätzung → 5. Selbstverwirklichung. Für Unternehmen wichtig: Welche Stufe spreche ich mit Anreizen an?"
      },
      {
        id: "pm_i7",
        typ: "entscheidung",
        frage: `AlpenFresh muss 3 Stellen besetzen. Die HR-Leiterin überlegt:
Option A: Interne Ausschreibung im Unternehmen
Option B: Inserat auf karriere.at und LinkedIn
Option C: Zusammenarbeit mit Personalvermittlungsagentur

Welche Option ist am kostengünstigsten, aber nicht immer möglich?`,
        antworten: [
          "Option A – Interne Ausschreibung",
          "Option B – Jobportale",
          "Option C – Personalvermittlung"
        ],
        richtig: 0,
        feedback_richtig: "Richtig! Interne Ausschreibung ist kostengünstigst, setzt aber voraus, dass geeignete Mitarbeitende im Unternehmen vorhanden sind.",
        feedback_falsch: "Personalvermittlung ist teuer (bis 3 Monatsgehälter). Jobportale kosten weniger, aber mehr als interne Suche.",
        erklaerung: "Interne Suche: günstigst, fördert Mitarbeitermotivation, aber eingeschränkter Pool. Externe Suche: mehr Auswahl, aber höhere Kosten und längere Einarbeitungszeit."
      },

      {
        id: "pm_i8",
        typ: "rechenaufgabe",
        frage: `AlpenFresh GmbH – Personalstatistik:
Mitarbeiterbestand Anfang des Jahres: 340 Personen
Mitarbeiterbestand Ende des Jahres: 352 Personen
Eintritte im Jahr: 48 Personen
Austritte im Jahr: 36 Personen

a) Berechnen Sie die Fluktuationsrate nach der BDA-Formel.
Formel: Fluktuationsrate = (Austritte / Ø Mitarbeiterbestand) × 100
b) Bewerten Sie das Ergebnis. (Branchenüblich Lebensmittel: 8–12%)`,
        loesung: `a) Ø Mitarbeiterbestand = (340 + 352) / 2 = 346 Personen

Fluktuationsrate = (36 / 346) × 100 = 10,4 %

b) Bewertung:
10,4 % liegt im branchenüblichen Rahmen (8–12 %).
→ Die Personalfluktuation bei AlpenFresh ist normal.
→ Kein akuter Handlungsbedarf, aber Monitoring empfohlen.`,
        erklaerung: "Fluktuationsrate (BDA-Formel): Austritte / Ø Mitarbeiterbestand × 100. Hohe Fluktuation (>15%) = teuer (Recruiting, Einarbeitung ca. 6–12 Monatsgehälter pro Person). Gegenmaßnahmen: bessere PE-Maßnahmen, Führungskultur, Gehalt."
      },
      {
        id: "pm_i9",
        typ: "zuordnung",
        frage: "AlpenFresh sucht neue Mitarbeitende. Ordnen Sie die Recruiting-Methode der richtigen Beschreibung zu.",
        paare: [
          { links: "Stellenausschreibung im Intranet für bestehende Mitarbeitende", rechts: "Interne Personalbeschaffung" },
          { links: "Inserat auf karriere.at und LinkedIn", rechts: "Externe Personalbeschaffung (Online)" },
          { links: "HR-Abteilung sucht aktiv passende Kandidaten auf LinkedIn", rechts: "Active Sourcing" },
          { links: "Mitarbeitende empfehlen Bekannte aus ihrem Netzwerk", rechts: "Mitarbeiterempfehlungsprogramm" }
        ],
        feedback_richtig: "Sehr gut! Sie kennen alle Recruiting-Methoden.",
        feedback_falsch: "Intern = aus dem eigenen Unternehmen. Extern = am Arbeitsmarkt. Active Sourcing = proaktive Direktansprache. Empfehlungsprogramm = Mitarbeitende als Recruiter.",
        erklaerung: "Personalbeschaffung: Intern (günstiger, motivierend, aber begrenzte Auswahl). Extern (größere Auswahl, frische Impulse, aber teurer). Active Sourcing und Empfehlungsprogramme sind moderne Ergänzungen, besonders bei Fachkräftemangel."
      },
      {
        id: "pm_i10",
        typ: "wahr_falsch",
        aussagen: [
          { text: "On-the-Job-Maßnahmen finden direkt am Arbeitsplatz statt (z. B. Coaching, Jobrotation).", richtig: true },
          { text: "Ein Seminar in einem externen Bildungsinstitut ist eine Off-the-Job-Maßnahme.", richtig: true },
          { text: "Jobrotation bedeutet, dass ein Mitarbeitender dauerhaft eine neue Stelle übernimmt.", richtig: false },
          { text: "Mentoring bedeutet, dass eine erfahrene Person eine jüngere Kollegin begleitet.", richtig: true }
        ],
        feedback_richtig: "Sehr gut! Sie kennen die Personalentwicklungsmaßnahmen.",
        feedback_falsch: "Jobrotation = temporärer Wechsel zwischen verschiedenen Stellen (kein dauerhafter Wechsel). Off-the-Job = extern, weg vom Arbeitsplatz.",
        erklaerung: "Personalentwicklung: On the Job (Coaching, Mentoring, Jobrotation, Jobenlargement, Jobenrichment), Near the Job (Workshops, Qualitätszirkel), Off the Job (externe Kurse, Seminare), Into the Job (Einarbeitung), Out of the Job (Pensionsvorbereitung)."
      },
      {
        id: "pm_i11",
        typ: "entscheidung",
        frage: `HR-Managerin Petra bei AlpenFresh hat drei Situationen:

Situation A: Ein erfahrener Mitarbeiter bewirbt sich intern auf eine Führungsposition → Welche Personalentwicklungsmaßnahme empfehlen Sie zur Vorbereitung?

Situation B: Neue Mitarbeiterin Lea (20) ist seit 2 Tagen im Unternehmen und kennt die Abläufe noch nicht.

Situation C: Das gesamte Team soll die neue Buchhaltungssoftware kennenlernen.

Welche Antwort zu Situation B ist richtig?`,
        antworten: [
          "On the Job: Coaching durch erfahrene Kollegin",
          "Off the Job: Externes Seminar über Buchhaltung",
          "Out of the Job: Übergabe für Ruhestand vorbereiten"
        ],
        richtig: 0,
        feedback_richtig: "Richtig! Neue Mitarbeiterin Lea braucht On the Job Einarbeitung – am besten durch Coaching/Mentoring direkt am Arbeitsplatz.",
        feedback_falsch: "Into/On the Job ist die beste Wahl für neue Mitarbeitende. Off the Job (extern) wäre sinnvoll für Softwareschulungen (Situation C).",
        erklaerung: "Personalentwicklung: Into the Job (Einarbeitung vor/bei Start), On the Job (am Arbeitsplatz, z. B. Coaching, Rotation), Near the Job (ergänzend, z. B. Workshops), Off the Job (externer Kurs), Out of the Job (Vorbereitung Pensionierung)."
      },
      {
        id: "pm_i12",
        typ: "zuordnung",
        frage: "Ordnen Sie die Personalentwicklungsmaßnahme dem richtigen Konzept zu.",
        paare: [
          { links: "Neue Mitarbeiterin Lisa wird von einer erfahrenen Kollegin eingearbeitet.", rechts: "Mentoring / Into the Job" },
          { links: "Produktionsleiter Franz besucht ein externes Führungskräfteseminar.", rechts: "Off the Job" },
          { links: "Teamleiterin Maria übernimmt zusätzlich anspruchsvollere Aufgaben.", rechts: "Job Enrichment" },
          { links: "Mitarbeitende wechseln alle 3 Monate in eine andere Abteilung.", rechts: "Job Rotation" }
        ],
        feedback_richtig: "Ausgezeichnet! Sie beherrschen alle PE-Konzepte.",
        feedback_falsch: "Mentoring/Into the Job = Einarbeitung durch Begleitung. Off the Job = extern. Job Enrichment = qualitative Erweiterung. Job Rotation = Wechsel zwischen Stellen.",
        erklaerung: "Personalentwicklung (PE) umfasst alle Maßnahmen zur Förderung von Mitarbeitenden. Ziel: Kompetenzen steigern, Motivation erhöhen, Fluktuation senken. Praxisblicke HAK III unterscheidet: Into/On/Near/Off/Out the Job."
      }

    ]
  },

  // ============================================================
  // MODUL 3: PRODUKTIONSBETRIEBE
  // ============================================================
  produktionsbetriebe: {

    situation: `Die AlpenFresh GmbH betreibt in Reutte (Tirol) eine Produktionsanlage
für Bio-Milchprodukte und Kräutersäfte. Betriebsleiter Ing. Klaus Berger
verantwortet 85 Produktionsmitarbeitende, die Materialplanung und die
Qualitätssicherung. Monatlich werden 180.000 Einheiten produziert.`,

    klassische_aufgaben: [
      {
        id: "pb_k1",
        titel: "Materialbedarfsplanung",
        situation: `AlpenFresh plant im Jänner die Produktion von 12.000 Liter Bio-Joghurt.
Für 1 Liter Joghurt werden 1,1 Liter Bio-Milch benötigt.
Aktueller Lagerbestand Bio-Milch: 3.200 Liter
Sicherheitsbestand (Mindestlager): 800 Liter
Bereits bestellte Menge (Bestellungen laufen): 2.000 Liter`,
        fragen: [
          "a) Berechnen Sie den Bruttobedarf an Bio-Milch für Jänner.",
          "b) Berechnen Sie den Nettobedarf (tatsächlich zu bestellende Menge).",
          "c) Erklären Sie den Unterschied zwischen Just-in-time-Beschaffung und Vorratsbeschaffung."
        ],
        musterloesung: `a) Bruttobedarf:
Produktionsmenge × Materialverbrauch pro Einheit
= 12.000 Liter × 1,1 = 13.200 Liter Bio-Milch

b) Nettobedarf:
Bruttobedarf + Sicherheitsbestand – Lagerbestand – offene Bestellungen
= 13.200 + 800 – 3.200 – 2.000
= 8.800 Liter → Diese Menge muss noch bestellt werden.

c) Just-in-time (JIT):
Material wird genau dann angeliefert, wenn es gebraucht wird.
Vorteil: Niedrige Lagerkosten, keine Kapitalbindung
Nachteil: Abhängig von zuverlässigen Lieferanten, bei Lieferverzug Produktionsstillstand möglich

Vorratsbeschaffung:
Es werden größere Mengen auf Vorrat bestellt und eingelagert.
Vorteil: Unabhängigkeit von Lieferengpässen, Mengenrabatte möglich
Nachteil: Hohe Lagerkosten, Kapitalbindung, Verderb (besonders bei Lebensmitteln!)
→ Für AlpenFresh empfiehlt sich ein Mix: JIT für Frischmilch, Vorrat für haltbare Zutaten.`
      },
      {
        id: "pb_k2",
        titel: "Kapazitätsplanung und Kennzahlen",
        situation: `Die Abfüllanlage bei AlpenFresh hat eine maximale Kapazität von 8.000 Flaschen/Stunde.
Pro Schicht (8 Stunden) wird die Anlage im Durchschnitt 6,5 Stunden genutzt.
Im letzten Monat wurden 15 von 180 Lieferungen zu spät geliefert.
Die Durchführungszeit einer Charge beträgt 4 Stunden, die Übergangszeit 1,5 Stunden.`,
        fragen: [
          "a) Berechnen Sie die Kapazitätsauslastung der Abfüllanlage.",
          "b) Berechnen Sie die Termintreue des letzten Monats.",
          "c) Berechnen Sie die Durchlaufzeit einer Charge und erklären Sie deren Bedeutung."
        ],
        musterloesung: `a) Kapazitätsauslastung:
= (Tatsächliche Nutzung / Maximalkapazität) × 100
= (6,5 Stunden / 8 Stunden) × 100 = 81,25 %
→ Die Anlage wird zu 81,25 % ausgelastet – das ist ein guter Wert (optimal: 80–90 %).

b) Termintreue:
= (Termingerechte Lieferungen / Alle Lieferungen) × 100
= ((180 – 15) / 180) × 100
= (165 / 180) × 100 = 91,67 %
→ 91,67 % Termintreue – Verbesserungsbedarf besteht (Ziel: >95 %).

c) Durchlaufzeit:
= Durchführungszeit + Übergangszeit
= 4 Stunden + 1,5 Stunden = 5,5 Stunden pro Charge

Bedeutung: Die Durchlaufzeit bestimmt, wie schnell AlpenFresh auf Kundenaufträge reagieren kann. Kurze Durchlaufzeiten = schnellere Lieferbereitschaft, weniger gebundenes Kapital in der Produktion.`
      }
    ],

    interaktive_aufgaben: [
      {
        id: "pb_i1",
        typ: "multiple_choice",
        frage: "AlpenFresh produziert täglich dieselben Bio-Joghurt-Sorten in großen Mengen am Fließband. Welche Fertigungsart liegt vor?",
        antworten: [
          "Einzelfertigung",
          "Serienfertigung",
          "Massenfertigung",
          "Auftragsfertigung"
        ],
        richtig: 2,
        feedback_richtig: "Richtig! Massenfertigung = ein Produkt in sehr großen Stückzahlen, standardisiert und kontinuierlich.",
        feedback_falsch: "Nicht korrekt. Massenfertigung bedeutet: standardisiertes Produkt, hohe Stückzahlen, kontinuierlich.",
        erklaerung: "Fertigungsarten: Einzelfertigung = einmaliges Produkt nach Kundenwunsch. Serienfertigung = gleiche Produkte in Chargen. Massenfertigung = dauerhaft dasselbe Produkt in Großmengen (z. B. Joghurt, Getränke)."
      },
      {
        id: "pb_i2",
        typ: "rechenaufgabe",
        frage: `AlpenFresh produziert Kräutersaft.
Bruttobedarf an Kräuterextrakt: 5.400 kg
Aktueller Lagerbestand: 1.200 kg
Sicherheitsbestand: 400 kg
Bestellungen bereits ausgelöst: 600 kg

Berechnen Sie den Nettobedarf (zu bestellende Menge).`,
        loesung: `Nettobedarf = Bruttobedarf + Sicherheitsbestand – Lagerbestand – offene Bestellungen
= 5.400 + 400 – 1.200 – 600
= 4.000 kg

AlpenFresh muss noch 4.000 kg Kräuterextrakt bestellen.`,
        feedback_richtig: "Ausgezeichnet! Die Formel ist korrekt angewendet.",
        feedback_falsch: "Denken Sie an alle Komponenten: Brutto + Sicherheit – Lager – bereits bestellt.",
        erklaerung: "Nettobedarfsberechnung: Der tatsächlich zu bestellende Bedarf ergibt sich aus dem Bruttobedarf, abzüglich vorhandener Bestände und bereits ausgelöster Bestellungen, zuzüglich des Sicherheitsbestands."
      },
      {
        id: "pb_i3",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Just-in-time-Beschaffung senkt die Lagerkosten erheblich.", richtig: true },
          { text: "Werkstattfertigung ist ideal für Massenfertigung wie Joghurtproduktion.", richtig: false },
          { text: "Die Arbeitsproduktivität misst den Output pro eingesetzter Arbeitsstunde.", richtig: true },
          { text: "Vorwärtsterminierung startet von einem festgelegten Endtermin rückwärts.", richtig: false }
        ],
        feedback_richtig: "Super! Sie kennen die Produktionsbegriffe gut.",
        feedback_falsch: "Achtung: Werkstattfertigung eignet sich für Einzelfertigung. Vorwärtsterminierung startet vom Beginn vorwärts.",
        erklaerung: "Vorwärtsterminierung: Startend vom Auftragseingang werden Termine nach vorne berechnet. Rückwärtsterminierung: Ausgehend vom Liefertermin werden Termine rückwärts berechnet."
      },
      {
        id: "pb_i4",
        typ: "rechenaufgabe",
        frage: `Die Abfüllanlage von AlpenFresh hat eine theoretische Kapazität von 10.000 Flaschen/Schicht.
Tatsächlich werden pro Schicht durchschnittlich 7.800 Flaschen abgefüllt.

a) Berechnen Sie die Kapazitätsauslastung.
b) Bewerten Sie das Ergebnis.`,
        loesung: `a) Kapazitätsauslastung = (7.800 / 10.000) × 100 = 78 %

b) Bewertung:
78 % Auslastung liegt im akzeptablen Bereich (optimale Auslastung 80–90 %).
Leicht unter dem Optimum → Potenzial für mehr Produktion ist vorhanden.
Unter 70 % = Überkapazität (zu teuer). Über 90 % = Überlastungsrisiko (Qualitätsprobleme, Maschinenverschleiß).`,
        feedback_richtig: "Sehr gut – und die Interpretation macht die Kennzahl erst wertvoll!",
        feedback_falsch: "Formel: (Ist / Soll) × 100. Dann bewerten: Wo liegt das Optimum?",
        erklaerung: "Die Kapazitätsauslastung zeigt, wie effizient Produktionsmittel eingesetzt werden. Zu niedrig = unnötige Fixkosten. Zu hoch = Qualitätsprobleme und Maschinenverschleiß."
      },
      {
        id: "pb_i5",
        typ: "zuordnung",
        frage: "Ordnen Sie die Standortfaktoren der richtigen Kategorie zu.",
        paare: [
          { links: "Nähe zu Bio-Lieferanten in Tirol", rechts: "Beschaffungsseitig" },
          { links: "Gute Autobahnanbindung für LKW-Lieferungen", rechts: "Absatzorientiert" },
          { links: "Verfügbarkeit von Kühlhäusern", rechts: "Produktionsbezogen" },
          { links: "Nähe zu Supermärkten und Endkunden", rechts: "Absatzorientiert" }
        ],
        feedback_richtig: "Ausgezeichnet! Sie verstehen die Standortentscheidungslogik.",
        feedback_falsch: "Überdenken: Beschaffung = Lieferanten, Produktion = Anlagen/Ressourcen, Absatz = Kunden/Märkte.",
        erklaerung: "Standortfaktoren werden nach ihrer Wirkungsrichtung eingeteilt: Beschaffungsseitig (Rohstoffe, Lieferanten), produktionsbezogen (Infrastruktur, Fläche), absatzorientiert (Kundennähe, Logistik)."
      },

      {
        id: "pb_i6",
        typ: "zuordnung",
        frage: "Ordnen Sie die Fertigungstypen dem richtigen Beispiel zu.",
        paare: [
          { links: "Einzelfertigung", rechts: "Maßgeschneiderter AlpenFresh-Geschenkkorb für Firmenkundschaft" },
          { links: "Serienfertigung", rechts: "AlpenFresh produziert Kräutersaft in 3 Varianten à 10.000 Fl." },
          { links: "Massenfertigung", rechts: "AlpenFresh produziert täglich 500.000 Becher Bio-Joghurt" },
          { links: "Sortenfertigung", rechts: "AlpenFresh wechselt auf derselben Linie zwischen 3 Käsesorten" }
        ],
        feedback_richtig: "Ausgezeichnet! Sie kennen alle Fertigungstypen.",
        feedback_falsch: "Einzel = individuell für Kunden. Serie = begrenzte Stückzahl je Variante. Masse = riesige Mengen gleichartig. Sorte = Wechsel zwischen ähnlichen Produkten auf gleicher Anlage.",
        erklaerung: "Fertigungstypen nach Wiederholungsgrad: Einzelfertigung (Unikat, z. B. Schiffbau), Serienfertigung (begrenzte Stückzahl, z. B. Autos), Massenfertigung (kontinuierlich große Mengen, z. B. Schrauben), Sortenfertigung (ähnliche Produkte, gleiche Anlage, z. B. Milchprodukte)."
      },
      {
        id: "pb_i7",
        typ: "rechenaufgabe",
        frage: `AlpenFresh Lager-Kennzahlen:
Anfangsbestand: 4.000 Liter Milch
Endbestand: 2.500 Liter Milch
Verbrauch (Abgänge): 36.000 Liter/Jahr

a) Berechnen Sie den durchschnittlichen Lagerbestand.
b) Berechnen Sie die Lagerumschlagshäufigkeit.
c) Berechnen Sie die durchschnittliche Lagerdauer (in Tagen). Arbeitsjahr: 360 Tage.`,
        loesung: `a) Ø Lagerbestand = (Anfangsbestand + Endbestand) / 2
= (4.000 + 2.500) / 2 = 3.250 Liter

b) Lagerumschlagshäufigkeit = Verbrauch / Ø Lagerbestand
= 36.000 / 3.250 = 11,08 Mal/Jahr (≈ 11×)

c) Ø Lagerdauer = Arbeitstage / Lagerumschlagshäufigkeit
= 360 / 11,08 = 32,5 Tage

→ Milch bleibt durchschnittlich ~32 Tage im Lager.
Bei Frischmilch ist das zu lang! AlpenFresh sollte JIT einführen.`,
        erklaerung: "Lagerkennzahlen: Ø Lagerbestand = (AB + EB) / 2. Lagerumschlagshäufigkeit = Verbrauch / Ø Lagerbestand. Lagerdauer = 360 / Umschlaghäufigkeit. Je höher die Umschlaghäufigkeit, desto kürzer die Lagerdauer, desto frischer die Ware, desto geringer die Kapitalbindung."
      },
      {
        id: "pb_i8",
        typ: "multiple_choice",
        frage: "AlpenFresh bestellt Rohmilch genau dann, wenn sie benötigt wird – kein Lager, Lieferung täglich. Welches Konzept beschreibt das?",
        antworten: [
          "Maximale Lagerhaltung (Sicherheitsbestand)",
          "Just-in-Time (JIT) Belieferung",
          "Fertigungssynchrone Beschaffung",
          "ABC-Analyse der Lieferanten"
        ],
        richtig: 1,
        feedback_richtig: "Richtig! Just-in-Time: Rohstoffe werden genau zum Zeitpunkt des Bedarfs geliefert – minimales Lager, maximale Frische.",
        feedback_falsch: "Just-in-Time (JIT) = bedarfssynchrone Beschaffung ohne Lagerhaltung. Vorteil: kein Kapitalbindung, kein Lagerrisiko. Nachteil: Abhängigkeit von Lieferantenzuverlässigkeit.",
        erklaerung: "JIT (Just-in-Time): Konzept aus der japanischen Automobilindustrie (Toyota). Vorteile: keine Lagerhaltungskosten, frische Ware, geringe Kapitalbindung. Nachteile: Lieferausfälle stoppen die Produktion (Bullwhip-Effekt), Qualitätsprobleme sofort sichtbar."
      },
      {
        id: "pb_i9",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Bio-zertifizierte Betriebe wie AlpenFresh müssen jährliche Kontrollbesuche durch zertifizierte Stellen akzeptieren.", richtig: true },
          { text: "ISO 9001 ist eine internationale Norm für Qualitätsmanagementsysteme.", richtig: true },
          { text: "Beim Fließband-Prinzip werden alle Maschinen nach Produktionsschritten angeordnet (Fließfertigung).", richtig: true },
          { text: "Ein hoher Ausschussanteil erhöht die Produktivität des Betriebes.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie kennen die Qualitätssicherungsgrundlagen.",
        feedback_falsch: "Ausschuss (Fehlerprodukte) SENKT die Produktivität, weil Rohstoffe und Arbeitszeit verschwendet werden.",
        erklaerung: "Qualitätssicherung: Präventive (vorbeugend), Kontrollierende (prüfend) und Korrektive (korrigierend) Maßnahmen. ISO 9001: weltweit anerkannte Norm für QM-Systeme. Bio-Zertifizierung in Österreich: Austria Bio Garantie (ABG) oder Biokreis prüfen jährlich."
      },
      {
        id: "pb_i10",
        typ: "rechenaufgabe",
        frage: `AlpenFresh Kapazitätsplanung – Joghurtproduktion:
Anlagenkapazität: 1.200 kg/Stunde
Geplante Betriebszeit: 16 Stunden/Tag (2-Schicht-Betrieb)
Tatsächliche Produktion gestern: 14.400 kg

a) Berechnen Sie die tatsächliche Kapazitätsauslastung in %.
b) Was ist die maximale Tageskapazität?
c) Wie viele Stunden könnte AlpenFresh täglich produzieren, um die Auslastung auf 90% zu bringen?`,
        loesung: `a) Maximale Tageskapazität:
1.200 kg/h × 16 h = 19.200 kg/Tag

Auslastungsgrad = (Tatsächlich / Maximum) × 100
= (14.400 / 19.200) × 100 = 75 %

b) Maximale Tageskapazität = 19.200 kg/Tag (wie berechnet)

c) 90% Auslastung mit 16h-Betrieb:
Erforderliche Produktion = 19.200 × 0,90 = 17.280 kg
Benötigte Zeit = 17.280 / 1.200 = 14,4 Stunden
→ AlpenFresh müsste 14,4 Stunden produzieren (anstatt derzeit ca. 12 h effektiv).`,
        erklaerung: "Kapazitätsauslastung = (Ist-Produktion / Soll-Kapazität) × 100. Ziel: 85–95% Auslastung (unter 85% = verschwendete Ressourcen, über 95% = Überlastungsrisiko). Engpassanalyse zeigt, wo die Kapazität am knappsten ist."
      }

    ]
  },

  // ============================================================
  // MODUL 4: INVESTITIONS- UND FINANZMANAGEMENT
  // ============================================================
  investitionsfinanzmanagement: {

    situation: `AlpenFresh GmbH plant die Anschaffung einer neuen Abfüllanlage.
Außerdem braucht das Unternehmen frisches Kapital für die geplante Expansion.
CFO Mag. Michael Daxer analysiert Investitionsalternativen und Finanzierungsoptionen.
Das Unternehmen hat eine Eigenkapitalquote von 38 % und solide Bonität.`,

    klassische_aufgaben: [
      {
        id: "if_k1",
        titel: "Statische Investitionsrechnung – Kostenvergleich",
        situation: `AlpenFresh vergleicht zwei Abfüllanlagen:
Anlage A: Anschaffungskosten 240.000 €, Nutzungsdauer 8 Jahre, Restwert 24.000 €, 
          fixe Kosten/Jahr 18.000 €, variable Kosten/Einheit 0,08 €, Kapazität 400.000 Einh./Jahr
Anlage B: Anschaffungskosten 180.000 €, Nutzungsdauer 8 Jahre, Restwert 12.000 €,
          fixe Kosten/Jahr 22.000 €, variable Kosten/Einheit 0,06 €, Kapazität 400.000 Einh./Jahr
Kalkulationszinssatz: 8 %`,
        fragen: [
          "a) Berechnen Sie die kalkulatorischen Abschreibungen für beide Anlagen.",
          "b) Berechnen Sie die kalkulatorischen Zinsen für beide Anlagen.",
          "c) Stellen Sie die jährlichen Gesamtkosten bei einer Auslastung von 400.000 Einheiten gegenüber."
        ],
        musterloesung: `a) Kalkulatorische Abschreibung:
= (Anschaffungskosten – Restwert) / Nutzungsdauer

Anlage A: (240.000 – 24.000) / 8 = 216.000 / 8 = 27.000 € / Jahr
Anlage B: (180.000 – 12.000) / 8 = 168.000 / 8 = 21.000 € / Jahr

b) Kalkulatorische Zinsen:
Ø Kapitaleinsatz = (Anschaffungskosten + Restwert) / 2
Zinsen = Ø Kapitaleinsatz × Zinssatz

Anlage A: Ø Kapital = (240.000 + 24.000) / 2 = 132.000 €
          Zinsen = 132.000 × 0,08 = 10.560 € / Jahr

Anlage B: Ø Kapital = (180.000 + 12.000) / 2 = 96.000 €
          Zinsen = 96.000 × 0,08 = 7.680 € / Jahr

c) Gesamtkosten bei 400.000 Einheiten:
Gesamtkosten = Kalk. Abschr. + Kalk. Zinsen + Fixkosten + (Variable Kosten × Menge)

Anlage A: 27.000 + 10.560 + 18.000 + (0,08 × 400.000)
        = 27.000 + 10.560 + 18.000 + 32.000 = 87.560 € / Jahr

Anlage B: 21.000 + 7.680 + 22.000 + (0,06 × 400.000)
        = 21.000 + 7.680 + 22.000 + 24.000 = 74.680 € / Jahr

→ Anlage B ist kostengünstiger (Differenz: 12.880 € / Jahr)!`
      },
      {
        id: "if_k2",
        titel: "Finanzierungsarten und Lieferantenkredit",
        situation: `AlpenFresh kauft Verpackungsmaterial im Wert von 50.000 € netto.
Zahlungsbedingungen: 2 % Skonto bei Zahlung innerhalb von 10 Tagen, 
                      Netto-Zahlungsziel 60 Tage.
Das Unternehmen überlegt, ob es das Skonto nutzen oder auf den Lieferantenkredit zurückgreifen soll.`,
        fragen: [
          "a) Berechnen Sie den Skonto-Betrag.",
          "b) Berechnen Sie den effektiven Jahreszinssatz des Lieferantenkredits.",
          "c) AlpenFresh hat einen Kontokorrentkredit zu 6 % p.a. Soll das Skonto genutzt werden? Begründen Sie."
        ],
        musterloesung: `a) Skonto-Betrag:
= Rechnungsbetrag × Skontosatz
= 50.000 € × 2 % = 1.000 €
→ Bei Zahlung innerhalb von 10 Tagen zahlt AlpenFresh nur 49.000 €.

b) Effektiver Jahreszinssatz des Lieferantenkredits:
Formel: Jahreszinssatz = (Skontosatz / Kassafrist) × 360
Kassafrist = Zahlungsziel – Skontofrist = 60 – 10 = 50 Tage

Jahreszinssatz = (2 % / 50) × 360 = 14,4 % p.a.

c) Vergleich:
Lieferantenkredit: effektiv 14,4 % p.a. → TEUER
Kontokorrentkredit: 6 % p.a. → GÜNSTIGER

Empfehlung: AlpenFresh sollte das Skonto nutzen (innerhalb von 10 Tagen zahlen).
Den fehlenden Betrag finanziert das Unternehmen über den günstigeren Kontokorrentkredit (6 %).
Ersparnis pro Jahr (hochgerechnet): 14,4 % – 6 % = 8,4 % → deutlicher Zinsvorteil.`
      }
    ],

    interaktive_aufgaben: [
      {
        id: "if_i1",
        typ: "multiple_choice",
        frage: "AlpenFresh leaset eine neue Lieferflotte. Welche Finanzierungsart liegt vor?",
        antworten: [
          "Eigenfinanzierung durch Selbstfinanzierung",
          "Außenfinanzierung durch Fremdkapital (Leasing)",
          "Innenfinanzierung durch Abschreibungsrückflüsse",
          "Beteiligungsfinanzierung"
        ],
        richtig: 1,
        feedback_richtig: "Richtig! Leasing ist eine Form der Außenfinanzierung mit Fremdkapital – das Unternehmen nutzt Anlagegüter, ohne sie zu kaufen.",
        feedback_falsch: "Nicht korrekt. Leasing ist Außenfinanzierung (Kapital kommt von außen = Leasinggesellschaft) mit Fremdkapitalcharakter.",
        erklaerung: "Leasing = Miete von Anlagegütern. Außenfinanzierung = Kapital kommt von externen Quellen. Fremdkapital = muss zurückgezahlt werden. Eigenfinanzierung = Kapital aus dem Unternehmen selbst."
      },
      {
        id: "if_i2",
        typ: "rechenaufgabe",
        frage: `AlpenFresh kauft eine Maschine:
Anschaffungskosten: 120.000 €
Nutzungsdauer: 6 Jahre
Restwert: 6.000 €
Zinssatz: 5 %

a) Berechnen Sie die kalkulatorische Abschreibung pro Jahr.
b) Berechnen Sie die kalkulatorischen Zinsen pro Jahr.`,
        loesung: `a) Kalk. Abschreibung = (AK – RW) / ND
= (120.000 – 6.000) / 6 = 114.000 / 6 = 19.000 € / Jahr

b) Ø Kapitaleinsatz = (AK + RW) / 2 = (120.000 + 6.000) / 2 = 63.000 €
Kalk. Zinsen = 63.000 × 0,05 = 3.150 € / Jahr`,
        feedback_richtig: "Perfekt! Diese zwei Kostenarten sind der Kern der Investitionsrechnung.",
        feedback_falsch: "Abschreibung: (AK-RW)/ND. Zinsen: Durchschnittskapital × Zinssatz. Durchschnittskapital = (AK+RW)/2.",
        erklaerung: "Kalkulatorische Abschreibung = Wertverlust pro Jahr. Kalkulatorische Zinsen = Opportunitätskosten des eingesetzten Kapitals. Beide sind Kosten, auch wenn kein Geld fließt."
      },
      {
        id: "if_i3",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Eigenkapital muss nicht zurückgezahlt werden.", richtig: true },
          { text: "Ein Annuitätendarlehen hat gleich bleibende Tilgungsraten.", richtig: false },
          { text: "Die Eigenkapitalquote zeigt, wie viel des Gesamtkapitals aus Eigenkapital besteht.", richtig: true },
          { text: "Crowdfunding ist eine Form der Innenfinanzierung.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie kennen die Grundbegriffe der Finanzierung.",
        feedback_falsch: "Achtung: Annuität = gleich bleibende Gesamtrate (Zinsen + Tilgung). Crowdfunding = Außenfinanzierung (von außen).",
        erklaerung: "Annuitätendarlehen: Die Gesamtrate (Annuität) bleibt gleich, aber der Tilgungsanteil steigt und der Zinsanteil sinkt. Crowdfunding = Kapital von externen Unterstützern = Außenfinanzierung."
      },
      {
        id: "if_i4",
        typ: "rechenaufgabe",
        frage: `AlpenFresh prüft die Skonto-Entscheidung:
Lieferant bietet 3 % Skonto bei Zahlung innerhalb 14 Tage, sonst 90 Tage.
Kassafrist = 90 – 14 = 76 Tage

Berechnen Sie den effektiven Jahreszinssatz des Lieferantenkredits.
Formel: Zinssatz = (Skontosatz / Kassafrist) × 360`,
        loesung: `Jahreszinssatz = (3 % / 76) × 360 = 14,21 % p.a.

Wenn AlpenFresh einen Kredit zu unter 14,21 % bekommt, sollte das Skonto genutzt werden.
Bei einem Kontokorrent von 7 %: Skonto nutzen! (7 % < 14,21 %)`,
        feedback_richtig: "Gut gemacht! Der Vergleich mit dem Kreditangebot ist entscheidend.",
        feedback_falsch: "Formel: (Skontosatz in %) / Kassafrist × 360. Dann vergleichen mit verfügbaren Kreditzinssätzen.",
        erklaerung: "Der Lieferantenkredit ist oft teurer als ein Bankkredit. Deshalb: Skonto nutzen + Bankkredit nehmen ist meist günstiger als Zahlungsziel ausnutzen."
      },
      {
        id: "if_i5",
        typ: "zuordnung",
        frage: "Ordnen Sie die Finanzierungsarten der richtigen Kategorie zu.",
        paare: [
          { links: "Gewinnrücklagen einbehalten", rechts: "Innenfinanzierung / Eigenkapital" },
          { links: "Neuer Gesellschafter beteiligt sich", rechts: "Außenfinanzierung / Eigenkapital" },
          { links: "Bankdarlehen aufnehmen", rechts: "Außenfinanzierung / Fremdkapital" },
          { links: "Abschreibungsrückflüsse reinvestieren", rechts: "Innenfinanzierung / Umschichtung" }
        ],
        feedback_richtig: "Perfekt! Sie beherrschen die Finanzierungssystematik.",
        feedback_falsch: "Systematik: Innen = aus dem Unternehmen. Außen = von extern. Eigen = kein Rückzahlungsanspruch. Fremd = Rückzahlungspflicht.",
        erklaerung: "Finanzierungsarten werden nach Herkunft (Innen/Außen) und Rechtsstellung (Eigen/Fremd) eingeteilt. Diese Kombination ergibt vier Felder: Selbstfinanzierung, Beteiligungsfinanzierung, Fremdfinanzierung, Umschichtungsfinanzierung."
      },
      {
        id: "if_i6",
        typ: "multiple_choice",
        frage: "Was versteht man unter der Amortisationsdauer einer Investition?",
        antworten: [
          "Der Zeitraum, in dem eine Investition steuerlich abgeschrieben wird.",
          "Der Zeitraum, bis das investierte Kapital durch die erzielten Rückflüsse wieder eingebracht ist.",
          "Der Zeitraum der gesamten Nutzungsdauer eines Investitionsgutes.",
          "Der Zeitraum, bis die Zinsen für eine Finanzierung vollständig bezahlt sind."
        ],
        richtig: 1,
        feedback_richtig: "Genau! Die Amortisationsdauer = Zeit bis zur Kapitalrückgewinnung (AK / jährlicher Rückfluss).",
        feedback_falsch: "Nicht korrekt. Amortisation ≠ steuerliche Abschreibung. Es geht darum, wann das eingesetzte Kapital zurückgeflossen ist.",
        erklaerung: "Amortisationsdauer = Anschaffungskosten / (Jahresgewinn + kalk. Abschreibung). Je kürzer, desto schneller ist das Risiko reduziert. Nachteil: Zeitwert des Geldes wird nicht berücksichtigt."
      },

      {
        id: "if_i7",
        typ: "rechenaufgabe",
        frage: `AlpenFresh prüft eine neue Abfüllanlage:
Anschaffungskosten: € 240.000
Jährliche Einsparung (Betriebskosten): € 48.000
Jährliche Zusatzerträge: € 12.000

a) Berechnen Sie die statische Amortisationszeit (Kapitalrückflussdauer).
b) Wie bewerten Sie das Ergebnis? (Branchenüblich: max. 5 Jahre)
Formel: Amortisationszeit = Anschaffungskosten / Ø jährlicher Rückfluss`,
        loesung: `a) Jährlicher Rückfluss = Einsparungen + Zusatzerträge
= € 48.000 + € 12.000 = € 60.000/Jahr

Amortisationszeit = € 240.000 / € 60.000 = 4 Jahre

b) Bewertung:
4 Jahre liegt unter dem Branchendurchschnitt von 5 Jahren
→ Investition ist EMPFEHLENSWERT
→ Das eingesetzte Kapital wird in 4 Jahren zurückgewonnen.`,
        erklaerung: "Statische Amortisationszeit (Payback Period): Wie lange dauert es, bis die Investition sich selbst refinanziert hat? Formel: AK / Ø Rückfluss. Vorteil: einfach, schnell. Nachteil: berücksichtigt keine Zeit- und Zinseffekte nach der Amortisation."
      },
      {
        id: "if_i8",
        typ: "zuordnung",
        frage: "Ordnen Sie die Finanzierungsformen der richtigen Kategorie zu.",
        paare: [
          { links: "AlpenFresh verwendet Gewinne zur Finanzierung der neuen Anlage", rechts: "Innenfinanzierung / Selbstfinanzierung" },
          { links: "AlpenFresh nimmt einen Bankkredit auf", rechts: "Außenfinanzierung / Fremdfinanzierung" },
          { links: "AlpenFresh erhöht das Grundkapital durch neue Gesellschafter", rechts: "Außenfinanzierung / Eigenfinanzierung" },
          { links: "AlpenFresh least die Abfüllanlage für 5 Jahre", rechts: "Leasing (Sonderform Außenfinanzierung)" }
        ],
        feedback_richtig: "Ausgezeichnet! Sie kennen alle Finanzierungsformen.",
        feedback_falsch: "Innen = aus dem Unternehmen selbst. Außen = von außen zugeführt. Eigen = kein Rückzahlungsanspruch. Fremd = Rückzahlungspflicht + Zinsen.",
        erklaerung: "Finanzierungsformen: Innenfinanzierung (Selbstfinanzierung aus Gewinnen, Abschreibungsrückflüsse). Außenfinanzierung: Eigenfinanzierung (neue Gesellschafter, Kapitalerhöhung) oder Fremdfinanzierung (Bankkredit, Anleihe). Leasing: wirtschaftlich Miete, bilanziell je nach Vertrag."
      },
      {
        id: "if_i9",
        typ: "entscheidung",
        frage: `AlpenFresh braucht eine neue Kälteanlage (€ 80.000, Nutzungsdauer 8 Jahre).
Finanzierungsmöglichkeiten:
Option A: Bankdarlehen (5% p.a., 8 Jahre Laufzeit, volle Eigentümerschaft sofort)
Option B: Leasing (Monatsrate € 1.100, 5 Jahre, dann zurückgeben oder kaufen)
Option C: Kauf aus Eigenkapital (Ersparnisse reduzieren, keine Zinsen)

Welche Option ist sinnvoll, wenn AlpenFresh Liquidität schonen will?`,
        antworten: [
          "Option A – Bankdarlehen: gleichmäßige Raten, Eigentum sofort",
          "Option B – Leasing: niedrige Monatsraten, keine Kapitalbindung",
          "Option C – Eigenkapital: keine Zinsen, aber Liquiditätsabfluss"
        ],
        richtig: 1,
        feedback_richtig: "Richtig! Leasing schont die Liquidität am stärksten – kein großer Anfangskapitalbedarf, planbare Monatsraten.",
        feedback_falsch: "Für Liquiditätsschonung: Leasing = beste Option. EK-Kauf = liquiditätsbelastend. Bankdarlehen = besser als EK-Kauf, aber schlechter als Leasing.",
        erklaerung: "Leasing: Vorteile: Liquiditätsschonung, steuerlicher Aufwand (Leasingrate absetzbar), immer neueste Technik. Nachteile: kein Eigentum, höhere Gesamtkosten als Kauf, Bindung an Leasinggeber. Für junge Unternehmen oft die günstigste Lösung."
      },
      {
        id: "if_i10",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Eigenkapital muss nicht zurückgezahlt werden und verursacht keine Zinszahlungen.", richtig: true },
          { text: "Ein höherer Verschuldungsgrad erhöht das finanzielle Risiko eines Unternehmens.", richtig: true },
          { text: "Die Rentabilität gibt an, wie viel Gewinn im Verhältnis zum eingesetzten Kapital erzielt wird.", richtig: true },
          { text: "Liquidität 1. Grades misst, ob das Unternehmen alle Schulden mit Vorräten bezahlen kann.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie kennen die Finanzierungsgrundbegriffe.",
        feedback_falsch: "Liquidität 1. Grades (Barliquidität) = flüssige Mittel / kurzfristige Verbindlichkeiten × 100 – also NUR liquide Mittel, nicht Vorräte!",
        erklaerung: "Liquiditätsgrade: 1. Grad (Bar): nur Kassenbestand + Bankguthaben. 2. Grad (Einzug): + kurzfristige Forderungen. 3. Grad (Gesamt): + Vorräte. Goldene Finanzierungsregel: langfristiges Vermögen = langfristig finanziert."
      },
      {
        id: "if_i11",
        typ: "rechenaufgabe",
        frage: `AlpenFresh erhält folgende Lieferantenrechnung:
Rechnungsbetrag: € 15.000
Zahlungsbedingung: 2% Skonto bei Zahlung innerhalb 10 Tagen,
ansonsten 60 Tage netto zahlbar.

a) Wie viel zahlt AlpenFresh bei Skontonutzung (innerhalb 10 Tage)?
b) Berechnen Sie den effektiven Jahreszinssatz des Lieferantenkredits.
   Formel: Skontosatz / (Zahlungsziel – Skontofrist) × 360`,
        loesung: `a) Zahlung mit Skonto:
Rechnungsbetrag:       € 15.000,00
- Skonto (2%):         -   € 300,00
= Zahlbetrag:          € 14.700,00
→ Ersparnis: € 300

b) Effektiver Jahreszinssatz:
= 2% / (60 – 10) Tage × 360
= 2% / 50 × 360
= 14,4 % p.a.

→ Wer den Lieferantenkredit nutzt (also NICHT früh zahlt),
  zahlt effektiv 14,4% Zinsen – sehr teuer!
→ Empfehlung: Skonto immer nutzen, wenn möglich.`,
        erklaerung: "Skonto = Preisnachlass bei früher Zahlung. Der Lieferantenkredit (Zahlung nach 60 Tagen) ist mit 14,4% p.a. sehr teuer. Daher: Skonto nutzen, falls kein günstigerer Kredit vorhanden ist. Formel: Skontosatz / Nettofrist × 360."
      }

    ]
  },

  // ============================================================
  // MODUL 5: FINANZPLANUNG IM BUSINESSPLAN
  // ============================================================
  finanzplanung_businessplan: {

    situation: `AlpenFresh GmbH plant eine neue Produktlinie: "AlpDrink Vital" –
ein Energy-Drink auf Basis von Tiroler Kräutern ohne Zusatzstoffe.
CFO Mag. Michael Daxer erstellt den Finanzplan für den Businessplan,
der Investoren und Banken vorgelegt werden soll.`,

    klassische_aufgaben: [
      {
        id: "bp_k1",
        titel: "Finanzplan erstellen",
        situation: `Für "AlpDrink Vital" liegen folgende Planungsdaten vor:
Investition: Produktionsanlage 180.000 €, Erstausstattung Lager 30.000 €, Werbekosten Jahr 1: 25.000 €
Umsatzplanung: Jahr 1: 85.000 €, Jahr 2: 140.000 €, Jahr 3: 200.000 €
Variable Kosten: 45 % des Umsatzes
Fixkosten: 40.000 € p.a.
Finanzierung: Eigenkapital 100.000 €, Bankdarlehen 135.000 € (5 % p.a., 10 Jahre Laufzeit)`,
        fragen: [
          "a) Berechnen Sie den Kapitalbedarf für die Gründung.",
          "b) Erstellen Sie eine vereinfachte Ergebnisplanung für die ersten 3 Jahre.",
          "c) Wann wird AlpDrink Vital voraussichtlich den Break-even erreichen?"
        ],
        musterloesung: `a) Kapitalbedarf:
Investitionen gesamt: 180.000 + 30.000 + 25.000 = 235.000 €
Finanzierung: EK 100.000 € + Darlehen 135.000 € = 235.000 € ✓ (gedeckt)

b) Ergebnisplanung:
                    Jahr 1      Jahr 2      Jahr 3
Umsatz:            85.000     140.000     200.000
Variable Kosten:  -38.250     -63.000     -90.000  (45%)
Deckungsbeitrag:   46.750      77.000     110.000
Fixkosten:        -40.000     -40.000     -40.000
EBIT:               6.750      37.000      70.000

→ Jahr 1 bereits leicht positiv, Jahr 2 deutlich profitabel.

c) Break-even:
Break-even = Fixkosten / Deckungsbeitrag in % des Umsatzes
= 40.000 / 55 % = 72.727 € Mindestumsatz
→ Bei Umsatz von 72.727 € werden Kosten gedeckt.
→ Im Jahr 1 (Umsatz 85.000 €) wird der Break-even überschritten. ✓`
      }
    ],

    interaktive_aufgaben: [
      {
        id: "bp_i1",
        typ: "multiple_choice",
        frage: "Welche der folgenden Angaben gehört NICHT in einen Businessplan?",
        antworten: [
          "Beschreibung der Zielgruppe",
          "Finanzplan mit Liquiditätsplanung",
          "Steuererklärungen der letzten 5 Jahre",
          "Analyse der Wettbewerbssituation"
        ],
        richtig: 2,
        feedback_richtig: "Richtig! Steuererklärungen vergangener Jahre sind keine Bestandteile eines Businessplans – der BP ist zukunftsorientiert.",
        feedback_falsch: "Nicht ganz. Steuererklärungen gehören nicht in den Businessplan, der auf die Zukunft ausgerichtet ist.",
        erklaerung: "Typische Businessplan-Inhalte: Executive Summary, Unternehmensbeschreibung, Markt- und Wettbewerbsanalyse, Marketingplan, Organigramm, Finanzplan (inkl. Liquiditäts- und Ergebnisplanung)."
      },
      {
        id: "bp_i2",
        typ: "multiple_choice",
        frage: "AlpenFresh GmbH macht hohe Gewinne, kann aber eine fällige Lieferantenrechnung nicht pünktlich zahlen. Welches Problem liegt vor?",
        antworten: [
          "Mangelnde Rentabilität",
          "Mangelnde Liquidität",
          "Mangelnde Eigenkapitalquote",
          "Überhöhte Fixkosten"
        ],
        richtig: 1,
        feedback_richtig: "Richtig! Liquiditätsproblem: Das Unternehmen ist zwar rentabel (macht Gewinn), hat aber zu wenig flüssige Mittel zum Zahlen.",
        feedback_falsch: "Liquidität = Zahlungsfähigkeit (kurzfristig). Rentabilität = Verhältnis Gewinn zu Kapital (langfristig). Man kann rentabel aber trotzdem illiquide sein!",
        erklaerung: "Liquidität ≠ Rentabilität: Liquidität = Fähigkeit, Zahlungsverpflichtungen fristgerecht zu erfüllen. Rentabilität = Gewinn im Verhältnis zum eingesetzten Kapital. Im Finanzplan müssen BEIDE sichergestellt sein."
      },
      {
        id: "bp_i3",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Der Break-even-Point ist der Umsatz, bei dem Erlöse gleich Gesamtkosten sind.", richtig: true },
          { text: "Venture Capital ist eine Form der Fremdfinanzierung.", richtig: false },
          { text: "Beim Going Public gibt ein Unternehmen Aktien an der Börse aus.", richtig: true },
          { text: "Business Angels investieren nur in Großunternehmen.", richtig: false }
        ],
        feedback_richtig: "Perfekt! Sie kennen die Finanzierungskonzepte für Startups und junge Unternehmen.",
        feedback_falsch: "Achtung: Venture Capital = Eigenkapital (Beteiligung ohne feste Rückzahlung). Business Angels = vermögende Privatpersonen, die in junge Unternehmen investieren.",
        erklaerung: "Business Angels und Venture Capital sind Eigenkapitalfinanzierungen (keine Rückzahlungspflicht, aber Beteiligung am Gewinn/Verlust). Going Public (IPO) = Börsengang = Eigenfinanzierung durch breiten Investorenkreis."
      },
      {
        id: "bp_i4",
        typ: "rechenaufgabe",
        frage: `AlpDrink Vital:
Verkaufspreis pro Flasche: 3,20 €
Variable Kosten pro Flasche: 1,40 €
Fixkosten pro Monat: 5.400 €

a) Berechnen Sie den Deckungsbeitrag pro Flasche.
b) Berechnen Sie die Break-even-Menge (Stück/Monat).`,
        loesung: `a) Deckungsbeitrag pro Flasche:
= Verkaufspreis – Variable Kosten
= 3,20 € – 1,40 € = 1,80 € / Flasche

b) Break-even-Menge:
= Fixkosten / Deckungsbeitrag pro Einheit
= 5.400 € / 1,80 € = 3.000 Flaschen/Monat

→ AlpenFresh muss mindestens 3.000 Flaschen pro Monat verkaufen, um die Kosten zu decken.`,
        feedback_richtig: "Hervorragend! Der Break-even ist ein zentrales Instrument der Unternehmensplanung.",
        feedback_falsch: "DB = Preis – variable Kosten. Break-even = Fixkosten / DB pro Stück.",
        erklaerung: "Der Deckungsbeitrag pro Einheit zeigt, wie viel jedes verkaufte Produkt zur Deckung der Fixkosten beiträgt. Beim Break-even sind alle Fixkosten gedeckt – ab hier wird Gewinn gemacht."
      },
      {
        id: "bp_i5",
        typ: "entscheidung",
        frage: `AlpenFresh GmbH sucht Kapital für die Expansion (500.000 €).
Option A: Bankdarlehen zu 4,5 % p.a. auf 8 Jahre → monatliche Raten, volle Rückzahlungspflicht
Option B: Venture Capital Fonds → gibt 500.000 € für 25 % Unternehmensanteile
Option C: Crowdfunding (reward-based) → Vorabverkauf von Produkten

Welche Option erhöht NICHT die Verschuldung des Unternehmens?`,
        antworten: [
          "Nur Option A",
          "Nur Option B",
          "Optionen B und C",
          "Alle drei Optionen"
        ],
        richtig: 2,
        feedback_richtig: "Richtig! Venture Capital und reward-based Crowdfunding erhöhen das Eigenkapital, nicht die Schulden.",
        feedback_falsch: "Nur Option A (Bankdarlehen) ist Fremdkapital mit Rückzahlungspflicht. B und C sind Eigenkapitalformen.",
        erklaerung: "Eigenkapital = keine Rückzahlungspflicht, aber Beteiligung am Unternehmen. Fremdkapital = Rückzahlungspflicht + Zinsen. Reward Crowdfunding: Kunden zahlen im Voraus → keine Schulden, aber Lieferpflicht."
      },

      {
        id: "bp_i6",
        typ: "rechenaufgabe",
        frage: `AlpenFresh "AlpDrink Vital" – Deckungsbeitrag II Berechnung:
Verkaufspreis: € 3,50/Flasche
Variable Kosten: € 1,55/Flasche
Produktfixkosten (nur für dieses Produkt): € 3.500/Monat
Unternehmensgemeinkosten (Anteil): € 5.000/Monat

a) Berechnen Sie den Deckungsbeitrag I (DB I) pro Flasche.
b) Bei 5.000 Fl./Monat: Berechnen Sie DB I gesamt und DB II gesamt.
c) Trägt das Produkt nach Abzug aller Fixkosten zum Gewinn bei?`,
        loesung: `a) Deckungsbeitrag I (DB I) pro Flasche:
DB I = Verkaufspreis – variable Kosten
= € 3,50 – € 1,55 = € 1,95/Flasche

b) Bei 5.000 Flaschen/Monat:
DB I gesamt = 5.000 × € 1,95 = € 9.750

DB II = DB I gesamt – Produktfixkosten
= € 9.750 – € 3.500 = € 6.250

c) Ergebnis nach Gemeinkosten:
Periodenergebnis = DB II – Unternehmensgemeinkosten
= € 6.250 – € 5.000 = + € 1.250 GEWINN ✓

→ Das Produkt trägt € 1.250/Monat zum Unternehmensgewinn bei.`,
        erklaerung: "Mehrstufige Deckungsbeitragsrechnung: DB I = Erlös – variable Kosten. DB II = DB I – Produktfixkosten. DB III = DB II – Bereichsfixkosten. Periodenergebnis = letzter DB – Unternehmensgemeinkosten."
      },
      {
        id: "bp_i7",
        typ: "zuordnung",
        frage: "Ordnen Sie die Finanzierungsquellen für ein Startup dem richtigen Typ zu.",
        paare: [
          { links: "Eigenersparnisse der Gründer/innen", rechts: "Eigenkapital / Selbstfinanzierung" },
          { links: "Bankdarlehen für Gründer (KfW/AWS-Förderkredit)", rechts: "Fremdkapital / Außenfinanzierung" },
          { links: "Investoren kaufen Unternehmensanteile (Venture Capital)", rechts: "Eigenkapital / Beteiligungsfinanzierung" },
          { links: "Viele Privatpersonen steuern kleine Beträge bei (Startnext)", rechts: "Crowdfunding" }
        ],
        feedback_richtig: "Ausgezeichnet! Sie kennen alle Startup-Finanzierungsquellen.",
        feedback_falsch: "VC = externe Eigenkapitalgeber gegen Unternehmensanteile. Crowdfunding = viele kleine Beträge von der Community. Förderkredit = günstiger Bankkredit mit staatlicher Unterstützung.",
        erklaerung: "Startup-Finanzierung: Seed-Phase (Eigenkapital der Gründer), Early Stage (Business Angels, Crowdfunding), Growth Stage (Venture Capital, Bankkredite). In Österreich: aws (Austria Wirtschaftsservice) bietet Gründerförderungen und zinsgünstige Kredite."
      },
      {
        id: "bp_i8",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Der Businessplan dient nur zur Vorlage bei Banken und hat für die interne Steuerung keine Bedeutung.", richtig: false },
          { text: "Die Break-even-Menge zeigt, ab wie vielen verkauften Einheiten ein Unternehmen Gewinn macht.", richtig: true },
          { text: "Ein Finanzplan im Businessplan enthält Umsatz-, Kosten- und Liquiditätsplanung.", richtig: true },
          { text: "Sunk Costs (bereits getätigte Ausgaben) sollten bei Zukunftsentscheidungen berücksichtigt werden.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie kennen die Grundlagen des Businessplans.",
        feedback_falsch: "Businessplan: Wichtig INTERN (Controlling, Strategie) und EXTERN (Banken, Investoren). Sunk Costs = versunkene Kosten, die für Zukunftsentscheidungen irrelevant sind!",
        erklaerung: "Businessplan: Inhalte – Executive Summary, Unternehmensbeschreibung, Marktanalyse, Marketingstrategie, Finanzplanung (3-5 Jahre). Sunk Cost Fallacy: vergangene, nicht rückholbare Kosten dürfen zukünftige Entscheidungen nicht beeinflussen."
      },
      {
        id: "bp_i9",
        typ: "rechenaufgabe",
        frage: `AlpDrink Vital – Erweiterte Break-even-Analyse:
Verkaufspreis: € 3,50/Fl.
Variable Kosten: € 1,55/Fl.
Fixkosten: € 8.500/Monat

a) Berechnen Sie den Break-even (Gewinnschwelle) in Stück.
b) Ab welchem Umsatz (€) wird die Gewinnschwelle erreicht?
c) Im 6. Monat werden 6.000 Fl. verkauft. Wie hoch ist der Gewinn/Verlust?`,
        loesung: `a) Break-even Menge:
Deckungsbeitrag/Stück = € 3,50 – € 1,55 = € 1,95

Break-even = Fixkosten / DB pro Stück
= € 8.500 / € 1,95 = 4.359 Flaschen/Monat (gerundet)

b) Break-even Umsatz:
= 4.359 × € 3,50 = € 15.256,50

c) Gewinn/Verlust bei 6.000 Fl.:
DB gesamt = 6.000 × € 1,95 = € 11.700
- Fixkosten:            - € 8.500
= GEWINN:               + € 3.200/Monat ✓

→ Bei 6.000 Flaschen liegt AlpenFresh 1.641 Einheiten über dem Break-even.`,
        erklaerung: "Break-even-Analyse: BEP (Stück) = Fixkosten / DB pro Stück. BEP (€) = Fixkosten / Deckungsbeitragsquote (DBQ = DB/Preis × 100). Wichtig: Unterhalb des BEP = Verlust, oberhalb = Gewinn. Der BEP ist der kritische Punkt jeder Kalkulation."
      },
      {
        id: "bp_i10",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Der Deckungsbeitrag (DB) ergibt sich aus Verkaufspreis minus variable Kosten.", richtig: true },
          { text: "Fixkosten verändern sich proportional zur produzierten Menge.", richtig: false },
          { text: "Unterhalb der Break-even-Menge erzielt das Unternehmen einen Verlust.", richtig: true },
          { text: "Ein positiver Deckungsbeitrag bedeutet automatisch, dass das Unternehmen Gewinn macht.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie kennen die Grundlagen der Deckungsbeitragsrechnung.",
        feedback_falsch: "Fixkosten = konstant, unabhängig von der Menge (z. B. Miete). DB positiv = gut, aber Gewinn erst wenn DB > Fixkosten gesamt (= Gewinnschwelle).",
        erklaerung: "DB-Rechnung: DB = Preis – variable Kosten. Fixkosten bleiben konstant. Gewinn entsteht erst, wenn der gesamte DB alle Fixkosten gedeckt hat. Break-even-Menge = Fixkosten / DB pro Stück."
      }

    ]
  }
};

// Export für Verwendung in der Hauptapplikation
if (typeof module !== 'undefined') module.exports = { loesungenhak3 };
