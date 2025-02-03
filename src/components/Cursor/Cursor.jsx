import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./Cursor.scss";

const Cursor = () => {
  // Create motion values for the cursor's position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create spring-animated versions of the motion values
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return <motion.div className="cursor" style={{ x: smoothX, y: smoothY }} />;
};

export default Cursor;
