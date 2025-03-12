import React, { lazy, Suspense } from 'react';
import { Routes as ServerRoutes, Route, useLocation } from 'react-router-dom';

import Loader from '../loader/Loader';

// Landing pages
const HomePage = lazy(() => import('../../../landingPages/home/Home'));
const PageNotFound = lazy(
    () => import('../../../errorPages/pageNotFound/PageNotFound'),
);
const LandingPage = lazy(
    () => import('../../../landingPages/landingPage/LandingPage'),
);
const TempPage = lazy(() => import('../tempPage/TempPage'));

// Middle pages
const MiddlePage = lazy(
    () => import('../../../middlePages/middlePage/MiddlePage'),
);
const EtymologyPage = lazy(
    () => import('../../../middlePages/wordsPage/EtymologyPage'),
);

// Article pages
const PoetPage = lazy(
    () => import('../../../articlePages/language/poetPage/PoetPage'),
);
const ProverbPage = lazy(
    () => import('../../../articlePages/language/proverbPage/ProverbPage'),
);
const GenericArticlePage = lazy(
    () => import('../../../articlePages/genericArticlePage/GenericArticlePage'),
);
const WordPage = lazy(
    () => import('../../../articlePages/language/wordPage/WordPage'),
);
const MulcharPage = lazy(
    () => import('../../../articlePages/calendar/mulcharPage/MulcharPage'),
);
const ZodiacPage = lazy(
    () => import('../../../articlePages/calendar/zodiacPage/ZodiacPage'),
);

const Routes: React.FC = () => {
    const location = useLocation();

    return (
        <Suspense fallback={<Loader inProp={true} />}>
            <ServerRoutes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<PageNotFound />} />

                {/* Languages */}
                <Route
                    path="/language"
                    element={<LandingPage page="language" />}
                />
                <Route
                    path="/language/proverbs"
                    element={<MiddlePage page="language/all_proverbs" />}
                />
                <Route
                    path="/language/proverbs/:id"
                    element={<ProverbPage />}
                />
                <Route
                    path="/language/languages"
                    element={<TempPage page="/language/languages" />}
                />
                <Route
                    path="/language/poets"
                    element={<MiddlePage page="language/all_poets" />}
                />
                <Route
                    path="/language/etymology"
                    element={<EtymologyPage page="language/all_etymology" />}
                />
                <Route
                    path="/language/etymology/:id"
                    element={<WordPage page="language/etymology/" />}
                />
                <Route
                    path="/language/poets/:id"
                    element={<PoetPage page="language/poets/" />}
                />

                {/* Customs */}
                <Route
                    path="/customs"
                    element={<LandingPage page="customs" />}
                />
                <Route
                    path="/customs/traditions"
                    element={<MiddlePage page="customs/all_traditions" />}
                />
                <Route
                    path="/customs/traditions/:id"
                    element={<GenericArticlePage page="customs/traditions/" />}
                />

                {/* History */}
                <Route
                    path="/history"
                    element={<LandingPage page="history" />}
                />
                <Route
                    path="/history/mythology"
                    element={<MiddlePage page="history/all_mythology" />}
                />
                <Route
                    path="/history/mythology/:id"
                    element={<GenericArticlePage page="history/mythology/" />}
                />
                <Route
                    path="/history/calendars"
                    element={<MiddlePage page="history/all_calendars" />}
                />
                <Route
                    path="/history/calendars/mūlchar"
                    element={<MulcharPage page="history/calendars/" />}
                />
                <Route
                    path="/history/calendars/burj-i duvāzdahgāna"
                    element={<ZodiacPage page="history/calendars/" />}
                />

                {/* Arts */}
                <Route path="/arts" element={<LandingPage page="arts" />} />
                <Route
                    path="/arts/jewelry"
                    element={<MiddlePage page="arts/all_jewelry" />}
                />
                <Route
                    path="/arts/jewelry/:id"
                    element={<GenericArticlePage page="arts/jewelry" />}
                />
                <Route path="/cuisine" element={<TempPage page="cuisine" />} />
            </ServerRoutes>
        </Suspense>
    );
};

export default Routes;
