import { useLocalization } from "../contexts/LocalizationContext";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Pagination, EffectCoverflow, Autoplay } from "swiper";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PROJECTS_CONSTANTS } from "../constants/textConstants";
import { content } from "../Content";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: 'min(95vw, 50rem)',
    maxHeight: '90vh',
    overflowY: 'auto',
    borderRadius: '1rem',
    padding: 0,
    border: 'none',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

Modal.setAppElement('#root');

// Project translation keys mapping
const projectTranslationKeys = {
  "Skip-Restaurant Partners": {
    title: "projects.skipRestaurantPartners",
    description: "projects.skipRestaurantPartnersDesc",
    category: "projects.reactNativeMobileApp",
    features: "projects.skipRestaurantPartnersFeatures",
    techDetails: "projects.skipRestaurantPartnersTechDetails"
  },
  "XMed - Online Doctor Consultation": {
    title: "projects.xMedOnlineDoctorConsultation",
    description: "projects.xMedDesc",
    category: "projects.flutterMobileApp",
    features: "projects.xMedFeatures",
    techDetails: "projects.xMedTechDetails"
  },
  "BloodWale Bhaiyya": {
    title: "projects.bloodWaleBhaiyya",
    description: "projects.bloodWaleBhaiyyaDesc",
    category: "projects.androidMobileApp",
    features: "projects.bloodWaleBhaiyyaFeatures",
    techDetails: "projects.bloodWaleBhaiyyaTechDetails"
  },
  "Hola Medico": {
    title: "projects.holaMedico",
    description: "projects.holaMedicoDesc",
    category: "projects.iOSMobileApp",
    features: "projects.holaMedicoFeatures",
    techDetails: "projects.holaMedicoTechDetails"
  },
  "School Management App": {
    title: "projects.schoolManagementApp",
    description: "projects.schoolManagementAppDesc",
    category: "projects.reactNativeApp",
    features: "projects.schoolManagementAppFeatures",
    techDetails: "projects.schoolManagementAppTechDetails"
  },
  "Pocket Chat ": {
    title: "projects.pocketChat",
    description: "projects.pocketChatDesc",
    category: "projects.reactNativeApp",
    features: "projects.pocketChatFeatures",
    techDetails: "projects.pocketChatTechDetails"
  },
  "Rising Star Tennis Academy": {
    title: "projects.risingStarTennisAcademy",
    description: "projects.risingStarTennisAcademyDesc",
    category: "projects.fullStack",
    features: "projects.risingStarTennisAcademyFeatures",
    techDetails: "projects.risingStarTennisAcademyTechDetails"
  },
  "TRIVIA 360: Quiz Game": {
    title: "projects.trivia360QuizGame",
    description: "projects.trivia360Desc",
    category: "projects.iOS"
  },
  "WORTHPOINT": {
    title: "projects.worthpoint",
    description: "projects.worthpointDesc",
    category: "projects.iOS"
  },
  "WORTHPOINT MAPS": {
    title: "projects.worthpointMaps",
    description: "projects.worthpointMapsDesc",
    category: "projects.iOS"
  },
  "ZINNIAX  IONM": {
    title: "projects.zinniaxIonm",
    description: "projects.zinniaxIonmDesc",
    category: "projects.flutter"
  },
  "ViCi ATHLETE": {
    title: "projects.viciAthlete",
    description: "projects.viciAthleteDesc",
    category: "projects.androidIos"
  },
  "ViCi Performance": {
    title: "projects.viciPerformance",
    description: "projects.viciPerformanceDesc",
    category: "projects.android"
  },
  "Heey There": {
    title: "projects.heeyThere",
    description: "projects.heeyThereDesc",
    category: "projects.flutter"
  },
  "SoAct ": {
    title: "projects.soAct",
    description: "projects.soActDesc",
    category: "projects.iOS"
  },
  "DPH- Think like a girl": {
    title: "projects.dphThinkLikeAGirl",
    description: "projects.dphThinkLikeAGirlDesc",
    category: "projects.android"
  },
  "AES(Petrol Pump Management)": {
    title: "projects.aesPetrolPumpManagement",
    description: "projects.aesPetrolPumpManagementDesc",
    category: "projects.uiUx"
  }
};

