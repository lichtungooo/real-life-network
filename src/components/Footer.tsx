export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-bold text-foreground">Real Life</span>
          <p className="text-sm text-muted-foreground mt-1">Digitale Infrastruktur für eine lebendige Gesellschaft</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="https://real-life-stack.de" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Stack</a>
          <a href="https://web-of-trust.de" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Trust</a>
          <a href="https://money-printer.app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Value</a>
          <span className="text-muted-foreground/50">Education (bald)</span>
        </div>
        <p className="text-sm text-muted-foreground">Open Source · 2026</p>
      </div>
    </footer>
  )
}
