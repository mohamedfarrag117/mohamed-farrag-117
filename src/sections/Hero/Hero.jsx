import styles from "./HeroStyles.module.css";
import mypic from "../../assets/mypic.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import LatestCV from "../../assets/LatestCV.pdf";
import { useTheme } from "../../common/ThemeContext";
import { motion } from "framer-motion";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <motion.section
      id="hero"
      className={styles.container}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      transition={{ duration: 2.5, stiffness: 120, type: "spring" }}
    >
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={mypic} alt="Profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mohamed
          <br />
          Farrag
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/Mohamed07839446" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>

          <a href="https://github.com/mohamedfarrag117" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-farrag-570195233/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses
        </p>
        <a className={styles.download} href={LatestCV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </motion.section>
  );
}

export default Hero;
