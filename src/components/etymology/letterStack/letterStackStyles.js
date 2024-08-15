import styled, { css, keyframes } from 'styled-components';

const stanWidth = 5.25;
const stanHeight = 5.25;

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

const hoverEffect = ({ empty }) =>
    !empty &&
    css`
        cursor: pointer;
        transform: translateZ(1rem) translateX(0rem) scale(1.05);
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
            opacity 0.5s ease-in-out;
        box-shadow: 0rem 0rem 0.6rem #504221d1;
    `;

const emptyBackground = ({ empty }) =>
    empty &&
    css`
        pointer-events: none;
        background-image: url('/noise.png');
    `;

export const WrapperBase = styled.div`
    color: #bd9d52;
    font-family: 'EB Garamond', serif;
    height: ${stanHeight}rem;
    display: flex;
    position: absolute;
    border-radius: 5rem;
    justify-content: center;
    align-items: center;
    background-color: #0f0a00;
    font-size: 2.5rem;
    left: ${({ left }) => `${left * stanWidth}rem`};
    top: ${({ top }) => `${top * stanWidth}rem`};
    will-change: transform;

    ${({ open }) =>
        open
            ? css`
                  opacity: 0;
                  transition: opacity 150ms;
                  animation: ${bubbleIn} 300ms ease-in-out forwards;
                  animation-delay: ${({ delay }) => delay && `${delay}s`};
              `
            : css`
                  opacity: 1;
                  transition: opacity 150ms;
                  animation: ${bubbleOut} 300ms ease-in-out forwards;
                  animation-delay: ${({ delay }) => delay && `${delay}s`};
              `};

    ${emptyBackground}

    &:hover {
        color: #fcf6e9;
        ${hoverEffect}
    }

    span {
        will-change: color;
    }
`;

export const OvalWrapper = styled(WrapperBase)`
    width: ${stanWidth * 2}rem;
    ${emptyBackground}

    img {
        height: 100%;
    }

    &:hover {
        ${hoverEffect}
    }
`;

export const VerticalWrapper = styled(WrapperBase)`
    width: ${stanWidth * 2}rem;
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
    width: ${stanWidth}rem;

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
    width: ${stanWidth * 3}rem;
    pointer-events: none;
    background-image: url('/noise.png');
`;
