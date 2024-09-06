import styled, { keyframes } from 'styled-components';

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

export const SquareCardWrapper = styled.div<{ $delay: string }>`
    opacity: 0;
    height: 25rem;
    width: 25rem;
    color: var(--primary-black-color);
    position: relative;
    border-radius: 0.7rem;
    animation: ${slideOut} 1s ease-in-out forwards;
    transition: border-radius 250ms, box-shadow 400ms;
    animation-delay: ${({ $delay }) => ($delay ? $delay : '0s')};

    &:hover {
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
    }

    @media (max-width: 480px) {
        height: 23rem;
        width: 23rem;
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
    }
`;

export const SquareImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 0.7rem;
`;
