import React, { useCallback } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { ScrollUpArrowProps } from './types/componentTypes';

// Styled components
import { MainContainer, Arrow } from './scrollUpArrowStyles';

const ScrollUpArrow: React.FC<ScrollUpArrowProps> = ({ parentRef }) => {
    const { showScrollUpArrow } = useGlobalData();

    const handleScrollToTop = useCallback(() => {
        if (parentRef.current === null) {
            return;
        }

        parentRef.current.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [parentRef]);

    return (
        <MainContainer onClick={handleScrollToTop} $show={showScrollUpArrow}>
            <Arrow src="./customAssets/arrow.svg" />
        </MainContainer>
    );
};

export default ScrollUpArrow;
