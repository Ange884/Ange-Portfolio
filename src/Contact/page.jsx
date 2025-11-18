'use client'
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "../styles/contacts.css";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function ContactSection() {
  const leftPartRef = useRef(null);
  const rightPartRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const leftObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-left');
          leftObserver.unobserve(entry.target);
        }
      },
      observerOptions
    );

    const rightObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-right');
          rightObserver.unobserve(entry.target);
        }
      },
      observerOptions
    );

    if (leftPartRef.current) {
      leftObserver.observe(leftPartRef.current);
    }

    if (rightPartRef.current) {
      rightObserver.observe(rightPartRef.current);
    }

    return () => {
      if (leftPartRef.current) leftObserver.unobserve(leftPartRef.current);
      if (rightPartRef.current) rightObserver.unobserve(rightPartRef.current);
    };
  }, []);

  const Address = [
    {
      icon: <FiMail color="#70A9A1" size={21} />,
      name: "Email",
      details: "ishimwenzizaangell@gmail.com",
    },
    {
      icon: <FiPhone color="#70A9A1" size={21} />,
      name: "Phone",
      details: "+250792644",
    },
    {
      icon: <FiMapPin color="#70A9A1" size={21} />,
      name: "Location",
      details: "Kigali, Rwanda",
    },
  ];
  return (
    <div className="contacts">
      <div className="background-content">
        <div className="contact-wrapper">

          {/* LEFT SIDE — Address + copyright */}
          <section className="left-part" ref={leftPartRef}>
            <div className="intro">
              <h1 className="contacts-touch">Get in Touch</h1>
              <h1 className="big-head">
                Let's Create Something Amazing Together
              </h1>

              <p>
                Get in touch with me for collaborations, projects, or opportunities. <br />
                I'd love to connect and bring ideas to life together.
              </p>
            </div>

            <div className="contact-details">
              {Address.map((address, index) => (
                <div className="contact-item" key={index}>
                  <div className="icon">{address.icon}</div>
                  <div className="info">
                    <h4>{address.name}</h4>
                    <p>{address.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="follow">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon github"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon twitter"
              >
                <FaTwitter />
              </a>
            </div>
            <p className="copyright">
              © {new Date().getFullYear()} Ishimwe Nziza — All Rights Reserved
            </p>
          </section>

          {/* RIGHT SIDE — Form */}
          <section className="right-part" ref={rightPartRef}>
            <form className="contacts-form">
              <div className="row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>

              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>

              <button className="send-btn">Send Message</button>
            </form>
          </section>

        </div>
      </div>
    </div>
  );
}