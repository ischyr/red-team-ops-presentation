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

function App() {
  return (
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
}

export default App;