const Projects = () => {
  const { Projects } = content;
  const { t } = useLocalization();

  // State for modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Get translated project title
  const getTranslatedProjectTitle = (projectTitle) => {
    const keys = projectTranslationKeys[projectTitle];
    if (keys) {
      return t(keys.title);
    }
    return projectTitle;
  };

  // Get translated project description
  const getTranslatedProjectDescription = (projectTitle) => {
    const keys = projectTranslationKeys[projectTitle];
    if (keys) {
      return t(keys.description);
    }
    return "";
  };

  // Get translated project category
  const getTranslatedProjectCategory = (projectTitle) => {
    const keys = projectTranslationKeys[projectTitle];
    if (keys) {
      return t(keys.category);
    }
    return "";
  };

  // Get translated project features
  const getTranslatedProjectFeatures = (projectTitle) => {
    const keys = projectTranslationKeys[projectTitle];
    if (keys && keys.features) {
      const translated = t(keys.features);
      if (Array.isArray(translated) && translated.length > 0) {
        return translated;
      }
    }
    // Fallback to original features - search in all projects
    const project = content.projects.find(p => p.title.trim() === projectTitle.trim());
    return project?.features || [];
  };

  // Get translated project tech details
  const getTranslatedProjectTechDetails = (projectTitle) => {
    const keys = projectTranslationKeys[projectTitle];
    if (keys && keys.techDetails) {
      const translated = t(keys.techDetails);
      if (Array.isArray(translated) && translated.length > 0) {
        return translated;
      }
    }
    // Fallback to original tech details - search in all projects
    const project = content.projects.find(p => p.title.trim() === projectTitle.trim());
    return project?.techDetails || [];
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 py-14">
        <div className="text-center mb-12">
          <h2 className="title" data-aos="fade-down">
            {t(PROJECTS_CONSTANTS.TITLE)}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {t(PROJECTS_CONSTANTS.SUBTITLE)}
          </h4>
        </div>

        {/* Project Slider */}
        <div className="max-w-6xl mx-auto w-full" data-aos="fade-up">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: "auto",
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: "auto",
                spaceBetween: 30,
              },
            }}
          >
            {/* Project Slides */}
            {Projects.project_content.map((project) => (
              <SwiperSlide key={project.id} className="w-[85%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[33%]">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-auto min-h-[22rem] sm:min-h-[26rem] md:min-h-[28rem]">
                  <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-r from-primary/20 to-dark_primary/20 flex justify-center items-center p-4 sm:p-6">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={getTranslatedProjectTitle(project.title)}
                        className="max-h-full max-w-full object-contain"
                      />
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-dark_primary mb-2 sm:mb-3">
                      {getTranslatedProjectTitle(project.title)}
                    </h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray text-xs px-2 py-1 rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => openModal(project)}
                      className="w-full py-2 bg-dark_primary/50 text-white rounded-lg hover:bg-dark_primary transition-colors duration-300 text-sm sm:text-base"
                    >
                      {t(PROJECTS_CONSTANTS.READ_MORE)}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* See All Projects Slide */}
            <SwiperSlide className="w-[85%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[33%]">
              <Link to="/all-projects" className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-auto min-h-[22rem] sm:min-h-[26rem] md:min-h-[28rem] flex flex-col justify-center items-center p-4 sm:p-6 cursor-pointer">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-primary/20 flex justify-center items-center mb-4 sm:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark_primary mb-2">{t(PROJECTS_CONSTANTS.SEE_ALL)}</h3>
                <p className="text-gray text-center text-sm sm:text-base">{t(PROJECTS_CONSTANTS.EXPLORE_MORE)}</p>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Project Details"
      >
        {selectedProject && (
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray z-10 hover:text-dark_primary transition-colors"
            >
              <FaTimes size={24} />
            </button>

            <div className="bg-gradient-to-r from-primary/20 to-dark_primary/20 p-8 flex justify-center items-center">
              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={getTranslatedProjectTitle(selectedProject.title)}
                  className="max-h-32 max-w-full object-contain"
                />
              )}
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-dark_primary mb-2">
                {getTranslatedProjectTitle(selectedProject.title)}
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">{t(PROJECTS_CONSTANTS.DESCRIPTION)}</h3>
                <p className="text-gray">{getTranslatedProjectDescription(selectedProject.title)}</p>
              </div>

{selectedProject.features && selectedProject.features.length > 0 && selectedProject.features[0] !== "WIP" && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">{t(PROJECTS_CONSTANTS.KEY_FEATURES)}</h3>
                  <ul className="list-disc pl-5 text-gray">
                    {getTranslatedProjectFeatures(selectedProject.title).map((feature, index) => (
                      <li key={index} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.techDetails && selectedProject.techDetails.length > 0 && selectedProject.techDetails[0] !== "WIP" && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">{t(PROJECTS_CONSTANTS.TECH_DETAILS)}</h3>
                  <ul className="list-disc pl-5 text-gray">
                    {getTranslatedProjectTechDetails(selectedProject.title).map((techDetails, index) => (
                      <li key={index} className="mb-1">{techDetails}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-4 mt-8">
                {selectedProject.appStoreLink && (
                  <a
                    href={selectedProject.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark_primary/50 text-white px-6 py-2 rounded-lg hover:bg-dark_primary transition-colors duration-300"
                  >
                    {t(PROJECTS_CONSTANTS.VIEW_LIVE_ON_APP_STORE)}
                  </a>
                )}
                {selectedProject.playStoreLink && (
                  <a
                    href={selectedProject.playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark_primary/50 text-white px-6 py-2 rounded-lg hover:bg-dark_primary transition-colors duration-300"
                  >
                    {t(PROJECTS_CONSTANTS.VIEW_LIVE_ON_PLAY_STORE)}
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark_primary/50 text-white px-6 py-2 rounded-lg hover:bg-dark_primary transition-colors duration-300"
                  >
                    {t(PROJECTS_CONSTANTS.VIEW_PROJECT)}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;

