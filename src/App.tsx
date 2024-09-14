'use client';

import React, { useMemo, useState, useRef, useEffect } from 'react';
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
import Header from './components/common/header/Header';
import Menu from './components/common/menu/menuDropdown/Menu';
import Footer from './components/common/footer/Footer';
import Routes from './components/common/routes/Routes';
import Flags from './components/common/flags/Flags';
import ScrollUpArrow from './components/common/scrollUpArrow/ScrollUpArrow';
import GlobalStyles from './globalStyles';
import Loader from './components/common/loader/Loader';

function App(): React.JSX.Element {
    const [lang, setLang] = useState<Langs>(() => {
        const storedLang = localStorage.getItem('lang');
        return storedLang === 'us' || storedLang === 'ru' || storedLang === 'tj'
            ? storedLang
            : 'us';
    });
    const [title, setTitle] = useState<TitleProps>(headerText.HEADER);
    const parentRef = useRef<HTMLInputElement>(null);
    const [position, setPosition] = useState<number>(0);
    const [showArrow, setShowArrow] = useState<boolean>(false);
    const [showAdmin, setShowAdmin] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isMenuShown, setIsMenuShown] = useState<boolean>(false);
    const menuAnchorEl = useRef<HTMLDivElement | null>(null);

    const value = useMemo<ContextTypes>(
        () => ({
            title,
            setTitle,
            lang,
            setLang,
            isLoading,
            setIsLoading,
            showAdmin,
            setShowAdmin,
        }),
        [lang, title, showAdmin, isLoading],
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

    const handleCopy = async () => {
        try {
            const textToCopy =
                'The text is copyright protected by thetajikheritage.com.';
            await navigator.clipboard.writeText(textToCopy);
        } catch (error) {
            console.error('Unable to copy text to clipboard:', error);
        }
    };

    const handleScroll = () => {
        const currentElement = parentRef.current;

        if (currentElement == null) {
            return;
        }

        const currentScrollPos = currentElement.scrollTop;
        const parentHeight = currentElement.getBoundingClientRect().height;

        if (
            currentScrollPos < position &&
            currentScrollPos > parentHeight / 2
        ) {
            setShowArrow(true);
        } else {
            setShowArrow(false);
        }

        setPosition(currentScrollPos);
    };

    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <DataContext.Provider value={value}>
                <GlobalStyles />
                <div className="parent-container" onCopy={handleCopy}>
                    <Header
                        setIsMenuShown={setIsMenuShown}
                        isMenuShown={isMenuShown}
                        menuAnchorEl={menuAnchorEl}
                    />
                    <Menu
                        setIsMenuShown={setIsMenuShown}
                        isMenuShown={isMenuShown}
                        menuAnchorEl={menuAnchorEl}
                    />
                    <div className="content-container">
                        <Loader inProp={isLoading} />
                        <div
                            className="routes-container"
                            ref={parentRef}
                            onScroll={handleScroll}
                        >
                            <Routes />
                        </div>
                        <Footer />
                    </div>
                    <div className="fixed-container">
                        <Flags />
                        {showArrow ? (
                            <ScrollUpArrow parentRef={parentRef} />
                        ) : null}
                    </div>
                </div>
            </DataContext.Provider>
        </ErrorBoundary>
    );
}

export default App;
