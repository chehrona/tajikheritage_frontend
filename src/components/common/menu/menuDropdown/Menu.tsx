import React from 'react';

// Hooks
import { useGlobalData } from '../../../../hooks/useGlobalData';

// Helper
import staticText from '../../../../miscellaneous/staticTexts.json';

// Material UI
import { Slide } from '@mui/material';

// Types
import { MenuPage, MenuProps } from './types/componentTypes';

// Styled components
import {
    LogoContainer,
    Logo,
    PageName,
    PageNamesContainer,
    PageDesc,
    StyledLink,
    StyledMenu,
    MenuItemWrapper,
} from './menuStyles';

const Menu: React.FC<MenuProps> = ({
    isMenuShown,
    setIsMenuShown,
    menuAnchorEl,
}) => {
    const { lang } = useGlobalData();
    const pageInfo = staticText.MENU_ITEMS as MenuPage;

    // useEffect(() => {
    //     setTriggerFade(true);

    //     const timer = setTimeout(() => setTriggerFade(false), 250);

    //     return () => clearTimeout(timer);
    // }, [lang]);

    return (
        <StyledMenu
            open={isMenuShown}
            anchorEl={menuAnchorEl.current}
            TransitionComponent={Slide}
            TransitionProps={{
                timeout: 200,
            }}
            marginThreshold={0}
            sx={{
                zIndex: '10',
            }}
            aria-hidden={!isMenuShown}
        >
            <LogoContainer>
                <Logo src={'/tajiks.png'}></Logo>
            </LogoContainer>
            <PageNamesContainer>
                {pageInfo[lang]?.map((entry, i) => {
                    return (
                        <StyledLink
                            to={entry.link}
                            key={i}
                            onClick={() => setIsMenuShown(false)}
                        >
                            <MenuItemWrapper>
                                <PageName>{entry.title}</PageName>
                                <PageDesc>{entry.desc}</PageDesc>
                            </MenuItemWrapper>
                        </StyledLink>
                    );
                })}
            </PageNamesContainer>
        </StyledMenu>
    );
};

export default Menu;
