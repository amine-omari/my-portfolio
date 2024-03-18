import Link from "next/link";

const NavLink = ({ link }) => {
  return <Link href={link.url}>{link.title}</Link>;
};

export default NavLink;
