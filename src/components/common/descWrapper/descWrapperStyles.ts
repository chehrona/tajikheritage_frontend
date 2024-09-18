import styled, { css } from 'styled-components';

export const EmptyDiv = styled.div``;

export const SoundBox = styled.div`
    display: flex;
    align-items: center;
    height: 2.5rem;
    margin-bottom: var(--text-segment-gap);

    &:last-child {
        margin-bottom: 0rem;
    }
`;

export const TableImage = styled.img<{ $expanded: boolean }>`
    margin: var(--text-segment-gap) 0rem 0rem 0rem;
    transition: 0.3s ease-in-out;
    ${({ $expanded }) =>
        $expanded
            ? css`
                  height: 100svh;
                  border-radius: var(--big-radius);
                  cursor: zoom-in;
              `
            : css`
                  height: 45vh;
                  border-radius: var(--small-radius);
                  cursor: zoom-out;
              `};

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: auto;
        width: ${({ $expanded }) => ($expanded ? '100%' : '50%')};
    }
`;
