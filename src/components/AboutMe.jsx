import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpeg";

/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Fantastic to meet you!</motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a Frontend Developer open to new and exciting opportunities.</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  Today, I find myself at the completion of a fantastic learning experience with 
       <span style={{ color: "var(--hl-color)" }}> AcademyXI</span>. My playground? The captivating
                  universe of <span style={{ color: "var(--hl-color)" }}> React</span>.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                I'm passionate about the  
                <span style={{ color: "var(--hl-color)" }}> dynamic intersection of people, projects, 
                and code</span>. With a background in people and project management, 
                I've embarked on a journey to learn coding, bringing together my skills 
                in a unique way. My mission is to not only excel in the technical aspects 
                but also to use my knowledge to{" "}
                  <span style={{ color: "var(--hl-color)" }}> support and empower individuals and teams</span>.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                Outside of learning to code I enjoy playing Dungeons & Dragons, motorbike riding, rock climbing, writing adventure campaigns and spending time in nature.
                </motion.p>

              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
    
  );
};

export default AboutMe;