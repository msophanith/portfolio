import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Rewards from "./components/Rewards";
import Contact from "./components/Contact";
import PageLoader from "./components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navigation />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Education />
        <Rewards />
        <Contact />
      </main>
    </>
  );
}
