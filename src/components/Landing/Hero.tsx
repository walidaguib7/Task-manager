import HeroImage from "../../assets/scrum-board-monochromatic.svg";

const Hero = () => {
  return (
    <div className="pt-6 px-24 max-sm:px-8">
      <div className="pt-10 flex items-center justify-between gap-3 max-md:pt-16 max-md:justify-center">
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl font-semibold leading-tight w-[600]  max-lg:text-center max-lg:w-fit">
            Harmony in Every Task: Your Productivity Symphony
          </h2>
          <p className="text-xl leading-normal w-[500px] max-lg:text-center max-lg:w-fit">
            Elevate your work with seamless task organization and collaboration.
            Unleash the power of productive harmony in every aspect of your day.
          </p>
        </div>
        <div className="h-full w-full max-lg:hidden max-md:hidden">
          <img className="image w-[450px] h-[400px] " src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
