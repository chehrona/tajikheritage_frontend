import React, { useCallback, useState, useEffect } from 'react';

// Hooks
import { useGlobalData } from '../../../../hooks/useGlobalData';

// Types
import { MenuProps } from '../menuDropdown/types/componentTypes';

// Styled components
import { MainContainer, ButtonText, StyledMenuIcon } from './menuButtonStyles';

const MenuButton: React.FC<MenuProps> = ({ menuAnchorEl }) => {
    const { lang, isMenuOpen, setIsMenuOpen } = useGlobalData();
    const [triggerFadeIn, setTriggerFadeIn] = useState<boolean>(false);
    const [triggerFadeOut, setTriggerFadeOut] = useState<boolean>(false);

    const handleMenuOpen = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (menuAnchorEl) {
                menuAnchorEl.current = e.currentTarget;
            }
            setTriggerFadeOut(true);
            setIsMenuOpen((prevState) => !prevState);

            setTimeout(() => {
                setTriggerFadeOut(false);
                setTriggerFadeIn(true);

                setTimeout(() => setTriggerFadeIn(false), 150);
            }, 150);
        },
        [setIsMenuOpen, menuAnchorEl],
    );

    // Button text logic
    const getButtonText = () => {
        if (lang === 'us') return isMenuOpen ? 'CLOSE' : 'MENU';
        if (lang === 'ru') return isMenuOpen ? 'ЗАКРЫТЬ' : 'МЕНЮ';
        if (lang === 'fa') return isMenuOpen ? 'پوشید' : 'منو';
        return isMenuOpen ? 'ПӮШЕД' : 'МЕНЮ';
    };

    return (
        <MainContainer onClick={handleMenuOpen}>
            <ButtonText
                $triggerFadeIn={triggerFadeIn}
                $triggerFadeOut={triggerFadeOut}
            >
                {getButtonText()}
            </ButtonText>
            <StyledMenuIcon $isMenuShown={isMenuOpen} />
        </MainContainer>
    );
};

export default MenuButton;
