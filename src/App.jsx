import './App.css'
import Header from './components/header.jsx'
import HeroSection from './sections/HeroSection.jsx'
import Services from './sections/Services.jsx'
import Hours from './sections/Hours.jsx'
function App() {
  return (
    <>
    <Header />
    <main>
      <HeroSection />
      <Services />
      <Hours />
    </main> 
    </>
    )
}

export default App