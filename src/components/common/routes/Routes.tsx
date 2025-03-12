import React from 'react';
import { Routes as ServerRoutes, Route, useLocation } from 'react-router-dom';

// Landing pages
import PageNotFound from '../../../errorPages/pageNotFound/PageNotFound';
import Home from '../../../landingPages/home/Home';
import LandingPage from '../../../landingPages/landingPage/LandingPage';
import TempPage from '../tempPage/TempPage';

// Middle pages
import MiddlePage from '../../../middlePages/middlePage/MiddlePage';
import EtymologyPage from '../../../middlePages/wordsPage/EtymologyPage';

// Article pages
import PoetPage from '../../../articlePages/language/poetPage/PoetPage';
import ProverbPage from '../../../articlePages/language/proverbPage/ProverbPage';
import GenericArticlePage from '../../../articlePages/genericArticlePage/GenericArticlePage';
import WordPage from '../../../articlePages/language/wordPage/WordPage';
import MuljarPage from '../../../articlePages/calendar/muljarPage/MuljarPage';
import ZodiacPage from '../../../articlePages/calendar/zodiacPage/ZodiacPage';

const Routes: React.FC = () => {
    const location = useLocation();

    return (
        <ServerRoutes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            {/* Languages */}
            <Route
                path="/language"
                element={<LandingPage page={'language'} />}
            />
            <Route
                path="/language/proverbs"
                element={<MiddlePage page={'language/all_proverbs'} />}
            />
            <Route path="/language/proverbs/:id" element={<ProverbPage />} />
            <Route
                path="/language/languages"
                element={<TempPage page={'/language/languages'} />}
            />
            <Route
                path="/language/poets"
                element={<MiddlePage page={'language/all_poets'} />}
            />
            <Route
                path="/language/etymology"
                element={<EtymologyPage page={'language/all_etymology'} />}
            />
            <Route
                path="/language/etymology/:id"
                element={<WordPage page={'language/etymology/'} />}
            />
            <Route
                path="/language/poets/:id"
                element={<PoetPage page={'language/poets/'} />}
            />
            {/* Customs */}
            <Route path="/customs" element={<LandingPage page={'customs'} />} />
            <Route
                path="/customs/traditions"
                element={<MiddlePage page={'customs/all_traditions'} />}
            />
            <Route
                path="/customs/traditions/:id"
                element={<GenericArticlePage page={'customs/traditions/'} />}
            />

            {/* History */}
            <Route path="/history" element={<LandingPage page={'history'} />} />
            <Route
                path="/history/mythology"
                element={<MiddlePage page={'history/all_mythology'} />}
            />
            <Route
                path="/history/mythology/:id"
                element={<GenericArticlePage page={'history/mythology/'} />}
            />
            <Route
                path="/history/calendars"
                element={<MiddlePage page={'history/all_calendars'} />}
            />
            <Route
                path="/history/calendars/mūljar"
                element={<MuljarPage page={'history/calendars/'} />}
            />
            <Route
                path="/history/calendars/burji duvāzdahgāna"
                element={<ZodiacPage page={'history/calendars/'} />}
            />

            {/* Arts */}
            <Route path="/arts" element={<LandingPage page={'arts'} />} />
            <Route
                path="/arts/jewelry"
                element={<MiddlePage page={'arts/all_jewelry'} />}
            />
            <Route
                path="/arts/jewelry/:id"
                element={<GenericArticlePage page={'arts/jewelry'} />}
            />
            <Route path="/cuisine" element={<TempPage page={'cuisine'} />} />
        </ServerRoutes>
    );
};

export default Routes;
