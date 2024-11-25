import { RouteObject } from 'react-router-dom';

// Pages
import LandingPage from '../../../landingPages/landingPage/LandingPage';
import MiddlePage from '../../../middlePages/middlePage/MiddlePage';
import GenericArticlePage from '../../../articlePages/genericArticlePage/GenericArticlePage';

const artRoutes: RouteObject[] = [
    {
        path: 'arts',
        element: <LandingPage page="arts" />,
    },
    {
        path: 'arts/jewelry',
        element: <MiddlePage page="arts/all_jewelry" />,
    },
    {
        path: 'arts/jewelry/:id',
        element: <GenericArticlePage page="arts/jewelry" />,
    },
];

export { artRoutes };
