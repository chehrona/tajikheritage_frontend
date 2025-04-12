import React from 'react';

// Types
import { PageInnerContainerProps } from './types/componentTypes';

// Styled components
import { MainContainer } from './pageInnerContainerStyles';

const PageInnerContainer: React.FC<PageInnerContainerProps> = ({
    children,
}) => {
    return <MainContainer>{children}</MainContainer>;
};

export default PageInnerContainer;
