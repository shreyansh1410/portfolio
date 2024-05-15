import "./App.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";

const App = () => {
  return (
    <div>
      <Cursor/>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Servies">
        <Parallax type="services" />
      </section>
      <section><Services/></section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio/>
      <section id="Contact"><Contact/></section>
    </div>
  );
};

export default App;
