import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export const NAV_LINKS = [
  { label: "Strona główna", href: "/", portfolio: false },
  { label: "Usługi", href: "/#services", portfolio: false },
  { label: "Cennik", href: "/#prices", portfolio: false },
  { label: "Umiejętności", href: "/#skills", portfolio: false },
  {
    label: "Portfolio",
    href: "/portfolio",
    portfolio: false,
    dropdown: [
      { label: "Wszystkie", href: "/portfolio" },
      { label: "Strony WWW", href: "/portfolio#websites" },
      { label: "Sklepy", href: "/portfolio#shops" },
      { label: "Aplikacje", href: "/portfolio#apps" },
    ],
  },
  { label: "Kontakt", href: "/#contact", portfolio: false },
  { label: "Wszystkie", href: "/portfolio", portfolio: true },
  { label: "Strony WWW", href: "/portfolio#websites", portfolio: true },
  { label: "Sklepy", href: "/portfolio#shops", portfolio: true },
  { label: "Aplikacje", href: "/portfolio#apps", portfolio: true },
];

export const SOCIAL_LINKS = [
  { icon: GithubIcon, href: "https://github.com/broki04", label: "GitHub" },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/brokikrul",
    label: "Instagram",
  },
  { icon: TwitterIcon, href: "https://x.com/brokicwoki", label: "Twitter" },
];
