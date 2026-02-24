// Decorative background network — node coords in a 1200×650 viewBox
const bgNodes = [
  [80,  90], [260, 60],  [460, 130], [680, 55],  [900, 110], [1110, 75],
  [170, 300],[390, 260], [600, 310], [820, 270], [1030, 320],[1160, 220],
  [60,  500],[240, 470], [480, 530], [700, 490], [950, 510], [1140, 470],
] as const

const bgEdges = [
  [0,1],[1,2],[2,3],[3,4],[4,5],        // top row
  [6,7],[7,8],[8,9],[9,10],[10,11],      // mid row
  [12,13],[13,14],[14,15],[15,16],[16,17], // bottom row
  [0,6],[1,7],[2,7],[2,8],[3,8],[3,9],  // top-mid verticals
  [4,9],[4,10],[5,10],[5,11],
  [6,12],[7,13],[8,14],[9,15],[10,16],[11,17], // mid-bottom verticals
  [1,6],[3,8],[7,13],[9,15],            // diagonals
] as const

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/8 via-background to-secondary/8 px-6 pt-16 overflow-hidden">

      {/* Background network decoration */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 650"
        preserveAspectRatio="xMidYMid slice"
        style={{ pointerEvents: 'none' }}
        aria-hidden="true"
      >
        {bgEdges.map(([ai, bi], idx) => (
          <line
            key={idx}
            x1={bgNodes[ai][0]} y1={bgNodes[ai][1]}
            x2={bgNodes[bi][0]} y2={bgNodes[bi][1]}
            stroke="#6366f1" strokeWidth="1" strokeOpacity="0.07"
          />
        ))}
        {bgNodes.map(([x, y], idx) => (
          <circle key={idx} cx={x} cy={y} r="3.5" fill="#6366f1" fillOpacity="0.12" />
        ))}
      </svg>

      <div className="relative max-w-3xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          Projekt gestartet · Februar 2026
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
          Real Life Network
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
          Wir bauen digitale Infrastruktur für eine lebendige Gesellschaft.
        </p>

        <p className="text-base text-muted-foreground mb-12 max-w-xl mx-auto">
          Vertrauen. Wertschöpfung. Bildung. Gemeinschaft.<br />
          Vier Bausteine. Ein Ökosystem. Open Source.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projekte"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Das Netzwerk entdecken
          </a>
          <a
            href="#vision"
            className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
          >
            Die Vision
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-sm">
        <span>Mehr entdecken</span>
        <div className="w-px h-8 bg-border animate-pulse"></div>
      </div>
    </section>
  )
}
