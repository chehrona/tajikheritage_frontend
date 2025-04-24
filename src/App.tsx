'use client';

import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

// Routing
import { ErrorBoundary } from 'react-error-boundary';

// Contexts
import { GlobalDataProvider } from './hooks/useGlobalData';

// Components
import ErrorPage from './errorPages/ErrorPage';
import GlobalStyles from './globalStyles';
import CustomToastContainer from './components/common/customToastContainer/CustomToastContainer';
import Routes from './components/common/routes/Routes';

function App(): React.JSX.Element {
    useEffect(() => {
        // Prevent right click
        const handleContextmenu = (e: MouseEvent) => {
            e.preventDefault();
        };
        document.addEventListener('contextmenu', handleContextmenu);
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu);
        };
    }, []);

    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <GlobalDataProvider>
                <GlobalStyles />
                <Routes />
                <CustomToastContainer />
            </GlobalDataProvider>
        </ErrorBoundary>
    );
}

export default App;
