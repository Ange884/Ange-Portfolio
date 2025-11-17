'use client'
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "../styles/contacts.css";

export default function ContactSection() {
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
          <section className="left-part">
            <div className="intro">
              <h1 className="contacts-touch">Get in Touch</h1>
              <h1 className="big-head">
                Let's Create Something <br /> Amazing Together
              </h1>

              <p>
                Get in touch with me for collaborations, projects, or opportunities. <br />
                I'd love to connect and bring ideas to life together.
              </p>
            </div>

            {Address.map((address, index) => (
              <div className="contact-item" key={index}>
                <div className="icon">{address.icon}</div>
                <div className="info">
                  <h4>{address.name}</h4>
                  <p>{address.details}</p>
                </div>
              </div>
            ))}

            <p className="copyright">
              © {new Date().getFullYear()} Ishimwe Nziza — All Rights Reserved
            </p>
          </section>

          {/* RIGHT SIDE — Form */}
          <section className="right-part">
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
