import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div<{ $show: boolean }>`
    width: 100%;
    background: var(--primary-black-color);
    height: var(--header-height);
    opacity: ${({ $show }) => ($show ? 1 : 0)};
    visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
    transition: opacity 0.5s ease, visibility 0.5s ease;
`;

export const HeaderInnerBox = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    z-index: 11;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0rem 1rem;
    overflow: hidden;
    height: 100%;
    justify-content: space-between;
    color: var(--regular-white-color);
    background: var(--primary-black-color);

    // Done
    @media (max-width: 480px) {
        padding: 0.15rem 0.75rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 1.15rem;
    }
`;

// Logo
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(var(--header-height) - 0.3rem);
    width: calc(var(--header-height) - 0.3rem);
`;

export const Logo = styled.img`
    height: 100%;
    width: 100%;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
`;

// Title
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-family: var(--fancy-font);
    text-align: center;

    // Done
    @media (max-width: 480px) {
        font-size: 1.15rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.2rem;
    }
`;

export const TitleWrapper = styled.div<{ $index: number }>`
    font-style: italic;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 13.5rem);
    height: 100%;
    position: absolute;
    left: 5rem;
    top: -5rem;
    transform: ${({ $index }) => $index && `translateY(${5 * $index}rem)`};
    transition: transform 0.5s ease;
    padding: 0rem 0.5rem;

    // Done
    @media (max-width: 480px) {
        top: -(var(--header-height));
        width: 100%;
        padding: 0rem 0.25rem;
        width: calc(100% - var(--header-height) - 3.75rem);
        max-width: calc(100% - var(--header-height) - 3.75rem);
        left: calc(var(--header-height) + 0.6rem);
        transform: ${({ $index }) =>
            $index && `translateY(${4.5 * $index}rem)`};
    }
`;

export const FirstTitle = styled.div<{ $isElipsis: boolean }>`
    flex-shrink: 1;
    font-style: normal;
    font-weight: bold;
    color: var(--primary-gold-color);
    ${({ $isElipsis }) =>
        $isElipsis &&
        css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `}
`;

export const SecondTitle = styled.div`
    flex-shrink: 0;
    padding-left: 0.4rem;

    // Done
    @media (max-width: 480px) {
        padding-left: 0.25rem;
    }
`;

export const Semicolon = styled.div`
    width: fit-content;
    font-style: normal;
    color: var(--primary-gold-color);
    font-family: var(--fancy-font);
`;
