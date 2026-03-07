import "./Navbar.module.css";

import { useNavbar } from "../../hooks/useNavbar";
import { useState } from "react";

import { NAV_LINKS, SOCIAL_LINKS } from "../../data/navLinks";
import { NavbarDropdown, NavbarHamburger } from "./NavbarMobile";

export default function Navbar() {
  const { visible, scrolled } = useNavbar();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={[
          "navbar",
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          !visible ? "navbar--hidden" : "",
          scrolled
            ? "navbar--scrolled bg-brand-dark/90 backdrop-blur-md"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4 font-sans">
          <h1 className={menuOpen ? "hidden" : ""}>
            <a href="#" className="text-2xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                brokos
              </span>
              <span className="text-brand-text">Dev</span>
            </a>
          </h1>

          <ul className="hidden md:flex space-x-8 items-center text-sm font-medium">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="nav-link text-brand-muted hover:text-brand-text transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="hidden md:flex items-center space-x-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center text-brand-text hover:text-brand-cyan hover:scale-110 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>

          <NavbarHamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </nav>

      <NavbarDropdown menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
