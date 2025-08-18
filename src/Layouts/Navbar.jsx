import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import { useLocalization } from "../contexts/LocalizationContext";
import { SECTION_IDS } from "../constants/textConstants";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  const { t, currentLanguage, changeLanguage, availableLanguages } = useLocalization();

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>

      <nav
        className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${showMenu ? "bottom-10" : "bottom-[-100%]"
          }`}
      >
        {nav.map((item, i) => {
          // Extract the section ID from the link (remove the # symbol)
          const sectionId = item.link.substring(1);
          const sectionKey = sectionId.toUpperCase();

          return (
            <div key={i} className="relative group">
              <a
                href={`#${SECTION_IDS[sectionKey]}`}
                onClick={() => setActive(i)}
                className={`text-xl p-2.5 rounded-full sm:cursor-pointer flex items-center justify-center
                ${i === active && "bg-dark_primary text-white"} `}
                title={t(`nav.${sectionId}`)}
              >
                {createElement(item.icon)}
              </a>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-dark_primary text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t(`nav.${sectionId}`)}
              </div>
            </div>
          );
        })}

        {/* Language Switcher in Nav */}
        <div className="flex gap-1 ml-3 border-l border-slate-400 pl-3">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ${currentLanguage === lang
                ? 'bg-dark_primary text-white'
                : 'bg-white/60 text-dark_primary hover:bg-white/80'
                }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
