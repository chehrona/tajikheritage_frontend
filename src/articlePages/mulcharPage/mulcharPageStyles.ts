import styled from 'styled-components';

export const ExtrasContainer = styled.div`
    position: relative;
    height: 100svh;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: calc(2 * var(--text-segment-gap)) 0rem var(--text-segment-gap) 0rem;
`;

export const ChartContainer = styled.div`
    transform: rotateZ(-90deg);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
