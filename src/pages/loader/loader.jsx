import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Represents the Loader component.
 * Displays an animated loader with SVG icons.
 *
 * @component
 * @param {function} setShowLoader - A function to set whether the loader should be displayed.
 */

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    // Automatically hide the loader after a delay
    setTimeout(() => {
      setShowLoader(false);
    }, 5000);
  }, [setShowLoader]);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
  <motion.svg
      width="700"
      height="700"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      
      <motion.line
        x1="220"
        y1="230"
        x2="360"
        y2="370"
        stroke="#f3f3f3"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="220"
        y1="370"
        x2="360"
        y2="230"
        stroke="#f3f3f3"
        variants={draw}
        custom={2.5}
      />
      
      <motion.line
        x1="220"
        y1="230"
        x2="360"
        y2="370"
        stroke="#48a3c6"
        custom={3}
        variants={draw}
      />
      <motion.line
        x1="220"
        y1="370"
        x2="360"
        y2="230"
        stroke="#48a3c6"
        custom={3.5}
        variants={draw}
      />

<motion.line
        x1="220"
        y1="230"
        x2="360"
        y2="370"
        stroke="yellow"
        variants={draw}
        custom={4}
      />
      <motion.line
        x1="220"
        y1="370"
        x2="360"
        y2="230"
        stroke="#yellow"
        variants={draw}
        custom={4.5}
      />
      
      <motion.line
        x1="220"
        y1="230"
        x2="360"
        y2="370"
        stroke="#00CE44"
        variants={draw}
        custom={5}
      />
      <motion.line
        x1="220"
        y1="370"
        x2="360"
        y2="230"
        stroke="#00CE44"
        variants={draw}
        custom={5.5}
      />
      
    </motion.svg>
      </div>
  );
};

export default Loader;