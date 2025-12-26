import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import backgroundImage from './assets/red-light-round-podium-black-background-mock-up.jpg';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background overlay for better readability */}
      <div className="min-h-screen bg-dark-900/30 flex flex-col">
        {/* Navbar stays consistent on all pages */}
        <Navbar />
        
        {/* Routes change the content below the Navbar based on URL */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </div>
  )
}

export default App