import React from 'react';
import { Routes as ServerRoutes, Route, useLocation } from 'react-router-dom';

import Arts from '../../../landingPages/arts/Arts';
import Cuisine from '../../../landingPages/cuisine/Cuisine';
import RecipePage from '../../../articlePages/recipePage/RecipePage';
import RecipePagePrint from '../../../articlePages/recipePage/RecipePagePrint';
import LandingPage from '../../../landingPages/landingPage/LandingPage';
import History from '../../../landingPages/history/History';
import LangsPage from '../../../middlePages/langsPage/LangsPage';
import PoetsPage from '../../../middlePages/poetsPage/PoetsPage';
import PoetPage from '../../../articlePages/poetPage/PoetPage';
import Home from '../../../landingPages/home/Home';
import MythPage from '../../../articlePages/mythPage/MythPage';
import MiddlePage from '../../../middlePages/middlePage/MiddlePage';
import TraditionPage from '../../../articlePages/traditionPage/TraditionPage';

export default function Routes() {
    const location = useLocation();
    
    return (
        <ServerRoutes location={location} key={location.pathname}>
            <Route path="/arts" element={<Arts />} />
            <Route path="/customs" element={<LandingPage page={"customs"} />} />
            <Route path="/language" element={<LandingPage page={"language"} />} />
            <Route path="/customs/myths" element={<MiddlePage page={"customs/myths"} />} />
            <Route path="/customs/traditions" element={<MiddlePage page={"customs/traditions"} />} />
            <Route path="/customs/myths/:id" element={<MythPage />} />
            <Route path="/customs/traditions/:id" element={<TraditionPage />} />
            <Route path="/cuisine/recipes/:id" element={<RecipePage />} />
            <Route path="/cuisine/recipes/:id/print" element={<RecipePagePrint />} />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/language/langs" element={<LangsPage />} />
            <Route path="/language/poets" element={<PoetsPage />} />
            <Route path="/language/poets/:id" element={<PoetPage />} />
            <Route path="/history" element={<History />} />
            <Route path="/" element={<Home />} />
        </ServerRoutes>
    )
}