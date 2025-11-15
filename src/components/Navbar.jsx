'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "../styles/Navbar.css";
import { href } from 'react-router-dom';

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    {name: 'skills' , href: '/skills'},
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href} 
              className={`navbar-link group ${pathname === link.href ? 'active' : ''}`}
            >
              <span className="navbar-link-text">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
