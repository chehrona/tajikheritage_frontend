import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Types
import { LinkProps } from './types/styleTypes';

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

export const StyledLink = styled(Link)<LinkProps>`
    width: 23rem;
    text-decoration: none;
    border-radius: 0.7rem;
    animation: ${slideOut} 1s ease-in-out forwards;
    background-color: var(--primary-black-color);
    transition: border-radius 250ms, box-shadow 400ms;
    animation-delay: ${({ $delay }) => ($delay ? $delay : '0s')};
    height: ${({ $height }) => $height.d && `${$height.d}rem`};

    ${({ $disabled }) =>
        $disabled
            ? css`
                  pointer-events: none;
                  filter: brightness(0.5);
                  cursor: default;

                  &:hover {
                      border-radius: initial;
                      box-shadow: initial;
                  }
              `
            : css`
                  pointer-events: all;
                  filter: brightness(1);
                  cursor: pointer;

                  &:hover {
                      border-radius: 1.5rem;
                      box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
                  }
              `}

    @media (max-width: 480px) {
        width: 12.5rem;
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
        height: ${({ $height }) => $height.m && `${$height.m}rem`};

        &:hover {
            border-radius: initial;
            transition: initial;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 25rem;
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
        height: ${({ $height }) => $height.d && `${$height.d}rem`};

        &:hover {
            border-radius: initial;
            transition: initial;
        }
    }
`;
