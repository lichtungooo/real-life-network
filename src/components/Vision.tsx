const pillars = [
  {
    icon: '🤝',
    name: 'Web of Trust',
    color: '#22c55e',
    bg: '#f0fdf4',
    url: 'https://web-of-trust.de',
    headline: 'Vertrauen, das du siehst',
    body: 'Zwei Menschen begegnen sich — ein QR-Code, und das Vertrauen ist real gespeichert. Dezentral, sicher, dir gehörend. Kein Konzern wertet das aus. Transparenz schafft Vertrauen — und du hast die volle Kontrolle darüber, wem du dich öffnest.',
  },
  {
    icon: '💡',
    name: 'Wertschöpfung',
    color: '#f59e0b',
    bg: '#fffbeb',
    url: 'https://money-printer.app',
    headline: 'Dein Wert. Deine Währung.',
    body: 'Du erschaffst eigene Token — Ausdruck deines Beitrags, nicht Spielgeld. Auf dem Marktplatz unterstützt du Projekte anderer, teilst deine eigenen. Wer gibt, bekommt zurück. Wertschöpfung als Kreislauf — sichtbar, spürbar, echt.',
  },
  {
    icon: '🪞',
    name: 'Transparenz & Profil',
    color: '#6366f1',
    bg: '#eef2ff',
    url: null,
    headline: 'Dein eigener Spiegel',
    body: 'Deine Aktivitäten, Verbindungen, Beiträge — dein Profil ist kein Selbstmarketing. Es ist ein Spiegel: Was habe ich getan? Wem habe ich geholfen? Was ist gewachsen? Nicht von außen bewertet — von innen sichtbar gemacht.',
  },
  {
    icon: '🔧',
    name: 'Real Life Stack',
    color: '#3b82f6',
    bg: '#eff6ff',
    url: 'https://real-life-stack.de',
    headline: 'Die Plattform für echte Begegnung',
    body: 'Kalender für echte Treffen. Quests für gemeinsames Wachsen. Eli als KI-Begleiter, der zuhört. Der Stack ist die technische Grundlage — modular, offen, für jede Gemeinschaft nutzbar.',
  },
]

export default function Vision() {
  return (
    <section id="vision" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* ── Einstieg ── */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">Wie es funktioniert</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Weniger Konsum.<br />
            <span className="text-primary">Mehr echtes Leben.</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Menschen verbringen immer mehr Zeit mit passivem Konsum — scrollen, schauen, reagieren.
              Real Life Network dreht das um: Digitale Werkzeuge, die dazu einladen,
              im echten Leben aktiv zu werden, echte Verbindungen zu knüpfen und
              den eigenen Wert sichtbar zu machen.
            </p>
            <p className="font-medium text-foreground">
              Nicht Technologie statt Realität — Technologie als Spiegel der Realität.
            </p>
          </div>
        </div>

        {/* ── Die vier Module ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {pillars.map((p) => {
            const Inner = (
              <div
                className="h-full p-6 rounded-xl border-2 flex flex-col hover:scale-[1.01] transition-transform"
                style={{ backgroundColor: p.bg, borderColor: p.color + '30' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{p.icon}</span>
                  <span className="font-bold text-foreground">{p.name}</span>
                  {p.url && (
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: p.color + '20', color: p.color }}>
                      Live
                    </span>
                  )}
                </div>
                <p className="text-sm font-semibold text-foreground mb-2">{p.headline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            )
            return p.url ? (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="block">
                {Inner}
              </a>
            ) : (
              <div key={p.name}>{Inner}</div>
            )
          })}
        </div>

        {/* ── Gamification ── */}
        <div className="bg-muted/40 rounded-2xl p-8 md:p-10 border border-border mb-16">
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🎮</span>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Positives Verstärken — kein Bewertungssystem
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Du kannst die Projekte anderer mit deinen Token unterstützen. Du kannst sehen,
                  wer was beiträgt. Du kannst deinen eigenen <strong className="text-foreground">Potenzialentfaltungsbaum</strong> wachsen
                  lassen — nicht durch fremde Beurteilung, sondern durch das, was du tust.
                  Der Baum zeigt sechs Dimensionen: Seele, Geist, Bewusstsein, Körper, Soziales, Gemeinschaft.
                </p>
                <p>
                  Das ist kein Punktesystem. Es ist positive Verstärkung — du siehst,
                  was wächst. Das fühlt sich gut an. Nicht weil du besser bist als andere,
                  sondern weil du <strong className="text-foreground">aktiv</strong> bist.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Spaces ── */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Dein Space. Dein Spiel.
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Die Infrastruktur gehört allen. Jede Gemeinschaft kann darauf aufbauen —
              mit eigenen Regeln, eigener Kultur, eigenem Fokus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl border border-border bg-card">
              <span className="text-2xl block mb-3">🏫</span>
              <h4 className="font-bold text-foreground mb-2">Wir sind wertvoll</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Der Bildungsspace. Kinder und Jugendliche entdecken ihre Stärken,
                unterstützen sich gegenseitig, machen Potenziale sichtbar.
                Lehrer werden zu Begleitern.
              </p>
              <span className="inline-block mt-3 text-xs text-pink-500 font-semibold bg-pink-50 px-2 py-0.5 rounded-full">Pilotprojekt</span>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <span className="text-2xl block mb-3">🌍</span>
              <h4 className="font-bold text-foreground mb-2">Real Life Game</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Das große Spiel. Quests in der echten Welt. Punkte für echte Begegnungen.
                Ein Spiel, das dich vom Sofa holt — und in die Realität bringt.
              </p>
              <span className="inline-block mt-3 text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">In Entwicklung</span>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card border-dashed">
              <span className="text-2xl block mb-3">✨</span>
              <h4 className="font-bold text-foreground mb-2">Dein Space</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dein Verein. Deine Nachbarschaft. Dein Unternehmen. Die Tools sind offen —
                baue deinen eigenen Space auf dieser Infrastruktur.
              </p>
              <span className="inline-block mt-3 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">Open Source</span>
            </div>
          </div>
        </div>

        {/* ── Schluss ── */}
        <div className="text-center border-t border-border pt-16">
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-snug">
            Das Ziel ist nicht mehr Technologie.<br />
            <span className="text-primary">Das Ziel ist mehr echtes Leben.</span>
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Alle Tools sind Open Source. Dezentral. Ohne Lock-in.
            Kein Algorithmus entscheidet, was du siehst oder wem du vertraust.
            Du bist kein Produkt — du bist der Schöpfer.
          </p>
        </div>

      </div>
    </section>
  )
}
