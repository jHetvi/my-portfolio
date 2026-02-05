// import content
import { createElement, useState } from "react";
import { content } from "../Content";
import { useLocalization } from "../contexts/LocalizationContext";
import { SKILLS_CONSTANTS } from "../constants/textConstants";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "min(90vw, 23rem)",
    maxHeight: "90vh",
    overflowY: "auto",
    padding: "1rem",
    borderRadius: "0.5rem",
  },
  overlay: {
    padding: "1rem",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
Modal.setAppElement("#root");

// Map skill keys to translation keys
const skillTranslationKeys = {
  "React Native Development": {
    name: "skills.reactNativeDevelopment",
    para: "skills.reactNativePara",
    details: "skills.reactNativeDetails"
  },
  "Flutter Development": {
    name: "skills.flutterDevelopment",
    para: "skills.flutterPara",
    details: "skills.flutterDetails"
  },
  "Android Development": {
    name: "skills.androidDevelopment",
    para: "skills.androidPara",
    details: "skills.androidDetails"
  },
  "iOS Development": {
    name: "skills.iOSDevelopment",
    para: "skills.iosPara",
    details: "skills.iosDetails"
  },
  "API Integration & Web Services": {
    name: "skills.apiIntegration",
    para: "skills.apiPara",
    details: "skills.apiDetails"
  },
  "Mobile App Architecture": {
    name: "skills.mobileArchitecture",
    para: "skills.mobilePara",
    details: "skills.mobileArchitectureDetails"
  },
  "Cloud & Backend Integration": {
    name: "skills.cloudBackend",
    para: "skills.cloudPara",
    details: "skills.cloudBackendDetails"
  },
  "CI/CD & DevOps Tools": {
    name: "skills.ciDevOps",
    para: "skills.devOpsPara",
    details: "skills.ciDevOpsDetails"
  },
  "UI/UX Design & Prototyping": {
    name: "skills.uiUxDesign",
    para: "skills.uiUxPara",
    details: "skills.uiUxDetails"
  }
};

const Skills = () => {
  const { skills } = content;
  const { t } = useLocalization();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Get translated skill name
  const getTranslatedSkillName = (skillName) => {
    const keys = skillTranslationKeys[skillName];
    if (keys) {
      return t(keys.name);
    }
    return skillName;
  };

  // Get translated skill para
  const getTranslatedSkillPara = (skillName) => {
    const keys = skillTranslationKeys[skillName];
    if (keys) {
      return t(keys.para);
    }
    return "";
  };

  // Get translated skill details
  const getTranslatedSkillDetails = (skillName) => {
    const keys = skillTranslationKeys[skillName];
    if (keys) {
      return t(keys.details) || [];
    }
    return [];
  };

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill ? getTranslatedSkillName(selectSkill.name) : ""}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          {selectSkill ? (
            getTranslatedSkillDetails(selectSkill.name).map((detail, i) => (
              <li key={i}>{detail}</li>
            ))
          ) : (
            t("skills.skillDetails").map((detail, i) => (
              <li key={i}>{detail}</li>
            ))
          )}
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            {t(SKILLS_CONSTANTS.CLOSE)}
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-4 sm:px-5 py-10 sm:py-14">
        <h2 className="title" data-aos="fade-down">
          {t(SKILLS_CONSTANTS.TITLE)}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {t(SKILLS_CONSTANTS.SUBTITLE)}
        </h4>
        <br />
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              onClick={() => {
                setSelectSkill(skill);
                openModal();
              }}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-3 sm:gap-5 p-4 sm:p-5 rounded-md border-2 border-slate-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-8 sm:w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h6 className="text-sm sm:text-base truncate">{getTranslatedSkillName(skill.name)}</h6>
                <p className="italic text-xs sm:text-sm truncate">{getTranslatedSkillPara(skill.name)}</p>
                <div className="text-lg sm:text-xl absolute top-2 sm:top-3 right-2 sm:right-3">
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

