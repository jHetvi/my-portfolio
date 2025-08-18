import { content } from "../Content";
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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    width: '800px',
    maxHeight: '85vh',
    overflowY: 'auto',
    borderRadius: '1rem',
    padding: 0,
    border: 'none',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000
  }
};

Modal.setAppElement('#root');

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

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 py-14">
        <div className="text-center mb-12">
          <h2 className="title" data-aos="fade-down">
            {t('projects.title')}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {t('projects.subtitle')}
          </h4>
        </div>

        {/* Project Slider */}
        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
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
          >
            {/* Project Slides */}
            {Projects.project_content.map((project) => (
              <SwiperSlide key={project.id} className="max-w-sm">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-96">
                  <div className="h-48 bg-gradient-to-r from-primary/20 to-dark_primary/20 flex justify-center items-center p-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark_primary mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
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
                      className="w-full py-2 bg-dark_primary/50 text-white rounded-lg hover:bg-dark_primary transition-colors duration-300"
                    >
                      {t('projects.readMore')}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* See All Projects Slide */}
            <SwiperSlide className="max-w-sm">
              <Link to="/all-projects" className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-96 flex flex-col justify-center items-center p-6 cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex justify-center items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark_primary mb-2">{t('projects.seeAll')}</h3>
                <p className="text-gray text-center">{t('projects.exploreMore')}</p>
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
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-h-32 max-w-full object-contain"
              />
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-dark_primary mb-2">{selectedProject.title}</h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">{t('Description')}</h3>
                <p className="text-gray">{selectedProject.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">{t('Key features:')}</h3>
                <ul className="list-disc pl-5 text-gray">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">{t('Tech Details:')}</h3>
                <ul className="list-disc pl-5 text-gray">
                  {selectedProject.techDetails.map((techDetails, index) => (
                    <li key={index} className="mb-1">{techDetails}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {selectedProject.appStoreLink && (
                  <a
                    href={selectedProject.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark_primary/50 text-white px-6 py-2 rounded-lg hover:bg-dark_primary transition-colors duration-300"
                  >
                    {t('View live on App Store')}
                  </a>
                )}
                {selectedProject.playStoreLink && (
                  <a
                    href={selectedProject.playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark_primary/50 text-white px-6 py-2 rounded-lg hover:bg-dark_primary transition-colors duration-300"
                  >
                    {t('View live on Play Store')}
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark_primary/50 text-white px-6 py-2 rounded-lg hover:bg-dark_primary transition-colors duration-300"
                  >
                    {t('View Project')}
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
