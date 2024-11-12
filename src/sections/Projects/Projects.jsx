import styles from "./ProjectsStyles.module.css";
import vitalcheckApp from "../../assets/vitalcheckApp.png";
import Corporate from "../../assets/Corporate.png";
import MusicPlayer from "../../assets/MusicPlayer.png";
import yugiapp2 from "../../assets/yugiapp2.png";
import GithubFinder from "../../assets/GithubFinder.png";
import Ecommerce from "../../assets/Ecommerce.png";
import Calc from "../../assets/Calc.png";
import RandomQuoteMachine from "../../assets/RandomQuoteMachine.png";
import ProjectCard from "../../common/ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  return (
    <motion.section
      id="projects"
      className={styles.container}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 100, x: inView ? 0 : 100 }}
      transition={{ duration: 2.5 }}
      ref={ref}
    >
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Ecommerce}
          link={"https://mohamedfarrag117.github.io/e-commerce/"}
          h3="E-Commerce"
        />
        <ProjectCard
          src={yugiapp2}
          link={"https://mohamedfarrag117.github.io/Yu-Gi-Oh-Database/"}
          h3="Yu-Gi-Oh Database"
        />
        <ProjectCard
          src={vitalcheckApp}
          link={"https://mohamedfarrag117.github.io/vital-check-react/"}
          h3="Vital Check"
        />
        <ProjectCard
          src={Corporate}
          link={"https://mohamedfarrag117.github.io/Corporate/"}
          h3="Corporate"
        />

        <ProjectCard
          src={RandomQuoteMachine}
          link={"https://mohamedfarrag117.github.io/randomquotemachine/"}
          h3="Random quote machine"
        />

        <ProjectCard
          src={GithubFinder}
          link={"https://mohamedfarrag117.github.io/Github-Finder/"}
          h3="Github Finder"
        />
        <ProjectCard
          src={MusicPlayer}
          link={"https://mohamedfarrag117.github.io/Music-Player/"}
          h3="Music Player"
        />
        <ProjectCard
          src={Calc}
          link={"https://mohamedfarrag117.github.io/CalculatorV2/"}
          h3="Calculator"
        />
      </div>
    </motion.section>
  );
}

export default Projects;
