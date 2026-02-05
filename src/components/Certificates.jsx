import { content } from "../Content";
import { useLocalization } from "../contexts/LocalizationContext";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Certificates = () => {
    const { certificates } = content;
    const { t } = useLocalization();

    const handleLinksClick = (e, links) => {
        e.preventDefault();
        e.stopPropagation();

        if (links && links.length > 0) {
            let blockedCount = 0;

            // Open all links immediately without delay
            links.forEach((link, index) => {
                try {
                    const newWindow = window.open(link, `_blank_${index}`, 'noopener,noreferrer');
                    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                        blockedCount++;
                    }
                } catch (error) {
                    console.warn(`Failed to open link: ${link}`, error);
                    blockedCount++;
                }
            });

            // Inform user if some links were blocked
            if (blockedCount > 0) {
                setTimeout(() => {
                    alert(t('common.popupBlocked').replace('{count}', blockedCount));
                }, 100);
            }
        }
    };

    return (
        <section id="certificates" className="bg-bg_light_primary">
            <div className="md:container px-4 sm:px-5 py-10 sm:py-14">
                <h2 className="title" data-aos="fade-down">
                    {t('certificates.title')}
                </h2>
                <h4 className="subtitle" data-aos="fade-down">
                    {t('certificates.subtitle')}
                </h4>
                <br />
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    data-aos="fade-up"
                    spaceBetween={20}
                    modules={[Pagination]}
                    className="rounded-3xl pb-12 sm:pb-16 max-w-3xl mx-auto"
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
                    }}
                >
                    {certificates.certificates_content.map((content, i) => (
                        <SwiperSlide
                            key={i}
                            className="bg-white rounded-3xl p-4 sm:p-5 border-b-8 border-[#FAF9FD] flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
                            onClick={(e) => handleLinksClick(e, content.links)}
                        >
                            <img src={content.image} alt="..." className="h-36 sm:h-40 md:h-48 object-contain mb-4" />
                            <div className="text-center">
                                <h5 className="font-bold font-Poppins text-lg sm:text-xl mb-2">{t(`certificates.names.${i}`)}</h5>
                                <p className="text-gray text-xs sm:text-sm mb-3">{t(`certificates.issuers.${i}`)} | {t(`certificates.dates.${i}`)}</p>
                                {content.links && content.links.length > 0 && (
                                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                                        <span className="text-primary text-xs bg-primary/10 px-3 py-1 rounded-full">
                                            {content.links.length} {content.links.length > 1 ? t('certificates.linksAvailablePlural') : t('certificates.linksAvailable')}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Certificates;