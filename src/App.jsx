import './App.css'
import Header from './components/header.jsx'
import HeroSection from './sections/HeroSection.jsx'
import Services from './sections/Services.jsx'
function App() {
  return (
    <>
    <Header />
    <main>
      <HeroSection />
      <Services />
    </main> 
    </>
    )
}

export default App