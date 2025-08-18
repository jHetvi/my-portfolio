import { useState } from "react";
import { content } from "../Content";
import { useLocalization } from "../contexts/LocalizationContext";
import Modal from "react-modal";
import { IoInformationCircleOutline } from "react-icons/io5"; // Import info icon

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "35rem",
        width: "90%",
        maxHeight: "85vh", // Set maximum height relative to viewport height
        overflowY: "auto", // Enable vertical scrolling
        padding: "1.5rem",
        borderRadius: "0.5rem"
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        padding: "1rem",
        zIndex: 1000
    },
};
Modal.setAppElement("#root");

const Experience = () => {
    const { t } = useLocalization();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);

    // Function to calculate duration automatically
    const calculateDuration = (startDate, endDate) => {
        const start = new Date(startDate);
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

        return duration || "Less than a month";
    };

    // Enhanced experience data with details and automatic duration calculation
    const experienceData = [
        {
            company: "SkipTheDishes",
            position: "Senior React Native Developer",
            startDate: "2024-04-01",
            endDate: "Present",
            location: "Canada",
            details: [
                "Lead development of high-performance Android, iOS, and React Native apps integrating secure RESTful APIs with OAuth 2.0, token-based auth, and SSL pinning, while ensuring PCI compliance and data privacy standards.",
                "Developed workflows for GitHub Actions, improve Fastlane configuration for streamlined testing and TestFlight deployment, and shift code delivery from Microsoft App Center to Amazon S3 + CDN for faster, more reliable distribution. Integrated Sentry for real-time error monitoring and Session Replay for improved visibility and analytics into user behavior.",
                "Utilized FCM notifications and collaborated with Pendo.io to enhance app architecture and code structure, and worked with product, design, and QA teams to deliver accessible, localized financial user experiences.",
                "Mentor interns and junior developers, serve as team PR approver, and enforce clean code, testing, and secure coding best practices through technical leadership and peer reviews."
            ]
        },
        {
            company: "Dropify Technologies",
            position: "Volunteer Application Developer",
            startDate: "2024-02-01",
            endDate: "2024-05-30",
            location: "Canada",
            details: [
                "Flutter: Spearheaded the development of a mobile application using Flutter, implementing Flutter Flow to streamline UI design and development processes. Leveraged Flutter's widget-based architecture to create dynamic and responsive user interfaces, ensuring optimal user experience across multiple devices.",
                "ReactJS: Collaborated with the design team to integrate ReactJS with builder.io for efficient content management and customization within the application. Utilized builder.io's drag-and-drop interface and React components to enable seamless content creation and editing, enhancing the application's flexibility and scalability.",
                "PostgreSQL: Designed and implemented a PostgreSQL database using Supabase for data storage and management. Utilized Supabase's real-time capabilities and built-in authentication features to enhance data security and provide a seamless user experience.",
                "Project Contribution: Contributed to project documentation and knowledge sharing, documenting project specifications, technical details, and best practices. Actively participated in team meetings and brainstorming sessions, providing valuable insights and suggestions for project enhancement and optimization."
            ]
        },
        {
            company: "Sunflower Labs",
            position: "Senior Software Developer",
            startDate: "2022-08-01",
            endDate: "2023-08-31",
            location: "United States",
            details: [
                "Project Leadership and Feature Implementation: Spearheaded and managed multiple Android/iOS/React Native based-projects from conception to deployment, showcasing expertise in components-based development, efficient state management, and ensuring adherence to coding standards and best practices. Contributed to feature development, bug fixing, and implemented a wide array of functionalities such as User-Friendly Responsive Interfaces, Search Options, Location Maps, Chat Support/Call Back Functions, Data Caching, Multi-Factor Authentication, Payment Gateways Integration, Multi-Device Synchronization, and integration with Blockchain, AI, AR, IoT, etc. Ensured seamless integration with older systems, hardware devices, and social channels, leveraging tools for Third-Party Integration and multiple databases.",
                "Enhanced UI/UX and Device Features Utilization: Elevated user experiences through Material Design principles, custom animations, and responsive design, while harnessing app’s capacity to utilize device features effectively, including GPS or AR navigation, Body sensor integration for medical applications, 3-D modeling, and Push Notifications.",
                "App Deployment and Store Presence: Developed, tested, and successfully uploaded applications to the Google Play Store and Apple App Store, ensuring compliance with respective guidelines and requirements, expanding app reach and visibility to a global audience.",
                "Agile Methodologies and CI/CD Implementation: Collaborated within Agile methodologies, actively participating in CICD pipeline setup, leveraging tools like Jira and Trello for efficient management, conducting regular code reviews, discussions, and sprint planning sessions weekly, ensuring streamlined development processes and enhanced team productivity.",
                "Optimized API Integration: Proficiently integrated and optimized RESTful APIs into multiple applications, handling data fetching, parsing, and seamless API responses integration, leading to the development of efficient and reliable app functionalities.",
                "Contributed to Team Success: Collaborated effectively within cross-functional teams, providing mentorship and expertise in Android/iOS/React Native and contributing to improving development processes, fostering a culture of continuous improvement and innovation."
            ]
        },
        {
            company: "Emerald Solutions",
            position: "Senior Software Developer",
            startDate: "2021-02-01",
            endDate: "2022-07-31",
            location: "India",
            details: [
                "End-to-End App Development: Conceptualized, developed, and successfully launched apps on multiple platforms, demonstrating proficiency in full app development, from ideation to deployment, ensuring adherence to project timelines and client specifications.",
                "Client Engagement and Communication: Managed effective communication with clients, comprehensively addressing their needs, providing regular updates, and ensuring client satisfaction throughout the development lifecycle, fostering long-term partnerships.",
                "App Maintenance and Enhancement: Conducted proactive app maintenance, including bug fixes, feature enhancements, and seamless database integration, ensuring app stability, performance, and adherence to evolving industry standards.",
                "Multifaceted App Expertise: Leveraged multifaceted expertise in Android/iOS/React Native/Flutter by developing multiple apps and creating custom components, contributing to the versatility and uniqueness of app interfaces while adhering to design guidelines and ensuring optimal user experiences.",
                "Project Management and Documentation: Played a pivotal role in project management, actively contributing to project planning, meticulous testing methodologies, and comprehensive project documentation, ensuring project transparency, efficiency and successful outcomes."
            ]
        },
        {
            company: "Anviya Technologies",
            position: "Software Developer",
            startDate: "2020-01-01",
            endDate: "2021-02-28",
            location: "India",
            details: [
                "Continuous Training and Skill Acquisition: Actively participated in structured training, expanding proficiency in Android development using both Java and Kotlin, iOS development with Objective-C and Swift, as well as React Native app development with javascript/typescript in RN CLI & Epo.",
                "Research and Development Initiatives: Conducted intensive research and development activities, exploring diverse widgets, components, packages, 3rd part API & SDK within multiple apps, and extending this expertise to RN and iOS platforms. Integrated iOS-specific functionalities like CoreData for data persistence, alongside created Spring Boot's RESTful APIs for seamless backend communication. Leveraged MongoDB for scalable and efficient data storage, enhancing overall application performance and functionality.",
                "App Development: Successfully conceived, developed, and deployed apps of RN & iOS (Objective-C/Swift), showcasing innovation, technical competence, and strict adherence to project requirements.",
                "Technical Skills: Gained proficiency in SQL and experience with database management systems such as MySQL, Oracle, and SQLite. Extensive experience in RESTful API development using NodeJs, along with familiarity with GraphQL. Familiarity with cloud platforms such as AWS, Azure, and GCP for scalable and reliable application deployment. Experience in version control systems like Git and collaboration platforms like GitHub and GitLab.",
                "College Recognition: Formally acknowledged and approved by the University for the quality and ingenuity demonstrated in the developed demo applications, illustrating the practical application of acquired skills and knowledge in a variety of mobile development frameworks and technologies."
            ]
        },
        {
            company: "Redpositive Services OPC Pvt. Ltd.",
            position: "Junior Software Developer",
            startDate: "2019-01-01",
            endDate: "2019-12-31",
            location: "India",
            details: [
                "App Development Support: Actively contributed to the creation and maintenance of RN and Android based mobile applications, providing valuable assistance in various stages of app development, fostering team efficiency and project success.",
                "Testing & Debugging Expertise: Played an integral role in app testing procedures by using Junit and Mockito, actively identifying bugs, and implementing effective fixes, contributing to the overall quality and reliability of the applications.",
                "Continuous Research and Learning: Engaged in ongoing learning initiatives, consistently explored new features of Java, Kotlin and JS, conducted R&D and shared insights and findings, contributed to the team's knowledge base and stayed abreast of industry trends.",
                "Thorough Documentation Practices: Assisted in maintaining comprehensive documentation, including code documentation, processes, and project-related information, ensuring clarity, and facilitating seamless collaboration within the team.",
                "Active Collaboration in Projects: Actively engaged in collaborative team projects, offering valuable input, and providing support to colleagues in various tasks, fostering a cohesive and productive team environment."
            ]
        },
        {
            company: "Fusion Infotech",
            position: "Graphics Designer",
            startDate: "2016-08-01",
            endDate: "2018-01-31",
            location: "India",
            details: [
                "Proficiency in Graphic Design Tools: Demonstrated proficiency in a diverse range of graphic design tools including Adobe Creative Suite, Sketch, CorelDRAW, Figma, Canva, and GIMP, showcasing versatility in design software.",
                "Typography Mastery: Exhibited expertise in font selection, composition, and typography techniques, ensuring visually appealing and harmonious text representation in design projects.",
                "Visual Communication Skills: Applied comprehensive knowledge of design principles, layout, color theory, and visual hierarchy, ensuring effective visual communication in various design projects.",
                "Digital & Print Design Proficiency: Showcased expertise in both digital and print design realms, adept in creating engaging web/UI designs, crafting impactful social media visuals, and producing print materials such as brochures and posters, maintaining consistency across mediums.",
                "Illustration & Motion Graphics Capabilities: Demonstrated proficiency in digital illustration, icon design, infographics, animation, and video editing, showcasing creative skills in producing visually appealing and engaging multimedia content."
            ]
        }
    ];

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
                            {selectedExperience?.location}
                        </span>
                        <span className="bg-dark_primary/10 text-dark_primary px-3 py-1 rounded-full text-sm">
                            {selectedExperience && calculateDuration(selectedExperience.startDate, selectedExperience.endDate)}
                        </span>
                    </div>
                </div>
                <br />
                <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
                    {selectedExperience?.details?.map((detail, i) => (
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

            <div className="md:container px-5 py-14">
                <div className="text-center mb-16">
                    <h2 className="title" data-aos="fade-down">
                        {t('experience.title')}
                    </h2>
                    <h4 className="subtitle" data-aos="fade-down">
                        {t('experience.subtitle')}
                    </h4>
                </div>

                {/* Desktop Timeline - only visible on md screens and up */}
                <div className="relative max-w-6xl mx-auto hidden md:block">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary/30 h-full"></div>

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
                                        <div className="bg-gradient-to-r from-primary to-dark_primary text-dark_primary px-6 py-3 rounded-full font-medium text-sm shadow-lg max-w-fit">
                                            {`${item.startDate.split('-')[1]}/${item.startDate.split('-')[0]} - ${item.endDate === "Present" ? "Present" : `${item.endDate.split('-')[1]}/${item.endDate.split('-')[0]}`} • ${calculateDuration(item.startDate, item.endDate)}`}
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
                                                <h3 className="text-xl font-bold text-dark_primary mb-2">{item.company}</h3>
                                                <p className="text-gray font-medium mb-2">{item.position}</p>
                                                <div className="flex items-center gap-2">
                                                    <div className="inline-block bg-bg_light_primary text-gray px-3 py-1 rounded-md text-sm">
                                                        {item.location}
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
                                                <h3 className="text-xl font-bold text-dark_primary mb-2">{item.company}</h3>
                                                <p className="text-gray font-medium mb-2">{item.position}</p>
                                                <div className="flex items-center justify-end gap-2">
                                                    {/* Info Icon */}
                                                    <div className="text-primary group-hover:text-dark_primary transition-colors">
                                                        <IoInformationCircleOutline size={20} />
                                                    </div>
                                                    <div className="inline-block bg-bg_light_primary text-gray px-3 py-1 rounded-md text-sm">
                                                        {item.location}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Date Badge - Right */}
                                    <div className="w-5/12 flex justify-start pl-8">
                                        <div className="bg-primary text-dark_primary px-6 py-3 rounded-full font-medium text-sm shadow-lg max-w-fit">
                                            {`${item.startDate.split('-')[1]}/${item.startDate.split('-')[0]} - ${item.endDate === "Present" ? "Present" : `${item.endDate.split('-')[1]}/${item.endDate.split('-')[0]}`} • ${calculateDuration(item.startDate, item.endDate)}`}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Timeline - only visible on smaller than md screens */}
                <div className="md:hidden mt-8">
                    <div className="relative pl-8">
                        <div className="absolute left-3 top-0 w-0.5 bg-primary/30 h-full"></div>
                        {experienceData.map((item, i) => (
                            <div key={i} className="relative mb-8 last:mb-0" data-aos="fade-up" data-aos-delay={i * 200}>
                                <div className="absolute -left-1 top-6 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
                                <div className="mb-4">
                                    <div className="bg-gradient-to-r from-primary to-dark_primary text-dark_primary px-4 py-2 rounded-full font-medium text-xs inline-block">
                                        {`${item.startDate.split('-')[1]}/${item.startDate.split('-')[0]} - ${item.endDate === "Present" ? "Present" : `${item.endDate.split('-')[1]}/${item.endDate.split('-')[0]}`} • ${calculateDuration(item.startDate, item.endDate)}`}
                                    </div>
                                </div>
                                <div
                                    className="bg-white p-5 rounded-lg shadow-md border border-slate-200 cursor-pointer hover:shadow-lg transition-shadow duration-300 relative group"
                                    onClick={() => {
                                        setSelectedExperience(item);
                                        openModal();
                                    }}
                                >
                                    <h3 className="font-bold text-dark_primary text-lg mb-1">{item.company}</h3>
                                    <p className="text-gray font-medium mb-2">{item.position}</p>
                                    <div className="flex items-center gap-2">
                                        <div className="inline-block bg-bg_light_primary text-gray px-3 py-1 rounded-md text-sm">
                                            {item.location}
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
            </div>
        </section>
    );
};

export default Experience;