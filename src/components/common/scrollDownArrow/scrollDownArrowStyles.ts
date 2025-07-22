import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
    40% {transform: translateY(-1rem);} 
    60% {transform: translateY(-0.5rem);} 
`;

export const MainContainer = styled.div<{ $show: boolean }>`
    height: 6rem;
    justify-content: center;
    align-items: center;
    display: ${({ $show }) => ($show ? 'flex' : 'none')};

    @media (max-width: 480px) {
        height: 5rem;
        position: absolute;
        bottom: 4rem;
        right: 0.25rem;
        z-index: 1000;
    }
`;

export const Title = styled.div`
    color: var(--primary-gold-color);

    @media (max-width: 480px) {
        display: none;
    }
`;

export const Arrow = styled.img`
    animation: ${bounce} 2s infinite;
    height: 100%;
    width: 3rem;
`;
