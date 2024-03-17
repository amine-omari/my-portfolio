import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LOGO */}
      <div>
        <Link href="/">AMINE OMARI</Link>
      </div>
      <div>
        {/* Menu Button */}
        <button className="w-10 h-8 flex flex-col justify-between">
          <div className="w-10 h-1 bg-black rounded-full"></div>
          <div className="w-10 h-1 bg-black rounded-full"></div>
          <div className="w-10 h-1 bg-black rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
