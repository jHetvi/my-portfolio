import { useState } from "react";
import { useLocalization } from "../contexts/LocalizationContext";
import Modal from "react-modal";
import { IoInformationCircleOutline } from "react-icons/io5";
import { EXPERIENCE_CONSTANTS } from "../constants/textConstants";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        maxWidth: "min(95vw, 35rem)",
        maxHeight: "90vh",
        overflowY: "auto",
        padding: "2rem",
        borderRadius: "0.75rem"
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        padding: "0.5rem",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
};
Modal.setAppElement("#root");

// Map company names to translation detail keys
const companyToDetailKey = {
    "SkipTheDishes": "skipTheDishes",
    "Dropify Technologies": "dropifyTechnologies",
    "Sunflower Labs": "sunflowerLabs",
    "Emerald Solutions": "emeraldSolutions",
    "Anviya Technologies": "anviyaTechnologies",
    "Redpositive Services OPC Pvt. Ltd.": "redpositiveServices",
    "Fusion Infotech": "fusionInfotech"
};

const Experience = () => {
    const { t } = useLocalization();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);

    // Function to calculate duration automatically
    const calculateDuration = (startDate, endDate) => {
        const start = new Date(startDate);
        const endDateKey = endDate === "Present" ? "present" : "lessThanAMonth";
        const end = endDate === "Present" ? new Date() : new Date(endDate);

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        let duration = "";
        if (years > 0) {
            duration += `${years} year${years > 1 ? 's' : ''}`;
        }
        if (months > 0) {
            if (duration) duration += " ";
            duration += `${months} month${months > 1 ? 's' : ''}`;
        }

        return duration || t("common.lessThanAMonth");
    };

    // Get translated details for a company
    const getTranslatedDetails = (company) => {
        const detailKey = companyToDetailKey[company];
        if (detailKey) {
            return t(`experience.details.${detailKey}`);
        }
        return [];
    };

    // Enhanced experience data with details and automatic duration calculation
    const experienceData = [
        {
            company: "SkipTheDishes",
            position: "Senior React Native Developer",
            startDate: "2024-04-01",
            endDate: "Present",
            location: "Canada"
        },
        {
            company: "Dropify Technologies",
            position: "Volunteer Application Developer",
            startDate: "2024-02-01",
            endDate: "2024-05-30",
            location: "Canada"
        },
        {
            company: "Sunflower Labs",
            position: "Senior Software Developer",
            startDate: "2022-08-01",
            endDate: "2023-08-31",
            location: "United States"
        },
        {
            company: "Emerald Solutions",
            position: "Senior Software Developer",
            startDate: "2021-02-01",
            endDate: "2022-07-31",
            location: "India"
        },
        {
            company: "Anviya Technologies",
            position: "Software Developer",
            startDate: "2020-01-01",
            endDate: "2021-02-28",
            location: "India"
        },
        {
            company: "Redpositive Services OPC Pvt. Ltd.",
            position: "Junior Software Developer",
            startDate: "2019-01-01",
            endDate: "2019-12-31",
            location: "India"
        },
        {
            company: "Fusion Infotech",
            position: "Graphics Designer",
            startDate: "2016-08-01",
            endDate: "2018-01-31",
            location: "India"
        }
    ];

    // Helper function to format date
    const formatDate = (dateStr) => {
        if (dateStr === "Present") {
            return t("common.present");
        }
        const date = new Date(dateStr);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    };

    // Get translated position
    const getTranslatedPosition = (index) => {
        return t(`experience.positions.${index}`);
    };

    // Get translated location
    const getTranslatedLocation = (index) => {
        return t(`experience.locations.${index}`);
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <section id="experience" className="min-h-fit bg-bg_light_primary">
            {/* Experience Details Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                            {selectedExperience?.company?.charAt(0)}
                        </span>
                    </div>
                    <div>
                        <h6 className="text-xl font-bold">{selectedExperience?.company}</h6>
                        <p className="text-gray">{selectedExperience?.position}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                            {getTranslatedLocation(experienceData.findIndex(item => item.company === selectedExperience?.company))}
                        </span>
                        <span className="bg-dark_primary/10 text-dark_primary px-3 py-1 rounded-full text-sm">
                            {selectedExperience && calculateDuration(selectedExperience.startDate, selectedExperience.endDate)}
                        </span>
                    </div>
                </div>
                <br />
                <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
                    {selectedExperience && getTranslatedDetails(selectedExperience.company).map((detail, i) => (
                        <li key={i}>{detail}</li>
                    ))}
                </ul>
                <br />
                <div className="flex justify-end">
                    <button onClick={closeModal} className="btn">
                        {t(EXPERIENCE_CONSTANTS.CLOSE)}
                    </button>
                </div>
            </Modal>

            <div className="md:container px-4 sm:px-5 py-10 sm:py-14">
                <div className="text-center mb-12">
                    <h2 className="title" data-aos="fade-down">
                        {t(EXPERIENCE_CONSTANTS.TITLE)}
                    </h2>
                    <h4 className="subtitle" data-aos="fade-down">
                        {t(EXPERIENCE_CONSTANTS.SUBTITLE)}
                    </h4>
                </div>

                {/* Desktop Timeline - only visible on md screens and up */}
                <div className="relative max-w-6xl mx-auto hidden md:block">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full"></div>

                    {experienceData.map((item, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 200}
                            className="relative flex items-center justify-center mb-16 last:mb-0"
                        >
                            {i % 2 === 0 ? (
                                <>
                                    {/* Date Badge - Left */}
                                    <div className="w-5/12 flex justify-end pr-8">
                                        <div className="bg-bg_light_primary text-dark_primary px-6 py-3 rounded-full font-medium text-sm shadow-lg max-w-fit">
                                            {`${formatDate(item.startDate)} - ${formatDate(item.endDate)} • ${calculateDuration(item.startDate, item.endDate)}`}
                                        </div>
                                    </div>
                                    {/* Company Card - Right */}
                                    <div className="w-5/12 pl-8">
                                        <div
                                            className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer relative group"
                                            onClick={() => {
                                                setSelectedExperience(item);
                                                openModal();
                                            }}
                                        >
                                            <div className="text-left">
                                                <h3 className="text-xl font-bold text-dark_primary mb-2">{t(`experience.companies.${i}`)}</h3>
                                                <p className="text-gray font-medium mb-2">{getTranslatedPosition(i)}</p>
                                                <div className="flex items-center gap-2">
                                                    <div className="inline-block bg-bg_light_primary text-gray px-3 py-1 rounded-md text-sm">
                                                        {getTranslatedLocation(i)}
                                                    </div>
                                                    {/* Info Icon */}
                                                    <div className="text-primary group-hover:text-dark_primary transition-colors">
                                                        <IoInformationCircleOutline size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Company Card - Left */}
                                    <div className="w-5/12 pr-8">
                                        <div
                                            className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer relative group"
                                            onClick={() => {
                                                setSelectedExperience(item);
                                                openModal();
                                            }}
                                        >
                                            <div className="text-right">
                                                <h3 className="text-xl font-bold text-dark_primary mb-2">{t(`experience.companies.${i}`)}</h3>
                                                <p className="text-gray font-medium mb-2">{getTranslatedPosition(i)}</p>
                                                <div className="flex items-center justify-end gap-2">
                                                    {/* Info Icon */}
                                                    <div className="text-primary group-hover:text-dark_primary transition-colors">
                                                        <IoInformationCircleOutline size={20} />
                                                    </div>
                                                    <div className="inline-block bg-bg_light_primary text-gray px-3 py-1 rounded-md text-sm">
                                                        {getTranslatedLocation(i)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Date Badge - Right */}
                                    <div className="w-5/12 flex justify-start pl-8">
                                        <div className="bg-bg_light_primary text-dark_primary px-6 py-3 rounded-full font-medium text-sm shadow-lg max-w-fit">
                                            {`${formatDate(item.startDate)} - ${formatDate(item.endDate)} • ${calculateDuration(item.startDate, item.endDate)}`}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Timeline - only visible on smaller than md screens */}
                <div className="md:hidden mt-8">
                    {experienceData.map((item, i) => (
                        <div key={i} className="mb-8 last:mb-0" data-aos="fade-up" data-aos-delay={i * 200}>
                            <div className="mb-4">
                                <div className="bg-bg_light_primary text-dark_primary px-4 py-2 rounded-full font-medium text-xs inline-block">
                                    {`${formatDate(item.startDate)} - ${formatDate(item.endDate)} • ${calculateDuration(item.startDate, item.endDate)}`}
                                </div>
                            </div>
                            <div
                                className="bg-white p-5 rounded-lg shadow-md border border-slate-200 cursor-pointer hover:shadow-lg transition-shadow duration-300 relative group"
                                onClick={() => {
                                    setSelectedExperience(item);
                                    openModal();
                                }}
                            >
                                <h3 className="font-bold text-dark_primary text-lg mb-1">{t(`experience.companies.${i}`)}</h3>
                                <p className="text-gray font-medium mb-2">{getTranslatedPosition(i)}</p>
                                <div className="flex items-center gap-2">
                                    <div className="inline-block bg-bg_light_primary text-gray px-3 py-1 rounded-md text-sm">
                                        {getTranslatedLocation(i)}
                                    </div>
                                    {/* Info Icon */}
                                    <div className="text-primary group-hover:text-dark_primary transition-colors">
                                        <IoInformationCircleOutline size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

