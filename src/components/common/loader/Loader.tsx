import React from 'react';

// Components
import PageTransition from '../pageTransition/Transition';

// Types
import { LoaderProps } from './types/componentTypes';

// Styled components
import { LoaderContainer } from './loaderStyles';

const Loader: React.FC<LoaderProps> = ({ children, inProp }) => {
    return (
        <PageTransition inProp={inProp}>
            <LoaderContainer>{children}</LoaderContainer>
        </PageTransition>
    );
};

export default Loader;
