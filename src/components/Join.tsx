const options = [
  {
    icon: '💻',
    title: 'Als Entwickler',
    description: 'Du kannst programmieren und willst an Projekten arbeiten die wirklich etwas bedeuten.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: '🏫',
    title: 'Als Schule oder Organisation',
    description: 'Ihr wollt Pilotpartner für Real Life Education werden und Potentialentfaltung erleben.',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: '🤲',
    title: 'Als Förderer oder Stiftung',
    description: 'Ihr fördert gesellschaftliche Innovation und wollt ein Gespräch über dieses Projekt.',
    color: 'bg-warning/10 text-warning',
  },
]

export default function Join() {
  return (
    <section id="mitmachen" className="py-24 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mitmachen
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dieses Netzwerk wächst durch echte Begegnungen. Wenn du Teil davon sein willst, meld dich.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {options.map((o) => (
            <div key={o.title} className="p-6 rounded-xl border border-border bg-card text-center">
              <div className={`w-12 h-12 rounded-xl ${o.color} flex items-center justify-center text-2xl mx-auto mb-4`}>
                {o.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{o.title}</h3>
              <p className="text-sm text-muted-foreground">{o.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="mailto:hallo@real-life.network"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Kontakt aufnehmen →
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            hallo@real-life.network
          </p>
        </div>
      </div>
    </section>
  )
}
