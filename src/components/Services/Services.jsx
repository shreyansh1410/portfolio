import { useRef } from "react";
import "./Services.scss";
import { color, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer">
        <p>
          I focus on helping your company grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title title2">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            tenetur est corrupti non adipisci minus quod consequuntur fugit
            nostrum enim eaque itaque numquam error veritatis velit, libero
            dolorum doloribus culpa.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            tenetur est corrupti non adipisci minus quod consequuntur fugit
            nostrum enim eaque itaque numquam error veritatis velit, libero
            dolorum doloribus culpa.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" variants={variants}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            tenetur est corrupti non adipisci minus quod consequuntur fugit
            nostrum enim eaque itaque numquam error veritatis velit, libero
            dolorum doloribus culpa.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" variants={variants}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            tenetur est corrupti non adipisci minus quod consequuntur fugit
            nostrum enim eaque itaque numquam error veritatis velit, libero
            dolorum doloribus culpa.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
