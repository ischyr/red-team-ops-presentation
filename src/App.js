import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import PageTransition from './components/PageTransition/PageTransition';
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
import Partners from './components/Partners/Partners';
import About from './components/About/About';
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

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <PageTransition key={location.key}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/data-processing-agreement" element={<DataProcessingAgreement />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </PageTransition>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
