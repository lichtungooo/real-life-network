const mapping = [
  {
    id: '01',
    problemTitle: 'Machtzentren',
    problemText: 'Entscheidungen mit globaler Wirkung liegen in sehr wenigen Händen — unsichtbar, aber wirksam.',
    solutionTitle: 'Dezentrales Vertrauen',
    solutionText: 'Vertrauen entsteht direkt zwischen Menschen — ohne zentrale Autorität, die darüber wacht.',
    tools: [{ name: 'Web of Trust', color: '#22c55e', url: 'https://web-of-trust.de' }],
  },
  {
    id: '02',
    problemTitle: 'Wachstumszwang',
    problemText: 'Permanenter Leistungsdruck, Konsumsteigerung, Konkurrenzdenken — Stillstand wird zur Gefahr.',
    solutionTitle: 'Wertbasierte Ökonomie',
    solutionText: 'Zeit, Hilfe, Wissen, Präsenz als Wert. Beitrag wird sichtbar und anerkannt — nicht nur Geld.',
    tools: [{ name: 'Money Printer', color: '#f59e0b', url: 'https://money-printer.app' }],
  },
  {
    id: '03',
    problemTitle: 'Ökonomisierung',
    problemText: 'Was früher Gemeinschaft war, wird Markt. Gesundheit, Bildung, Beziehungen — alles verwertbar.',
    solutionTitle: 'Gemeinschaft als Infrastruktur',
    solutionText: 'Lokale Knotenpunkte, echte Treffen, zirkulierende Werte — digital koordiniert, real gelebt.',
    tools: [
      { name: 'Real Life Stack', color: '#3b82f6', url: 'https://real-life-stack.de' },
      { name: 'Spaces', color: '#6366f1', url: null },
    ],
  },
  {
    id: '04',
    problemTitle: 'Reizüberflutung',
    problemText: 'Fragmentierte Aufmerksamkeit, Suchtmechanismen, emotionale Dysregulation — das Nervensystem unter Dauerstress.',
    solutionTitle: 'Bewusste Technologie',
    solutionText: 'Werkzeuge, die Fokus, Präsenz und reale Interaktion fördern — statt Dauerstimulation.',
    tools: [{ name: 'Real Life Stack', color: '#3b82f6', url: 'https://real-life-stack.de' }],
  },
  {
    id: '05',
    problemTitle: 'Normiertes Bildungssystem',
    problemText: 'Anpassung, Vergleich, Leistungsbewertung — Begeisterungsfähigkeit und Würdegefühl werden unterdrückt.',
    solutionTitle: 'Bildung als Entfaltung',
    solutionText: 'Würdegefühl, Selbstwirksamkeit, Begeisterungsfähigkeit sichtbar machen — statt normieren.',
    tools: [{ name: 'Wir sind wertvoll', color: '#ec4899', url: null }],
  },
  {
    id: '06',
    problemTitle: 'Angstbasierte Medien',
    problemText: 'Bedrohung, Konflikt, Polarisierung — Dauerangst reduziert Vertrauen und gesellschaftlichen Zusammenhalt.',
    solutionTitle: 'Vertrauen als Infrastruktur',
    solutionText: 'Dialog statt Polarisierung. Echte, bestätigte Verbindungen statt algorithmischer Zuspitzung.',
    tools: [{ name: 'Web of Trust', color: '#22c55e', url: 'https://web-of-trust.de' }],
  },
  {
    id: '07',
    problemTitle: 'Familie unter Druck',
    problemText: 'Doppelverdiener-Zwang, Zeitmangel, mediale Fremdsozialisation — Bindung und Präsenz werden geschwächt.',
    solutionTitle: 'Familie & Gemeinschaft stärken',
    solutionText: 'Generationenübergreifende Begegnung, lokale Netzwerke, gemeinsame Rituale — Sicherheit durch Zugehörigkeit.',
    tools: [{ name: 'Spaces', color: '#6366f1', url: null }],
  },
  {
    id: '08',
    problemTitle: 'Sinnverlust',
    problemText: 'Arbeit als reiner Gelderwerb, Gemeinschaft optional, keine größeren Zusammenhänge — innere Leere.',
    solutionTitle: 'Sinn durch Beitrag',
    solutionText: 'Quests, geteilte Projekte, reale Wirksamkeit — Identität entsteht durch gelebte Erfahrung.',
    tools: [{ name: 'Real Life Game', color: '#8b5cf6', url: null }],
  },
  {
    id: '09',
    problemTitle: 'Einsamkeit',
    problemText: 'Physisch nah, trotzdem allein. Strukturelle Isolation als globale Epidemie — Ausgangspunkt für Depression, Sucht, Radikalisierung.',
    solutionTitle: 'Echte Verbundenheit',
    solutionText: 'Sichere Begegnungsräume, vertrauensbasierte Kreise, lokale Netzwerke — Menschen leben miteinander.',
    tools: [{ name: 'Real Life Network', color: '#6366f1', url: null }],
  },
  {
    id: '10',
    problemTitle: 'Generationentrauma',
    problemText: 'Ungeheilte Traumata werden weitergegeben. Kollektive Ablehnung ganzer Generationen erzeugt neues Leid — Wurzellosigkeit, Identitätsverlust.',
    solutionTitle: 'Heilung der Ahnenlinie',
    solutionText: 'Würdigung statt Verdrängung. Gesprächsräume zwischen Generationen. Herkunft annehmen dürfen — ohne Freispruch, aber mit Würde.',
    tools: [{ name: 'Spaces', color: '#6366f1', url: null }],
  },
]

