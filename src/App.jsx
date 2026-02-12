import Navbar from './components/Navbar';
import SplitHero from './components/SplitHero';
import TrustBar from './components/TrustBar';
import ProductShowcase from './components/ProductShowcase';
import TechnicalDetail from './components/TechnicalDetail';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-medical-white">
      <Navbar />
      <SplitHero />
      <TrustBar />
      <ProductShowcase />
      <TechnicalDetail />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
