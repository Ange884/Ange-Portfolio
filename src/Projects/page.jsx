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
        "A full-featured e-commerce platform with real-time inventory management and a seamless checkout experience.",
      image: "/images/luv.jpg",
      link: "/projects/shopflow",
      github: "https://github.com/example/shopflow",
      tech: "React Js",
      Category: "E-Commerce"
    },
    {
      id: 2,
      title: "House-Fund Automata",
      description:
        "A student and teacher portal with dashboards, role-based access, course management, and analytics.",
      image: "/images/house.jpg",
      link: "/projects/educonnect",
      github: "https://github.com/example/educonnect",
      tech: "React Native",
      Category: "E-Commerce"
    },
    {
      id: 3,
      title: "MotherLink System",
      description:
        "A health and emergency management system for supporting mothers with real-time assistance and verified records.",
      image: "/images/mother.jpg",
      link: "/projects/motherlink",
      github: "https://github.com/example/motherlink",
      tech: "React Native",
      Category: "Health"
    },
    {
      id: 4,
      title: "TravelEase Booking",
      description:
        "A beautiful travel booking platform for flights, hotels, and trip planning with a smooth UI/UX.",
      image: "/images/hotel.jpg",
      link: "/projects/travelease",
      github: "https://github.com/example/travelease",
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

      {/* IMAGE + OVERLAY WRAPPER */}
      <div className="image-wrapper">
        <img src={project.image} alt={project.title} />

        <div className="overlay">
          <a href={project.link} className="icon-btn">
            <FaLink />
          </a>
          <a href={project.github} className="icon-btn">
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
      <button className="viewbtn">view Project <FaArrowRight className="arrow-icon" /></button>

    </div>
  ))}
      </div>
    </div>
  );
}