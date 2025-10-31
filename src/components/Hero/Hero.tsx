import { heroContent } from "../../constants/hero";

const Hero = () => {
  const { name, currentRole, education, techStack, featuredProject } =
    heroContent;

  return (
    <section
      id="home"
      className="flex h-[70vh] flex-col items-center justify-center leading-none lg:h-[80vh]"
      data-scroll-section
    >
      <h1
        className="mb-[46px] py-0 text-center font-Valencia text-[100px] leading-none text-white sm:mt-[300px] lg:mt-0 lg:text-[140px]"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        {name}
      </h1>

      <h3
        className="w-[50%] text-center font-AvenirRoman text-[22px] lg:text-[28px]"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <span className="leading-relaxed">{currentRole}</span>
      </h3>

      <h3
        className="w-[50%] text-center font-AvenirRoman text-[22px] lg:text-[28px]"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <span className="leading-relaxed">
          {education.degree} @ {education.university}{" "}
          <span className="text-[1px] lg:text-sm">
            (Expected Graduation, {education.graduation})
          </span>
        </span>
      </h3>

      <h3
        className="mt-4 w-[80%] text-center font-AvenirRoman text-[22px] leading-relaxed text-gray-400 lg:text-[28px]"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <span>
          | {techStack.categories} |<br />| {techStack.technologies} |
        </span>
      </h3>

      <p
        className="mt-12 text-center text-[16px] text-gray-400"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        Founder of{" "}
        <a
          className="text-lg font-medium text-white underline"
          href={featuredProject.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {featuredProject.name}
        </a>{" "}
        {featuredProject.description}
      </p>
    </section>
  );
};

export default Hero;
