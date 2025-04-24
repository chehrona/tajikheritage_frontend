import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';

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
    const { pathname } = useLocation();
    const title = staticTexts.HOME_SCROLL as TitleType;
    const { lang, showScrollDownArrow, isMenuOpen } = useGlobalData();
    const isArrowShown = showScrollDownArrow && pathname === '/' && !isMenuOpen;

    return (
        <ScrollWrapper $show={isArrowShown}>
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
