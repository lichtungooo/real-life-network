const nodes = [
  { icon: '🔧', name: 'Stack',     label: 'Technische Plattform',   url: 'https://real-life-stack.de',  color: '#3b82f6', bg: '#eff6ff', angle: -90,  live: true  },
  { icon: '🤝', name: 'Trust',     label: 'Dezentrales Vertrauen',   url: 'https://web-of-trust.de',     color: '#22c55e', bg: '#f0fdf4', angle: 0,    live: true  },
  { icon: '🎓', name: 'Education', label: 'Potentialentfaltung',     url: null,                          color: '#ec4899', bg: '#fdf2f8', angle: 90,   live: false },
  { icon: '💡', name: 'Value',     label: 'Digitale Wertschöpfung',  url: 'https://money-printer.app',  color: '#f59e0b', bg: '#fffbeb', angle: 180,  live: true  },
]

const SIZE = 580
const CX = SIZE / 2
const CY = SIZE / 2
const ORBIT = 200
const CENTER_R = 96
const NODE_R = 74

function toRad(deg: number) { return deg * Math.PI / 180 }

// Pre-compute positions
const nodePos = nodes.map(n => ({
  x: CX + ORBIT * Math.cos(toRad(n.angle)),
  y: CY + ORBIT * Math.sin(toRad(n.angle)),
}))

// Spoke endpoints (center-edge → node-edge)
const spokes = nodes.map((_, i) => {
  const { x: nx, y: ny } = nodePos[i]
  const dx = nx - CX, dy = ny - CY
  const dist = Math.sqrt(dx * dx + dy * dy)
  const ux = dx / dist, uy = dy / dist
  return {
    x1: CX + ux * (CENTER_R + 10),
    y1: CY + uy * (CENTER_R + 10),
    x2: nx - ux * (NODE_R + 5),
    y2: ny - uy * (NODE_R + 5),
  }
})

// Cross-connections between adjacent nodes (forms the network ring)
const crossPairs = [[0, 1], [1, 2], [2, 3], [3, 0]] as const
const crosses = crossPairs.map(([ai, bi]) => {
  const a = nodePos[ai], b = nodePos[bi]
  const dx = b.x - a.x, dy = b.y - a.y
  const dist = Math.sqrt(dx * dx + dy * dy)
  const ux = dx / dist, uy = dy / dist
  return {
    x1: a.x + ux * (NODE_R + 5),
    y1: a.y + uy * (NODE_R + 5),
    x2: b.x - ux * (NODE_R + 5),
    y2: b.y - uy * (NODE_R + 5),
    key: `${ai}-${bi}`,
  }
})

