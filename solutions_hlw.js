// ============================================================
// BW-BERND – Musterlösungen & Aufgaben HLW
// Datei: solutions_hlw.js
// Schultyp: HLW
// Jahrgang: 3
// Quelle: Praxisblicke BW und Projektmanagement HLW III, Trauner Verlag
// (c) GALS
// ============================================================

const loesungenhlw3 = {

  personalmanagement: {
    situation: `Die **AlpenFresh GmbH** betreibt neben der Lebensmittelproduktion auch ein **AlpenFresh Berghotel & Spa** in Seefeld (Tirol) mit 80 Zimmern, einem Restaurant und einem Wellnessbereich. Das Hotel beschäftigt 65 Mitarbeitende – davon 20 Saisonkräfte. HR-Managerin Mag. Anna Steinlechner ist verantwortlich für Personalplanung, Recruiting und Personalentwicklung.`,

    klassische_aufgaben: [
      {
        id: "hlw_pm_k1",
        titel: "Stellenausschreibung und Personalauswahl",
        situation: `Das AlpenFresh Berghotel sucht eine/n Rezeptionist/in für die Sommersaison (Juni–September). Aufgaben: Empfang internationaler Gäste, Check-in/Check-out, Reservierungen, Beschwerdemanagement. Anforderungen: HLW/Tourismusschule, Englisch B2, Deutsch fließend, Teamfähigkeit. Gehalt: laut KV Hotel- und Gastgewerbe, ca. 1.900 € brutto.`,
        fragen: [
          "a) Erstellen Sie eine strukturierte Stellenanzeige für die Rezeptionsstelle.",
          "b) Welche Angaben sind laut § 9 GlBG bei Stellenanzeigen verpflichtend?",
          "c) Nennen Sie drei geeignete Auswahlverfahren für diese Stelle und begründen Sie Ihre Wahl."
        ],
        musterloesung: `a) Stellenanzeige AlpenFresh Berghotel & Spa, Seefeld:

REZEPTIONIST/IN (m/w/d) – Saisonstelle Sommer (Juni–September)
Gehalt: ab € 1.900 brutto/Monat laut KV Hotel- und Gastgewerbe

Ihre Aufgaben:
• Herzlicher Empfang und Betreuung internationaler Gäste
• Check-in und Check-out, Reservierungsverwaltung
• Professionelles Beschwerdemanagement

Ihr Profil:
• HLW, Tourismusschule oder vergleichbare Ausbildung
• Deutsch fließend, Englisch mind. B2
• Freundliches Auftreten und Teamfähigkeit

Wir bieten: Unterkunft auf Wunsch, Verpflegung, Saisonprämie.
Bewerbungen: jobs@alpenfresh-hotel.at

b) § 9 GlBG: Verpflichtend ist die Angabe des kollektivvertraglichen oder ortsüblichen Mindestentgelts. Diskriminierende Formulierungen (Geschlecht, Alter, Religion ...) sind verboten. Geschlechtsneutrale Formulierung (m/w/d) ist Pflicht.

c) Auswahlverfahren:
• Telefoninterview: Erste Selektion – Prüfung von Sprachkenntnissen, Motivation, Verfügbarkeit; schnell und günstig
• Bewerbungsgespräch: Einschätzung von Auftreten, Kommunikation, Eignung für Gästekontakt
• Probearbeitstag: Test unter realen Bedingungen – besonders sinnvoll für Dienstleistungsberufe`
      },
      {
        id: "hlw_pm_k2",
        titel: "Motivation und Personalentwicklung im Hotel",
        situation: `Küchenchef Markus (38) ist seit Monaten unmotiviert – fühlt sich unterfordert, wünscht mehr Verantwortung. Neue Mitarbeiterin Lena (21, HLW-Absolventin) ist in der ersten Woche überfordert – niemand erklärt ihr die Abläufe.`,
        fragen: [
          "a) Analysieren Sie Markus' Situation mit der Zwei-Faktoren-Theorie nach Herzberg. Welche Maßnahmen empfehlen Sie?",
          "b) Welche Maßnahme fehlt bei Lena? Beschreiben Sie ein strukturiertes Onboarding-Programm für sie.",
          "c) Unterscheiden Sie Jobrotation, Jobenrichment und Jobenlargement anhand je eines Hotelbeispiels."
        ],
        musterloesung: `a) Herzberg-Analyse Markus:
Das Problem liegt bei fehlenden MOTIVATOREN (nicht Hygienefaktoren):
Markus fehlt: Anerkennung, Verantwortung, Aufstiegsmöglichkeiten, herausfordernde Aufgaben.
Seine Grundbedürfnisse (Gehalt, Arbeitsbedingungen = Hygienefaktoren) sind erfüllt.

Maßnahmen (Motivatoren stärken):
• Jobenrichment: Markus entwickelt die neue Speisekarte eigenverantwortlich
• Beförderung/Titelgebung: z. B. "Küchenchef mit Konzeptverantwortung"
• Einbindung in strategische Entscheidungen (Lieferantenauswahl, neue Menükonzepte)
• Weiterbildung: Kurs für alpine Küche oder Ernährungsberatung

b) Fehlende Maßnahme: Strukturiertes ONBOARDING (Into the Job):
Onboarding-Plan für Lena (1 Woche):
Tag 1: Begrüßung HR, Unternehmensrundgang, Übergabe Einarbeitungsmappe
Tag 2–3: Shadowing – Lena beobachtet erfahrene Rezeptionistin
Tag 4: Lena führt Aufgaben mit Unterstützung durch
Tag 5: Feedbackgespräch, Ziele für Monat 1 festlegen
Begleitend: Schulung Hotelsoftware (Near the Job)

c) Unterscheidung:
• Jobenrichment (vertikal): Rezeptionistin Lisa übernimmt Social-Media-Verantwortung → mehr Verantwortung, höheres Niveau
• Jobenlargement (horizontal): Rezeptionist Tom übernimmt zusätzlich Gepäckservice → mehr Aufgaben auf gleichem Niveau
• Jobrotation: Saisonkraft Julia wechselt monatlich zwischen Rezeption, Restaurant, Wellness → Flexibilität und Abwechslung`
      }
    ],

    interaktive_aufgaben: [
      {
        id: "hlw_pm_i1",
        typ: "multiple_choice",
        frage: "Markus ist Küchenchef im AlpenFresh Berghotel. Er verdient gut, seine Arbeitsbedingungen sind angenehm – trotzdem ist er unmotiviert. Was fehlt laut Herzberg?",
        antworten: [
          "Hygienefaktoren – zum Beispiel ein höheres Gehalt",
          "Motivatoren – zum Beispiel Anerkennung, Verantwortung und Entwicklungsmöglichkeiten",
          "Soziale Grundbedürfnisse – er braucht mehr Teamarbeit",
          "Sicherheitsbedürfnisse – er hat Angst vor Jobverlust"
        ],
        richtig: 1,
        feedback_richtig: "Genau! Hygienefaktoren (Gehalt, Umfeld) verhindern Unzufriedenheit – erzeugen aber keine Motivation. Motivatoren (Verantwortung, Anerkennung, Wachstum) müssen aktiv gesetzt werden.",
        feedback_falsch: "Nein. Gehalt und Arbeitsbedingungen sind Hygienefaktoren – die sind bei Markus schon gut. Das Problem sind fehlende Motivatoren.",
        erklaerung: "Herzbergs Zwei-Faktoren-Theorie: Hygienefaktoren (Gehalt, Arbeitsbedingungen, Sicherheit) verhindern nur Unzufriedenheit. Motivatoren (Anerkennung, Verantwortung, Aufstieg, interessante Aufgaben) erzeugen aktiv Zufriedenheit und Motivation."
      },
      {
        id: "hlw_pm_i2",
        typ: "zuordnung",
        frage: "Ordnen Sie die Personalentwicklungsmaßnahmen dem richtigen Konzept zu.",
        paare: [
          { links: "Onboarding-Programm für neue Mitarbeiterin Lena", rechts: "Into the Job" },
          { links: "Küchenchef Markus nimmt an externem Barista-Kurs teil", rechts: "Off the Job" },
          { links: "Rezeptionistin Julia rotiert durch alle Hotelbereiche", rechts: "On the Job" },
          { links: "Hoteldirektorin bereitet Übergabe für Ruhestand vor", rechts: "Out of the Job" }
        ],
        feedback_richtig: "Perfekt! Sie kennen alle Personalentwicklungskonzepte.",
        feedback_falsch: "Into = vor/bei Eintritt, On = am Arbeitsplatz, Off = außerhalb, Out = beim Ausscheiden.",
        erklaerung: "Into the Job: Einarbeitung vor/bei Arbeitsbeginn. On the Job: Lernen am Arbeitsplatz. Off the Job: Externes Seminar oder Kurs. Out of the Job: Vorbereitung auf Ruhestand, Wissenstransfer."
      },
      {
        id: "hlw_pm_i3",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Der Kollektivvertrag legt Mindeststandards für Löhne und Arbeitszeiten in einer Branche fest.", richtig: true },
          { text: "Ein freier Dienstvertrag beinhaltet dieselben Rechte wie ein echter Arbeitsvertrag.", richtig: false },
          { text: "Employer Branding bezeichnet Maßnahmen, um das Unternehmen als attraktiven Arbeitgeber darzustellen.", richtig: true },
          { text: "Die Verschwiegenheitspflicht gilt nur für Führungskräfte, nicht für alle Arbeitnehmer/innen.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie kennen die arbeitsrechtlichen Grundlagen.",
        feedback_falsch: "Achtung: Freier Dienstvertrag = weniger Schutz als echter Arbeitsvertrag. Verschwiegenheitspflicht gilt für ALLE Mitarbeitenden.",
        erklaerung: "Kollektivvertrag: Branchenweite Mindeststandards. Freier Dienstvertrag: Mehr Selbstständigkeit, weniger sozialer Schutz. Verschwiegenheitspflicht: Gilt für alle AN – keine Weitergabe von Betriebsgeheimnissen."
      },
      {
        id: "hlw_pm_i4",
        typ: "multiple_choice",
        frage: "Hoteldirektorin Sandra führt durch Teammeetings, holt Feedback ein und trifft Entscheidungen gemeinsam mit dem Team. Welchen Führungsstil nach Lewin wendet sie an?",
        antworten: ["Autoritär", "Kooperativ", "Laissez-faire", "Bürokratisch"],
        richtig: 1,
        feedback_richtig: "Richtig! Kooperativer Führungsstil: Die Führungskraft bindet das Team ein, hört zu und entscheidet gemeinsam.",
        feedback_falsch: "Autoritär = allein entscheiden, kein Feedback. Laissez-faire = keine Führung. Sandra hört aktiv auf ihr Team.",
        erklaerung: "Führungsstile nach Lewin: Autoritär (Führungskraft entscheidet allein), Kooperativ (Mitarbeitende werden einbezogen), Laissez-faire (Mitarbeitende entscheiden selbst). Für Tourismus empfiehlt sich oft der kooperative Stil."
      },
      {
        id: "hlw_pm_i5",
        typ: "multiple_choice",
        frage: "Das AlpenFresh Berghotel postet auf Instagram Einblicke hinter die Kulissen, zeigt glückliche Mitarbeitende und bewirbt Zusatzleistungen wie kostenlose Skipasss. Welchen Begriff beschreibt das?",
        antworten: [
          "Produktmarketing",
          "Employer Branding",
          "Öffentlichkeitsarbeit (PR)",
          "Personalentwicklung"
        ],
        richtig: 1,
        feedback_richtig: "Richtig! Employer Branding = das Hotel als attraktiven Arbeitgeber positionieren, um gute Mitarbeitende zu gewinnen und zu halten.",
        feedback_falsch: "Employer Branding = Arbeitgebermarke stärken. Ziel: talentierte Bewerber:innen anziehen, bestehende Mitarbeitende binden. Wichtig besonders in der Tourismusbranche mit hoher Fluktuation.",
        erklaerung: "Employer Branding: Maßnahmen, die ein Unternehmen als attraktiven Arbeitgeber positionieren. Instrumente: Social Media, Mitarbeiterbenefits, Unternehmenskultur, Auszeichnungen (z. B. 'Great Place to Work'). Besonders wichtig im Tourismus wegen Saisonalität und Fachkräftemangel."
      },
      {
        id: "hlw_pm_i6",
        typ: "multiple_choice",
        frage: "Rezeptionistin Julia wechselt monatlich zwischen Rezeption, Restaurant und Wellness. Welche Personalentwicklungsmaßnahme ist das?",
        antworten: ["Jobenrichment", "Jobenlargement", "Jobrotation", "Near the Job"],
        richtig: 2,
        feedback_richtig: "Richtig! Jobrotation = systematischer Wechsel zwischen verschiedenen Aufgaben/Abteilungen.",
        feedback_falsch: "Jobenrichment = mehr Verantwortung. Jobenlargement = mehr Aufgaben gleicher Art. Jobrotation = Wechsel zwischen Bereichen.",
        erklaerung: "Jobrotation: Mitarbeitende wechseln planmäßig zwischen Tätigkeiten. Vorteile: Abwechslung, besseres Gesamtverständnis, flexible Einsetzbarkeit bei Krankenständen – besonders im Tourismus wertvoll."
      },
      {
        id: "hlw_pm_i7",
        typ: "rechenaufgabe",
        frage: `Das AlpenFresh Berghotel hat 65 Mitarbeitende. Im letzten Sommer haben 9 Mitarbeitende das Hotel verlassen (davon 6 Saisonkräfte, 3 Stammpersonal).

a) Berechnen Sie die Gesamtfluktuationsrate.
b) Bewerten Sie das Ergebnis für einen Saisonbetrieb im Tourismus.
Formel: Fluktuationsrate = (Anzahl Abgänge / Ø Mitarbeiterstand) × 100`,
        loesung: `a) Fluktuationsrate = (9 / 65) × 100 = 13,8 %

b) Bewertung:
13,8 % ist für einen Tourismusbetrieb mit Saisonkräften normal.
6 von 9 Abgängen sind Saisonkräfte – das ist strukturell bedingt.
Nur Stammpersonal: 3 / 45 = 6,7 % → sehr gut!
Handlungsbedarf besteht vor allem bei der Saisonkräfte-Bindung.`,
        feedback_richtig: "Sehr gut – besonders die Differenzierung Saison-/Stammpersonal!",
        feedback_falsch: "Formel: Abgänge / Mitarbeiterstand × 100. Im Tourismus Saisoncharakter bedenken!",
        erklaerung: "Im Tourismus ist Fluktuation durch Saisonbeschäftigung strukturell höher. Wichtig: Fluktuationsrate des Stammpersonals separat betrachten – die sollte unter 10 % liegen."
      },
      {
        id: "hlw_pm_i8",
        typ: "entscheidung",
        frage: `Für eine freie Stelle im Restaurant überlegt HR-Managerin Anna:
Option A: Interne Ausschreibung (schwarzes Brett + Intranet)
Option B: Inserat auf gastrojobs.at und willhaben.at
Option C: Zusammenarbeit mit dem AMS

Welche Option ist am schnellsten und günstigsten?`,
        antworten: [
          "Option A – Interne Ausschreibung",
          "Option B – Jobportale",
          "Option C – AMS"
        ],
        richtig: 0,
        feedback_richtig: "Richtig! Interne Ausschreibung ist am schnellsten und günstigsten – motiviert zudem bestehende Mitarbeitende durch Aufstiegschancen.",
        feedback_falsch: "AMS kostet Zeit (Vermittlungsprozess). Jobportale kosten Geld und Zeit. Intern ist die schnellste und günstigste Option.",
        erklaerung: "Interne Suche: Günstigst, Mitarbeitende kennen das Unternehmen, kürzere Einarbeitungszeit. Nachteil: Kann Neidgefühle erzeugen, bringt keine neuen Ideen. Externe Suche: Größerer Bewerberkreis, frisches Know-how, aber mehr Kosten und Zeit."
      },

      {
        id: "hlw_pm_i9",
        typ: "rechenaufgabe",
        frage: `AlpenFresh Berghotel – Personalstatistik Sommersaison:
Mitarbeitende Saisonbeginn: 65 Personen
Mitarbeitende Saisonende: 68 Personen
Eintritte (Saisonkräfte): 20 Personen
Austritte (Saisonkräfte + Kündigungen): 17 Personen

Berechnen Sie:
a) Den durchschnittlichen Mitarbeiterbestand.
b) Die Fluktuationsrate nach der BDA-Formel.
   Formel: (Austritte / Ø Mitarbeiterbestand) × 100
c) Bewerten Sie: Im Tourismus gilt 25–35% als normal. Wie ist das Hotel aufgestellt?`,
        loesung: `a) Ø Mitarbeiterbestand:
= (65 + 68) / 2 = 66,5 Personen

b) Fluktuationsrate:
= (17 / 66,5) × 100 = 25,6 %

c) Bewertung:
25,6 % liegt im branchenüblichen Bereich für Hotellerie (25–35%).
→ Das Berghotel liegt am unteren Ende – gut für die Branche!
→ Trotzdem: Maßnahmen zur Mitarbeiterbindung empfehlenswert
   (Employer Branding, Weiterbildung, Saisonkräfte halten).`,
        erklaerung: "Fluktuationsrate im Tourismus ist strukturell höher als in anderen Branchen (Saisonalität, Schichtarbeit, Wochenendarbeit). Hohe Fluktuation = hohe Kosten (Recruiting, Einarbeitung). Gegenmaßnahmen: Stammkräfte mit besseren Verträgen und Karrierechancen binden."
      },
      {
        id: "hlw_pm_i10",
        typ: "zuordnung",
        frage: "Ordnen Sie die Führungskonzepte dem richtigen Beispiel aus dem AlpenFresh Berghotel zu.",
        paare: [
          { links: "Hoteldirektorin übergibt dem Restaurantleiter die volle Verantwortung für das Menükonzept.", rechts: "Management by Delegation" },
          { links: "Die Direktorin greift nur ein, wenn die Gästezufriedenheit unter 4,0/5 fällt.", rechts: "Management by Exception" },
          { links: "Jede Abteilung bekommt klare Jahresziele (z.B. 'Bewertung 4,8/5').", rechts: "Management by Objectives" },
          { links: "Mitarbeitende gestalten ihren Arbeitsbereich aktiv mit.", rechts: "Management by Participation" }
        ],
        feedback_richtig: "Perfekt! Sie kennen alle Management-by-Konzepte.",
        feedback_falsch: "Delegation=Aufgaben übergeben. Exception=nur bei Abweichungen eingreifen. Objectives=Zielvereinbarung. Participation=Einbindung der Mitarbeitenden.",
        erklaerung: "Management-by-Konzepte: MbO (Drucker) = führt durch Ziele. MbD = Aufgaben und Verantwortung delegieren. MbE = Ausnahmprinzip, nur bei Abweichungen eingreifen. MbP = Mitarbeitende aktiv einbeziehen."
      },
      {
        id: "hlw_pm_i11",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Interne Stellenausschreibungen können Kosten für externes Recruiting sparen.", richtig: true },
          { text: "Bei einer Kündigung durch den Arbeitgeber muss in Österreich immer eine Abfertigung bezahlt werden.", richtig: false },
          { text: "Das Assessment Center ist ein mehrstufiges Auswahlverfahren mit verschiedenen Tests und Übungen.", richtig: true },
          { text: "Maslow's Bedürfnispyramide hat 4 Stufen.", richtig: false }
        ],
        feedback_richtig: "Sehr gut!",
        feedback_falsch: "Abfertigung: Seit 2003 gibt es in Österreich die Abfertigung NEU (Mitarbeitervorsorgekasse) – nicht automatisch bei jeder Kündigung. Maslow hat 5 Stufen: physiologisch, Sicherheit, Soziales, Wertschätzung, Selbstverwirklichung.",
        erklaerung: "Maslow's Bedürfnishierarchie (5 Stufen von unten): 1. Physiologische Bedürfnisse, 2. Sicherheitsbedürfnisse, 3. Soziale Bedürfnisse, 4. Wertschätzung, 5. Selbstverwirklichung. Abfertigung NEU (seit 2003): AG zahlt monatlich 1,53% in Mitarbeitervorsorgekasse."
      },
      {
        id: "hlw_pm_i12",
        typ: "zuordnung",
        frage: "Ordnen Sie die Personalentwicklungsmaßnahme dem richtigen Konzept zu.",
        paare: [
          { links: "Neue Rezeptionistin wird 2 Wochen von erfahrener Kollegin begleitet.", rechts: "Mentoring / Into the Job" },
          { links: "Köchin Maria besucht einen externen Hygienekurs.", rechts: "Off the Job" },
          { links: "Haushaltsleitung wechselt für 3 Monate in die Rezeption.", rechts: "Job Rotation" },
          { links: "Eventmanagerin bekommt zusätzlich Verantwortung für Hochzeitsplanung.", rechts: "Job Enrichment" }
        ],
        feedback_richtig: "Ausgezeichnet! Sie kennen alle PE-Konzepte im Hotelkontext.",
        feedback_falsch: "Mentoring = Begleitung durch Erfahrene. Off the Job = extern. Job Rotation = temporärer Stellenwechsel. Job Enrichment = qualitative Erweiterung des Aufgabenbereichs.",
        erklaerung: "Personalentwicklung im Hotel: Wichtig wegen hoher Fluktuation und Saisonalität. Into the Job (Onboarding), On the Job (Coaching, Rotation), Near the Job (interne Workshops), Off the Job (externe Kurse), Out of the Job (für Langzeitbeschäftigte)."
      }

    ]
  },

  unternehmensfuehrung: {
    situation: `Die **AlpenFresh GmbH** führt das **AlpenFresh Berghotel & Spa** als eigenständige Geschäftseinheit. Hoteldirektorin Mag. Sandra Hofer (38) ist verantwortlich für Strategie, Personalführung und Qualitätsmanagement. Das Hotel positioniert sich als nachhaltiges Premium-Wellnesshotel für Gäste aus D-A-CH und zunehmend aus den Niederlanden und Skandinavien.`,

    klassische_aufgaben: [
      {
        id: "hlw_uf_k1",
        titel: "Normatives Management – Vision, Mission, Leitbild",
        situation: `Das AlpenFresh Berghotel möchte sein Leitbild überarbeiten. Bisherige Vision: "Wir wollen ein schönes Hotel sein." Bisherige Mission: "Wir bieten Unterkunft und Verpflegung." Neue Ziele: Nachhaltigkeitszertifizierung (Österreichisches Umweltzeichen), Gästezufriedenheit 4,8/5, Erschließung neuer Märkte.`,
        fragen: [
          "a) Bewerten Sie die bisherige Vision und Mission kritisch. Was fehlt?",
          "b) Formulieren Sie eine neue, ansprechende Vision und Mission für das AlpenFresh Berghotel.",
          "c) Formulieren Sie zwei konkrete, operationalisierte SMART-Ziele für 2025."
        ],
        musterloesung: `a) Kritische Bewertung:
Vision "Wir wollen ein schönes Hotel sein" ist zu allgemein und unambitioniert.
Fehlt: Inspirationskraft, Alleinstellungsmerkmal, Nachhaltigkeitsaspekt, Zukunftsrichtung.
Mission "Wir bieten Unterkunft und Verpflegung" beschreibt nur das Angebot, nicht den
Nutzen für Gäste. Kein Wert, keine Einzigartigkeit erkennbar.

b) Neue Vision und Mission:
Vision: "Wir schaffen alpine Auszeiten, die Körper und Seele in Einklang bringen –
nachhaltig, authentisch und unvergesslich."

Mission: "Das AlpenFresh Berghotel & Spa verbindet Tiroler Gastfreundschaft mit
nachhaltiger Natur- und Wellnesserfahrung. Wir bieten unseren Gästen echte Erholung,
unseren Mitarbeitenden ein erfüllendes Arbeitsumfeld und der Region einen
verantwortungsvollen Tourismuspartner."

c) SMART-Ziele 2025:
Ziel 1: "Die durchschnittliche Bewertung auf booking.com soll bis 31.12.2025
von 4,5 auf mind. 4,8 Sterne gesteigert werden (mind. 200 Bewertungen/Monat).
Verantwortlich: Hoteldirektorin."

Ziel 2: "Das Österreichische Umweltzeichen wird bis 30.06.2025 beantragt.
Dafür werden bis April 2025 alle Energieverbrauchs- und Abfalldaten dokumentiert.
Verantwortlich: Qualitätsmanagerin."`
      },
      {
        id: "hlw_uf_k2",
        titel: "Aufbauorganisation und Führungsstile",
        situation: `Hoteldirektorin Sandra Hofer führt drei Abteilungsleiter (Rezeption, Küche, Wellness). Jeder Abteilungsleiter führt sein Team direkt. Rechtsberater Dr. Fuchs unterstützt Sandra Hofer direkt, hat aber keine Weisungsbefugnis gegenüber Mitarbeitenden.`,
        fragen: [
          "a) Benennen Sie die Organisationsform und erklären Sie die Stellung von Dr. Fuchs.",
          "b) Was ist eine Stabstelle? Nennen Sie einen Vor- und einen Nachteil.",
          "c) Küche bei Stromausfall vs. Team entwickelt neues Check-in-Konzept: Welchen Führungsstil empfehlen Sie jeweils?"
        ],
        musterloesung: `a) Organisationsform: STABLINIENORGANISATION
(Linienorganisation mit beratenden Stabstellen)
Dr. Fuchs ist eine Stabstelle = berät nur die Direktorin, hat keine Weisungsbefugnis.
Organigramm: Hoteldirektorin → [Stab: Dr. Fuchs] und Linie: Rezeption / Küche / Wellness

b) Stabstelle:
Definition: Beratende Einheit ohne Weisungsbefugnis, direkt der Leitungsebene unterstellt.
Vorteil: Expertenwissen verfügbar, entlastet Führungskraft, Befehlsweg bleibt klar
Nachteil: Zusätzliche Kosten, Rat kann ignoriert werden, mögliche Spannungen

c) Führungsstile situativ:
Stromausfall Küche: AUTORITÄR → schnelle, klare Anweisungen ohne Diskussion.
In Krisensituationen keine Zeit für Teamabstimmung.

Neues Check-in-Konzept: KOOPERATIV → Team kennt Gäste am besten und hat Ideen.
Kreative Prozesse profitieren von Einbindung aller Mitarbeitenden.`
      }
    ],

    interaktive_aufgaben: [
      {
        id: "hlw_uf_i1",
        typ: "multiple_choice",
        frage: "Was ist der Unterschied zwischen Vision und Mission eines Unternehmens?",
        antworten: [
          "Vision beschreibt den Jahresumsatzplan; Mission das langfristige Ziel.",
          "Vision ist das langfristige Zukunftsbild; Mission beschreibt den Unternehmenszweck und den Nutzen für Stakeholder.",
          "Vision und Mission sind dasselbe – beide beschreiben die Strategie.",
          "Vision richtet sich an externe Kunden; Mission nur an Mitarbeitende."
        ],
        richtig: 1,
        feedback_richtig: "Richtig! Vision = inspirierendes Zukunftsbild. Mission = Unternehmenszweck und gesellschaftlicher Nutzen.",
        feedback_falsch: "Nicht korrekt. Vision und Mission sind unterschiedliche Konzepte des normativen Managements.",
        erklaerung: "Vision: langfristiger Wunschzustand (Wohin wollen wir?). Mission: Unternehmenszweck, Zielgruppen, Nutzen (Warum existieren wir?). Leitbild: Schriftliche Zusammenfassung für interne und externe Stakeholder."
      },
      {
        id: "hlw_uf_i2",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Ein operationalisiertes Ziel enthält Zielinhalt, Ausmaß, Zeitrahmen und Verantwortliche.", richtig: true },
          { text: "Strategische Ziele sind kurzfristig (bis 1 Jahr) ausgerichtet.", richtig: false },
          { text: "CSR bedeutet, dass Unternehmen gesellschaftliche Verantwortung übernehmen.", richtig: true },
          { text: "Zielharmonie bedeutet, dass zwei Ziele sich gegenseitig ausschließen.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie beherrschen die Grundbegriffe des normativen Managements.",
        feedback_falsch: "Strategische Ziele sind LANGFRISTIG (3–10 Jahre). Zielharmonie = Ziele unterstützen sich. Zielkonflikt = Ziele widersprechen sich.",
        erklaerung: "SMART-Ziele: Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert. Zielbeziehungen: Zielharmonie, Zielkonflikt, Zielunabhängigkeit."
      },
      {
        id: "hlw_uf_i3",
        typ: "zuordnung",
        frage: "Ordnen Sie die Managementaufgaben der richtigen Ebene zu.",
        paare: [
          { links: "Vision und Leitbild für das Hotel entwickeln", rechts: "Normatives Management" },
          { links: "SWOT-Analyse für Expansionspläne erstellen", rechts: "Strategisches Management" },
          { links: "Wochendienstplan für die Rezeption erstellen", rechts: "Operatives Management" },
          { links: "Jahresbudget des Hotels kontrollieren", rechts: "Operatives Management" }
        ],
        feedback_richtig: "Perfekt! Sie verstehen die drei Managementebenen.",
        feedback_falsch: "Normativ = Werte/Sinn. Strategisch = Wettbewerb/Positionierung. Operativ = Tagesgeschäft.",
        erklaerung: "Normatives Management: Unternehmensidentität, Werte. Strategisches Management: Marktpositionierung (3–10 Jahre). Operatives Management: Tagesplanung und -kontrolle."
      },
      {
        id: "hlw_uf_i4",
        typ: "multiple_choice",
        frage: "Im AlpenFresh Berghotel hat jede Abteilung genau eine vorgesetzte Person. Klare Befehlskette von oben nach unten. Wie heißt dieses Organisationsprinzip?",
        antworten: ["Mehrliniensystem", "Matrixorganisation", "Einliniensystem", "Stablinienorganisation"],
        richtig: 2,
        feedback_richtig: "Richtig! Im Einliniensystem hat jede Stelle genau eine vorgesetzte Stelle.",
        feedback_falsch: "Mehrliniensystem = mehrere Vorgesetzte. Matrix = Doppelunterstellung. Stablinie = Linie + beratende Stabstellen.",
        erklaerung: "Einliniensystem: Einfach, klar, eindeutige Verantwortung – aber langsam bei Entscheidungen. Stablinienorganisation: Linienstruktur + Experten-Stabstellen ohne Weisungsbefugnis."
      },
      {
        id: "hlw_uf_i5",
        typ: "entscheidung",
        frage: `Das AlpenFresh Berghotel analysiert sein Makroumfeld mit PESTEL:
– Steigende Wellnessnachfrage (sozial)
– EU-Förderung für Nachhaltigkeit (wirtschaftlich/politisch)
– Online-Buchungssysteme und KI-Concierge (technologisch)
– Klimawandel, weniger Schnee (ökologisch)

Welche PESTEL-Kategorie fehlt noch?`,
        antworten: ["Politisch", "Wirtschaftlich", "Rechtlich (Legal)", "Technologisch"],
        richtig: 2,
        feedback_richtig: "Richtig! Die rechtliche Komponente fehlt – z. B. Arbeitsrecht, Datenschutz (DSGVO), Tourismusgesetze.",
        feedback_falsch: "Politisch und wirtschaftlich wurden schon erwähnt. Technologisch auch. Was fehlt ist der rechtliche Bereich.",
        erklaerung: "PESTEL: Politisch, Economic, Social, Technological, Environmental, Legal. Alle sechs Kategorien sind für eine vollständige Makroumfeldanalyse notwendig."
      },
      {
        id: "hlw_uf_i6",
        typ: "multiple_choice",
        frage: "Die AlpenFresh GmbH gibt Hotelmitarbeitenden klare Jahresziele vor und kontrolliert diese vierteljährlich. Welches 'Management by...' Konzept ist das?",
        antworten: ["Management by Exception", "Management by Delegation", "Management by Objectives", "Management by Motivation"],
        richtig: 2,
        feedback_richtig: "Genau! Management by Objectives (MbO) = Führung durch Zielvereinbarungen.",
        feedback_falsch: "MbO = Zielvereinbarung + Kontrolle. Delegation = Aufgaben übertragen. Exception = nur bei Abweichungen eingreifen.",
        erklaerung: "Management by Objectives (Peter Drucker): Ziele werden vereinbart, regelmäßig kontrolliert. Vorteil: Klare Erwartungen, Eigenverantwortung. Nachteil: Aufwändig, Ziele müssen SMART formuliert werden."
      },

      {
        id: "hlw_uf_i7",
        typ: "multiple_choice",
        frage: "Das AlpenFresh Berghotel hat zwei Ziele: Ziel A: 'Preise um 20% erhöhen', Ziel B: 'Auslastung von 85% erreichen'. Wie lautet die Zielbeziehung?",
        antworten: [
          "Zielharmonie – beide Ziele verstärken sich gegenseitig",
          "Zielindifferenz – die Ziele haben keinen Einfluss aufeinander",
          "Zielkonflikt – höhere Preise können die Auslastung senken",
          "Zielidentität – es handelt sich um dasselbe Ziel"
        ],
        richtig: 2,
        feedback_richtig: "Richtig! Zielkonflikt: Höhere Preise können dazu führen, dass weniger Gäste buchen – die Auslastung sinkt.",
        feedback_falsch: "Zielkonflikt: Ziele widersprechen sich (hier: Preis ↑ vs. Auslastung ↑). Zielharmonie: Ziele unterstützen sich. Zielindifferenz: Ziele haben keinen Einfluss aufeinander.",
        erklaerung: "Zielbeziehungen im Unternehmen: Zielharmonie (z. B. Qualität ↑ → Kundenzufriedenheit ↑), Zielkonflikt (z. B. Kosten senken ↓ vs. Qualität ↑), Zielindifferenz (z. B. Mitarbeiterzufriedenheit ↑ hat keinen direkten Einfluss auf Zimmerpreis), Zielidentität (gleiche Ziele, andere Formulierung)."
      },
      {
        id: "hlw_uf_i8",
        typ: "zuordnung",
        frage: "Ordnen Sie den Führungsstil dem richtigen Beispiel aus dem AlpenFresh Berghotel zu.",
        paare: [
          { links: "Direktorin entscheidet alle Dienstpläne allein, ohne Rücksprache mit dem Team.", rechts: "Autoritärer Führungsstil" },
          { links: "Abteilungsleiter entscheidet gemeinsam mit dem Team durch Mehrheitsbeschluss.", rechts: "Demokratischer Führungsstil" },
          { links: "Küchenchef lässt das Team völlig frei entscheiden, was auf die Karte kommt.", rechts: "Laissez-faire Führungsstil" },
          { links: "Je nach Erfahrung der Mitarbeitenden wechselt die Direktorin ihren Führungsstil.", rechts: "Situativer Führungsstil" }
        ],
        feedback_richtig: "Ausgezeichnet! Sie kennen alle vier Führungsstile nach Lewin.",
        feedback_falsch: "Autoritär = Chef entscheidet allein. Demokratisch = gemeinsam entscheiden. Laissez-faire = keine Führung. Situativ = Stil je nach Situation/Person anpassen.",
        erklaerung: "Führungsstile nach Lewin: Autoritär (schnelle Entscheidungen, aber geringe Motivation), Demokratisch (hohe Zufriedenheit, aber langsamer), Laissez-faire (maximale Freiheit, aber unstrukturiert). Situativer Führungsstil (Hersey/Blanchard): Stil an Reifegrad des Mitarbeitenden anpassen."
      },
      {
        id: "hlw_uf_i9",
        typ: "wahr_falsch",
        aussagen: [
          { text: "CSR (Corporate Social Responsibility) bedeutet, dass Unternehmen freiwillig gesellschaftliche Verantwortung übernehmen.", richtig: true },
          { text: "Ein Unternehmensleitbild richtet sich ausschließlich an externe Stakeholder (z. B. Kunden).", richtig: false },
          { text: "Stakeholder sind alle Personen und Gruppen, die ein Interesse am Unternehmen haben.", richtig: true },
          { text: "Shareholder-Value bedeutet, dass das Unternehmen hauptsächlich im Interesse aller Stakeholder handelt.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie kennen die Grundbegriffe der normativen Unternehmensführung.",
        feedback_falsch: "Leitbild richtet sich SOWOHL intern (Mitarbeitende) als auch extern (Kunden, Öffentlichkeit). Shareholder-Value = nur Aktionärsinteressen. Stakeholder-Value = alle Anspruchsgruppen.",
        erklaerung: "Stakeholder vs. Shareholder: Stakeholder = alle Anspruchsgruppen (Mitarbeitende, Kunden, Lieferanten, Gesellschaft). Shareholder = nur Aktionäre/Eigentümer. CSR: Unternehmen engagieren sich freiwillig für gesellschaftliche und ökologische Ziele."
      }

    ]
  },

  tourismus_freizeit: {
    situation: `Das **AlpenFresh Berghotel & Spa** in Seefeld positioniert sich als nachhaltiges Wellnesshotel. Die Region Seefeld gehört zu Tirols Top-Destinationen mit starker Winter- und wachsender Sommersaison. Hoteldirektorin Sandra Hofer arbeitet an Innovationsstrategien für Nachhaltigkeit, Digitalisierung und neue Zielgruppen.`,

    klassische_aufgaben: [
      {
        id: "hlw_to_k1",
        titel: "Tourismusformen und Nachhaltigkeit",
        situation: `Gästestruktur: 60 % Skifahren (Winter), 25 % Wandern/Wellness (Sommer), 10 % Tagungen, 5 % Kulturreisen. Tirol: 55 Mio. Nächtigungen/Jahr – bundesweiter Spitzenwert. Das Hotel möchte nachhaltiger werden.`,
        fragen: [
          "a) Ordnen Sie die vier Gästesegmente den passenden Tourismusarten zu.",
          "b) Erklären Sie 'nachhaltigen Tourismus' und nennen Sie drei konkrete Maßnahmen für das AlpenFresh Berghotel.",
          "c) Warum hat Tirol die höchsten Nächtigungszahlen Österreichs? Nennen Sie mindestens drei Gründe."
        ],
        musterloesung: `a) Tourismusarten:
• 60 % Skifahren → Sporttourismus (Wintersport)
• 25 % Wandern/Wellness → Erholungstourismus / Gesundheitstourismus
• 10 % Tagungen → Geschäftstourismus / Kongresstourismus (MICE)
• 5 % Kulturreisen → Kulturtourismus

b) Nachhaltiger Tourismus:
Definition: Tourismus, der heutige Bedürfnisse erfüllt, ohne zukünftige Generationen zu belasten.
Drei Dimensionen: ökologisch, sozial, ökonomisch.

Maßnahmen AlpenFresh Berghotel:
• Ökologisch: Umstellung auf Ökostrom, Plastik reduzieren, E-Bike-Verleih, Österreichisches Umweltzeichen beantragen
• Sozial: Einkauf bei regionalen Lieferanten, faire Entlohnung nach KV, lokale Ausflüge für Gäste
• Ökonomisch: Paketangebote für Nebensaison, Direktbuchungen fördern (Provisionen sparen)

c) Gründe für Tirols Spitzenposition:
• Größte und bekannteste Skigebiete Österreichs (Ischgl, Kitzbühel, St. Anton) mit internationaler Bekanntheit
• Starke Sommersaison: Wandern, Klettern, Mountainbiken in den Alpen
• Kulturtourismus: Innsbruck als Kulturstadt, Festspiele, historische Altstadt
• Lange Tradition und hohe Qualität der Tourismusinfrastruktur`
      },
      {
        id: "hlw_to_k2",
        titel: "Innovationsmanagement im Tourismus",
        situation: `Hotel Schani (Wien) hat KI-gestützten Online-Check-in, Coworking-Spaces und Nachhaltigkeitsmaßnahmen eingeführt. Sandra Hofer analysiert diese Innovationen für das AlpenFresh Berghotel.`,
        fragen: [
          "a) Unterscheiden Sie Produkt-, Prozess- und Marketinginnovationen mit je einem Hotelbeispiel.",
          "b) Nennen Sie drei konkrete digitale Innovationen, die das AlpenFresh Berghotel einführen könnte.",
          "c) Welche Herausforderungen hat ein kleines Hotel beim Innovationsmanagement im Vergleich zu einer Hotelkette?"
        ],
        musterloesung: `a) Innovationsarten:
• Produktinnovation: Neues "Alpine Digital Detox Package" – Woche ohne Smartphone in der Natur, mit Meditationsguide und Kräuterwanderungen
• Prozessinnovation: Digitaler Check-in per App → Zimmerschlüssel aufs Smartphone, kein Warten an der Rezeption
• Marketinginnovation: Instagram-Kooperation mit Skandinavien-Reisebloggern für neue Zielgruppenerreichung

b) Digitale Innovationen:
• Online-Check-in/-out: Gäste sparen Zeit, Hotel spart Rezeptionspersonalstunden bei Spitzenzeiten
• KI-Chatbot als digitaler Concierge: 24/7-Beantwortung von Gästefragen zu Ausflügen, Restaurants, Öffnungszeiten
• Channel Manager: Synchronisiert Preise und Verfügbarkeit auf allen Buchungsplattformen gleichzeitig

c) Herausforderungen kleiner Betriebe:
• Begrenzte Finanzmittel: Investitionen in neue Technologien zu teuer
• Fehlendes Fachwissen: Kein eigener IT-Spezialist
• Weniger Skaleneffekte: Gleiche Kosten wie Hotelkette, aber weniger Zimmer zur Refinanzierung
• Widerstand bei Mitarbeitenden: Kleine Teams, enge Strukturen, Veränderungen als Bedrohung`
      }
    ],

    interaktive_aufgaben: [
      {
        id: "hlw_to_i1",
        typ: "multiple_choice",
        frage: "Ein Wiener Paar verbringt 5 Tage im AlpenFresh Berghotel Seefeld zum Wandern und Wellness genießen. Welche Tourismusart liegt hauptsächlich vor?",
        antworten: ["Geschäftstourismus", "Kulturtourismus", "Erholungs- und Gesundheitstourismus", "Wintertourismus"],
        richtig: 2,
        feedback_richtig: "Richtig! Wandern und Wellness dienen der Erholung → Erholungs- und Gesundheitstourismus.",
        feedback_falsch: "Geschäftstourismus = beruflicher Zweck. Kulturtourismus = Kunst, Museen. Das Paar sucht Erholung und Wellness.",
        erklaerung: "Tourismusarten nach Reisemotiv: Erholungs-, Sport-, Kultur-, Gesundheits-, Geschäftstourismus. Wellness und Naturerleben = Erholungs-/Gesundheitstourismus."
      },
      {
        id: "hlw_to_i2",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Nachhaltiger Tourismus berücksichtigt ökologische, soziale und wirtschaftliche Aspekte.", richtig: true },
          { text: "Massentourismus ist grundsätzlich positiv, da er hohe Einnahmen bringt.", richtig: false },
          { text: "Tirol und Salzburg zählen zu den nächtigungsstärksten Bundesländern Österreichs.", richtig: true },
          { text: "Saisonalität bedeutet, dass das Hotel das ganze Jahr gleich ausgelastet ist.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie kennen die Grundlagen des Tourismuswesens.",
        feedback_falsch: "Massentourismus hat negative Folgen (Overtourism, Umweltschäden). Saisonalität = ungleichmäßige Auslastung.",
        erklaerung: "Nachhaltiger Tourismus = Triple Bottom Line: ökologisch, sozial, ökonomisch. Massentourismus kann zu Overtourism führen (Mallorca-Effekt). Saisonalität: Tourismusbetriebe haben Hoch- und Nebensaison."
      },
      {
        id: "hlw_to_i3",
        typ: "zuordnung",
        frage: "Ordnen Sie die Innovationen der richtigen Innovationsart zu.",
        paare: [
          { links: "Online Check-in per Smartphone-App", rechts: "Prozessinnovation" },
          { links: "Neues 'Digital Detox' Wellness-Package", rechts: "Produktinnovation" },
          { links: "Instagram-Kooperation mit Travel-Bloggern", rechts: "Marketinginnovation" },
          { links: "KI-Chatbot für 24h-Gästeservice", rechts: "Prozessinnovation" }
        ],
        feedback_richtig: "Perfekt! Sie verstehen die Innovationsarten im Tourismus.",
        feedback_falsch: "Produkt = neues Angebot. Prozess = verbesserte Abläufe. Marketing = neue Vermarktung.",
        erklaerung: "Produktinnovation: Neues Angebot für Kunden. Prozessinnovation: Verbesserte interne Abläufe. Marketinginnovation: Neue Vermarktungsstrategie oder -kanäle."
      },
      {
        id: "hlw_to_i4",
        typ: "multiple_choice",
        frage: "Das AlpenFresh Berghotel will mit dem 'Digital Detox Package' gestresste Stadtmenschen ansprechen – völlig neues Produkt, völlig neue Zielgruppe. Welche Wachstumsstrategie nach Ansoff ist das?",
        antworten: ["Marktdurchdringung", "Marktentwicklung", "Produktentwicklung", "Diversifikation"],
        richtig: 3,
        feedback_richtig: "Richtig! Neues Produkt + neue Zielgruppe = Diversifikation – die riskanteste, aber chancenreichste Strategie.",
        feedback_falsch: "Neues Produkt + neue Zielgruppe = beide Dimensionen neu → Diversifikation.",
        erklaerung: "Ansoff-Matrix: Marktdurchdringung (altes/altes), Marktentwicklung (altes Produkt/neuer Markt), Produktentwicklung (neues Produkt/alter Markt), Diversifikation (neues/neues). Diversifikation = höchstes Risiko, größte Wachstumschancen."
      },
      {
        id: "hlw_to_i5",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Overtourism bezeichnet die negativen Auswirkungen von zu vielen Touristen auf eine Destination.", richtig: true },
          { text: "Nachhaltiger Tourismus berücksichtigt ökologische, ökonomische und soziale Aspekte.", richtig: true },
          { text: "Das Österreichische Umweltzeichen wird automatisch an alle Hotels vergeben.", richtig: false },
          { text: "Ökotourismus zielt auf naturverträgliches Reisen mit minimalem ökologischen Fußabdruck ab.", richtig: true }
        ],
        feedback_richtig: "Sehr gut! Sie kennen die Grundbegriffe nachhaltigen Tourismus.",
        feedback_falsch: "Das Österreichische Umweltzeichen muss aktiv beantragt und durch Kontrollen nachgewiesen werden – kein Automatismus!",
        erklaerung: "Nachhaltiger Tourismus: 3 Dimensionen – Ökologisch (Natur schützen), Ökonomisch (regionale Wertschöpfung), Sozial (lokale Bevölkerung einbeziehen). Overtourism (z. B. Venedig, Hallstatt): zu viele Gäste schaden Natur und Lebensqualität. Österreichisches Umweltzeichen: staatliches Zertifikat für umweltfreundliche Betriebe."
      },
      {
        id: "hlw_to_i6",
        typ: "rechenaufgabe",
        frage: `Das AlpenFresh Berghotel hat 80 Zimmer.
Im Juli (31 Tage) waren insgesamt 1.860 Zimmernächte belegt.

a) Berechnen Sie die Auslastungsquote (Belegungsrate) für Juli.
b) Bewerten Sie diesen Wert für ein Tiroler Sommerhotel.

Formel: Auslastungsquote = (belegte Zimmernächte / mögliche Zimmernächte) × 100`,
        loesung: `a) Mögliche Zimmernächte = 80 Zimmer × 31 Tage = 2.480

Auslastungsquote = (1.860 / 2.480) × 100 = 75 %

b) Bewertung:
75 % Auslastung im Juli ist für ein Tiroler Hotel ein guter, aber nicht optimaler Wert.
Spitzenwerte liegen bei 85–95 % in der Hochsaison.
Optimierungspotenzial: Wochentagsangebote (Di–Do), Verlängerungspakete`,
        feedback_richtig: "Sehr gut – mit praxisnaher Interpretation!",
        feedback_falsch: "Mögliche Nächte = Zimmer × Tage. Dann: belegte / mögliche × 100.",
        erklaerung: "Auslastungsquote (Occupancy Rate): Die wichtigste Kennzahl im Hotelmanagement. Kombiniert mit dem Durchschnittspreis (ADR) ergibt sich RevPAR (Revenue per Available Room)."
      },
      {
        id: "hlw_to_i7",
        typ: "entscheidung",
        frage: `Das AlpenFresh Berghotel überlegt neue Winterangebote:
Option A: Schneeschuhwanderungen mit Kräuterprogramm (für Stammgäste)
Option B: Skikurs-Pakete in Kooperation mit der Skischule Seefeld (für Skifahrer)
Option C: Business-Kongress-Pakete (neuer Tagungsraum für 40 Personen)

Nach Ansoff: Welche Option entspricht einer MARKTDURCHDRINGUNG?`,
        antworten: [
          "Option A – bekanntes Produkt für bestehende Stammgäste",
          "Option B – Kooperation, neue Zielgruppe Skifahrer",
          "Option C – völlig neues Segment, neuer Tagungsbereich"
        ],
        richtig: 0,
        feedback_richtig: "Richtig! Option A: Gleiches Produkt (Naturerlebnis), gleiche Zielgruppe (Stammgäste) → Marktdurchdringung.",
        feedback_falsch: "Option B = Marktentwicklung (neue Zielgruppe). Option C = Diversifikation (neues Produkt + neue Zielgruppe).",
        erklaerung: "Marktdurchdringung: Bestehendes Produkt besser an bestehende Kunden vermarkten – niedrigstes Risiko. Strategisch sinnvoll als erster Schritt, bevor riskantere Wachstumsstrategien verfolgt werden."
      },
      {
        id: "hlw_to_i8",
        typ: "multiple_choice",
        frage: "Ein Gast beschwert sich lautstark an der Rezeption über sein Zimmer. Welchen Führungsstil sollte die Rezeptionistin situativ anwenden?",
        antworten: [
          "Laissez-faire – den Gast selbst eine Lösung finden lassen",
          "Autoritär – klar und ruhig die Situation leiten und rasch entscheiden",
          "Kooperativ – das gesamte Team zur Lösung einberufen",
          "Delegativ – sofort an die Hoteldirektorin weiterleiten"
        ],
        richtig: 1,
        feedback_richtig: "Richtig! In einer akuten Konfliktsituation braucht es klare, ruhige und entschiedene Kommunikation.",
        feedback_falsch: "Ein wütender Gast braucht sofortige, klare Antworten – kein Komitee und keine Weitergabe.",
        erklaerung: "Situative Führung: Bei Krisen oder Konflikten → autoritäre Elemente (klare Anweisung, schnelle Entscheidung). Bei kreativen Projekten → kooperativ. Beschwerdemanagement ist im Tourismus eine Schlüsselkompetenz."
      },

      {
        id: "hlw_to_i9",
        typ: "rechenaufgabe",
        frage: `AlpenFresh Berghotel – Preiskalkulation für Wellness-Package:
Variable Kosten pro Gast: € 45 (Verpflegung + Wellnessbehandlungen)
Fixkosten pro Zimmer/Nacht: € 65
Gewünschter Gewinnaufschlag: 25% auf die Gesamtkosten

a) Berechnen Sie den Mindestreis (Selbstkostenpreis) pro Zimmer/Nacht.
b) Berechnen Sie den Verkaufspreis inkl. 25% Gewinnaufschlag.
c) Bei Konkurrenzpreis von € 155: Kann AlpenFresh konkurrieren?`,
        loesung: `a) Selbstkosten pro Zimmer/Nacht:
Variable Kosten:  € 45,00
+ Fixkosten:      € 65,00
= Selbstkosten:   € 110,00

b) Verkaufspreis (25% Aufschlag):
= € 110,00 × 1,25 = € 137,50

c) Vergleich mit Konkurrenz:
AlpenFresh-Preis: € 137,50
Konkurrenzpreis:  € 155,00
→ AlpenFresh ist € 17,50 günstiger UND rentabel.
→ Oder: Preis auf € 149 erhöhen (noch unter Konkurrenz, mehr Gewinn).`,
        erklaerung: "Preiskalkulation im Tourismus: Selbstkostenpreis = variable + fixe Kosten. Verkaufspreis = Selbstkosten × (1 + Aufschlag%). Preisvergleich mit Konkurrenz ist wichtig: Preisuntergrenze = variable Kosten (kurzfristig) oder Selbstkosten (langfristig)."
      },
      {
        id: "hlw_to_i10",
        typ: "zuordnung",
        frage: "Ordnen Sie die Tourismusarten der richtigen Beschreibung zu.",
        paare: [
          { links: "Familie aus Wien verbringt 2 Wochen Strandurlaub auf Mallorca", rechts: "Erholungs-/Bade-/Freizeittourismus" },
          { links: "Businessperson aus München nimmt an Kongress in Innsbruck teil", rechts: "Geschäfts-/Kongresstourismus (MICE)" },
          { links: "Seniorenpaar besichtigt Museen in Wien und Salzburg", rechts: "Kulturtourismus" },
          { links: "Gruppe junger Menschen wandert 5 Tage durch den Ötztal", rechts: "Abenteuer-/Aktivtourismus" }
        ],
        feedback_richtig: "Ausgezeichnet! Sie kennen alle relevanten Tourismusarten.",
        feedback_falsch: "MICE = Meetings, Incentives, Conferences, Exhibitions. Kulturtourismus = Kunst, Geschichte, Städte. Aktivtourismus = Sport, Abenteuer, Natur.",
        erklaerung: "Tourismusarten nach Motiv: Erholungstourismus (Strand, Wellness), Sporttourismus (Ski, Wandern), Kulturtourismus (Städte, Museen), Geschäftstourismus (Kongresse, Messen), Gesundheitstourismus (Kuren), Ökotourismus (Natur), Pilgertourismus."
      },
      {
        id: "hlw_to_i11",
        typ: "wahr_falsch",
        aussagen: [
          { text: "Der Tourismussatellitkonto (TSA) misst den wirtschaftlichen Beitrag des Tourismus zu einer Volkswirtschaft.", richtig: true },
          { text: "Der Incoming-Tourismus bezeichnet Reisen von Österreichern ins Ausland.", richtig: false },
          { text: "Digitale Plattformen wie Booking.com und Airbnb haben den Übernachtungsmarkt fundamental verändert.", richtig: true },
          { text: "Nachhaltiger Tourismus und wirtschaftliches Wachstum schließen sich grundsätzlich aus.", richtig: false }
        ],
        feedback_richtig: "Sehr gut! Sie kennen aktuelle Tourismustrends.",
        feedback_falsch: "Incoming = Gäste, die NACH Österreich kommen. Outgoing = Österreicher ins Ausland. Nachhaltigkeit UND Wachstum sind vereinbar ('qualitatives Wachstum').",
        erklaerung: "Incoming (Einreisetourismus): Ausländer besuchen Österreich → Deviseneinnahmen. Outgoing (Ausreisetourismus): Österreicher reisen ins Ausland → Devisenausgaben. Nachhaltiger Tourismus kann profitabel sein: Gäste zahlen mehr für authentische, umweltfreundliche Angebote."
      },
      {
        id: "hlw_to_i12",
        typ: "multiple_choice",
        frage: "Das AlpenFresh Berghotel möchte das Österreichische Umweltzeichen beantragen. Was ist KEINE Voraussetzung dafür?",
        antworten: [
          "Nachweis von Energiesparmaßnahmen",
          "Verwendung umweltfreundlicher Reinigungsmittel",
          "Mindestens 5-Sterne-Klassifizierung des Hotels",
          "Förderung regionaler Produkte und Lieferanten"
        ],
        richtig: 2,
        feedback_richtig: "Richtig! Die Sterne-Klassifizierung ist für das Österreichische Umweltzeichen NICHT relevant – es geht um Umweltleistung, nicht um Luxus.",
        feedback_falsch: "Das Österreichische Umweltzeichen bewertet Umweltleistung: Energie, Wasser, Abfall, Chemikalien, regionale Beschaffung. Die Sterne-Kategorie ist dabei irrelevant.",
        erklaerung: "Österreichisches Umweltzeichen für Tourismus: Staatliches Gütesiegel für umweltfreundliche Beherbergungsbetriebe. Kriterien: Energieeffizienz, Wasserverbrauch, Abfallreduzierung, Reinigungsmittel, Regionalität. Vorteile für Hotels: Marketingvorteil, Kostenersparnis, Gästevertrauen."
      }

    ]
  }

};

if (typeof module !== "undefined") module.exports = { loesungenhlw3 };
