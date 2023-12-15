import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./Button";

const Experience = ({ name }) => {
  const [ref] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const animationProps = {
    initial: { x: "-10vw", opacity: 0, scale: 0.5 },
    animate: { x: 0, opacity: 1, scale: 1 }, // Always animate in, regardless of inView or screen size
    transition: { duration: 0.4, ease: "easeInOut" },
    whileHover: { scale: 1.05 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          {/* Experience Section */}
          <motion.div className="col-12" ref={ref} {...animationProps}>
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Experience content */}
              <motion.h4 variants={paragraphVariants}>Experience</motion.h4>
              <motion.div className="contentDescription" variants={staggerVariants} initial="initial" animate="animate">
                {experienceData.map((item, index) => (
                  <motion.p key={index} variants={paragraphVariants}>
                    <br />
                    <strong>{item.title}</strong>
                    <br />
                    {item.company} | {item.location} | {item.date}
                    <br />
                    {item.description}
                    <br />
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div className="col-12" ref={ref} {...animationProps}>
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Skills content */}
              <motion.h4 variants={paragraphVariants}>Skills</motion.h4>
              <motion.div className="contentDescription" variants={staggerVariants} initial="initial" animate="animate">
                {skillsData.map((category, index) => (
                  <div key={index}>
                    <br />
                    <strong>{category.title}</strong>: <br />
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex}>
                        {skillIndex !== category.skills.length - 1 ? `${skill} | ` : skill}
                      </span>
                    ))}
                    <br />
                  </div>
                ))}
                <a href="/projectImages/Kean Bayneslow - Resume.pdf" download="Kean Bayneslow - Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button name="Download Resume" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

const experienceData = [
  {
    title: "Supervisor - Support Centre",
    company: "Sonder",
    location: "Sydney, Australia",
    date: "2022 - 2023",
    description:
      "An experienced Supervisor skilled in leadership, problem-solving, and delivering exceptional customer service to consistently exceed expectations.",
  },
  {
    title: "Partners Manager",
    company: "Helio Restoration",
    location: "Sydney, Australia",
    date: "2019 - 2022",
    description:
      "Enhanced business operations by overseeing growth strategies, national supplier panels, contractor training, and project management, with a focus on key account growth and profitability.",
  },
  {
    title: "Restoration Manager",
    company: "AJ Grant Group",
    location: "Sydney, Australia",
    date: "2016 - 2019",
    description:
      "Project management, stakeholder engagement, and scoping, emphasising quality assurance and disaster response to deliver optimal results for clients.",
  },
  {
    title: "Police Officer",
    company: "WA Police",
    location: "Perth, Australia",
    date: "2009 - 2016",
    description:
      "Complex situation management, investigations, emergency response, and community engagement, with a strong background in leading multi-agency search and rescue operations.",
  },
];

const skillsData = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6)", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Node"],
  },
  {
    title: "Tools",
    skills: ["Git/Github", "NPM", "Chrome Dev Tools"],
  },
  {
    title: "Design",
    skills: ["Figma", "Wireframing", "User Testing"],
  },
];
