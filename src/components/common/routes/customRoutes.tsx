import { RouteObject } from 'react-router-dom';

// Pages
import LandingPage from '../../../landingPages/landingPage/LandingPage';
import MiddlePage from '../../../middlePages/middlePage/MiddlePage';
import GenericArticlePage from '../../../articlePages/genericArticlePage/GenericArticlePage';

const customRoutes: RouteObject[] = [
    {
        path: 'customs',
        element: <LandingPage page="customs" />,
    },
    {
        path: 'customs/traditions',
        element: <MiddlePage page="customs/all_traditions" />,
    },
    {
        path: 'customs/traditions/:id',
        element: <GenericArticlePage page="customs/traditions" />,
    },
    {
        path: 'customs/calendars',
        element: <MiddlePage page="customs/all_calendars" />,
    },
    {
        path: 'customs/calendars/:id',
        element: <GenericArticlePage page="customs/calendars" />,
    },
];

export { customRoutes };
