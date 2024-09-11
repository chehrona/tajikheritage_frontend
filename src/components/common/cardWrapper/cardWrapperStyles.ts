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
    transition: border-radius 250ms, box-shadow 400ms;
    height: ${({ $type }) => ($type === 'long' ? '35rem' : '23rem')};
    ${({ $disabled }) =>
        $disabled
            ? css`
                  filter: brightness(0.5);
                  cursor: default;

                  &:hover {
                      border-radius: initial;
                      box-shadow: initial;
                  }

                  > * {
                      border-radius: 0.7rem;
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

                  > * {
                      border-radius: 0.7rem;
                      transition: border-radius 250ms;

                      &:hover {
                          border-radius: 1.5rem;
                      }
                  }
              `}
    // Done
    @media (max-width: 480px) {
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
        height: ${({ $type }) => ($type === 'long' ? '16rem' : '16rem')};
        width: ${({ $type }) => ($type === 'long' ? '10.3rem' : '16rem')};

        &:hover {
            border-radius: 0.7rem;
            transition: initial;

            > * {
                border-radius: 0.7rem;

                &:hover {
                    border-radius: 0.7rem;
                }
            }
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
        width: 25rem;
        ${({ $type }) =>
            $type === 'long'
                ? css`
                      border-radius: 1.5rem;
                      height: 35rem;

                      > * {
                          border-radius: 1.5rem;
                      }
                  `
                : css`
                      border-radius: 0.7rem;
                      height: 25rem;

                      > * {
                          border-radius: 0.7rem;
                      }
                  `}
    }
`;
