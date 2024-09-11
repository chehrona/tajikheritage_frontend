import React from 'react';

// Components
import PageTransition from '../pageTransition/Transition';

// Styled components
import { MainContainer, LoaderImg, LoaderContainer } from './loaderStyles';

const Loader: React.FC<{ inProp: boolean }> = ({ inProp }) => {
    return (
        <PageTransition inProp={inProp} type="loader">
            <MainContainer>
                <LoaderContainer>
                    <LoaderImg src={'/loader.png'} />
                </LoaderContainer>
            </MainContainer>
        </PageTransition>
    );
};

export default Loader;
