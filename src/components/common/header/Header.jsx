import React from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useSetLang } from '../../../App';

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
    const { lang } = useSetLang();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    function showMenu() {
        console.log('here');
        setIsMenuShown((prevState) => !prevState);
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
                        <TitleSpan
                            dangerouslySetInnerHTML={{
                                __html:
                                    lang === 'us'
                                        ? 'THE TAJIKS:'
                                        : lang === 'ru'
                                        ? 'ТАДЖИКИ:'
                                        : 'ТОҶИКОН:',
                            }}
                        />
                        {lang === 'us'
                            ? 'Iranians of the East'
                            : lang === 'ru'
                            ? 'Иранцы Востока'
                            : 'Эрониёни Шарқ'}
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