export default function NetworkHub() {
  return (
    <section id="projekte" className="py-24 px-6">

      {/* Animation keyframes */}
      <style>{`
        @keyframes rln-flow    { to   { stroke-dashoffset: -22; } }
        @keytml-flow-rev { from { stroke-dashoffset: -22; } to { stroke-dashoffset: 0; } }
        @keyframes rln-ring    { 0%,100% { opacity:.18; r:${CENTER_R + 22}; } 50% { opacity:.06; r:${CENTER_R + 38}; } }
        @keyframes rln-rotate  { to { transform: rotate(360deg); transform-origin: ${CX}px ${CY}px; } }
      `}</style>

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Das Netzwerk
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Vier Bausteine, die miteinander verbunden sind. Kein Zentrum dominiert — jeder Knoten ist ein Teil des Ganzen.
          </p>
        </div>

        {/* Desktop: animated circular network */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative" style={{ width: SIZE, height: SIZE }}>

            <svg
              className="absolute inset-0"
              width={SIZE}
              height={SIZE}
              style={{ pointerEvents: 'none', overflow: 'visible' }}
            >
              {/* Outer orbit ring (faint guide circle) */}
              <circle
                cx={CX} cy={CY} r={ORBIT}
                fill="none"
                stroke="#6366f1"
                strokeWidth="1"
                strokeOpacity="0.06"
                strokeDasharray="2 6"
              />

              {/* Pulsing aura rings around center */}
              <circle cx={CX} cy={CY} r={CENTER_R + 18}
                fill="none" stroke="#6366f1" strokeWidth="1.5" strokeOpacity="0.12"
                style={{ animation: 'rln-ring 3.5s ease-in-out infinite' }}
              />
              <circle cx={CX} cy={CY} r={CENTER_R + 36}
                fill="none" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.06"
                style={{ animation: 'rln-ring 3.5s ease-in-out infinite 1.75s' }}
              />

              {/* Cross-connections: ring between the four nodes */}
              {crosses.map((c) => (
                <line
                  key={c.key}
                  x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  strokeOpacity="0.3"
                  style={{ animation: 'rln-flow 4s linear infinite reverse' }}
                />
              ))}

              {/* Spokes: center → each node, colored + animated */}
              {nodes.map((node, i) => (
                <line
                  key={node.name}
                  x1={spokes[i].x1} y1={spokes[i].y1}
                  x2={spokes[i].x2} y2={spokes[i].y2}
                  stroke={node.color}
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  strokeOpacity="0.65"
                  style={{ animation: `rln-flow ${1.6 + i * 0.25}s linear infinite` }}
                />
              ))}
            </svg>

            {/* Center node */}
            <div
              className="absolute flex flex-col items-center justify-center rounded-full bg-white shadow-xl"
              style={{
                width: CENTER_R * 2,
                height: CENTER_R * 2,
                left: CX - CENTER_R,
                top: CY - CENTER_R,
                border: '2.5px solid #6366f130',
                boxShadow: '0 0 0 8px #6366f10a, 0 8px 32px #6366f118',
              }}
            >
              <svg viewBox="0 0 24 24" style={{ width: 34, height: 34, marginBottom: 5 }} fill="#6366f1">
                <circle cx="12" cy="12" r="2.8" />
                <line x1="12" y1="9.2" x2="12" y2="5.8" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="14.8" y1="12" x2="18.2" y2="12" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="12" y1="14.8" x2="12" y2="18.2" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="9.2" y1="12" x2="5.8" y2="12" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="12" cy="4.2" r="2" />
                <circle cx="19.8" cy="12" r="2" />
                <circle cx="12" cy="19.8" r="2" />
                <circle cx="4.2" cy="12" r="2" />
              </svg>
              <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase text-center leading-tight px-3">
                Real Life<br />Network
              </span>
            </div>

            {/* Satellite nodes */}
            {nodes.map((node, i) => {
              const { x: nx, y: ny } = nodePos[i]
              const Inner = (
                <div
                  key={node.name}
                  className="absolute flex flex-col items-center justify-center rounded-full shadow-lg border-2 transition-all duration-200 hover:scale-110 hover:shadow-2xl cursor-pointer"
                  style={{
                    width: NODE_R * 2,
                    height: NODE_R * 2,
                    left: nx - NODE_R,
                    top: ny - NODE_R,
                    backgroundColor: node.bg,
                    borderColor: node.color + '55',
                    boxShadow: `0 4px 20px ${node.color}18`,
                  }}
                >
                  {node.live && (
                    <span
                      className="absolute top-3 right-3 w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: node.color }}
                    />
                  )}
                  <span className="text-2xl mb-1">{node.icon}</span>
                  <span className="text-xs font-bold" style={{ color: node.color }}>
                    {node.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground text-center px-2 leading-tight mt-0.5">
                    {node.label}
                  </span>
                </div>
              )
              return node.url ? (
                <a key={node.name} href={node.url} target="_blank" rel="noopener noreferrer">
                  {Inner}
                </a>
              ) : (
                <div key={node.name}>{Inner}</div>
              )
            })}
          </div>
        </div>

        {/* Mobile: 2x2 grid */}
        <div className="md:hidden">
          <div className="text-center mb-8">
            <div className="inline-flex flex-col items-center justify-center w-28 h-28 rounded-full border-2 bg-white shadow-md mx-auto" style={{ borderColor: '#6366f130' }}>
              <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, marginBottom: 4 }} fill="#6366f1">
                <circle cx="12" cy="12" r="2.8" />
                <line x1="12" y1="9.2" x2="12" y2="5.8" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="14.8" y1="12" x2="18.2" y2="12" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="12" y1="14.8" x2="12" y2="18.2" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="9.2" y1="12" x2="5.8" y2="12" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="12" cy="4.2" r="2" />
                <circle cx="19.8" cy="12" r="2" />
                <circle cx="12" cy="19.8" r="2" />
                <circle cx="4.2" cy="12" r="2" />
              </svg>
              <span className="text-[9px] font-bold text-slate-500 tracking-widest uppercase text-center leading-tight px-2">
                Real Life<br />Network
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {nodes.map((node) => {
              const Card = (
                <div
                  key={node.name}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 text-center"
                  style={{ backgroundColor: node.bg, borderColor: node.color + '40' }}
                >
                  <span className="text-3xl mb-2">{node.icon}</span>
                  <span className="text-sm font-bold" style={{ color: node.color }}>{node.name}</span>
                  <span className="text-xs text-muted-foreground mt-1">{node.label}</span>
                  {node.live && (
                    <span className="text-xs mt-2 font-medium" style={{ color: node.color }}>● Live</span>
                  )}
                </div>
              )
              return node.url ? (
                <a key={node.name} href={node.url} target="_blank" rel="noopener noreferrer">{Card}</a>
              ) : (
                <div key={node.name}>{Card}</div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
