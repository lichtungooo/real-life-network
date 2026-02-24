import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import NetworkHub from './components/NetworkHub'
import Vision from './components/Vision'
import Status from './components/Status'
import Team from './components/Team'
import Join from './components/Join'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <NetworkHub />
        <Vision />
        <Status />
        <Team />
        <Join />
      </main>
      <Footer />
    </div>
  )
}

export default App
