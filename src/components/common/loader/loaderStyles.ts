import styled, { css } from 'styled-components';

export const LoaderContainer = styled.div<{ $inProp: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    height: 100svh;
    z-index: 10;
    background: var(--primary-black-color) url('/loader.png') center no-repeat;
    background-size: 15rem 15rem;
    transition: opacity 0.5s ease, visibility 0.5s ease, display 0.5s ease;
    ${({ $inProp }) =>
        $inProp
            ? css`
                  display: block;
                  opacity: 1;
                  visibility: visible;
              `
            : css`
                  display: none;
                  opacity: 0;
                  visibility: hidden;
              `}
    @media (max-width: 480px) {
        background-size: 10rem 10rem;
    }
`;
