import styled, { css, keyframes } from 'styled-components';

// Types
import { WrapperBaseProps } from '../letterShapes/types/styleTypes';

const stanSize = 5.25;

const bubbleIn = keyframes`
    0% {
        opacity: 0;
    }
    15% {
        opacity: 0;
    }
    25% {
        opacity: 0.5;
    }
    50% {
        opacity: 0.75;
    }
    75% {
        opacity: 0.9;
    }
    100% {
        opacity: 1;
    }
`;

const bubbleOut = keyframes`
    100% {
        opacity: 0;
    }
    75% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    25% {
        opacity: 0.75;
    }
    15% {
        opacity: 0.9;
    }
    0% {
        opacity: 1;
    }
`;

export const LetterContainer = styled.div`
    position: relative;
    height: 27rem;
    width: 58rem;
    margin-top: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 480px) {
        width: 100%;
        height: 100svh;
        margin: 2rem 0rem 1.5rem 1rem;
    }
`;

const hoverEffect = ({ $empty }: WrapperBaseProps) =>
    !$empty &&
    css`
        cursor: pointer;
        transform: translateZ(1rem) translateX(0rem) scale(1.05);
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
            opacity 0.5s ease-in-out;
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
    `;

const emptyBackground = ({ $empty }: WrapperBaseProps) =>
    $empty &&
    css`
        pointer-events: none;
        background-image: url('/noise.png');
    `;

const delayedAppearance = ({ $open, $delay }: WrapperBaseProps) =>
    $open
        ? css`
              opacity: 0;
              transition: opacity 150ms;
              animation: ${bubbleIn} 300ms forwards;
              animation-delay: ${() => ($delay ? `${$delay}s` : '0s')};
          `
        : css`
              opacity: 1;
              transition: opacity 150ms;
              animation: ${bubbleOut} 300ms forwards;
              animation-delay: ${() => ($delay ? `${$delay}s` : '0s')};
          `;

export const WrapperBase = styled.div<WrapperBaseProps>`
    height: 5rem;
    width: 5rem;
    position: absolute;
    left: ${({ $left }) => `${$left * 5.25}rem`};
    top: ${({ $top }) => `${$top * 5.25}rem`};
    background-color: var(--primary-black-color);
    border-radius: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-gold-color);
    font-size: 2.5rem;
    will-change: transform;

    ${delayedAppearance}
    ${emptyBackground}

    &:hover {
        color: var(--primary-white-color);
        ${hoverEffect}
    }

    span {
        will-change: color;
    }
`;

export const OvalWrapper = styled(WrapperBase)`
    width: ${stanSize * 2}rem;
    ${emptyBackground}

    img {
        height: 100%;
    }

    &:hover {
        ${hoverEffect}
    }
`;

export const VerticalWrapper = styled(WrapperBase)`
    width: ${stanSize * 2}rem;
    transform: rotateZ(90deg);

    span {
        transform: rotateZ(-90deg);
    }

    img {
        transform: rotateZ(-90deg);
        width: 5rem;
        height: auto;
    }

    &:hover {
        ${hoverEffect}
        transform: rotateZ(90deg) translateZ(1rem) translateX(0rem) scale(1.05);
    }
`;

export const CircleWrapper = styled(WrapperBase)`
    width: ${stanSize}rem;

    img {
        width: 80%;
        height: 80%;
    }

    &:hover {
        ${hoverEffect}
    }
`;

export const InstructionWrapper = styled(WrapperBase)`
    font-size: 1.75rem;
    font-weight: normal;
    padding: 0.5rem;
    width: ${stanSize * 3}rem;
    pointer-events: none;
    background-image: url('/noise.png');
`;
