function NetworkLogo() {
  return (
    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#6366f1' }}>
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
        {/* Center hub */}
        <circle cx="12" cy="12" r="2.5" />
        {/* Spokes */}
        <line x1="12" y1="9.5" x2="12" y2="6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14.5" y1="12" x2="17.5" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="14.5" x2="12" y2="17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9.5" y1="12" x2="6.5" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        {/* Satellite nodes */}
        <circle cx="12" cy="4.5" r="1.8" />
        <circle cx="19.5" cy="12" r="1.8" />
        <circle cx="12" cy="19.5" r="1.8" />
        <circle cx="4.5" cy="12" r="1.8" />
      </svg>
    </div>
  )
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-navbar border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <NetworkLogo />
          <span className="font-bold text-lg tracking-tight text-foreground">Real Life Network</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#projekte" className="hover:text-foreground transition-colors">Ökosystem</a>
          <a href="#vision" className="hover:text-foreground transition-colors">Vision</a>
          <a href="#team" className="hover:text-foreground transition-colors">Team</a>
          <a href="#mitmachen" className="hover:text-foreground transition-colors px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Mitmachen
          </a>
        </nav>
      </div>
    </header>
  )
}
