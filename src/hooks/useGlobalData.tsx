import React, { createContext, useContext, useState, useMemo } from 'react';

// Helper
import staticText from '../miscellaneous/staticTexts.json';

// Types
import { Langs } from '../appTypes';
import { ContextTypes, TitleProps, GlobalDataProviderProps } from './hookTypes';

export const DataContext = createContext<ContextTypes>({
    title: staticText.HEADER,
    setTitle: () => {},
    lang: 'us',
    setLang: () => {},
    showScrollUpArrow: false,
    setShowScrollUpArrow: () => {},
    showScrollDownArrow: true,
    setShowScrollDownArrow: () => {},
});

export const GlobalDataProvider = ({ children }: GlobalDataProviderProps) => {
    const [title, setTitle] = useState<TitleProps>(staticText.HEADER);
    const [showScrollDownArrow, setShowScrollDownArrow] = useState(true);
    const [showScrollUpArrow, setShowScrollUpArrow] = useState(false);
    const [lang, setLang] = useState<Langs>(() => {
        const storedLang = localStorage.getItem('lang');
        return storedLang === 'us' ||
            storedLang === 'ru' ||
            storedLang === 'tj' ||
            storedLang === 'fa'
            ? storedLang
            : 'us';
    });

    const value = useMemo<ContextTypes>(
        () => ({
            title,
            setTitle,
            lang,
            setLang,
            showScrollUpArrow,
            setShowScrollUpArrow,
            showScrollDownArrow,
            setShowScrollDownArrow,
        }),
        [lang, title, showScrollUpArrow, showScrollDownArrow],
    );

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};

export function useGlobalData() {
    return useContext(DataContext);
}
