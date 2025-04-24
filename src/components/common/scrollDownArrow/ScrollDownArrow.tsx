import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import staticTexts from '../../../miscellaneous/staticTexts.json';

// Types
import { TitleType } from '../../../landingPages/home/types/componentTypes';

// Styled components
import {
    ScrollWrapper,
    Title,
    IconWrapper,
    Arrow,
    Line,
    Circle,
} from './scrollDownArrowStyles';

const ScrollDownArrow: React.FC = () => {
    const title = staticTexts.HOME_SCROLL as TitleType;
    const { lang, showScrollDownArrow } = useGlobalData();

    return (
        <ScrollWrapper $show={showScrollDownArrow}>
            <Title>{title[lang]}</Title>
            <IconWrapper>
                <Line />
                <Arrow />
                <Circle />
            </IconWrapper>
        </ScrollWrapper>
    );
};

export default ScrollDownArrow;
