"use client";

import Logo from "@/icons/logos/Logo";
import Github from "@/icons/socials/Github";
import Linkedin from "@/icons/socials/Linkedin";
import Twitter from "@/icons/socials/Twitter";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

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

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariant = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between max-w-[1400px] mx-auto px-4 lg:text-lg">
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
          className="w-7 h-6 flex flex-col justify-between relative z-50"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-7 h-1 bg-black rounded-full origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-7 h-1 bg-black rounded-full"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-7 h-1 bg-black rounded-full origin-left"
          ></motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <motion.div
            variants={listVariant}
            initial="closed"
            animate="opened"
            className="fixed inset-0 h-screen w-screen bg-black text-white flex flex-col items-center justify-center text-2xl space-y-8 z-40"
          >
            {links.map((link) => (
              <motion.div key={link.title} variants={listItemVariant}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
