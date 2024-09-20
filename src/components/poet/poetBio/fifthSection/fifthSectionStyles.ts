import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    text-align: center;
    color: var(--primary-black-color);
    padding: var(--text-segment-gap) var(--page-padding);

    @media (max-width: 480px) {
        padding: 0rem var(--page-padding) var(--text-segment-gap)
            var(--page-padding);
        line-height: var(--body-text-line-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 2rem 2rem 2.5rem 2rem;
    }
`;

export const FifthBox = styled.div`
    padding-bottom: var(--text-segment-gap);

    @media (max-width: 480px) {
        padding-bottom: 0rem;
    }
`;
