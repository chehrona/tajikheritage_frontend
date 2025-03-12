import styled from 'styled-components';

export const SectionBoxContainer = styled.div<{ $center: boolean }>`
    gap: var(--long-card-gap);
    padding: 0rem 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ $center }) =>
        $center && $center ? 'space-between' : 'flex-start'};

    @media (max-width: 480px) {
        padding: 0rem;
        gap: var(--long-card-gap);
        justify-content: space-between;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        justify-content: space-between;
    }
`;
