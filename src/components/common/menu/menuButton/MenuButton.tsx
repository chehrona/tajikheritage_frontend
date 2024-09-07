import React, { useCallback, useState, useEffect, useRef } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../../../hooks/useGlobalData';
import { useFadeIn } from '../../../../hooks/useFadeIn';

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
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const [triggerFade, setTriggerFade] = useState<boolean>(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useFadeIn(triggerFade, setTriggerFade, elementRef);

    const handleMenuOpen = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (menuAnchorEl) {
                menuAnchorEl.current = e.currentTarget;
            }

            setTriggerFade(true);
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
        <MainContainer onClick={handleMenuOpen}>
            {!isMobile ? (
                <ButtonText ref={elementRef}>
                    {isMenuShown
                        ? getButtonText()
                        : lang === 'us'
                        ? 'MENU'
                        : 'МЕНЮ'}
                </ButtonText>
            ) : null}
            <StyledMenuIcon $isMenuShown={isMenuShown} />
        </MainContainer>
    );
};

export default MenuButton;
