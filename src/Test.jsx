import React from "react";
import "./Test.scss";
import { motion } from "framer-motion";

const Test = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: 0.3 * i },
      // transition: { staggerChildren: 0.5 },
    }),
    hidden: {
      opacity: 0,
    },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;