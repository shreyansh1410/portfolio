import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links/Links";
import "./sidebar.scss";
import ToggleButton from "./ToggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleSetOpen = () => {
    setOpen(!open);
  };

  return (
    <motion.div className="sidebar z-99" animate={open ? "open" : "closed"} >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open}/>
    </motion.div>
  );
};

export default Sidebar;
