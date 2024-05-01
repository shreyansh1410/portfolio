import Test from "./Test";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";

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
      <section>Project 1</section>
      <section>Project 2</section>
      <section>Project 3</section>
      <section id="Contact">Contact</section>
    </div>
    // <Test/>
  );
};

export default App;
