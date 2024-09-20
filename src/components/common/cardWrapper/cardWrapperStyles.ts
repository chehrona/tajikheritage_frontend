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
    text-decoration: none;
    border-radius: var(--small-radius);
    animation: ${slideOut} 1s ease-in-out forwards;
    transition: border-radius 250ms, box-shadow 400ms;
    height: ${({ $type }) => ($type === 'long' ? '35rem' : '25rem')};
    width: ${({ $type }) => ($type === 'long' ? '23rem' : '25rem')};

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
                      border-radius: var(--small-radius);
                  }
              `
            : css`
                  pointer-events: all;
                  filter: brightness(1);
                  cursor: pointer;

                  &:hover {
                      border-radius: var(--big-radius);
                      box-shadow: var(--primary-box-shadow)
                          var(--primary-shadow-color);
                  }

                  > * {
                      border-radius: var(--small-radius);
                      transition: border-radius 250ms;

                      &:hover {
                          border-radius: var(--big-radius);
                      }
                  }
              `}
    // Done
    @media (max-width: 480px) {
        box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
        height: ${({ $type }) => ($type === 'long' ? '16rem' : '16rem')};
        width: ${({ $type }) => ($type === 'long' ? '10.3rem' : '16rem')};

        &:hover {
            border-radius: var(--small-radius);
            transition: initial;

            > * {
                border-radius: var(--small-radius);

                &:hover {
                    border-radius: var(--small-radius);
                }
            }
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
        width: 25rem;
        ${({ $type }) =>
            $type === 'long'
                ? css`
                      border-radius: var(--big-radius);
                      height: 35rem;

                      > * {
                          border-radius: var(--big-radius);
                      }
                  `
                : css`
                      border-radius: var(--small-radius);
                      height: 25rem;

                      > * {
                          border-radius: var(--small-radius);
                      }
                  `}
    }
`;
