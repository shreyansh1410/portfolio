import "./app.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Sidebar />
        <Navbar />
        <Hero class="HeroApp" />
      </section>
      <section id="Servies">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
