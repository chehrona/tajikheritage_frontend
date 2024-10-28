import React from 'react';

// Styles
import { StyledContainer } from './customToastContainerStyles';

const CustomToastContainer = () => {
    return (
        <StyledContainer
            position="top-right"
            hideProgressBar
            closeButton={false}
        />
    );
};

export default CustomToastContainer;
