import React, { createContext, useContext, useState } from 'react';
import { translations } from '../locales/translations';

const LocalizationContext = createContext();

export const useLocalization = () => {
    const context = useContext(LocalizationContext);
    if (!context) {
        throw new Error('useLocalization must be used within a LocalizationProvider');
    }
    return context;
};

export const LocalizationProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[currentLanguage];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    const changeLanguage = (language) => {
        setCurrentLanguage(language);
    };

    return (
        <LocalizationContext.Provider value={{
            t,
            currentLanguage,
            changeLanguage,
            availableLanguages: ['en', 'fr']
        }}>
            {children}
        </LocalizationContext.Provider>
    );
};
