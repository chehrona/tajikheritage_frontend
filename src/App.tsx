import React, { useMemo, useState, useRef, useEffect } from 'react';

// Helper
import headerText from './miscellaneous/staticTexts.json';

// Contexts
import { DataContext } from './hooks/useGlobalData';

// Types
import { TitleProps, ContextTypes } from './hooks/hookTypes';
import { Langs } from './appTypes';

// Components
import Header from './components/common/header/Header';
import Menu from './components/common/menu/Menu';
import Footer from './components/common/footer/Footer';
import Routes from './components/common/routes/Routes';
import Flags from './components/common/flags/Flags';
import ScrollUpArrow from './components/common/scrollUpArrow/ScrollUpArrow';

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
    const [isPrint, setIsPrint] = useState<boolean>(false);
    const [showAdmin, setShowAdmin] = useState<boolean>(true);
    const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

    const value = useMemo<ContextTypes>(
        () => ({
            title,
            setTitle,
            lang,
            setLang,
            isPrint,
            setIsPrint,
            showAdmin,
            setShowAdmin,
        }),
        [lang, isPrint, title, showAdmin],
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
        <DataContext.Provider value={value}>
            <div
                className="content-container"
                ref={parentRef}
                onScroll={handleScroll}
                onCopy={handleCopy}
            >
                {!isPrint && (
                    <Header
                        setIsMenuShown={setIsMenuShown}
                        isMenuShown={isMenuShown}
                    />
                )}
                <Menu
                    setIsMenuShown={setIsMenuShown}
                    isMenuShown={isMenuShown}
                />
                <Routes />
                <div className="fixed-container">
                    {!isPrint && <Flags />}
                    {showArrow ? <ScrollUpArrow parentRef={parentRef} /> : null}
                </div>
                {!isPrint ? <Footer /> : null}
            </div>
        </DataContext.Provider>
    );
}

export default App;