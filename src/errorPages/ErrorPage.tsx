import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { MainContainer } from './errorPageStyles';

// ErrorPage component
const ErrorPage: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <MainContainer>{error.message}</MainContainer>
        // <div role="alert">
        //     <h1 style={{ color: 'red' }}>Something went wrong</h1>
        //     <p>{error.message}</p>
        //     <button onClick={resetErrorBoundary}>Try again</button>
        // </div>
    );
};

export default ErrorPage;
