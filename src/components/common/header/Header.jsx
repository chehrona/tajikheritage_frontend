import React, { useEffect, useState } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../../App';

// Styled components
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
    StyledLink,
    ButtonWrapper,
    ButtonText,
} from './headerStyles';

export default function Header({ setIsMenuShown, isMenuShown }) {
    const { lang, title } = useGlobalData();
    const [scrollPosition, setScrollPosition] = useState(-1);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    function showMenu() {
        setIsMenuShown((prevState) => !prevState);
    }

    function handleLogoClick() {
        setIsMenuShown(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            // Increment position
            setScrollPosition((prevIndex) => {
                const nextIndex = (prevIndex + 1) % title[lang].length;
                return nextIndex;
            });
        };

        handleScroll();
        setInterval(() => {
            handleScroll();
        }, 5000);

        return () => clearInterval();
    }, []);

    return (
        <HeaderContainer>
            <HeaderInnerBox>
                <LogoWrapper>
                    <StyledLink to={'/'} onClick={handleLogoClick}>
                        <Logo src={'/tajiks.png'}></Logo>
                    </StyledLink>
                </LogoWrapper>
                <TitleWrapper transform={scrollPosition}>
                    <Title>
                        <TitleSpan
                            dangerouslySetInnerHTML={{
                                __html: title[lang][0][0],
                            }}
                        />
                        {title[lang][0][1]}
                    </Title>
                    <Title>
                        <TitleSpan
                            dangerouslySetInnerHTML={{
                                __html: title[lang][1][0],
                            }}
                        />
                        {title[lang][1][1]}
                    </Title>
                    <Title>
                        <TitleSpan
                            dangerouslySetInnerHTML={{
                                __html: title[lang][2][0],
                            }}
                        />
                        {title[lang][2][1]}
                    </Title>
                </TitleWrapper>
                <MenuWrapper>
                    {!isMobile ? (
                        isMenuShown ? (
                            <ButtonWrapper onClick={showMenu}>
                                <ButtonText>
                                    {lang === 'us'
                                        ? 'CLOSE'
                                        : lang === 'ru'
                                        ? 'ЗАКРЫТЬ'
                                        : 'ПӮШЕД'}
                                </ButtonText>
                                <StyledCloseIcon />
                            </ButtonWrapper>
                        ) : (
                            <ButtonWrapper onClick={showMenu}>
                                <ButtonText>
                                    {lang === 'us'
                                        ? 'MENU'
                                        : lang === 'ru'
                                        ? 'МЕНЮ'
                                        : 'МЕНЮ'}
                                </ButtonText>
                                <StyledMenuIcon />
                            </ButtonWrapper>
                        )
                    ) : (
                        <StyledIconButton onClick={showMenu}>
                            {isMenuShown ? (
                                <StyledCloseIcon />
                            ) : (
                                <StyledMenuIcon />
                            )}
                        </StyledIconButton>
                    )}
                </MenuWrapper>
            </HeaderInnerBox>
        </HeaderContainer>
    );
}
