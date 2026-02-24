const projects = [
  {
    icon: '🔧',
    name: 'Real Life Stack',
    tagline: 'Technische Plattform',
    description: 'Digitale Infrastruktur für echte Gemeinschaften. Module für Zusammenarbeit, Ressourcenteilung und lokale Wirtschaft.',
    url: 'https://real-life-stack.de',
    color: 'bg-primary/10 text-primary',
    border: 'hover:border-primary/30',
    status: 'live',
  },
  {
    icon: '🤝',
    name: 'Real Life Trust',
    tagline: 'Dezentrales Vertrauen',
    description: 'Vertrauen entsteht durch echte Begegnungen – nicht durch Algorithmen. Ein Netzwerk ohne zentrale Kontrolle.',
    url: 'https://web-of-trust.de',
    color: 'bg-secondary/10 text-secondary',
    border: 'hover:border-secondary/30',
    status: 'live',
  },
  {
    icon: '💡',
    name: 'Real Life Value',
    tagline: 'Digitale Wertschöpfung',
    description: 'Jeder Mensch kann sein eigenes schöpfen. Zeitgutscheine, persönliche Währungen, echte Wertschätzung.',
    url: 'https://money-printer.app',
    color: 'bg-warning/10 text-warning',
    border: 'hover:border-warning/30',
    status: 'live',
  },
  {
    icon: '🎓',
    name: 'Real Life Education',
    tagline: 'Potentialentfaltung',
    description: 'Wir sind wertvoll – Schulprojekt für menschenzentrierte Bildung. Fähigkeiten sichtbar machen. Würde erleben.',
    url: null,
    color: 'bg-pink/10 text-pink',
    border: 'hover:border-pink/30',
    status: 'coming-soon',
  },
]

export default function Projects() {
  return (
    <section id="projekte" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Die vier Bausteine
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Jeder Baustein steht für sich. Zusammen bilden sie ein Ökosystem das gesellschaftlich verändern kann.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className={`group relative p-8 rounded-2xl border border-border bg-card transition-all duration-200 ${p.border} hover:shadow-lg`}
            >
              {/* Status badge */}
              <div className="absolute top-6 right-6">
                {p.status === 'live' ? (
                  <span className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Live
                  </span>
                ) : (
                  <span className="text-xs text-muted-foreground font-medium">Bald</span>
                )}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center text-2xl mb-6`}>
                {p.icon}
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground font-medium mb-3">{p.tagline}</p>
                <p className="text-foreground/70 text-sm leading-relaxed">{p.description}</p>
              </div>

              {/* Link */}
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Zur Website →
                </a>
              ) : (
                <span className="text-sm text-muted-foreground">In Entwicklung</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
