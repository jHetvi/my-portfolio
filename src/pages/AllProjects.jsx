import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { useLocalization } from "../contexts/LocalizationContext";
import { content } from "../Content";
import { COMMON_CONSTANTS } from "../constants/textConstants";

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

// Project translation keys mapping
const projectTranslationKeys = {
    "Skip-Restaurant Partners": {
        title: "projects.skipRestaurantPartners",
        description: "projects.skipRestaurantPartnersDesc",
        category: "projects.reactNativeMobileApp"
    },
    "XMed - Online Doctor Consultation": {
        title: "projects.xMedOnlineDoctorConsultation",
        description: "projects.xMedDesc",
        category: "projects.flutterMobileApp"
    },
    "BloodWale Bhaiyya": {
        title: "projects.bloodWaleBhaiyya",
        description: "projects.bloodWaleBhaiyyaDesc",
        category: "projects.androidMobileApp"
    },
    "Hola Medico": {
        title: "projects.holaMedico",
        description: "projects.holaMedicoDesc",
        category: "projects.iOSMobileApp"
    },
    "School Management App": {
        title: "projects.schoolManagementApp",
        description: "projects.schoolManagementAppDesc",
        category: "projects.reactNativeApp"
    },
    "Pocket Chat": {
        title: "projects.pocketChat",
        description: "projects.pocketChatDesc",
        category: "projects.reactNativeApp"
    },
    "Rising Star Tennis Academy": {
        title: "projects.risingStarTennisAcademy",
        description: "projects.risingStarTennisAcademyDesc",
        category: "projects.fullStack"
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
    "SoAct": {
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

// Map category names to translation keys
const categoryToTranslationKey = {
    'Mobile App': COMMON_CONSTANTS.MOBILE_APP,
    'Web App': COMMON_CONSTANTS.WEB_APP,
    'Full Stack': COMMON_CONSTANTS.FULL_STACK,
    'AI': COMMON_CONSTANTS.AI,
    'Desktop': COMMON_CONSTANTS.DESKTOP,
    'Backend': COMMON_CONSTANTS.BACKEND,
    'IoT': COMMON_CONSTANTS.IOT,
    'React Native Mobile App': COMMON_CONSTANTS.REACT_NATIVE_MOBILE_APP,
    'Flutter Mobile App': COMMON_CONSTANTS.FLUTTER_MOBILE_APP,
    'Android Mobile App': COMMON_CONSTANTS.ANDROID_MOBILE_APP,
    'iOS Mobile App': COMMON_CONSTANTS.IOS_MOBILE_APP,
    'Android & iOS': COMMON_CONSTANTS.ANDROID_IOS,
    'React Native App': COMMON_CONSTANTS.REACT_NATIVE_APP,
    'Flutter App': COMMON_CONSTANTS.FLUTTER_APP,
    'Android App': COMMON_CONSTANTS.ANDROID_APP,
    'iOS App': COMMON_CONSTANTS.IOS_APP,
    'UI/UX': COMMON_CONSTANTS.UI_UX,
    'React Native': COMMON_CONSTANTS.REACT_NATIVE,
    'Flutter': COMMON_CONSTANTS.FLUTTER,
    'Android': COMMON_CONSTANTS.ANDROID,
    'iOS': COMMON_CONSTANTS.IOS,
};

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

    // Get translated category name
    const getTranslatedCategory = (category) => {
        const translationKey = categoryToTranslationKey[category];
        if (translationKey) {
            return t(translationKey);
        }
        // Fallback: try to create translation key from category
        const fallbackKey = `common.${category.toLowerCase().replace(/\s+/g, '_').replace(/-/g, '_')}`;
        const translated = t(fallbackKey);
        return translated !== fallbackKey ? translated : category;
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
                    <h1 className="text-3xl font-bold text-dark_primary">{t(COMMON_CONSTANTS.ALL_PROJECTS)}</h1>
                    <Link to="/" className="bg-dark_primary text-white px-4 py-2 rounded-lg hover:bg-dark_primary transition-colors">
                        {t(COMMON_CONSTANTS.BACK_TO_HOME)}
                    </Link>
                </div>

                {/* Filters */}
                <div className="mb-10">
                    <div className="flex flex-wrap gap-4 mb-6">
                        <button
                            className={`px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-dark_primary text-white' : 'bg-white text-dark_primary'}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            {t(COMMON_CONSTANTS.ALL)}
                        </button>
                        {getCategories().map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full ${activeFilter === category ? 'bg-dark_primary text-white' : 'bg-white text-dark_primary'}`}
                                onClick={() => setActiveFilter(category)}
                            >
                                {getTranslatedCategory(category)}
                            </button>
                        ))}
                    </div>

                    <input
                        type="text"
                        placeholder={t(COMMON_CONSTANTS.SEARCH_PROJECTS_PLACEHOLDER)}
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
                                        alt={getTranslatedProjectTitle(project.title)}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                ) : (
                                    <div className="text-center text-dark_primary/50">
                                        <p>{getTranslatedProjectTitle(project.title)}</p>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-dark_primary mb-3">{getTranslatedProjectTitle(project.title)}</h3>
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
                                    {getTranslatedProjectDescription(project.title)}
                                </p>
                                <button
                                    onClick={() => openModal(project)}
                                    className="w-full py-2 bg-dark_primary/50 text-white rounded-lg hover:bg-dark_primary transition-colors duration-300"
                                >
                                    {t(COMMON_CONSTANTS.VIEW_DETAILS)}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <h3 className="text-xl font-bold text-dark_primary mb-2">{t(COMMON_CONSTANTS.NO_PROJECTS_FOUND)}</h3>
                        <p className="text-gray">{t(COMMON_CONSTANTS.ADJUST_FILTERS)}</p>
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
                                    alt={getTranslatedProjectTitle(selectedProject.title)}
                                    className="max-h-32 max-w-full object-contain"
                                />
                            ) : (
                                <div className="text-center text-dark_primary/50">
                                    <p>{getTranslatedProjectTitle(selectedProject.title)}</p>
                                </div>
                            )}
                        </div>

                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-dark_primary mb-2">{getTranslatedProjectTitle(selectedProject.title)}</h2>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.technologies && Array.isArray(selectedProject.technologies) && selectedProject.technologies.map((tech, index) => (
                                    <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">{t(COMMON_CONSTANTS.DESCRIPTION)}</h3>
                                <p className="text-gray">{getTranslatedProjectDescription(selectedProject.title)}</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">{t(COMMON_CONSTANTS.KEY_FEATURES)}</h3>
                                {selectedProject.features && Array.isArray(selectedProject.features) && selectedProject.features.length > 0 && selectedProject.features[0] !== "WIP" ? (
                                    <ul className="list-disc pl-5 text-gray">
                                        {selectedProject.features.map((feature, index) => (
                                            <li key={index} className="mb-1">{feature}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray italic">{t(COMMON_CONSTANTS.NO_FEATURES_AVAILABLE)}</p>
                                )}
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">{t(COMMON_CONSTANTS.TECH_DETAILS)}</h3>
                                {selectedProject.techDetails && Array.isArray(selectedProject.techDetails) && selectedProject.techDetails.length > 0 && selectedProject.techDetails[0] !== "WIP" ? (
                                    <ul className="list-disc pl-5 text-gray">
                                        {selectedProject.techDetails.map((techDetails, index) => (
                                            <li key={index} className="mb-1">{techDetails}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray italic">{t(COMMON_CONSTANTS.NO_TECH_DETAILS_AVAILABLE)}</p>
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
                                        {t(COMMON_CONSTANTS.VIEW_LIVE_ON_APP_STORE)}
                                    </a>
                                )}
                                {selectedProject.playStoreLink && (
                                    <a
                                        href={selectedProject.playStoreLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-dark_primary/50 text-white px-6 py-2 rounded-lg hover:bg-dark_primary transition-colors duration-300"
                                    >
                                        {t(COMMON_CONSTANTS.VIEW_LIVE_ON_PLAY_STORE)}
                                    </a>
                                )}
                                {selectedProject.link && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-dark_primary/50 text-white px-6 py-2 rounded-lg hover:bg-dark_primary transition-colors duration-300"
                                    >
                                        {t(COMMON_CONSTANTS.VIEW_PROJECT)}
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

