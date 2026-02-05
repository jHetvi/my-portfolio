import { content } from "../Content";
import { useLocalization } from "../contexts/LocalizationContext";

const Education = () => {
    const { education } = content;
    const { t } = useLocalization();

    return (
        <section id="education" className="min-h-fit bg-bg_light_primary">
            <div className="md:container px-5 py-10 sm:py-14">
                <h2 className="title" data-aos="fade-down">
                    {t('education.title')}
                </h2>
                <h4 className="subtitle" data-aos="fade-down">
                    {t('education.subtitle')}
                </h4>
                <br />
                <div className="flex flex-col gap-6">
                    {education.education_content.map((content, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 300}
                            className="flex flex-col md:flex-row gap-4 md:gap-6 bg-white p-4 md:p-6 rounded-lg border-2 border-slate-200"
                        >
                            <div className="w-full md:w-1/4 flex justify-center items-start">
                                <img src={content.logo} alt="..." className="w-16 sm:w-20 md:w-24" />
                            </div>
                            <div className="w-full md:w-3/4">
                                <h3 className="text-lg sm:text-xl font-bold">{t(`education.degrees.${i}`)}</h3>
                                <p className="text-gray font-medium text-sm sm:text-base">{t(`education.institutions.${i}`)} | {t(`education.years.${i}`)}</p>
                                <p className="mt-3 leading-7 text-sm sm:text-base">{content.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;