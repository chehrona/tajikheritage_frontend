import React, { useCallback } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../../../hooks/useGlobalData';

// Types
import { MenuProps } from '../menuDropdown/types/componentTypes';

// Styled components
import {
    MainContainer,
    ButtonWrapper,
    ButtonText,
    StyledIconButton,
    StyledCloseIcon,
    StyledMenuIcon,
} from './menuButtonStyles';

const MenuButton: React.FC<MenuProps> = ({
    setIsMenuShown,
    isMenuShown,
    menuAnchorEl,
}) => {
    const { lang } = useGlobalData();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const handleMenuOpen = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (menuAnchorEl) {
                menuAnchorEl.current = e.currentTarget;
            }

            setIsMenuShown((prevState: boolean) => !prevState);
        },
        [setIsMenuShown, menuAnchorEl],
    );

    // Button text
    const getButtonText = () => {
        if (lang === 'us') return isMenuShown ? 'CLOSE' : 'MENU';
        if (lang === 'ru') return isMenuShown ? 'ЗАКРЫТЬ' : 'МЕНЮ';
        return isMenuShown ? 'ПӮШЕД' : 'МЕНЮ';
    };

    return (
        <MainContainer>
            {!isMobile ? (
                isMenuShown ? (
                    <ButtonWrapper onClick={(e) => handleMenuOpen(e)}>
                        <ButtonText>{getButtonText()}</ButtonText>
                        <StyledCloseIcon />
                    </ButtonWrapper>
                ) : (
                    <ButtonWrapper onClick={(e) => handleMenuOpen(e)}>
                        <ButtonText>
                            {lang === 'us' ? 'MENU' : 'МЕНЮ'}
                        </ButtonText>
                        <StyledMenuIcon />
                    </ButtonWrapper>
                )
            ) : (
                <StyledIconButton onClick={(e) => handleMenuOpen(e)}>
                    {isMenuShown ? <StyledCloseIcon /> : <StyledMenuIcon />}
                </StyledIconButton>
            )}
        </MainContainer>
    );
};

export default MenuButton;
