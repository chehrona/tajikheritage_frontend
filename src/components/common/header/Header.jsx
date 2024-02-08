import React from "react";
import { useSetLang } from "../../../App";

import {
    HeaderContainer,
    HeaderInnerBox,
    LogoWrapper,
    MenuWrapper,
    TitleWrapper,
    Title,
    StyledIconButton,
    StyledMenuIcon,
    Logo,
    TitleSpan,
    StyledCloseIcon,
    StyledLink
} from "./headerStyles";

export default function Header({ setIsMenuShown, isMenuShown }) {
    const { lang } = useSetLang();

    function showMenu() {
        setIsMenuShown(prevState => !prevState);
    }

    function handleLogoClick() {
        setIsMenuShown(false);
    }

    return (
        <HeaderContainer>
            <HeaderInnerBox>
                <LogoWrapper>
                    <StyledLink to={'/'} onClick={handleLogoClick}>
                        <Logo src={'/tajiks.png'}></Logo>
                    </StyledLink>
                </LogoWrapper>
                <TitleWrapper>
                    <Title>
                        <TitleSpan dangerouslySetInnerHTML={{__html: lang === 'us' ? 'THE TAJIKS:' : (lang === 'ru' ? 'ТАДЖИКИ:' : 'ТОҶИКОН:')}} />
                        {lang === 'us' ? 'Iranians of the East' : (lang === 'ru' ? 'Иранцы Востока' : 'Эрониёни Шарқ')}
                    </Title>
                </TitleWrapper>
                <MenuWrapper>
                    <StyledIconButton onClick={showMenu}>
                        {isMenuShown ? <StyledCloseIcon /> : <StyledMenuIcon />}
                    </StyledIconButton>
                </MenuWrapper>
            </HeaderInnerBox>
        </HeaderContainer>
    )
} 