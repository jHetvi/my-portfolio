import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { useLocalization } from "../contexts/LocalizationContext";
import { content } from "../Content";

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

const AllProjects = () => {
    const { t } = useLocalization();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [allProjectsList, setAllProjectsList] = useState([]);

    // Get all projects from Content.js
    useEffect(() => {
        if (content.Projects && content.Projects.all_projects) {
            setAllProjectsList(content.Projects.all_projects);
        }
    }, []);

    // Generate category filters dynamically from project data
    const getCategories = () => {
        const categories = new Set();
        allProjectsList.forEach(project => {
            if (project.category) {
                categories.add(project.category);
            }
        });
        return Array.from(categories);
    };

    const filterProjects = () => {
        let filtered = allProjectsList;

        // Apply category filter
        if (activeFilter !== "all") {
            filtered = filtered.filter(project => project.category === activeFilter);
        }

        // Apply search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(query) ||
                (project.technologies && Array.isArray(project.technologies) &&
                    project.technologies.some(tech => tech && tech.toLowerCase().includes(query))) ||
                (project.description && project.description.toLowerCase().includes(query))
            );
        }

        return filtered;
    };

    const filteredProjects = filterProjects();

    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="bg-bg_light_primary min-h-screen py-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-dark_primary">{t('common.all_projects')}</h1>
                    <Link to="/" className="bg-dark_primary text-white px-4 py-2 rounded-lg hover:bg-dark_primary transition-colors">
                        {t('common.back_to_home')}
                    </Link>
                </div>

                {/* Filters */}
                <div className="mb-10">
                    <div className="flex flex-wrap gap-4 mb-6">
                        <button
                            className={`px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-dark_primary text-white' : 'bg-white text-dark_primary'}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            {t('common.all')}
                        </button>
                        {getCategories().map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full ${activeFilter === category ? 'bg-dark_primary text-white' : 'bg-white text-dark_primary'}`}
                                onClick={() => setActiveFilter(category)}
                            >
                                {t(`common.${category.toLowerCase().replace(/\s+/g, '_').replace(/-/g, '_')}`) || category}
                            </button>
                        ))}
                    </div>

                    <input
                        type="text"
                        placeholder={t('common.search_projects_placeholder')}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={`${project.id * 100}`}
                        >
                            <div className="h-40 bg-gradient-to-r from-primary/20 to-dark_primary/20 flex justify-center items-center p-6">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                ) : (
                                    <div className="text-center text-dark_primary/50">
                                        <p>{project.title}</p>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-dark_primary mb-3">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies && Array.isArray(project.technologies) && project.technologies.slice(0, 3).map((tech, index) => (
                                        <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies && Array.isArray(project.technologies) && project.technologies.length > 3 && (
                                        <span className="bg-gray-100 text-gray text-xs px-2 py-1 rounded-full">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <button
                                    onClick={() => openModal(project)}
                                    className="w-full py-2 bg-dark_primary/50 text-white rounded-lg hover:bg-dark_primary transition-colors duration-300"
                                >
                                    {t('common.view_details')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <h3 className="text-xl font-bold text-dark_primary mb-2">{t('common.no_projects_found')}</h3>
                        <p className="text-gray">{t('common.adjust_filters')}</p>
                    </div>
                )}
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
                            {selectedProject.image ? (
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="max-h-32 max-w-full object-contain"
                                />
                            ) : (
                                <div className="text-center text-dark_primary/50">
                                    <p>{selectedProject.title}</p>
                                </div>
                            )}
                        </div>

                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-dark_primary mb-2">{selectedProject.title}</h2>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.technologies && Array.isArray(selectedProject.technologies) && selectedProject.technologies.map((tech, index) => (
                                    <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">{t('common.description')}</h3>
                                <p className="text-gray">{selectedProject.description}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">{t('common.key_features')}</h3>
                                {selectedProject.features && Array.isArray(selectedProject.features) && selectedProject.features.length > 0 ? (
                                    <ul className="list-disc pl-5 text-gray">
                                        {selectedProject.features.map((feature, index) => (
                                            <li key={index} className="mb-1">{feature}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray italic">{t('common.no_features_available') || "No features available"}</p>
                                )}
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">{t('common.tech_details')}</h3>
                                {selectedProject.techDetails && Array.isArray(selectedProject.techDetails) && selectedProject.techDetails.length > 0 ? (
                                    <ul className="list-disc pl-5 text-gray">
                                        {selectedProject.techDetails.map((techDetails, index) => (
                                            <li key={index} className="mb-1">{techDetails}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray italic">{t('common.no_tech_details_available') || "No technical details available"}</p>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-4 mt-8">
                                {selectedProject.appStoreLink && (
                                    <a
                                        href={selectedProject.appStoreLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-dark_primary/50 text-white px-6 py-2 rounded-lg hover:bg-dark_primary transition-colors duration-300"
                                    >
                                        {t('common.view_live_on_app_store')}
                                    </a>
                                )}
                                {selectedProject.playStoreLink && (
                                    <a
                                        href={selectedProject.playStoreLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-dark_primary/50 text-white px-6 py-2 rounded-lg hover:bg-dark_primary transition-colors duration-300"
                                    >
                                        {t('common.view_live_on_play_store')}
                                    </a>
                                )}
                                {selectedProject.link && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-dark_primary/50 text-white px-6 py-2 rounded-lg hover:bg-dark_primary transition-colors duration-300"
                                    >
                                        {t('common.view_project')}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default AllProjects;
