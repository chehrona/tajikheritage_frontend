import styled from 'styled-components';

export const InnerBoxContainer = styled.div<{ $center: boolean }>`
    gap: var(--square-card-gap);
    padding: 0rem 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ $center }) =>
        $center && $center ? 'space-between' : 'flex-start'};

    @media (max-width: 480px) {
        padding: 0rem;
        justify-content: center;
    }
`;
