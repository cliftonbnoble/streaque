import './App.css'
import Hero from './components/Hero.jsx'
import NiaHero from './components/NiaHero.jsx'
import ProductivitySection from './components/ProductivitySection.jsx'
// import Nia from './components/Nia.jsx'
// import Lio from './components/Lio.jsx'
import FootWaitlist from './components/FootWaitlist.jsx'

function App() {
  return (
    <div className="app-container">
      <NiaHero />
      {/* <Hero /> */}
      <ProductivitySection />
      {/* <Nia />
      <Lio /> */}
      <FootWaitlist />
    </div>
  )
}

export default App
