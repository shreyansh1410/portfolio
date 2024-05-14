import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Netflix GPT",
    img: "/netflixGPT.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus culpa facilis nisi, iure rem maxime velit nam autem error dolorem?",
  },
  {
    id: 2,
    title: "Express Eats",
    img: "/expressEats.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus culpa facilis nisi, iure rem maxime velit nam autem error dolorem?",
  },
  {
    id: 3,
    title: "Do It - A To Do App",
    img: "/doIt.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus culpa facilis nisi, iure rem maxime velit nam autem error dolorem?",
  },
  {
    id: 4,
    title: "Urban Nest - A real estate web app",
    img: "/urbanNest.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus culpa facilis nisi, iure rem maxime velit nam autem error dolorem?",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
