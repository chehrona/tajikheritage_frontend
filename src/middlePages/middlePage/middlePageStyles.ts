import styled from 'styled-components';

export const InnerBoxContainer = styled.div<{ $center: boolean }>`
    gap: 3rem;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2.25rem;
    justify-content: ${({ $center }) =>
        $center && $center ? 'space-between' : 'flex-start'};

    @media (max-width: 480px) {
        gap: 2rem;
        margin-top: 1.5rem;
        justify-content: center;
    }
`;
