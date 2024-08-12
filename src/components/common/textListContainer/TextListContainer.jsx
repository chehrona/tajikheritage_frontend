import React from 'react';

//Styled components
import { MainContainer } from './textListContainerStyles';

export default function TextListContainer({ children, height }) {
    return <MainContainer height={height}>{children}</MainContainer>;
}
