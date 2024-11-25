import { RouteObject } from 'react-router-dom';

// Pages
import LandingPage from '../../../landingPages/landingPage/LandingPage';
import MiddlePage from '../../../middlePages/middlePage/MiddlePage';
import GenericArticlePage from '../../../articlePages/genericArticlePage/GenericArticlePage';

const historyRoutes: RouteObject[] = [
    {
        path: 'history',
        element: <LandingPage page="history" />,
    },
    {
        path: 'history/mythology',
        element: <MiddlePage page="history/all_mythology" />,
    },
    {
        path: 'history/mythology/:id',
        element: <GenericArticlePage page="history/mythology" />,
    },
];

export { historyRoutes };
