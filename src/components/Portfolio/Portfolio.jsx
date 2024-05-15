import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Urban Nest",
    img: "/urbanNest.png",
    desc: "A comprehensive real estate web application developed using the MERN stack, incorporating Socket.io for real-time communication, Prisma ORM for database management, and OpenStreetMap for geolocation services. The platform enables users to engage in real-time chat and view property locations based on specified coordinates.",
    link: "https://urbannest-0n5i.onrender.com/",
  },
  {
    id: 2,
    title: "Express Eats",
    img: "/expressEats.png",
    desc: "A food ordering webapp built using Reactjs and styled usign TailwindCSS. Uses your location to show the nearest restaurantd using Swiggy's API",
    link: "https://expresseats.vercel.app",
  },
  {
    id: 3,
    title: "Netflix GPT",
    img: "/netflixGPT.png",
    desc: "A Netflix like website but with the power of AI, uses OpenAI to get search results that meet your demands",
    link: "https://netflix-gpt-1410.vercel.app/",
  },
  {
    id: 4,
    title: "Do It - A To Do App",
    img: "/doIt.png",
    desc: "A simple to do app in which you can add or remove tasks built using HTML, CSS and vanilla javacript.",
    link: "https://doitbyshreyansh.onrender.com/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
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
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
