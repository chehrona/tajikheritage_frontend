import styled from 'styled-components';

export const Subtitle = styled.span`
    font-weight: 500;
    font-size: 1.15rem;
    width: fit-content;
    padding-right: 0.25rem;
    margin: 0rem;
    text-transform: uppercase;
    border-right: 2px solid var(--primary-red-color);
    border-bottom: 2px solid var(--primary-red-color);
    display: flex;

    @media (max-width: 480px) {
        font-size: 1.35rem;
        margin-left: 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;
