import styles from "./Navbar.module.css";

import { useNavbar } from "../../hooks/useNavbar";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { NAV_LINKS, SOCIAL_LINKS } from "../../data/navLinks";
import { NavbarDropdown, NavbarHamburger } from "./NavbarMobile";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const { visible, scrolled } = useNavbar();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { pathname } = useLocation();
  const isPortfolio = pathname === "/portfolio";

  const links = isPortfolio
    ? NAV_LINKS.filter(
        (l) =>
          l.portfolio || l.label === "Strona główna" || l.label === "Kontakt",
      )
    : NAV_LINKS.filter((l) => !l.portfolio);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={[
          styles.navbar,
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          !visible ? styles.navbar__hidden : "",
          scrolled && !menuOpen ? styles.navbar__scrolled : "",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4 font-sans">
          <h1 className={menuOpen ? "hidden" : ""}>
            <Link to="/" className="text-2xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                brokos
              </span>
              <span className="text-brand-text">Dev</span>
            </Link>
          </h1>

          <ul className="hidden md:flex space-x-8 items-center text-sm font-medium">
            {links.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to={link.href}
                  className={`${styles.nav__link} flex items-center gap-1 transition-colors duration-300 ${link.href === "/portfolio" && pathname === "/portfolio" ? "text-brand-cyan" : "text-brand-muted hover:text-brand-text"}`}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {link.dropdown && (
                  <div
                    className={`absolute top-full left-0 pt-3 transition-all duration-200 ${dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
                  >
                    <div className="bg-brand-dark/95 backdrop-blur-md border border-brand-surface rounded-xl overflow-hidden min-w-40">
                      {link.dropdown.map(({ label, href }) => (
                        <Link
                          key={href}
                          to={href}
                          className="block px-4 py-3 text-sm text-brand-muted hover:text-brand-cyan hover:bg-brand-surface transition-all duration-200"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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
