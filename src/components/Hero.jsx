// import content
import { content } from "../Content";
import { useLocalization } from "../contexts/LocalizationContext";
import { HERO_CONSTANTS, SECTION_IDS } from "../constants/textConstants";

const Hero = () => {
  const { hero } = content;
  const { t } = useLocalization();

  // Function to scroll to the contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById(SECTION_IDS.CONTACT);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id={SECTION_IDS.HOME} className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {t(HERO_CONSTANTS.FIRST_NAME)}{" "}
            <span className="text-dark_primary">{t(HERO_CONSTANTS.LAST_NAME)}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{t(HERO_CONSTANTS.TITLE)}</h2>
          <br />
          <div className="flex justify-start">
            <button className="btn" onClick={scrollToContact}>{t(HERO_CONSTANTS.BTN_TEXT)}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <div
              data-aos="fade-down"
              data-aos-delay={0}
              className="flex items-center w-80 gap-5"
            >
              <h3>{t(HERO_CONSTANTS.EXPERIENCE_COUNT)}</h3>
              <p>{t(HERO_CONSTANTS.EXPERIENCE_TEXT)}</p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay={300}
              className="flex items-center w-80 gap-5 flex-row-reverse text-right"
            >
              <h3>{t(HERO_CONSTANTS.PROJECTS_COUNT)}</h3>
              <p>{t(HERO_CONSTANTS.PROJECTS_TEXT)}</p>
            </div>
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
