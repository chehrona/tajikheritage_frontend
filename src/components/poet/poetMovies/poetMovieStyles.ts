import styled, { keyframes } from 'styled-components';
import { IconButton } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateX(0);
    }
    40% {
        transform: translateX(0.5rem);
    }
    60% {
        transform: translateX(0.7rem);
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

export const MainContainer = styled.div`
    background: var(--primary-white-color);
    color: var(--regular-white-color);
    position: relative;
    padding: 3rem 0rem 3rem 0rem;
    background-image: url(${'/noise.png'});

    &:before {
        content: '';
        padding: 3rem;
        width: 100%;
        background: var(--primary-white-color);
        background-image: url(${'/noise.png'});
        -webkit-clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
        clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        top: -5.99rem;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        padding: var(--page-padding) 0rem;

        &:before {
            content: '';
            padding: 2rem;
            width: 100%;
            background: var(--primary-white-color);
            background-image: url(${'/noise.png'});
            -webkit-clip-path: polygon(
                -10px 0px,
                100% 100%,
                100% 100%,
                0% 100%
            );
            clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
            position: absolute;
            top: -3.99rem;
            box-sizing: border-box;
        }
    }
`;

export const MovieWrapper = styled.div`
    padding: 0rem 3rem 0rem 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 480px) {
        gap: calc(2 * var(--square-card-gap));
        margin: 0rem var(--page-padding);
        padding: 0rem;
        justify-content: start;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        gap: 2rem;
        padding: 0rem 3.2rem 0rem 2rem;
    }
`;

export const MovieCard = styled.div<{ $delay: string }>`
    height: 21.15rem;
    width: 14.95rem;
    cursor: pointer;
    position: relative;
    border-radius: var(--small-radius);
    box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
    opacity: 0;
    animation: ${slideOut} 2s ease-in-out forwards;
    animation-delay: ${({ $delay }) => ($delay ? $delay : '0s')};

    @media (max-width: 480px) {
        height: 12.75rem;
        width: 8.88rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 23rem;
        width: 16.25rem;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: 100%;
    border-radius: var(--small-radius);
`;

export const StyledIconButton = styled(IconButton)`
    width: 3rem;
    height: 3rem;
    bottom: 1rem;
    right: -2.6rem;
    transform: translateX(-50%);
    box-shadow: 0rem 0rem 0.6rem var(--regular-black-color);

    &.MuiIconButton-root {
        position: absolute;
        background: var(--primary-black-color);

        &:hover {
            background: var(--primary-black-color);
        }
    }

    @media (max-width: 480px) {
        right: -3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4rem;
        height: 4rem;
        bottom: 1.5rem;
        right: -4rem;
    }
`;

export const StyledExpand = styled(ChevronRight)`
    color: var(--secondary-white-color);
    animation: ${bounce} 2s infinite;

    &.MuiSvgIcon-root {
        height: 2rem;
        width: 2rem;
    }
`;
