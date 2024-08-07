import { Link } from 'react-router-dom';
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

export const SquareCardWrapper = styled.div`
    opacity: 0;
    height: 25rem;
    width: 25rem;
    color: #0f0a00;
    position: relative;
    border-radius: 0.7rem;
    animation: ${slideOut} 1s ease-in-out forwards;
    transition: border-radius 250ms, box-shadow 400ms;
    animation-delay: ${({ delay }) => (delay ? delay : '0s')};

    &:hover {
        box-shadow: 0rem 0rem 0.6rem #504221d1;
    }

    @media (max-width: 480px) {
        height: 23rem;
        width: 23rem;
        box-shadow: 0rem 0rem 0.6rem #504221d1;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        box-shadow: 0rem 0rem 0.6rem #504221d1;
    }
`;

export const SquareImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 0.7rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    filter: ${({ disabled }) =>
        disabled ? 'brightness(0.5)' : 'brightness(1)'};
`;
