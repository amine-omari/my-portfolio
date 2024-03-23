import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Image Container */}
      <div className="h-1/2 relative">
        <Image src="/hero.png" alt="Hero img" fill className="object-contain" />
      </div>

      {/* Text Container */}
      <div className="h-1/2 flex flex-col space-y-8 items-center justify-center">
        {/* Title */}
        <h1 className="text-4xl font-bold">Amine Omari</h1>

        {/* Description */}
        <p>
          Hi👋! I'm a frontend developer. I create websites people enjoy using.
          I'm skilled in HTML, CSS, and JavaScript, and I use tools like
          React.js and Next.js to enhance websites. I add fun animations using
          GSAP to make them more appealing. I pay close attention to detail and
          strive for excellence. Let's collaborate to bring your ideas to life
          and make your website shine online!
        </p>
      </div>
    </div>
  );
};

export default Homepage;
