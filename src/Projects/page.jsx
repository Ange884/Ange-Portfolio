'use client'
import { Cagliostro } from "next/font/google";
import "../styles/projects.css";
import { FaLink, FaGithub, FaArrowRight } from "react-icons/fa";

export default function ProjectsSection() {

  const featuredProjects = [
    {
      id: 1,
      title: "ShopFlow Platform",
      description:
        "A full-featured e-commerce platform with real-time management and a seamless checkout experience.",
      image: "/images/luv.jpg",
      link: "https://github.com/Ange884/TradeWise-mobile.git",
      github: "https://github.com/Ange884/TradeWise-mobile.git",
      tech: "React Js",
      Category: "E-Commerce"
    },
    {
      id: 2,
      title: "House-Fund Automata",
      description:
        "A student and teacher portal with dashboards, role-based access, course management, and analytics.",
      image: "/images/house.jpg",
      link: "https://github.com/Ange884/House-fund-automata.git",
      github: "https://github.com/Ange884/House-fund-automata.git",
      tech: "React Native",
      Category: "E-Commerce"
    },
    {
      id: 3,
      title: "MotherLink System",
      description:
        "A health and emergency management system for supporting mothers with assistance and verified records.",
      image: "/images/mother.jpg",
      link: "https://github.com/Ange884/MotherLink-Mobile.git",
      github: "https://github.com/Ange884/MotherLink-Mobile.git",
      tech: "React Native",
      Category: "Health"
    },
    {
      id: 4,
      title: "TravelEase Booking",
      description:
        "A beautiful travel booking platform for flights, hotels, and trip planning with a smooth UI/UX.",
      image: "/images/hotel.jpg",
      link: "https://github.com/Ange884/Travel-App-Wanderlyn-.git",
      github: "https://github.com/Ange884/Travel-App-Wanderlyn-.git",
      tech: "Next Js",
      Category: "Finance"
    }
  ];

  return (
    <div className="projects">
      <div className="heading">Portfolio</div>
      <h1 className="project-heading">Featured Projects</h1>
      <p className="intro">
        Showcasing my latest work in web development, <br />
        design, and digital innovation.
      </p>

      <div className="projects-grid">
  {featuredProjects.map((project) => (
    <div className="project-card" key={project.id}>

      <div className="image-wrapper">
        <img src={project.image} alt={project.title} />

        <div className="overlay">
          <a href={project.link} className="icon-btn" target="blank">
            <FaLink />
          </a>
          <a href={project.github} className="icon-btn" target="blank">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="field">
        <h4 className="tech">{project.tech}</h4>
        <h4 className="category">{project.Category}</h4>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="description">{project.description}</p>
      <a
         href={project.github}
       target="_blank"
        rel="noopener noreferrer"
        className="viewbtn"
    >
  View Project <FaArrowRight className="arrow-icon" />
</a>

    </div>
  ))}
      </div>
    </div>
  );
}