const principles = [
  {
    icon: '⚡',
    title: 'Verantwortung',
    subtitle: 'statt Opferrolle',
    body: 'Das System lebt von Beteiligung. Wer den eigenen Radius ernst nimmt — verändert bereits etwas.',
    color: '#6366f1',
    bg: '#eef2ff',
  },
  {
    icon: '🤝',
    title: 'Vertrauen',
    subtitle: 'statt Kontrolle',
    body: 'Macht entsteht, wenn Vertrauen zentralisiert wird. Die Antwort: Menschen bezeugen einander direkt.',
    color: '#22c55e',
    bg: '#f0fdf4',
  },
  {
    icon: '🎁',
    title: 'Beitrag',
    subtitle: 'statt Konsum',
    body: '"Was kann ich geben?" statt "Was kann ich bekommen?" — das verändert die Grundstruktur von Wirtschaft.',
    color: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    icon: '🏡',
    title: 'Familie & Gemeinschaft',
    subtitle: 'als tragende Struktur',
    body: 'Familie ist der erste Erfahrungsraum von Bindung. Gemeinschaft erweitert ihn — generationsübergreifend, real, lebendig.',
    color: '#ec4899',
    bg: '#fdf2f8',
  },
  {
    icon: '🌿',
    title: 'Heilung der Ahnenlinie',
    subtitle: 'Würdigung statt Verdrängung',
    body: 'Identität wird stabil, wenn Herkunft angenommen werden darf. Anerkennung von Leid ohne Ideologisierung — Integration statt Abspaltung.',
    color: '#14b8a6',
    bg: '#f0fdfa',
  },
  {
    icon: '✨',
    title: 'Potenzial',
    subtitle: 'statt Funktion',
    body: 'Jeder Mensch trägt Möglichkeiten in sich, die kein Bildungssystem gemessen hat. Die Antwort ist Entfaltung.',
    color: '#3b82f6',
    bg: '#eff6ff',
  },
]

