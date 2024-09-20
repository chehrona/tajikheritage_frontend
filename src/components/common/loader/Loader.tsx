import React from 'react';

// Styled components
import { LoaderContainer } from './loaderStyles';

const Loader: React.FC<{ inProp: boolean }> = ({ inProp }) => {
    return <LoaderContainer $inProp={inProp} />;
};

export default Loader;
