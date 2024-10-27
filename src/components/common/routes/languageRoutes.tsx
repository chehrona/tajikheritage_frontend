import { RouteObject } from 'react-router-dom';

// Pages
import LandingPage from '../../../landingPages/landingPage/LandingPage';
import MiddlePage from '../../../middlePages/middlePage/MiddlePage';
import ProverbPage from '../../../articlePages/proverbPage/ProverbPage';
import PoetPage from '../../../articlePages/poetPage/PoetPage';
import EtymologyPage from '../../../middlePages/wordsPage/EtymologyPage';
import WordPage from '../../../articlePages/wordPage/WordPage';

const languageRoutes: RouteObject[] = [
    {
        path: 'language',
        element: <LandingPage page="language" />,
    },
    {
        path: 'language/poets',
        element: <MiddlePage page="language/all_poets" />,
    },
    {
        path: 'language/poets/:id',
        element: <PoetPage page="language/poets/" />,
    },
    {
        path: 'language/proverbs',
        element: <MiddlePage page="language/all_proverbs" />,
    },

    {
        path: 'language/proverbs/:id',
        element: <ProverbPage />,
    },
    {
        path: 'language/etymology',
        element: <EtymologyPage page="language/all_etymology" />,
    },
    {
        path: 'language/etymology/:id',
        element: <WordPage page="language/etymology/" />,
    },
];

export { languageRoutes };
