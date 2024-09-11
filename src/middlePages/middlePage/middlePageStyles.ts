import styled from 'styled-components';

export const InnerBoxContainer = styled.div<{ $center: boolean }>`
    gap: var(--square-card-gap);
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ $center }) =>
        $center && $center ? 'space-between' : 'flex-start'};

    @media (max-width: 480px) {
        justify-content: center;
    }
`;
