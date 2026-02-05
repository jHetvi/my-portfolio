import { useState, useEffect } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import { useLocalization } from "../contexts/LocalizationContext";
import { SECTION_IDS } from "../constants/textConstants";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  const { t, currentLanguage, changeLanguage, availableLanguages } = useLocalization();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation on location change
  useEffect(() => {
    // If there's a hash in the URL, scroll to that section
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # character
      const element = document.getElementById(sectionId);

      if (element) {
        // Use setTimeout to ensure the DOM is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });

          // Find the index of the active nav item
          const navIndex = nav.findIndex(item => item.link === location.hash);
          if (navIndex !== -1) {
            setActive(navIndex);
          }
        }, 100);
      }
    }
  }, [location.hash, nav]);

  // Function to scroll to a section smoothly
  const scrollToSection = (sectionId, index) => {
    setActive(index);
    setShowMenu(false);

    // Update the URL hash without page reload
    navigate(`/#${sectionId}`, { replace: true });

    // Scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-4 left-4 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={28} className="sm:size-34" />
      </div>

      <nav
        className={`fixed z-[999] flex items-center gap-3 sm:gap-5 bg-slate-200/60 px-4 sm:px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 
        ${showMenu ? "bottom-4" : "bottom-[-100%]"}
        left-1/2 transform -translate-x-1/2 max-w-[95vw] sm:max-w-none overflow-x-auto`}
      >
        {nav.map((item, i) => {
          // Extract the section ID from the link (remove the # symbol)
          const sectionId = item.link.substring(1);
          const sectionKey = sectionId.toUpperCase();

          return (
            <div key={i} className="relative group flex-shrink-0">
              <button
                onClick={() => scrollToSection(SECTION_IDS[sectionKey], i)}
                className={`text-lg sm:text-xl p-2 rounded-full sm:cursor-pointer flex items-center justify-center
                ${i === active && "bg-dark_primary text-white"} `}
                title={t(`nav.${sectionId}`)}
              >
                {createElement(item.icon)}
              </button>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark_primary text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t(`nav.${sectionId}`)}
              </div>
            </div>
          );
        })}

        {/* Language Switcher in Nav */}
        <div className="flex gap-1 ml-2 sm:ml-3 border-l border-slate-400 pl-2 sm:pl-3 flex-shrink-0">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`px-1.5 sm:px-2 py-1 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 ${currentLanguage === lang
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
