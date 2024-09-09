import React, { ReactNode } from 'react';

//Styled components
import { LandingContainer } from './pageWrapperStyles';

const LandingPageFirstContainer: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    return <LandingContainer>{children}</LandingContainer>;
};

export default LandingPageFirstContainer;
