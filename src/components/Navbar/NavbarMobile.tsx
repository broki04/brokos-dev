import { XIcon, MenuIcon } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "../../data/navLinks";
import { Link, useLocation } from "react-router-dom";

interface Props {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export function NavbarHamburger({ menuOpen, setMenuOpen }: Props) {
  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden ml-auto flex items-center text-brand-muted hover:text-brand-text transition-colors duration-200"
      aria-label="Menu"
    >
      {menuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
    </button>
  );
}

export function NavbarDropdown({ menuOpen, setMenuOpen }: Props) {
  const closeMenu = () => setMenuOpen(false);
  const { pathname } = useLocation();
  const isPortfolio = pathname === "/portfolio";

  const links = isPortfolio
    ? NAV_LINKS.filter(
        (l) =>
          l.portfolio || l.label === "Strona główna" || l.label === "Kontakt",
      )
    : NAV_LINKS.filter((l) => !l.portfolio);

  return (
    <div
      className={[
        "fixed top-0 left-0 w-full z-40 md:hidden overflow-hidden transition-all duration-300 ease-in-out",
        menuOpen
          ? "max-h-screen opacity-100"
          : "max-h-0 opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <div className="bg-brand-dark/95 backdrop-blur-md px-8 pb-6 flex flex-col gap-6 border-t border-brand-surface">
        <ul className="flex flex-col gap-4 pt-6">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                to={href}
                onClick={closeMenu}
                className="text-brand-muted hover:text-brand-text transition-colors duration-200 text-sm font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-4 border-t border-brand-surface pt-4">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center text-brand-muted hover:text-brand-cyan transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
