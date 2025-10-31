import { aboutContent } from "../../constants/about";

const AboutMe = () => {
  const { quote, intro, selfaiDescription, currentGoal, highlights } =
    aboutContent;

  return (
    <section
      className="relative mx-auto mb-80 h-fit max-md:w-[90vw] lg:h-[100vh] lg:w-[1200px] xl:w-[1600px]"
      data-scroll-section
    >
      <h1
        className="p-0 font-AvenirHeavy text-[80px] leading-none text-white/20 md:text-[140px] lg:text-[200px] lg:text-white/20"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        ABOUT ME
      </h1>
      <div className="ml-[60px] pt-12 lg:mr-[57px] lg:ml-[263px]">
        <p
          className="my-6 italic text-white/40"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          "{quote}"
        </p>
        <h3
          className="w-[95%] bg-gradient-to-r from-white/80 to-white bg-clip-text font-AvenirMedium text-[16px] text-transparent sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1400"
        >
          {intro}
          <br />
          <br />
          {selfaiDescription}
          <br />
          <br />
          {currentGoal}
        </h3>
        <ul
          className="mx-auto mt-10 flex flex-col justify-center space-y-2 text-[16px] text-white/60"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          {highlights.map((highlight, index) => (
            <li key={index}>
              {highlight.icon} {highlight.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
