'use client';
import "../styles/action.css";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectCollab() {
  return (
    <div className="project-collab">
        <h1 className="cta-title">Have a project in mind? <br/>Let's bring your ideas to life!</h1>
      <p>
        I'm a passionate developer, eager to collaborate, <br />
       learn fast and contribute to your project's success. <br />
       Let's connect and make something amazing together!
      </p>

      <button className="cta-button">Let's work Together <FaArrowRight className="arrow-icon" /></button>
    </div>
  );
}

