import React, { useCallback, useEffect, useState } from 'react';

// Hooks
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
    TitleContainer,
    TitleWrapper,
    Logo,
    SecondTitle,
    StyledLink,
    Semicolon,
    FirstTitle,
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

    // Don't show the header
    const noShow = location.pathname.includes('print');

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
        <HeaderContainer $show={!noShow}>
            <HeaderInnerBox>
                <LogoWrapper>
                    <StyledLink to={'/'} onClick={handleLogoClick}>
                        <Logo src={'/tajiks.png'}></Logo>
                    </StyledLink>
                </LogoWrapper>
                <TitleContainer>
                    {titleOrder.map((order, i) => {
                        const isElipsis: boolean =
                            title[lang][order][0].length > 10;
                        const key = `title_key_${Math.random()}`;

                        return (
                            <TitleWrapper key={key} $index={i}>
                                <FirstTitle
                                    dangerouslySetInnerHTML={{
                                        __html: title[lang][order][0],
                                    }}
                                    $isElipsis={isElipsis}
                                />
                                {title[lang][order][1].length ? (
                                    <Semicolon>{':'}</Semicolon>
                                ) : null}
                                <SecondTitle>
                                    {title[lang][order][1]}
                                </SecondTitle>
                            </TitleWrapper>
                        );
                    })}
                </TitleContainer>
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
