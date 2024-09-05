import React, { ReactNode } from 'react';

//Styled components
import { MainContainer } from './pageFirstContainerStyles';

const PageFirstContainer: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    return <MainContainer>{children}</MainContainer>;
};

export default PageFirstContainer;
