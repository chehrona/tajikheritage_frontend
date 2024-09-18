import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
`;

// Article page *************************
export const ArticleContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    background-color: var(--regular-white-color);
    padding: 2rem var(--page-padding);
    animation: ${fadeIn} 1s ease-in-out forwards;
    overflow-x: hidden;

    @media (max-width: 480px) {
        padding: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: var(--page-padding);
    }
`;

// Landing page *************************
export const LandingContainer = styled.div`
    box-sizing: border-box;
    padding: 2rem var(--page-padding);
    background: var(--regular-white-color);
    animation: ${fadeIn} 1s ease-in-out forwards;
    overflow-x: hidden;
    min-height: var(--page-height);

    @media (max-width: 480px) {
        padding: var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: var(--tablet-padding) 4.2rem;
    }
`;
