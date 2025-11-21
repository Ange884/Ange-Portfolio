'use client'
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "../styles/contacts.css";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const leftPartRef = useRef(null);
  const rightPartRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    
    const leftObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-left');
        leftObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const rightObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-right');
        rightObserver.unobserve(entry.target);
      }
    }, observerOptions);

    if (leftPartRef.current) leftObserver.observe(leftPartRef.current);
    if (rightPartRef.current) rightObserver.observe(rightPartRef.current);

    return () => {
      if (leftPartRef.current) leftObserver.unobserve(leftPartRef.current);
      if (rightPartRef.current) rightObserver.unobserve(rightPartRef.current);
    };
  }, []);

  const Address = [
    { icon: <FiMail color="#70A9A1" size={21} />, name: "Email", details: "ishimwenzizaangell@gmail.com" },
    { icon: <FiPhone color="#70A9A1" size={21} />, name: "Phone", details: "+250792644" },
    { icon: <FiMapPin color="#70A9A1" size={21} />, name: "Location", details: "Kigali, Rwanda" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiBase = process.env.NEXT_PUBLIC_API_URL;

    try {
      if (!apiBase) {
      setErrorMsg("Missing NEXT_PUBLIC_API_URL. Please configure your backend URL.");
      return;
    }

    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    const formData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      subject: e.target[3].value,
      message: e.target[4].value,
    };

      const res = await fetch(`${apiBase.replace(/\/$/, "")}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await res.text();
      let data;

      try {
        data = text ? JSON.parse(text) : {};
      } catch (parseErr) {
        throw new Error("Received non-JSON response from server.");
      }

      if (res.ok) {
        setSuccessMsg(data.message);
        e.target.reset();
      } else {
        setErrorMsg(data.error || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contacts">
      <div className="background-content">
        <div className="contact-wrapper">

          {/* LEFT SIDE */}
          <section className="left-part" ref={leftPartRef}>
            <div className="intro">
              <h1 className="contacts-touch">Get in Touch</h1>
              <h1 className="big-head">Let's Create Something Amazing Together</h1>
              <p>Get in touch with me for collaborations, projects, or opportunities. <br />I'd love to connect and bring ideas to life together.</p>
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
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin"><FaLinkedin /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon github"><FaGithub /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter"><FaTwitter /></a>
            </div>

            <p className="copyright">© {new Date().getFullYear()} Ishimwe Nziza — All Rights Reserved</p>
          </section>

          {/* RIGHT SIDE — Form */}
          <section className="right-part" ref={rightPartRef}>
            <form className="contacts-form" onSubmit={handleSubmit}>
              <div className="row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Message" required></textarea>

              <button className="send-btn" type="submit">{loading ? "Sending..." : "Send Message"}</button>

              {successMsg && <p className="success">{successMsg}</p>}
              {errorMsg && <p className="error">{errorMsg}</p>}
            </form>
          </section>

        </div>
      </div>
    </div>
  );
}
