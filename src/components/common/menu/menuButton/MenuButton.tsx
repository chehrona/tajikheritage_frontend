import React, { useCallback, useState, useEffect } from 'react';

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

    const handleMenuOpen = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (menuAnchorEl) {
                menuAnchorEl.current = e.currentTarget;
            }
            setTriggerFadeOut(true);
            setIsMenuShown((prevState) => !prevState);

            setTimeout(() => {
                setTriggerFadeOut(false);
                setTriggerFadeIn(true);

                setTimeout(() => setTriggerFadeIn(false), 150);
            }, 150);
        },
        [setIsMenuShown, menuAnchorEl],
    );

    // Button text logic
    const getButtonText = () => {
        if (lang === 'us') return isMenuShown ? 'CLOSE' : 'MENU';
        if (lang === 'ru') return isMenuShown ? 'ЗАКРЫТЬ' : 'МЕНЮ';
        return isMenuShown ? 'ПӮШЕД' : 'МЕНЮ';
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
