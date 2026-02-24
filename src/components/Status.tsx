const milestones = [
  { date: 'Feb 2026', label: 'Projekt gestartet', done: true },
  { date: 'Feb 2026', label: 'Förderstrategie entwickelt', done: true },
  { date: 'Feb 2026', label: 'real-life.network Domain gesichert', done: true },
  { date: 'Mär 2026', label: 'Brief an Gerald Hüther – Erstgespräch', done: false, active: true },
  { date: 'Mär 2026', label: 'NLnet Förderantrag eingereicht (Web of Trust)', done: false },
  { date: 'Apr 2026', label: 'Erste Schulpartner identifiziert', done: false },
  { date: 'Mai 2026', label: 'Bildungsstiftung – Antrag eingereicht', done: false },
  { date: '2026/27', label: 'Horizon Europe – Antrag mit vollem Konsortium', done: false },
]

export default function Status() {
  return (
    <section id="status" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wo wir gerade stehen
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent und ehrlich. Das passiert gerade – Schritt für Schritt.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border"></div>

            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 items-start pl-12 relative">
                  {/* Dot */}
                  <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-sm border-2 ${
                    m.done
                      ? 'bg-secondary border-secondary text-secondary-foreground'
                      : m.active
                      ? 'bg-primary border-primary text-primary-foreground animate-pulse'
                      : 'bg-background border-border text-muted-foreground'
                  }`}>
                    {m.done ? '✓' : m.active ? '→' : '○'}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <span className="text-xs text-muted-foreground font-medium block mb-1">{m.date}</span>
                    <span className={`text-sm font-medium ${m.done ? 'text-foreground' : m.active ? 'text-primary' : 'text-muted-foreground'}`}>
                      {m.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
