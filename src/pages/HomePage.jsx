import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../sections/home/Hero";
import About from "../sections/home/About";
import Projects from "../sections/home/Projects";
import SkillsContact from "../sections/home/SkillsContact";

const homeNavItems = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills & Contact", id: "contact" },
];

function HomePage() {
  return (
    <>
      <Header navItems={homeNavItems} />

      <main>
        <Hero />
        <About />
        <Projects />
        <SkillsContact />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
