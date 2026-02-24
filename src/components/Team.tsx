const team = [
  {
    name: 'Timo',
    role: 'Strategie, Vision, Botschafter',
    description: 'Entwickelt die Gesamtstrategie, baut Partnerschaften auf.',
  },
  {
    name: 'Anton',
    role: 'Technische Architektur, Web of Trust',
    description: 'Visionär und Entwickler. Baut das Fundament.',
  },
  {
    name: 'Sebastian',
    role: 'Real Life Stack, digitale Wertschöpfung',
    description: 'UX, Mobile Apps, Marktplatz-Entwicklung.',
  },
]

const partners = [
  {
    name: 'Akademie für Potentialentfaltung',
    role: 'Forschungspartner (in Gespräch)',
    detail: 'Wissenschaftliche Begleitung für Real Life Education',
    pending: true,
  },
  {
    name: 'NLnet Foundation',
    role: 'Förderpartner (Antrag läuft)',
    detail: 'NGI Zero – dezentrale Infrastruktur',
    pending: true,
  },
  {
    name: 'Schulpartner',
    role: 'Pilotschulen gesucht',
    detail: 'Real Life Education Programm',
    pending: true,
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Team & Partner
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wer steht dahinter. Wer kommt noch dazu.
          </p>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Kernteam</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {team.map((m) => (
              <div key={m.name} className="p-6 rounded-xl border border-border bg-card">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-4">
                  {m.name[0]}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{m.name}</h4>
                <p className="text-xs text-primary font-medium mb-2">{m.role}</p>
                <p className="text-sm text-muted-foreground">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Partner</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {partners.map((p) => (
              <div key={p.name} className="p-6 rounded-xl border border-border border-dashed bg-card/50 relative">
                {p.pending && (
                  <span className="absolute top-4 right-4 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    in Gespräch
                  </span>
                )}
                <h4 className="font-semibold text-foreground mb-1">{p.name}</h4>
                <p className="text-xs text-secondary font-medium mb-1">{p.role}</p>
                <p className="text-sm text-muted-foreground">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
