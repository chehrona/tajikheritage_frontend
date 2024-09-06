import styled, { keyframes } from 'styled-components';
import { Pinterest } from '@mui/icons-material';
import { Button } from '@mui/material';

const slideUp = keyframes`
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    
    }
`;

const slideOut = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    50% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const InfoContainer = styled.div`
    position: relative;
    margin-bottom: 0.8rem;
    display: inline;

    @media (max-width: 480px) {
        display: block;
        padding: 0rem 1.5rem 0rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        display: block;
        font-size: 1.3rem;
    }
`;

export const MainTitle = styled.div`
    opacity: 0;
    color: var(--regular-black-color);
    font-size: 4rem;
    font-weight: 500;
    font-style: italic;
    margin-bottom: 0.5rem;
    font-family: 'EB Garamond', serif;
    text-shadow: 0.0625rem 0.0625rem 0.0875rem var(--primary-black-color);
    animation: ${slideOut} 0.5s ease-in-out forwards;

    @media (max-width: 480px) {
        font-size: 4.5rem;
    }
`;

export const HistoryInfo = styled.div`
    opacity: 0;
    color: var(--primary-black-color);
    font-size: 1.1rem;
    position: relative;
    line-height: 1.7rem;
    animation-delay: 0.01s;
    animation: ${slideOut} 0.5s ease-in-out forwards;

    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const ImageContainer = styled.div`
    width: 30rem;
    height: 45rem;
    margin: 0rem 3rem 1rem 0rem;
    float: left;
    position: relative;

    @media (max-width: 1024px) {
        margin: 0rem;
        width: 100%;
    }
`;

export const MainImage = styled.img`
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0;
    position: relative;
    z-index: 1;
    transform: translateY(-100%);
    animation: ${slideUp} 0.5s ease-in-out forwards;
    box-shadow: 0rem 0rem 0.4rem 0.01rem #504221;

    @media (max-width: 480px) {
        border-radius: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
        animation: none;
        transform: translateY(0%);
        opacity: 1;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 100%;
    }
`;

export const StyledPinIcon = styled(Pinterest)`
    color: var(--secondary-white-color);
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    z-index: 10;

    &.MuiSvgIcon-root {
        fill: red;
        font-size: 2.5rem;
        border-radius: 50%;
        background-color: var(--regular-white-color);
    }
`;

export const StyledButton = styled(Button)`
    box-shadow: 0rem 0rem 0.4rem 0.01rem #504221;

    div {
        color: #fff;
    }

    &.MuiButton-root {
        background: var(--primary-shadow-color);
        border-radius: 0.8rem;
        text-transform: none;
        padding: 0.5rem 1.5rem;
        font-family: 'IBM Plex Serif', serif;
    }

    &.MuiButton-root:hover {
        background: var(--primary-shadow-color);
    }
`;
