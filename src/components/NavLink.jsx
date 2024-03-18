"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ url, title }) => {
  const pathName = usePathname();

  console.log(pathName);

  return <Link href={url}>{title}</Link>;
};

export default NavLink;
