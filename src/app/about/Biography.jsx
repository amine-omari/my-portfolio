import CircleArrow from "@/icons/general/CircleArrow";
import Logo from "@/icons/logos/Logo";
import React from "react";

const Biography = () => {
  return (
    <div className="flex flex-col space-y-12 justify-center">
      {/* Biography Title */}
      <h1 className="font-bold text-2xl">BIOGRAPHY</h1>

      {/* Biography Description */}
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
        nesciunt expedita asperiores veritatis sapiente maiores illum aspernatur
        animi fugit et? Qui, numquam quae facilis nobis culpa sequi ea sint, rem
        praesentium quos, hic nesciunt voluptatum et necessitatibus saepe quas
        temporibus at aperiam est facere? Cum aliquam laborum adipisci eum
        inventore?
      </p>

      {/* Biography Quote */}
      <span className="italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quae.
      </span>

      {/* Biography Signature */}
      <div className="self-end">
        <Logo />
      </div>

      {/* Scroll Icon SVG */}
      <div>
        <button className="hover:scale-110 hover:text-[#EBB361] duration-200">
          <CircleArrow />
        </button>
      </div>
    </div>
  );
};

export default Biography;
