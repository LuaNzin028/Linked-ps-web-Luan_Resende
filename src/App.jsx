import './App.css'
import Header from './components/header.jsx'
import HeroSection from './sections/HeroSection.jsx'
import Services from './sections/Services.jsx'
import Hours from './sections/Hours.jsx'
import Feedbacks from './sections/Feedbacks.jsx'
function App() {
  return (
    <>
    <Header />
    <main>
      <HeroSection />
      <Services />
      <Hours />
      <Feedbacks />
    </main> 
    </>
    )
}

export default App