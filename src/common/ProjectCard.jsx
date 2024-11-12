import { motion } from "framer-motion";
const ProjectCard = ({ src, link, h3 }) => {
  return (
    <a href={link} target="_blank">
      <div style={{ overflow: "hidden" }}>
        <motion.img
          className="hover"
          src={src}
          alt={`${h3} logo`}
          whileHover={{ skewX: 3.5, transformOrigin: "center center" }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <h3>{h3}</h3>
    </a>
  );
};

export default ProjectCard;
