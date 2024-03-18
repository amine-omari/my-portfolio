"use client";

import Logo from "@/icons/logos/Logo";
import Github from "@/icons/social/Github";
import Linkedin from "@/icons/social/Linkedin";
import Twitter from "@/icons/social/Twitter";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

const links = [
  {
    id: 0,
    url: "/",
    title: "Home",
  },
  {
    id: 1,
    url: "/about",
    title: "About",
  },
  {
    id: 2,
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    id: 3,
    url: "/contact",
    title: "Contact",
  },
];

const ICONS_LINKS = [
  {
    id: 0,
    icon: <Github />,
    link: "/",
  },
  {
    id: 1,
    icon: <Twitter />,
    link: "/",
  },
  {
    id: 2,
    icon: <Linkedin />,
    link: "/",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LOGO */}
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-4">
        {links.map(({ id, url, title }) => (
          <NavLink key={id} url={url} title={title} />
        ))}
      </div>

      {/* Social Icons Container */}
      <div className="hidden md:flex space-x-4 items-center">
        {ICONS_LINKS.map(({ id, icon, link }) => (
          <Link key={id} href={link} className="hover:scale-110 duration-300">
            {icon}
          </Link>
        ))}
      </div>

      {/* Menu Container */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between relative z-50"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-white rounded-full"></div>
          <div className="w-10 h-1 bg-white rounded-full"></div>
          <div className="w-10 h-1 bg-white rounded-full"></div>
        </button>
        {/* Menu List */}
        {open && (
          <div className="absolute top-0 left-0 h-screen w-screen bg-black text-white flex flex-col items-center justify-center text-2xl space-y-8">
            {links.map((link) => (
              <Link key={link.title} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
