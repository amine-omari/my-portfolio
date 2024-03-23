import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Image Container */}
      <div className="h-1/2 relative">
        <Image src="/hero.png" alt="Hero img" fill className="object-contain" />
      </div>

      {/* Text Container */}
      <div className="h-1/2">
        {/* Title */}
        <h1></h1>

        {/* Description */}
        <p></p>
      </div>
    </div>
  );
};

export default Homepage;
