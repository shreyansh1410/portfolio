import Test from "./Test";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Project 1</section>
      <section>Project 2</section>
      <section>Project 3</section>
      <section>Contact</section>
    </div>
    // <Test/>
  );
};

export default App;
