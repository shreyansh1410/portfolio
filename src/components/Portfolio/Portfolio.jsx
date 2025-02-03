import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";

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
    link: "https://netflix-gpt.shreyanshshukla.me/",
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
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    
    // Convert to percentage (-0.5 to 0.5)
    const xPercentage = (mouseX / width - 0.5);
    const yPercentage = (mouseY / height - 0.5);
    
    // Calculate rotation (more rotation when mouse is near edges)
    const xRotation = yPercentage * 20; // Rotate around X axis based on Y position
    const yRotation = xPercentage * -20; // Rotate around Y axis based on X position
    
    // Calculate lift
    // When mouse is in a corner, that corner should go down and the opposite corner up
    const corner = {
      x: Math.sign(xPercentage),
      y: Math.sign(yPercentage)
    };
    
    // Smoothly update card transform
    card.style.transform = `
      perspective(1000px)
      rotateX(${xRotation}deg)
      rotateY(${yRotation}deg)
      scale3d(1.05, 1.05, 1.05)
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    // Reset transform with transition
    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `;
  };

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    
    // Ensure smooth transitions on mouse enter
    cardRef.current.style.transition = 'transform 0.2s ease-out';
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div
            ref={cardRef}
            className="imageContainer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
              transition: 'transform 0.2s ease-out',
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
            <img src={item.img} alt="" />
          </div>
          <div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                See demo
              </a>
            </button>
          </div>
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