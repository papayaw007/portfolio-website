import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contacts/>
    </div>
  );
}
