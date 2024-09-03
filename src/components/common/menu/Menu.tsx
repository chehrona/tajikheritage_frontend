import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import staticText from '../../../miscellaneous/staticTexts.json';

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
} from './menuStyles';

const Menu: React.FC<MenuProps> = ({ isMenuShown, setIsMenuShown }) => {
    const { lang } = useGlobalData();
    const pageInfo = staticText.MENU_ITEMS as MenuPage;

    return (
        <StyledMenu
            open={isMenuShown}
            TransitionComponent={Slide}
            TransitionProps={{
                timeout: 200,
            }}
            sx={{
                zIndex: '10',
            }}
        >
            <LogoContainer>
                <Logo src={'/tajiks.png'}></Logo>
            </LogoContainer>
            <PageNamesContainer>
                {pageInfo[lang]?.map((entry, i) => {
                    return (
                        <StyledLink to={entry.link} key={i}>
                            <div onClick={() => setIsMenuShown(false)}>
                                <PageName>{entry.title}</PageName>
                                <PageDesc>{entry.desc}</PageDesc>
                            </div>
                        </StyledLink>
                    );
                })}
            </PageNamesContainer>
        </StyledMenu>
    );
};

export default Menu;
