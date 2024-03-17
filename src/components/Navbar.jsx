import Logo from "@/icons/Logo";
import Link from "next/link";

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
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LOGO */}
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div>
        {/* Menu Button */}
        <button className="w-10 h-8 flex flex-col justify-between">
          <div className="w-10 h-1 bg-black rounded-full"></div>
          <div className="w-10 h-1 bg-black rounded-full"></div>
          <div className="w-10 h-1 bg-black rounded-full"></div>
        </button>

        {/* Menu List */}
        <div>
          {links.map((link) => (
            <Link key={link.title} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
