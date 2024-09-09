import styled from 'styled-components';

export const PageTitle = styled.div`
    font-size: 1.75rem;
    font-weight: bold;
    color: var(--primary-black-color);
    font-family: var(--fancy-font);
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.25rem;
    }
`;

export const CardsContainer = styled.div<{ $center: boolean }>`
    gap: 3rem;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2.25rem;
    justify-content: ${({ $center }) =>
        $center && $center ? 'space-between' : 'flex-start'};

    @media (max-width: 480px) {
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
    }
`;