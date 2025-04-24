import React, { useCallback } from 'react';

// Material UI
import { ArrowUpward } from '@mui/icons-material';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { ScrollUpArrowProps } from './types/componentTypes';

// Styled components
import { MainContainer, StyledIconButton, Arrow } from './scrollUpArrowStyles';

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
            <StyledIconButton>
                <Arrow>
                    <ArrowUpward />
                </Arrow>
            </StyledIconButton>
        </MainContainer>
    );
};

export default ScrollUpArrow;
