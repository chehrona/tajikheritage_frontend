import React, {
    useContext,
    createContext,
    useMemo,
    useState,
    useRef,
    useEffect,
} from 'react';

// Helper
import headerText from './miscellaneous/staticTexts.json';

// Components
import Header from './components/common/header/Header';
import Menu from './components/common/menu/Menu';
import Footer from './components/common/footer/Footer';
import Routes from './components/common/routes/Routes';
import Flags from './components/common/flags/Flags';
import ScrollUpArrow from './components/common/scrollUpArrow/ScrollUpArrow';

const DataContext = createContext({
    title: headerText.HEADER,
    setTitle: () => {},
    lang: 'us',
    setLang: () => {},
    isPrint: false,
    setIsPrint: () => {},
    showAdmin: true,
    setShowAdmin: () => {},
});

export function useGlobalData() {
    return useContext(DataContext);
}

function App() {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('lang') || 'us';
    });
    const [title, setTitle] = useState(headerText.HEADER);
    const parentRef = useRef(null);
    const [position, setPosition] = useState(0);
    const [showArrow, setShowArrow] = useState(0);
    const [isPrint, setIsPrint] = useState(false);
    const [showAdmin, setShowAdmin] = useState(true);
    const [isMenuShown, setIsMenuShown] = useState(false);

    const value = useMemo(
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
        const handleContextmenu = (e) => {
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
        const currentScrollPos = parentRef.current.scrollTop;
        const parentHeight = parentRef.current.getBoundingClientRect().height;

        if (
            currentScrollPos < position &&
            currentScrollPos > parentHeight / 2
        ) {
            setShowArrow(1);
        } else {
            setShowArrow(0);
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
                        title={title}
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
