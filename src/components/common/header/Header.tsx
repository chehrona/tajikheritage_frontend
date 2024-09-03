import React, { useEffect, useState } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';

// Types
import { HeaderProps } from './types/componentTypes';

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
    Semicolon,
} from './headerStyles';

const Header: React.FC<HeaderProps> = ({ setIsMenuShown, isMenuShown }) => {
    const { lang, title } = useGlobalData();
    const location = useLocation();
    const [titleOrder, setTitleOrder] = useState<number[]>([0, 1, 2]);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    function showMenu() {
        setIsMenuShown((prevState: boolean) => !prevState);
    }

    function handleLogoClick() {
        setIsMenuShown(false);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleOrder((prevOrder: number[]) => {
                const newOrder = [...prevOrder];
                const first = newOrder.shift();

                if (first === undefined) {
                    return prevOrder;
                }

                newOrder.push(first);
                return newOrder;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [location.pathname, lang]);

    return (
        <HeaderContainer>
            <HeaderInnerBox>
                <LogoWrapper>
                    <StyledLink to={'/'} onClick={handleLogoClick}>
                        <Logo src={'/tajiks.png'}></Logo>
                    </StyledLink>
                </LogoWrapper>
                <TitleWrapper>
                    {titleOrder.map((order, i) => {
                        const isElipsis: boolean =
                            title[lang][order][0].length > 10;

                        return (
                            <Title key={order} $index={i}>
                                <TitleSpan
                                    dangerouslySetInnerHTML={{
                                        __html: title[lang][order][0],
                                    }}
                                    $isElipsis={isElipsis}
                                />
                                {title[lang][order][1].length ? (
                                    <Semicolon>{':'}</Semicolon>
                                ) : null}
                                <MainTitle>{title[lang][order][1]}</MainTitle>
                            </Title>
                        );
                    })}
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
                                    {lang === 'us' ? 'MENU' : 'МЕНЮ'}
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
};

export default Header;