export default function ProblemSolution() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* ── Headline ── */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Warum wir hier sind
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Das Problem ist der Mensch.<br />
            <span className="text-primary">Die Lösung auch.</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Wir leben in einem System, das strukturell auf Abhängigkeit, Konsum und Isolation ausgerichtet ist.
              Das Problem sitzt nicht nur dort draußen — es lebt in unseren täglichen Entscheidungen.
            </p>
            <p className="font-semibold text-foreground text-xl">
              Derselbe Mensch, der das System trägt, kann beschließen, etwas anderes zu tragen.
            </p>
            <p>
              Der Mensch, der Verantwortung übernimmt, ist kein Opfer mehr. Er ist Schöpfer.
            </p>
          </div>
        </div>

        {/* ── Mapping Table ── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              10 Probleme. 10 Antworten.
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Jedes Problem der alten Welt hat eine konkrete Antwort — mit echten Werkzeugen, die wir gerade bauen.
            </p>
          </div>

          <div className="space-y-3">
            {mapping.map((row) => (
              <div
                key={row.id}
                className="rounded-xl border border-border overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] min-h-0">

                  {/* Problem */}
                  <div className="p-5 bg-red-50/60 border-b md:border-b-0 md:border-r border-border">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-red-400 mt-0.5 flex-shrink-0 w-6">{row.id}</span>
                      <div>
                        <p className="text-sm font-bold text-foreground mb-1">{row.problemTitle}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{row.problemText}</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center px-4 bg-muted/20 border-r border-border">
                    <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Solution + Tools */}
                  <div className="p-5 bg-primary/5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-primary mb-1">{row.solutionTitle}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{row.solutionText}</p>
                      </div>
                      <div className="flex flex-col gap-1 flex-shrink-0 ml-2">
                        {row.tools.map((tool) =>
                          tool.url ? (
                            <a
                              key={tool.name}
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap hover:opacity-80 transition-opacity"
                              style={{ backgroundColor: tool.color + '20', color: tool.color }}
                            >
                              {tool.name}
                            </a>
                          ) : (
                            <span
                              key={tool.name}
                              className="text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap"
                              style={{ backgroundColor: tool.color + '15', color: tool.color }}
                            >
                              {tool.name}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Ahnen-Block ── */}
        <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-8 mb-20">
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🌿</span>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Heilung der Ahnenlinie — das Mutigste
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                <p>
                  Hinter dem sichtbaren System liegt etwas Tieferes: Jahrzehnte kollektiver Traumata,
                  die nicht geheilt wurden. Krieg, Vertreibung, Verlust — ganze Generationen haben Dinge erlebt,
                  für die es keine Sprache gab. Kein Raum für Trauer. Kein Raum für Anerkennung.
                </p>
                <p>
                  Unverarbeitete Traumata werden weitergegeben — nicht durch Erzählung,
                  sondern durch Körper, durch Beziehungsmuster, durch das, was unausgesprochen bleibt.
                </p>
                <p className="font-bold text-foreground text-base">
                  Ablehnung heilt kein Trauma. Sie erzeugt neues.
                </p>
                <p>
                  Wir schaffen Räume für Gesprächsräume zwischen Generationen —
                  Anerkennung von Leid ohne Ideologisierung.
                  Identität wird stabil, wenn Herkunft angenommen werden darf.
                  Familie wird Erinnerungsraum und Kraftquelle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Die 6 Prinzipien ── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Sechs Prinzipien
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Keine Ideologie. Sechs Entscheidungen, die — wenn genug Menschen sie treffen — alles verändern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {principles.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-xl border-2"
                style={{ backgroundColor: p.bg, borderColor: p.color + '30' }}
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <div className="mb-2">
                  <span className="font-bold text-foreground">{p.title}</span>
                  <span className="text-xs text-muted-foreground ml-2">{p.subtitle}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Einladungssatz ── */}
        <div className="text-center rounded-2xl border-2 border-primary/20 bg-primary/5 p-10">
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">
            Das ist kein Programm,<br />
            <span className="text-primary">dem man beitritt.</span>
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Es ist eine Entscheidung, die man trifft —
            ich übernehme Verantwortung für mein Leben
            und finde Menschen, die dasselbe getan haben.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#projekte"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Das Netzwerk entdecken
            </a>
            <a
              href="#mitmachen"
              className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
            >
              Mitmachen
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
