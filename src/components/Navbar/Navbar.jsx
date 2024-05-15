import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper -z-99">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Shreyansh Shukla
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://www.linkedin.com/in/shreyansh1410/">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/shreyxnsh.14/">
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a href="https://github.com/shreyansh1410">
            <img src="/github.png" alt="github" />
          </a>
          <a href="https://shreyansh1410.hashnode.dev/">
            <img src="/hashnode.png" alt="hashnode" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
