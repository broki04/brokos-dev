import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import "../css/navbar.css";
import { useNavbar } from "../hooks/useNavbar";

const NAV_LINKS = [
  { label: "Strona główna", href: "#" },
  { label: "Informacje", href: "#about" },
  { label: "Portfolio", href: "#projects" },
  { label: "Kontakt", href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: GithubIcon, href: "https://github.com/broki04", label: "GitHub" },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/brokikrul",
    label: "Instagram",
  },
  { icon: TwitterIcon, href: "https://x.com/brokicwoki", label: "Twitter" },
];

export default function Navbar() {
  const { visible, scrolled } = useNavbar();

  return (
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
        <h1>
          <a href="#" className="text-2xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              brokos
            </span>
            <span className="text-brand-text">Dev</span>
          </a>
        </h1>

        <ul className="flex space-x-8 items-center text-sm font-medium">
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

        <ul className="flex items-center space-x-4">
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
      </div>
    </nav>
  );
}
