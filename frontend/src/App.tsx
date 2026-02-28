import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import PressureWashingSection from './components/PressureWashingSection';
import GutterCleaningSection from './components/GutterCleaningSection';
import LawnLandscapingSection from './components/LawnLandscapingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ServicesOverview />
        <PressureWashingSection />
        <GutterCleaningSection />
        <LawnLandscapingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
