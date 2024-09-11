import styled, { css, keyframes } from 'styled-components';

// Types
import { WrapperBaseProps } from '../letterShapes/types/styleTypes';

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

export const LetterStackWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LetterContainer = styled.div`
    position: relative;
    height: 27rem;
    width: 58rem;

    @media (max-width: 480px) {
        height: calc(10 * var(--circle-letter-size));
        width: calc(5 * var(--circle-letter-size));
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

        @media (max-width: 480px) {
            transform: translateZ(0rem) translateX(0rem) scale(1);
            box-shadow: none;
        }
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
    height: var(--circle-letter-size);
    width: var(--circle-letter-size);
    position: absolute;
    left: ${({ $left }) =>
        $left && `calc(${$left} * var(--circle-letter-size))`};
    top: ${({ $top }) => $top && `calc(${$top} * var(--circle-letter-size))`};
    background-color: var(--primary-black-color);
    border-radius: var(--circle-letter-size);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-gold-color);
    font-size: var(--header-big);
    will-change: transform;
    font-family: var(--fancy-font);

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
    width: calc(var(--circle-letter-size) * 2);
    ${emptyBackground}

    img {
        height: 100%;
    }

    &:hover {
        ${hoverEffect}
    }
`;

export const VerticalWrapper = styled(WrapperBase)`
    width: calc(var(--circle-letter-size) * 2);
    transform: rotateZ(90deg);

    span {
        transform: rotateZ(-90deg);
    }

    img {
        transform: rotateZ(-90deg);
        width: calc(var(--circle-letter-size) - 0.5rem);
        height: auto;
    }

    &:hover {
        ${hoverEffect}
        transform: rotateZ(90deg) translateZ(1rem) translateX(0rem) scale(1.05);

        @media (max-width: 480px) {
            transform: rotateZ(90deg) translateZ(0rem) translateX(0rem) scale(1);
        }
    }
`;

export const CircleWrapper = styled(WrapperBase)`
    width: var(--circle-letter-size);

    img {
        width: 80%;
        height: 80%;
    }

    &:hover {
        ${hoverEffect}
    }
`;

export const InstructionWrapper = styled(WrapperBase)`
    font-size: calc(var(--header-small) * 1.25);
    font-weight: normal;
    padding: 0.5rem;
    width: calc(var(--circle-letter-size) * 3);
    pointer-events: none;
    background-image: url('/noise.png');
`;
