import React from 'react';
import { Routes as ServerRoutes, Route, useLocation } from 'react-router-dom';

// Landing pages
import Home from '../../../landingPages/home/Home';
import Cuisine from '../../../landingPages/cuisine/Cuisine';
import LandingPage from '../../../landingPages/landingPage/LandingPage';
import RecipePagePrint from '../../../articlePages/recipePage/RecipePagePrint';
import LangsPage from '../../../middlePages/langsPage/LangsPage';
import LoginPage from '../../../admin/login/LoginPage';
import ManagementPage from '../../../landingPages/management/ManagementPage';

// Middle pages
import MiddlePage from '../../../middlePages/middlePage/MiddlePage';
import EtymologyPage from '../../../middlePages/wordsPage/EtymologyPage';
import PoetsPage from '../../../middlePages/poetsPage/PoetsPage';

// Article pages
import PoetPage from '../../../articlePages/poetPage/PoetPage';
import ProverbPage from '../../../articlePages/proverbPage/ProverbPage';
import MythPage from '../../../articlePages/mythPage/MythPage';
import RecipePage from '../../../articlePages/recipePage/RecipePage';
import WordPage from '../../../articlePages/wordPage/WordPage';

export default function Routes() {
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
                element={<MythPage page={'history/mythology/'} />}
            />
            <Route
                path="/arts/jewelry"
                element={<MiddlePage page={'arts/all_jewelry'} />}
            />
            <Route
                path="/arts/jewelry/:id"
                element={<MythPage page={'arts/jewelry'} />}
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
                element={<MythPage page={'customs/traditions/'} />}
            />
            <Route path="/cuisine/recipes/:id" element={<RecipePage />} />
            <Route
                path="/cuisine/recipes/:id/print"
                element={<RecipePagePrint />}
            />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/language/languages" element={<LangsPage />} />
            <Route path="/language/poets" element={<PoetsPage />} />
            <Route path="/language/etymology" element={<EtymologyPage />} />
            <Route path="/language/etymology/:id" element={<WordPage />} />
            <Route path="/language/poets/:id" element={<PoetPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin/content" element={<ManagementPage />} />
        </ServerRoutes>
    );
}
