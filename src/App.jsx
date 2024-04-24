import Test from "./Test";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>Parallax</section>
      <section id="Servies">Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Project 1</section>
      <section>Project 2</section>
      <section>Project 3</section>
      <section id="Contact">Contact</section>
    </div>
    // <Test/>
  );
};

export default App;
