import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceGrid from './components/ServiceGrid';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import SchemaMarkup from './components/SchemaMarkup';

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <main>
        <Header />
        <Hero />
        <ServiceGrid />
        <Services />
        <ProjectGallery />
        <Contact />
        <Footer />
        <WhatsAppFAB />
      </main>
    </>
  );
}
