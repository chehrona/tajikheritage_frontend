import { RouteObject } from 'react-router-dom';

// Routes
import { artRoutes } from './artRoutes';
import { customRoutes } from './customRoutes';
import { historyRoutes } from './historyRoutes';
import { languageRoutes } from './languageRoutes';

// Pages
import PageNotFound from '../../../errorPages/pageNotFound/PageNotFound';
import Home from '../../../landingPages/home/Home';
import TempPage from '../tempPage/TempPage';

const mainRoutes: RouteObject[] = [
    {
        path: '/',
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                children: artRoutes,
            },
            {
                children: customRoutes,
            },
            {
                children: languageRoutes,
            },
            {
                children: historyRoutes,
            },
            {
                path: 'cuisine',
                element: <TempPage page="cuisine" />,
            },
            {
                path: '*',
                element: <PageNotFound />,
            },
        ],
    },
];

export { mainRoutes };
