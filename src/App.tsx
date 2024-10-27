'use client';

import React, { useMemo, useState, useEffect } from 'react';

// Routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { mainRoutes } from './components/common/routes/mainRoutes';

import { ErrorBoundary } from 'react-error-boundary';

// Helper
import headerText from './miscellaneous/staticTexts.json';

// Contexts
import { DataContext } from './hooks/useGlobalData';

// Types
import { TitleProps, ContextTypes } from './hooks/hookTypes';
import { Langs } from './appTypes';

// Components
import ErrorPage from './errorPages/ErrorPage';
import GlobalStyles from './globalStyles';
import Loader from './components/common/loader/Loader';

function App(): React.JSX.Element {
    const router = createBrowserRouter(mainRoutes, {
        basename: '/',
    });

    const [lang, setLang] = useState<Langs>(() => {
        const storedLang = localStorage.getItem('lang');
        return storedLang === 'us' || storedLang === 'ru' || storedLang === 'tj'
            ? storedLang
            : 'us';
    });

    const [title, setTitle] = useState<TitleProps>(headerText.HEADER);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const value = useMemo<ContextTypes>(
        () => ({
            title,
            setTitle,
            lang,
            setLang,
            isLoading,
            setIsLoading,
        }),
        [lang, title, isLoading],
    );

    useEffect(() => {
        // Prevent right click
        const handleContextmenu = (e: MouseEvent) => {
            e.preventDefault();
        };
        document.addEventListener('contextmenu', handleContextmenu);
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu);
        };
    }, []);

    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <DataContext.Provider value={value}>
                <GlobalStyles />
                <RouterProvider
                    router={router}
                    fallbackElement={<Loader inProp={true} />}
                />
            </DataContext.Provider>
        </ErrorBoundary>
    );
}

export default App;
