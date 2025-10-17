'use client';
import Link from 'next/link';
import "../styles/Navbar.css"

export default function Navbar() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    // Note: 'Footer' seems unusual for a navbar; consider moving to footer component if applicable
    { name: 'Footer', href: '/footer' },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="navbar-link group">
              <span className="navbar-link-text">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}