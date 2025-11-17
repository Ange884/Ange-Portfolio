import { useState } from "react";
import "../styles/skills.css";

export default function SkillsSection() {
  const categories = ["All", "Frontend", "Backend", "Mobile", "Design", "Others"];

  const skillsData = [
    { name: "HTML", level: 95, category: "Frontend" },
    { name: "CSS", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Frontend" },
    { name: "React", level: 80, category: "Frontend" },
    { name: "Node.js", level: 70, category: "Backend" },
    { name: "Express", level: 65, category: "Backend" },
    { name: "MongoDB", level: 60, category: "Backend" },
    { name: "React Native", level: 75, category: "Mobile" },
    { name: "Figma", level: 88, category: "Design" },
    { name: "Git/GitHub", level: 82, category: "Others" },
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

      <div className="skills-list">
        {filteredSkills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
