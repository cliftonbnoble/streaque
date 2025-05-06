import { useState } from 'react';
import './App.css'
import Hero from './components/Hero.jsx'
import NiaHero from './components/NiaHero.jsx'
import ProductivitySection from './components/ProductivitySection.jsx'
import FootWaitlist from './components/FootWaitlist.jsx'
import EmailCapturePopup from './components/EmailCapturePopup.jsx'

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);

  return (
    <div className="app-container">
      <NiaHero onJoinWaitlistClick={openPopup} />
      {/* <Hero /> */}
      <ProductivitySection />
      <FootWaitlist onJoinWaitlistClick={openPopup} />

      <EmailCapturePopup isVisible={isPopupVisible} onClose={closePopup} />
    </div>
  )
}

export default App
