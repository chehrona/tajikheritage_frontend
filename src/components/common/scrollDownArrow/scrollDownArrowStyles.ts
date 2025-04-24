import styled, { keyframes } from 'styled-components';
import { South } from '@mui/icons-material';

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
    40% {transform: translateY(-1rem);} 
    60% {transform: translateY(-0.5rem);} 
`;

export const ScrollWrapper = styled.div<{ $show: boolean }>`
    display: ${({ $show }) => ($show ? 'flex' : 'flex')};
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        position: absolute;
        right: 0.5rem;
    }
`;

export const Title = styled.div`
    color: var(--primary-gold-color);
    margin-right: 0.5rem;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${bounce} 2s infinite;
`;

export const Line = styled.div`
    width: 2px;
    height: 3rem;
    bottom: 1rem;
    position: absolute;
    background-color: var(--primary-gold-color);
`;

export const Arrow = styled(South)`
    color: var(--primary-gold-color);
    position: absolute;
    bottom: 0.5rem;
`;

export const Circle = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid var(--primary-gold-color);
`;
