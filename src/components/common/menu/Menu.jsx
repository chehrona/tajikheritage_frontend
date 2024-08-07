import React from 'react';
import { useGlobalData } from '../../../App';
import { pageInfo } from './pageNames';

import { Slide } from '@mui/material';

import {
    LogoContainer,
    Logo,
    PageName,
    PageNamesContainer,
    PageDesc,
    StyledLink,
    StyledMenu,
} from './menuStyles';

export default function Menu({ isMenuShown, setIsMenuShown }) {
    const { lang } = useGlobalData();

    return (
        <StyledMenu
            open={isMenuShown}
            TransitionComponent={Slide}
            TransitionProps={{
                duration: 200,
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
}
