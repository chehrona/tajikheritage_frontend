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
    MainTitle,
    TitleSpan,
    StyledCloseIcon,
    StyledLink,
    ButtonWrapper,
    ButtonText,
} from './headerStyles';

export default function Header({ setIsMenuShown, isMenuShown }) {
    const { lang, title } = useGlobalData();
    const [titleOrder, setTitleOrder] = useState([0, 1, 2]);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    function showMenu() {
        setIsMenuShown((prevState) => !prevState);
    }

    function handleLogoClick() {
        setIsMenuShown(false);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleOrder((prevOrder) => {
                const newOrder = [...prevOrder];
                const first = newOrder.shift();
                newOrder.push(first);
                return newOrder;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <HeaderContainer>
            <HeaderInnerBox>
                <LogoWrapper>
                    <StyledLink to={'/'} onClick={handleLogoClick}>
                        <Logo src={'/tajiks.png'}></Logo>
                    </StyledLink>
                </LogoWrapper>
                <TitleWrapper>
                    {titleOrder.map((order, i) => (
                        <Title key={order} index={i}>
                            <TitleSpan
                                dangerouslySetInnerHTML={{
                                    __html: title[lang][order][0],
                                }}
                            />
                            <MainTitle>{title[lang][order][1]}</MainTitle>
                        </Title>
                    ))}
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
