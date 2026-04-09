import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustedBy from './components/TrustedBy/TrustedBy';
import Benchmark from './components/Benchmark/Benchmark';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import CTASection from './components/CTASection/CTASection';
import Footer from './components/Footer/Footer';
import Pricing from './components/Pricing/Pricing';
import PrivacyPolicy from './components/Legal/PrivacyPolicy';
import TermsOfService from './components/Legal/TermsOfService';
import DataProcessingAgreement from './components/Legal/DataProcessingAgreement';
import CookiePolicy from './components/Legal/CookiePolicy';

const Home = () => (
  <div className="app">
    <Navbar />
    <main>
      <Hero />
      <TrustedBy />
      <Benchmark />
      <Features />
      <Testimonials />
      <WhyChooseUs />
      <CTASection />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/data-processing-agreement" element={<DataProcessingAgreement />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
