import styled, { keyframes, css } from 'styled-components';
import { Info } from '@mui/icons-material';
import { IconButton } from '@mui/material';

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
    background-image: url(${'/noise.png'});
    color: var(--regular-white-color);
    position: relative;
    padding: 3rem 0rem 3rem 0rem;

    &:before {
        content: '';
        padding: 3rem;
        width: 100%;
        background: var(--primary-white-color);
        background-image: url(${'/noise.png'});
        -webkit-clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
        clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        top: -5.98rem;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        padding: var(--page-padding) 0rem;

        &:before {
            padding: 2rem;
            top: -3.98rem;
        }
    }
`;

export const AwardWrapper = styled.div`
    padding: 0rem 3rem 0rem 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;

    @media (max-width: 480px) {
        gap: var(--square-card-gap);
        padding: 0rem var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem;
        justify-content: flex-start;
        gap: 1.5rem;
    }
`;

export const AwardCard = styled.div<{ $delay: string }>`
    opacity: 0;
    width: 10rem;
    height: 14.1rem;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: transparent;
    perspective: 62.5rem;
    border-radius: var(--small-radius);
    box-shadow: 0rem 0rem 0.5rem 0.1rem var(--primary-shadow-color);
    animation: ${slideOut} 2s ease-in-out forwards;
    animation-delay: ${({ $delay }) => ($delay ? $delay : '0s')};

    @media (max-width: 480px) {
        width: var(--small-card-width);
        height: var(--small-card-height);
    }
`;

export const InnerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    ${AwardCard}:hover & {
        transform: rotateY(180deg);
    }
`;

export const Face = styled.div<{ $back: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: var(--small-radius);
    padding: 0.8rem;

    ${({ $back }) =>
        $back
            ? css`
                  transform: rotateY(180deg);
                  background: var(--primary-shadow-color);
              `
            : css`
                  background: var(--primary-black-color);
              `}

    @media (max-width: 480px) {
        padding: var(--input-radius);
    }
`;

export const Title = styled.div`
    text-align: center;

    @media (max-width: 480px) {
        font-size: var(--header-small);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Year = styled.div`
    font-size: 3rem;

    @media (max-width: 480px) {
        font-family: var(--fancy-font);
        font-size: var(--header-large);
    }
`;

export const StyledIconButton = styled(IconButton)`
    width: 3rem;
    height: 3rem;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);

    &.MuiIconButton-root {
        position: absolute;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        bottom: 0.3rem;
    }
`;

export const StyledInfoIcon = styled(Info)`
    color: #ffffff;

    &.MuiSvgIcon-root {
        height: 2.3rem;
        width: 2.3rem;
    }

    @media (max-width: 480px) {
        &.MuiSvgIcon-root {
            height: 3rem;
            width: 3rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            height: 2.8rem;
            width: 2.8rem;
        }
    }
`;
