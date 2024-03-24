"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ url, title }) => {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <Link
      href={url}
      className={`rounded-lg px-2.5 py-0.5 duration-300 ${
        pathName === url
          ? "bg-black text-white"
          : "hover:bg-black/70 hover:text-white"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
