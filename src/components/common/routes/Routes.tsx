import React from 'react';
import { Routes as ServerRoutes, Route, useLocation } from 'react-router-dom';

// Helper
import staticTexts from '../../../miscellaneous/staticTexts.json';

// Landing pages
import Home from '../../../landingPages/home/Home';
import LandingPage from '../../../landingPages/landingPage/LandingPage';
// import RecipePagePrint from '../../../articlePages/recipePage/RecipePagePrint';
// import LoginPage from '../../../admin/login/LoginPage';
// import ManagementPage from '../../../landingPages/management/ManagementPage';
import TempPage from '../tempPage/TempPage';

// Middle pages
import MiddlePage from '../../../middlePages/middlePage/MiddlePage';
import EtymologyPage from '../../../middlePages/wordsPage/EtymologyPage';

// Article pages
import PoetPage from '../../../articlePages/poetPage/PoetPage';
import ProverbPage from '../../../articlePages/proverbPage/ProverbPage';
import GenericArticlePage from '../../../articlePages/generticArticlePage/GenericArticlePage';
import RecipePage from '../../../articlePages/recipePage/RecipePage';
import WordPage from '../../../articlePages/wordPage/WordPage';

const Routes: React.FC = () => {
    const location = useLocation();

    return (
        <ServerRoutes location={location} key={location.pathname}>
            <Route path="/arts" element={<LandingPage page={'arts'} />} />
            <Route path="/customs" element={<LandingPage page={'customs'} />} />
            <Route
                path="/language"
                element={<LandingPage page={'language'} />}
            />
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
                path="/arts/jewelry"
                element={<MiddlePage page={'arts/all_jewelry'} />}
            />
            <Route
                path="/arts/jewelry/:id"
                element={<GenericArticlePage page={'arts/jewelry'} />}
            />
            <Route
                path="/customs/traditions"
                element={<MiddlePage page={'customs/all_traditions'} />}
            />
            <Route
                path="/language/proverbs"
                element={<MiddlePage page={'language/all_proverbs'} />}
            />
            <Route path="/language/proverbs/:id" element={<ProverbPage />} />
            <Route
                path="/customs/traditions/:id"
                element={<GenericArticlePage page={'customs/traditions/'} />}
            />
            {/* <Route path="/cuisine/recipes/:id" element={<RecipePage />} /> */}
            {/* <Route
                path="/cuisine/recipes/:id/print"
                element={<RecipePagePrint />}
            /> */}
            <Route path="/cuisine" element={<TempPage />} />
            <Route path="/language/languages" element={<TempPage />} />
            <Route
                path="/language/poets"
                element={<MiddlePage page={'language/all_poets'} />}
            />
            <Route path="/language/etymology" element={<EtymologyPage />} />
            <Route path="/language/etymology/:id" element={<WordPage />} />
            <Route
                path="/language/poets/:id"
                element={<PoetPage page={'language/poets/'} />}
            />
            <Route path="/" element={<Home />} />
            {/* <Route path="/admin/login" element={<LoginPage />} /> */}
            {/* <Route path="/admin/content" element={<ManagementPage />} /> */}
        </ServerRoutes>
    );
};

export default Routes;
