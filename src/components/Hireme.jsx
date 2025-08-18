import { content } from "../Content";
import { useLocalization } from "../contexts/LocalizationContext";
import { HIREME_CONSTANTS, SECTION_IDS } from "../constants/textConstants";

const Hireme = () => {
  const { Hireme } = content;
  const { t } = useLocalization();

  // Function to scroll to the contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById(SECTION_IDS.CONTACT);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {t(HIREME_CONSTANTS.TITLE)}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {t(HIREME_CONSTANTS.SUBTITLE)}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{t(HIREME_CONSTANTS.PARA)}</p>
            <br />
            <button
              className="btn bg-dark_primary text-white"
              onClick={scrollToContact}
            >
              {t(HIREME_CONSTANTS.BTN_TEXT)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
