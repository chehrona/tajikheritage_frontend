import styled from 'styled-components';

export const MainContainer = styled.div<{ $show: boolean }>`
    cursor: pointer;
    height: auto;
    width: var(--page-padding);
    pointer-events: auto;
    justify-content: center;
    align-items: center;
    display: ${({ $show }) => ($show ? 'flex' : 'none')};

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const Arrow = styled.img`
    height: 100%;
    width: 100%;
    transform: rotateZ(180deg);
`;
