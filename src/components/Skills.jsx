// import content
import { createElement, useState } from "react";
import { content } from "../Content";
import { useLocalization } from "../contexts/LocalizationContext";
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
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

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
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          {selectSkill?.details?.map((detail, i) => (
            <li key={i}>{detail}</li>
          )) || t("skills.skillDetails").map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            {t("skills.close")}
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {t("skills.title")}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {t("skills.subtitle")}
        </h4>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                gap-5 p-5 rounded-md border-2 border-slate-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div className="flex-1">
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div className="text-xl absolute top-3 right-3">
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
