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
    const { title, setTitle, lang } = useSetLang();

    function showMenu() {
        setIsMenuShown(prevState => !prevState);
    }

    function handleLogoClick() {
        setIsMenuShown(false);
        setTitle({
            one: lang === 'us' ? 'THE TAJIKS:' : (lang === 'ru' ? 'ТАДЖИКИ:' : 'ТОҶИКОН:'),
            two: lang === 'us' ? 'Iranians of the East' : (lang === 'ru' ? 'Иранцы Востока' : 'Эрониёни Шарқ')
        });
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
                        <TitleSpan dangerouslySetInnerHTML={{__html: title?.one}} />
                        {title?.two}
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