import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-center items-center lg:h-screen px-4 py-4 md:py-10">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-full max-w-6xl">
        {/* Left Div: Text Content */}
        <div className="w-full md:w-[70%] flex flex-col justify-center p-5 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
            Hey, I'm Izhan, a{" "}
            <a className="font-bold view cursor-none">Frontend Developer</a> in
            his humble beginnings.
          </h1>
          <p className="text-sm md:text-base lg:text-xl">
            I am passionate about creating engaging digital experiences that
            blend creativity and technology. With a strong focus on front-end
            development, I aim to leverage my skills to build user-friendly
            websites and applications. My goal is to continuously learn and
            contribute to innovative projects that make a positive impact.
          </p>
        </div>

        {/* Right Div: Image wrapped in an anchor tag */}
        <div className="w-full md:w-[30%] h-auto relative overflow-hidden flex justify-center items-center">
          <a href="#your-target-section" className="block">
            <Image
              src="/images/hero_image_bnw.png"
              alt="Hero Image"
              layout="responsive"
              width={300} // Adjust this value as needed
              height={300} // Adjust this value as needed
              className="rounded-md"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
