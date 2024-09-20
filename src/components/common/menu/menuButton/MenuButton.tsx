import React, { useCallback, useState, useEffect, useRef } from 'react';

// Hooks
import { useGlobalData } from '../../../../hooks/useGlobalData';

// Types
import { MenuProps } from '../menuDropdown/types/componentTypes';

// Styled components
import { MainContainer, ButtonText, StyledMenuIcon } from './menuButtonStyles';

const MenuButton: React.FC<MenuProps> = ({
    setIsMenuShown,
    isMenuShown,
    menuAnchorEl,
}) => {
    const { lang } = useGlobalData();
    const [triggerFadeIn, setTriggerFadeIn] = useState<boolean>(false);
    const [triggerFadeOut, setTriggerFadeOut] = useState<boolean>(false);
    const [displayedMenuState, setDisplayedMenuState] =
        useState<boolean>(isMenuShown);

    const handleMenuOpen = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (menuAnchorEl) {
                menuAnchorEl.current = e.currentTarget;
            }
            setTriggerFadeOut(true);
            setIsMenuShown((prevState) => !prevState);

            setTimeout(() => {
                setTriggerFadeOut(false);
                setDisplayedMenuState((prevState) => !prevState);

                setTriggerFadeIn(true);

                setTimeout(() => setTriggerFadeIn(false), 150);
            }, 150);
        },
        [setIsMenuShown, menuAnchorEl],
    );

    // Button text logic
    const getButtonText = () => {
        if (lang === 'us') return displayedMenuState ? 'CLOSE' : 'MENU';
        if (lang === 'ru') return displayedMenuState ? 'ЗАКРЫТЬ' : 'МЕНЮ';
        return displayedMenuState ? 'ПӮШЕД' : 'МЕНЮ';
    };

    return (
        <MainContainer onClick={handleMenuOpen}>
            <ButtonText
                $triggerFadeIn={triggerFadeIn}
                $triggerFadeOut={triggerFadeOut}
            >
                {getButtonText()}
            </ButtonText>
            <StyledMenuIcon $isMenuShown={isMenuShown} />
        </MainContainer>
    );
};

export default MenuButton;
