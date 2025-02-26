import styled from 'styled-components';

export const ImageContainer = styled.div`
    justify-content: center;
    position: relative;
    height: 100svh;
    width: calc(100svw - 4 * var(--page-padding));
    display: flex;
    justify-content: center;
    padding: calc(3 * var(--text-segment-gap)) var(--page-padding)
        var(--text-segment-gap) var(--page-padding);
`;
