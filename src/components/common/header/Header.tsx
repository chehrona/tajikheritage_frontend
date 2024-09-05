import React, { useCallback, useEffect, useState } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';

// Components
import MenuButton from '../menu/menuButton/MenuButton';

// Types
import { MenuProps } from '../menu/menuDropdown/types/componentTypes';

// Styled components
import {
    HeaderContainer,
    HeaderInnerBox,
    LogoWrapper,
    TitleWrapper,
    Title,
    Logo,
    MainTitle,
    TitleSpan,
    StyledLink,
    Semicolon,
} from './headerStyles';

const sequence = [
    [0, 1, 2],
    [1, 2, 1],
    [2, 1, 2],
];

const Header: React.FC<MenuProps> = ({
    setIsMenuShown,
    isMenuShown,
    menuAnchorEl,
}) => {
    const location = useLocation();
    const { lang, title } = useGlobalData();
    const [titleOrder, setTitleOrder] = useState<number[]>([0, 1, 2]);
    const [sequenceIndex, setSequenceIndex] = useState<number>(0);

    const handleLogoClick = useCallback(() => {
        setIsMenuShown(false);
    }, [setIsMenuShown]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSequenceIndex((prevIndex) => (prevIndex + 1) % sequence.length);
            setTitleOrder(sequence[sequenceIndex]);
        }, 5000);

        return () => clearInterval(interval);
    }, [sequenceIndex, location.pathname, lang]);

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
                        const key = `title_key_${Math.random()}`;

                        return (
                            <Title key={key} $index={i}>
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
                <MenuButton
                    setIsMenuShown={setIsMenuShown}
                    isMenuShown={isMenuShown}
                    menuAnchorEl={menuAnchorEl}
                />
            </HeaderInnerBox>
        </HeaderContainer>
    );
};

export default Header;
