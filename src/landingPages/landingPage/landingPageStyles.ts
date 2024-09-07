import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const slideOut = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    50% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const PageContainer = styled.div`
    box-sizing: border-box;
    min-height: 100svh;
    padding: 2rem 7rem 2rem 7rem;
    background: var(--regular-white-color);

    @media (max-width: 480px) {
        padding: 1.5rem 2.5rem 1.5rem 2.5rem;
        min-height: calc(100svh - 10.5rem);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 4.2rem;
    }
`;

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
