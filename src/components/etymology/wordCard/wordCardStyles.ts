import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledSpan } from '../../common/descWrapper/descWrapperStyles';

// Types
import { LinkBoxProps, CardWrapperProps } from './types/styleTypes';

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

export const CardWrapper = styled.div<CardWrapperProps>`
    background-color: var(--primary-black-color);
    height: 12rem;
    width: 25rem;
    border-radius: 0.7rem;
    padding: 1rem;
    position: relative;
    background-image: url(${'/noise.png'});
    animation: ${slideOut} 1s ease-in-out forwards;
    overflow: hidden;
    transition: border-radius 250ms, box-shadow 400ms;
    animation-delay: ${({ delay }) => (delay ? delay : '0s')};
    filter: ${({ disabled }) =>
        disabled ? 'brightness(0.5)' : 'brightness(1)'};

    &:hover {
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
    }

    @media (max-width: 480px) {
        width: 100%;
        height: 15rem;
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 15rem;
        width: 23rem;
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
    }
`;

export const WordTitle = styled.div`
    font-weight: bold;
    font-size: 1.15rem;
    color: var(--primary-gold-color);
    margin-bottom: 0.25rem;

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const WordDesc = styled(StyledSpan)`
    font-size: 1.1rem;
    width: 100%;
    height: calc(100% - 5.25rem);
    color: var(--regular-white-color);

    &:after {
        content: '';
        height: 3.5rem;
        width: 100%;
        left: 0rem;
        position: absolute;
        bottom: 4rem;
        background: linear-gradient(
            to bottom,
            rgba(252, 246, 233, 0),
            rgba(15, 10, 0, 0.75)
        );
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const LinkBox = styled(Link)<LinkBoxProps>`
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    border-radius: 0rem 0rem 0.7rem 0.7rem;
    bottom: 0rem;
    left: 0rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-decoration: none;
    background-color: var(--primary-black-color);
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;
