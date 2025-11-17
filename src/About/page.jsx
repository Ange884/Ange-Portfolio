'use client';

import Image from "next/image";
import AngeImage from "../../public/images/Ange.jpeg"; // make sure this is a proper image file like .png/.jpg
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaRocket } from "react-icons/fa";
import "../styles/about.css";

export default function AboutSection() {
  const featureList = [
    {
      icon: <FaLaptopCode size={50} color="#70A9A1" />,
      title: "Frontend Development",
      description: "Building responsive and modern interfaces",
    },
    {
      icon: <FaMobileAlt size={50} color="#70A9A1" />,
      title: "Mobile Apps",
      description: "Creating smooth and interactive mobile experiences",
    },
    {
      icon: <FaPaintBrush size={50} color="#70A9A1" />,
      title: "UI/UX Design",
      description: "Designing clean and user-friendly interfaces",
    },
    {
      icon: <FaRocket size={50} color="#70A9A1" />,
      title: "Fast Performance",
      description: "Optimizing applications for speed and efficiency",
    },
  ];

  return (
    <section className="about-section" id="about">
      {/* LEFT IMAGE */}
      <div className="left-image">
        <div className="decorative-bg"></div>
        <Image src={AngeImage} alt="Nziza Ange"  className="profile-image" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="about-right">
        <h1 className="about-heading">ABOUT ME</h1>
        <h2 className="about-subheading">Building Digital Products That Matter</h2>

        <p>
          I am a passionate frontend and mobile developer who enjoys turning ideas<br />
          into clean, interactive, and visually appealing digital experiences.<br />
          My focus is on creating designs that feel smooth, modern, and intuitive.
        </p>

        <p>
          With every project, I aim to blend creativity with technical precision to<br />
          deliver products that are fast, responsive, and meaningful to users.<br />
          I continue learning modern tools to build better interfaces every day.
        </p>

        {/* FEATURES */}
        <section className="features">
          {featureList.map((feature, index) => (
            <div className="feature" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-text">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* DOWNLOAD BUTTON */}
        <div className="about-button">
          <button className="button">Download Resume</button>
        </div>
      </div>
    </section>
  );
}