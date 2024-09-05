import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    background: var(--primary-black-color);
    width: 100%;
    background-color: grey;
`;

export const HeaderInnerBox = styled.div`
    background: var(--primary-black-color);
    height: 5rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: #ffffff;
    position: relative;
    z-index: 11;
    max-width: 1920px;
    margin: 0rem;
    justify-content: space-between;
    padding: 0rem 1rem;
    overflow: hidden;

    background-color: #957070;

    @media (max-width: 480px) {
        height: 4.5rem;
        padding: 0rem 0.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 1.15rem;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;

    background-color: blue;

    @media (max-width: 480px) {
        height: 3.5rem;
        width: 3.5rem;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-family: 'EB Garamond', serif;
    text-align: center;
    background-color: greenyellow;

    @media (max-width: 480px) {
        font-size: 1.52rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.2rem;
    }
`;

export const Title = styled.div<{ $index: number }>`
    font-style: italic;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 13rem);
    height: 100%;
    position: absolute;
    left: 5rem;
    top: -5rem;
    transform: ${({ $index }) => $index && `translateY(${5 * $index}rem)`};
    transition: transform 0.5s ease;
    background-color: red;

    @media (max-width: 480px) {
        left: 4.15rem;
        top: -4.5rem;
        max-width: calc(100% - 7.65rem);
        width: calc(100% - 7.65rem);
        padding: 0rem 0.5rem;
        transform: ${({ $index }) =>
            $index && `translateY(${4.5 * $index}rem)`};
    }
`;

export const TitleSpan = styled.span<{ $isElipsis: boolean }>`
    font-style: normal;
    font-weight: bold;
    color: #bd9d52;

    ${({ $isElipsis }) =>
        $isElipsis &&
        css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `}
`;

export const Semicolon = styled.div`
    width: fit-content;
    font-style: normal;
    color: #bd9d52;
    font-family: 'EB Garamond', serif;
`;

export const MainTitle = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 0.4rem;
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
