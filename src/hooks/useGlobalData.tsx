import React, { createContext, useContext } from 'react';

// Helper
import staticText from '../miscellaneous/staticTexts.json';

// Types
import { ContextTypes } from './hookTypes';

export const DataContext = createContext<ContextTypes>({
    title: staticText.HEADER,
    setTitle: () => {},
    lang: 'us',
    setLang: () => {},
    isLoading: false,
    setIsLoading: () => {},
});

export function useGlobalData() {
    return useContext(DataContext);
}
