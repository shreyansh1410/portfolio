import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        
        <div className="wrapper">
          <motion.div
            className="logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </motion.div>

          <motion.nav
            className="nav-links"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#Homepage">Home</a>
            <a href="#Services">Services</a>
            <a href="#Portfolio">Works</a>
            <a href="#Contact">Contact</a>
          </motion.nav>

          <motion.div
            className="actions"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/shreyansh1410/"
                aria-label="LinkedIn"
              >
                <img src="/linkedin.png" alt="linkedin" />
              </a>
              <a href="https://github.com/shreyansh1410" aria-label="GitHub">
                <img src="/github.png" alt="github" />
              </a>
              <a href="https://shreyansh1410.hashnode.dev/" aria-label="Hashnode">
                <img src="/hashnode.png" alt="hashnode" />
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/17W98ttvZmMLvwPV5N_LOTb4ANAxO0TVz/view?usp=sharing"
              className="cv-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Floating CV Button for mobile */}
      <motion.a
        href="https://drive.google.com/file/d/17W98ttvZmMLvwPV5N_LOTb4ANAxO0TVz/view?usp=sharing"
        className="floating-cv-button"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        View CV
      </motion.a>
    </>
  );
};

export default Navbar;