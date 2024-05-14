import Test from "./Test";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/portfolio";

const App = () => {
  return (
    <div>
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
      <section id="Contact">Contact</section>
    </div>
    // <Test/>
  );
};

export default App;
