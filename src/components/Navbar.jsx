'use client';
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    {name:"Reviews" , href:"#reviews"},
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      
      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className={`line ${open ? "open" : ""}`} />
        <div className={`line ${open ? "open" : ""}`} />
        <div className={`line ${open ? "open" : ""}`} />
      </div>

      {/* Menu */}
      <ul className={`navbar-list ${open ? "show" : ""}`}>
        {links.map((link) => (
          <li key={link.name} onClick={() => setOpen(false)}>
            <a href={link.href} className="navbar-link">
              <span className="navbar-link-text">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
}
