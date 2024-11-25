import styled from 'styled-components';

export const InnerBoxContainer = styled.div<{ $center: boolean }>`
    gap: var(--square-card-gap);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: var(--page-height);
`;
