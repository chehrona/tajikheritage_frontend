import styled from 'styled-components';

export const SectionBoxContainer = styled.div<{ $center: boolean }>`
    gap: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ $center }) =>
        $center && $center ? 'space-between' : 'flex-start'};

    @media (max-width: 480px) {
        gap: 1rem 0.5rem;
        justify-content: space-between;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        justify-content: space-between;
    }
`;
