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
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title title2">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <h2>Development</h2>
          <p>
            I specialize in developing full-fledged websites from scratch using
            the MERN stack (MongoDB, Express.js, React.js, and Node.js). My
            expertise includes creating robust back-end infrastructures,
            intuitive front-end interfaces, and seamless integration of
            real-time features to deliver dynamic and responsive web
            applications.
          </p>
          <button>
            <a href="#Contact">Go</a>
          </button>
        </motion.div>
        <motion.div className="box">
          <h2>Designing</h2>
          <p>
            I excel in designing visually appealing and user-friendly websites
            using tools like Figma, Dribbble, and Canva. My design process
            involves creating detailed wireframes and prototypes in Figma,
            drawing inspiration and best practices from Dribbble, and leveraging
            Canva for stunning graphics and visuals, ensuring a cohesive and
            engaging user experience.
          </p>
          <button>
            <a href="#Contact">Go</a>
          </button>
        </motion.div>
        <motion.div className="box" variants={variants}>
          <h2>Problem Solving</h2>
          <p>
            I have achieved high ratings on competitive programming platforms
            such as CodeChef, Codeforces, and LeetCode, demonstrating my
            exceptional problem-solving skills. My ability to tackle complex
            algorithms and data structure challenges with efficiency and
            creativity sets me apart as an excellent problem solver in the
            coding community.
          </p>
          <button>
            <a href="#Contact">Go</a>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
