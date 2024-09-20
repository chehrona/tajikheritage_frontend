import styled from 'styled-components';

export const PageTitle = styled.div`
    font-weight: bold;
    color: var(--primary-black-color);
    font-family: var(--fancy-font);
    margin-bottom: 1rem;
    text-align: center;
    font-size: var(--header-medium);
    line-height: var(--header-medium);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.25rem;
    }
`;

export const CardsContainer = styled.div<{ $center: boolean }>`
    display: flex;
    flex-wrap: wrap;
    gap: var(--square-card-gap);
    justify-content: ${({ $center }) =>
        $center && $center ? 'space-between' : 'flex-start'};

    @media (max-width: 480px) {
        justify-content: center;
    }
`;
