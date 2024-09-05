import React from 'react';

// Types
import { TextLisContainerProps } from './types/componentTypes';

// Styled components
import { MainContainer } from './textListContainerStyles';

const TextListContainer: React.FC<TextLisContainerProps> = ({
    children,
    height,
}) => {
    return <MainContainer $height={height}>{children}</MainContainer>;
};

export default TextListContainer;
