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
      { name: "Angular", icon: <SiAngular />, category: "Frontend" ,percent: 60},
      { name: "React Js", icon: <FaReact />, category: "Frontend" ,percent: 85 },
      { name: "Nuxt Js", icon: <SiNuxtdotjs />, category: "Frontend",percent: 60 },
      { name: "Vue Js", icon: <SiVuedotjs />, category: "Frontend" ,percent: 65 },
      
      { name: "Node.js", icon: <FaNodeJs />, category: "Backend" ,percent: 80 },
      { name: "MongoDB", icon: <FaDatabase />, category: "Backend",percent: 80 },
      { name: "Express", icon: <FaNodeJs />, category: "Backend",percent: 80 },
      
      { name: "React Native", icon: <FaMobileAlt />, category: "Mobile", percent: 85 },
      
      { name: "Figma", icon: <FaFigma />, category: "Design" ,percent: 70 },
      { name: "Photoshop", icon: <SiAdobephotoshop />, category: "Design" ,percent: 60},
      { name: "Adobe XD", icon: <SiAdobexd />, category: "Design" ,percent: 70},
      
      { name: "Flutter", icon: <SiFlutter />, category: "Mobile",percent: 80 },
      { name: "Next Js", icon: <SiNextdotjs />, category: "Frontend" ,percent: 85 },
      { name: "Tailwind Css", icon: <SiTailwindcss/>, category: "Frontend",percent: 85 },
      { name: "HTML", icon: <FaHtml5 />, category: "Frontend",percent: 95 },
      { name: "CSS", icon: <FaCss3Alt />, category: "Frontend" ,percent: 95 },
    { name: "MySql", icon: <SiMysql />, category: "Others" ,percent: 95 },
    { name: "Postgresql", icon: <SiPostgresql />, category: "Others",percent: 80 },

    { name: "Git/GitHub", icon: <FaGithub />, category: "Others",percent: 80 },
    { name: "JAVA", icon: <FaJava />, category: "Backend", percent: 75 },
    { name: "C", icon: <SiC />, category: "Others",percent: 80 },
    { name: "PHP", icon: <SiPhp />, category: "Backend",percent: 85 },
    { name: "C++", icon: <SiCplusplus />, category: "Others" , percent: 80 },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section className="skills-section">
      <h1 className="skills-title">My skills</h1>

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
      <div className="skill-top">
        <div className="skill-icon">{skill.icon}</div>
        <h3>{skill.name}</h3>
        <span className="skill-percent">{skill.percent}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${skill.percent}%` }}
        ></div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}