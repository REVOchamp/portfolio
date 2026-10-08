import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import ValueProp from '@/components/sections/ValueProp';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans antialiased selection:bg-white selection:text-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}