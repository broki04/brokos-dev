import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";

import "../css/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-evenly p-6 text-white font-sans">
        <h1>
          <a href="#" className="text-2xl font-bold">
            <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              brokos
            </span>
            <span>Dev</span>
          </a>
        </h1>

        <ul className="flex space-x-8 items-center text-md">
          <li>
            <a href="#" className="nav-link">
              Strona główna
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Informacje
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Skontaktuj się
            </a>
          </li>
        </ul>

        <ul className="flex space-x-4 items-center">
          <li>
            <a href="#">
              <GithubIcon
                size={18}
                className="hover:scale-110 hover:text-brand-cyan transition"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramIcon
                size={18}
                className="hover:scale-110 hover:text-brand-cyan transition"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterIcon
                size={18}
                className="hover:scale-110 hover:text-brand-cyan transition"
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
