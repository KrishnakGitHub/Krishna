import Navbar from "./_components/navbar";
import About from "./_components/About";
import Experience from "./_components/Experience";
import FooterSection from "./_components/FooterSection";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Experience />
      <Contact />
      <FooterSection />
    </div>
  );
}
