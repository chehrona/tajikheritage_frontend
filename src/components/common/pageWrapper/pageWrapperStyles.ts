import styled from 'styled-components';

// Article page *************************
export const ArticleContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    min-height: 100svh;
    background-color: var(--regular-white-color);
    padding: 2rem var(--desktop-padding);

    @media (max-width: 480px) {
        padding: 0rem;
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: var(--tablet-padding) var(--mobile-padding);
        font-size: 1.3rem;
    }
`;

// Landing page *************************
export const LandingContainer = styled.div`
    box-sizing: border-box;
    min-height: 100svh;
    padding: 2rem 7rem;
    background: var(--regular-white-color);

    @media (max-width: 480px) {
        padding: var(--page-padding);
        min-height: var(--page-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: var(--tablet-padding) 4.2rem;
    }
`;
