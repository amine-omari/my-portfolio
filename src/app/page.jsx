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
        <h1>Amine Omari CREATIVE DEVELOPER</h1>

        {/* Description */}
        <p>
          Hello! I'm a frontend developer. My job is to make websites that
          people love to use. I'm really good at coding with HTML, CSS, and
          JavaScript. I also know how to use special tools like React.js and
          Next.js to make websites even better. I like to add cool animations to
          websites using GSAP to make them more interesting. I'm very careful
          about the small details and always aim for top quality. I'm excited to
          work with you to bring your ideas to life and make your website stand
          out in the online world. Let's team up to make something awesome!
        </p>
      </div>
    </div>
  );
};

export default Homepage;
