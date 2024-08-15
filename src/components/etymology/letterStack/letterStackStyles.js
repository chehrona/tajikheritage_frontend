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

const getRandomDelay = () => {
    const minDelay = 0;
    const maxDelay = 1;
    return `${Math.random() * (maxDelay - minDelay) + minDelay}s`;
};

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
    }
`;

const shapeStyles = ({ shape }) => {
    switch (shape) {
        case 'v':
            return css`
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
            `;
        case 'o':
            return css`
                width: ${stanWidth * 2}rem;

                img {
                    height: 100%;
                }
            `;
        case 'i':
            return css`
                font-size: 1.75rem;
                font-weight: normal;
                padding: 0.5rem;
                width: ${stanWidth * 3}rem;
                pointer-events: none;
                background-image: url('/noise.png');
            `;
        default:
            return css`
                width: 5.25rem;

                img {
                    width: 80%;
                    height: 80%;
                }
            `;
    }
};

const hoverEffect = ({ empty, shape }) =>
    !empty &&
    css`
        cursor: pointer;
        transform: translateZ(1rem) translateX(0rem) scale(1.05);
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1),
            opacity 0.5s ease-in-out;
        box-shadow: 0rem 0rem 0.6rem #504221d1;

        ${shape === 'v' &&
        css`
            transform: rotateZ(90deg) translateZ(1rem) translateX(0rem)
                scale(1.05);
        `}
    `;

const emptyBackground = ({ empty }) =>
    empty &&
    css`
        pointer-events: none;
        background-image: url('/noise.png');
    `;

export const LetterWrapper = styled.div`
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
                  animation: ${bubbleIn} 300ms ease-in-out forwards;
                  animation-delay: ${getRandomDelay()};
                  transition: opacity 150ms;
              `
            : css`
                  opacity: 1;
                  animation: ${bubbleOut} 300ms ease-in-out forwards;
                  animation-delay: ${getRandomDelay()};
                  transition: opacity 150ms;
              `};

    ${shapeStyles}
    ${emptyBackground}

    &:hover {
        color: #fcf6e9;
        ${hoverEffect}
    }

    span {
        will-change: color;
    }
`;
