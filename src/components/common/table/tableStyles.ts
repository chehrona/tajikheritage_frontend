import styled, { css } from 'styled-components';

export const MainContainer = styled.div<{ $expanded: boolean }>`
    position: relative;
    margin: var(--text-segment-gap) 0rem;
    transition: all 0.5s ease-in-out;
    border-radius: var(--small-radius);

    div {
        border-bottom-left-radius: var(--small-radius);
        border-bottom-right-radius: var(--small-radius);
    }

    ${({ $expanded }) =>
        $expanded
            ? css`
                  height: 100svh;
                  width: 99.4vh;
                  cursor: zoom-out;
              `
            : css`
                  height: 45vh;
                  cursor: zoom-in;
                  width: 44.7vh;
              `};

    @media (max-width: 480px) {
        width: 100%;
        height: auto;

        div {
            bottom: 0.25rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: auto;
        width: ${({ $expanded }) => ($expanded ? '100%' : '50%')};
    }
`;

export const TableImage = styled.img<{ $expanded: boolean }>`
    width: 100%;
    height: auto;
    border-radius: var(--small-radius);

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
`;
