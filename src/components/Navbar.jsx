'use client';
import Link from "next/link";
import "../styles/Navbar.css";

export default function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="navbar-link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
