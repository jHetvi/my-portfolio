import { useLocalization } from '../contexts/LocalizationContext';

const LanguageSwitcher = () => {
    const { currentLanguage, changeLanguage, availableLanguages } = useLocalization();

    return (
        <div className="fixed top-10 right-10 z-[999] flex gap-2">
            {availableLanguages.map((lang) => (
                <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${currentLanguage === lang
                            ? 'bg-primary text-white'
                            : 'bg-white/40 text-dark_primary hover:bg-white/60'
                        }`}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
