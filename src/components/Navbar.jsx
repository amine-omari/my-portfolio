"use client";

import Logo from "@/icons/logos/Logo";
import Github from "@/icons/social/Github";
import Twitter from "@/icons/social/Twitter";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Links */}
      <div className="hidden md:flex space-x-4">
        {links.map((link) => (
          <Link key={link.title} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* Social Icons Container */}
      <div>{[<Github />, <Twitter />]}</div>

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
