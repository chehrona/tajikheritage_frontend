import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/material';

export const StyledMenu = styled(Menu)`
    & .MuiPopper-root {
        z-index: 100;
    }

    & .MuiPaper-root {
        height: calc(100svh - var(--header-height));
        max-height: calc(100svh - var(--header-height));
        padding-top: 6rem;
        position: static;
        box-shadow: none;
        border-radius: 0rem;
        overflow: hidden;
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        color: var(--primary-gold-color);
        background: var(--primary-grey-color);
        padding: 0rem;

        // Done
        @media screen and (max-device-width: 480px) {
            margin-top: var(--header-height);
        }
    }

    & .MuiList-root {
        display: flex;
        width: 100%;
        padding: 3rem;
        justify-content: center;
        gap: 6%;
        align-items: center;

        // Done
        @media screen and (max-device-width: 480px) {
            padding: 0rem var(--page-padding);
        }

        @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
            padding: 10rem 10rem 15rem 5rem;
            flex-direction: column-reverse;
            gap: 0%;
        }
    }
`;

export const LogoContainer = styled.div`
    opacity: 0.5;

    // Done
    @media screen and (max-device-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        opacity: 0.3;
        width: 100%;
        position: absolute;
        right: -52.3%;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const Logo = styled.img`
    border-radius: 50%;
    height: 35rem;
    width: 35rem;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 60rem;
        width: 60rem;
        transform: rotate(-90deg);
    }
`;

export const PageNamesContainer = styled.div`
    width: 40%;
    height: 100%;
    z-index: 1;
    gap: 2rem;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;

    // Done
    @media (max-width: 480px) {
        width: 100%;
        gap: 1rem;
        justify-content: start;
        padding: var(--page-padding) 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.5rem;
        width: 100%;
    }
`;

export const MenuItemWrapper = styled.div`
    width: 100%;

    @media screen and (max-device-width: 480px) {
        padding: 0.5rem 1rem;
    }
`;

export const PageName = styled.div`
    font-weight: bold;
    font-style: italic;
    cursor: pointer;
    font-family: var(--fancy-font);

    // Done
    @media screen and (max-device-width: 480px) {
        font-size: var(--header-medium-text);
    }
`;

export const PageDesc = styled.div`
    font-size: 1.3rem;
    cursor: pointer;
    color: var(--secondary-white-color);

    // Done
    @media screen and (max-device-width: 480px) {
        font-size: var(--body-text);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    border-radius: 0.5rem;
    user-select: none;
    box-shadow: 0rem 0rem 0.3rem 0rem var(--primary-black-color);
    box-shadow: 0.3rem 0.3rem 0.3rem 0.05rem var(--primary-black-color);

    &:hover {
        box-shadow: 0.3rem 0.3rem 0.3rem 0.05rem var(--primary-gold-color);
    }

    &:active {
        box-shadow: 0rem 0rem 0.1rem 0.05rem var(--primary-gold-color);
        transform: translate(1px, 1px);
    }

    // Done
    @media (max-device-width: 480px) {
        &:hover {
            box-shadow: 0.3rem 0.3rem 0.3rem 0.05rem var(--primary-black-color);
        }

        &:active {
            box-shadow: 0rem 0rem 0.1rem 0.05rem var(--primary-black-color);
            transform: translate(1px, 1px);
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 75%;
        box-shadow: 0.3rem 0.3rem 0.3rem 0.05rem var(--primary-black-color);

        &:hover {
            box-shadow: 0.3rem 0.3rem 0.3rem 0.05rem var(--primary-black-color);
        }

        &:active {
            box-shadow: 0rem 0rem 0.1rem 0.05rem var(--primary-black-color);
            transform: translate(1px, 1px);
        }
    }
`;
