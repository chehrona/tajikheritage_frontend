import styled from 'styled-components';

export const WordTitle = styled.div`
    font-weight: bold;
    font-size: var(--header-medium);
    padding: calc(2 * var(--text-segment-gap)) var(--page-padding) 0rem
        var(--page-padding);

    @media (max-width: 480px) {
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
    padding: var(--text-segment-gap) var(--page-padding);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0.5rem 2rem;
    }
`;

export const Transcript = styled.div`
    color: var(--primary-shadow-color);
    font-size: var(--header-normal);
    padding-right: 0.5rem;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
    }
`;
