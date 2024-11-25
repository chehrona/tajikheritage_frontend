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
