import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  return (
    <motion.section
      id="skills"
      className={styles.container}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 100 : 0 }}
      transition={{ duration: 2.5 }}
    >
      <h1 className="sectionTitle">Skills</h1>
      <motion.div
        className={styles.skillList}
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView ? 0 : -100, opacity: 100 }}
        transition={{ duration: 2.5 }}
      >
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </motion.div>
      <hr />
      <motion.div
        className={styles.skillList}
        ref={ref}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: inView ? 0 : 100, opacity: 100 }}
        transition={{ duration: 2.5 }}
      >
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </motion.div>
      <hr />
      <motion.div
        className={styles.skillList}
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView ? 0 : -100, opacity: 100 }}
        transition={{ duration: 2.5 }}
      >
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Github" />
      </motion.div>
    </motion.section>
  );
};

export default Skills;
