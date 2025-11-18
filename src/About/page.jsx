'use client';

import Image from "next/image";
import AngeImage from "../../public/images/Ange.jpeg";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaRocket } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import "../styles/about.css";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track to allow resets

  useEffect(() => {
    let observer;

    const initObserver = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            console.log('Observer triggered: About in view!');
            setIsVisible(true);
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current && observer) {
          observer.unobserve(sectionRef.current);
        }
      };
    };

    const cleanup = initObserver();

    // Initial hash check
    if (window.location.hash === '#about' && !hasAnimated) {
      console.log('Initial hash match: Triggering animation!');
      setTimeout(() => {
        setIsVisible(true);
        setHasAnimated(true);
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }

    // Hashchange listener
    const handleHashChange = () => {
      if (window.location.hash === '#about') {
        console.log('Hashchange: About link clicked!');
        setIsVisible(false);
        setHasAnimated(false);
        setTimeout(() => {
          setIsVisible(true);
          setHasAnimated(true);
          if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); 
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      cleanup();
    };
  }, [hasAnimated]); 

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

  console.log('Render: isVisible=', isVisible, 'hasAnimated=', hasAnimated); // Debug: Check state

  return (
    <section ref={sectionRef} className={`about-section ${isVisible ? 'animate' : ''}`} id="about">
      {/* LEFT IMAGE */}
      <div className="left-image">
        <div className="decorative-bg"></div>
        <Image src={AngeImage} alt="Nziza Ange" className="profile-image" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="about-right">
        <h1 className="about-heading">ABOUT ME</h1>
        <h2 className="about-subheading">Building Digital Products That Matter</h2>

        <p className="about-paragraph">
          I am a passionate frontend and mobile developer who enjoys turning ideas<br />
          into clean, interactive, and visually appealing digital experiences.<br />
          My focus is on creating designs that feel smooth, modern, and intuitive.
        </p>

        <p className="about-paragraph">
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