import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import ProcessTimeline from '@/components/ProcessTimeline';
import International from '@/components/International';
import Benefits from '@/components/Benefits';
import Trust from '@/components/Trust';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <About />
        <WhyUs />
        <ProcessTimeline />
        <International />
        <Benefits />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
