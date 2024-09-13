import styled from 'styled-components';

export const MainContainer = styled.div`
    padding: 2rem 0rem;
    min-height: 40rem;
    border-radius: var(--page-radius);
    background: var(--primary-white-color);
    background-image: url(${'/noise.png'});
    margin-right: 0.86rem;
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem var(--primary-shadow-color);

    @media (max-width: 480px) {
        margin: 0rem;
        padding: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
    }
`;

export const WordTitle = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0rem 3rem;

    @media (max-width: 480px) {
        font-size: var(--header-medium);
        padding: var(--text-segment-gap) var(--page-padding) 0rem
            var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.75rem;
        padding: 0rem 2rem;
    }
`;

export const PronunciationWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0.25rem 1rem 0.25rem 3rem;

    @media (max-width: 480px) {
        padding: var(--text-segment-gap) var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0.5rem 2rem;
    }
`;

export const Transcript = styled.div`
    color: var(--primary-shadow-color);
    font-size: 1.25rem;
    padding-right: 0.5rem;

    @media (max-width: 480px) {
        font-size: var(--header-normal);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
    }
`;
