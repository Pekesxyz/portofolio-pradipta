import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { QuickIntro } from "@/components/QuickIntro";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickIntro />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
