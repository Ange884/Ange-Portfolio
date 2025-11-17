import { useState } from "react";
import "../styles/skills.css";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaFigma, FaDatabase, FaMobileAlt, FaGithub,FaJava,
 } from "react-icons/fa";

 import {
  SiC,
  SiCplusplus,
  SiPostgresql,
  SiMysql,
  SiPhp,
  SiAdobexd,
  SiAdobephotoshop,
  SiFlutter,
  SiNextdotjs,
  SiTailwindcss,
  SiNuxtdotjs, 
  SiVuedotjs,
  SiAngular
} from "react-icons/si";

export default function Skills() {
  const categories = ["All", "Frontend", "Backend", "Mobile", "Design", "Others"];

  const skillsData = [
      { name: "Angular", icon: <SiAngular />, category: "Frontend" },
      { name: "React Js", icon: <FaReact />, category: "Frontend" },
      { name: "Nuxt Js", icon: <SiNuxtdotjs />, category: "Frontend" },
      { name: "Vue Js", icon: <SiVuedotjs />, category: "Frontend" },
      
      { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
      { name: "MongoDB", icon: <FaDatabase />, category: "Backend" },
      { name: "Express", icon: <FaNodeJs />, category: "Backend" },
      
      { name: "React Native", icon: <FaMobileAlt />, category: "Mobile" },
      
      { name: "Figma", icon: <FaFigma />, category: "Design" },
      { name: "Photoshop", icon: <SiAdobephotoshop />, category: "Design" },
      { name: "Adobe XD", icon: <SiAdobexd />, category: "Design" },
      
      { name: "Flutter", icon: <SiFlutter />, category: "Mobile" },
      { name: "Next Js", icon: <SiNextdotjs />, category: "Frontend" },
      { name: "Tailwind Css", icon: <SiTailwindcss/>, category: "Frontend" },
      { name: "HTML", icon: <FaHtml5 />, category: "Frontend" },
      { name: "CSS", icon: <FaCss3Alt />, category: "Frontend" },
    { name: "MySql", icon: <SiMysql />, category: "Others" },
    { name: "Postgresql", icon: <SiPostgresql />, category: "Others" },

    { name: "Git/GitHub", icon: <FaGithub />, category: "Others" },
    { name: "JAVA", icon: <FaJava />, category: "Backend" },
    { name: "C", icon: <SiC />, category: "Others" },
    { name: "PHP", icon: <SiPhp />, category: "Others" },
    { name: "C++", icon: <SiCplusplus />, category: "Others" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section className="skills-section">
      <h1 className="skills-title">My Skills</h1>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
