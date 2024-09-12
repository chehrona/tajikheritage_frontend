import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    text-align: center;
    color: var(--primary-black-color);
    padding: 1.5rem 3rem 3rem 3rem;

    @media (max-width: 480px) {
        padding: 0rem var(--page-padding) var(--text-segment-gap)
            var(--page-padding);
        line-height: var(--body-text-line-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 2rem 2rem 2.5rem 2rem;
    }
`;
