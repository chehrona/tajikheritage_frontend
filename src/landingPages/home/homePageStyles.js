import styled, { keyframes } from 'styled-components';
import { South } from '@mui/icons-material';

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
    40% {transform: translateY(-1rem);} 
    60% {transform: translateY(-0.5rem);} 
`;

export const PageContainer = styled.div`
    box-sizing: border-box;
    background-color: #0f0a00;
    overflow: hidden;
    min-height: calc(100svh - 9.23rem);

    @media (max-width: 480px) {
        min-height: calc(100svh - 10.5rem);
    }
`;

export const InnerContainer = styled.div`
    height: 100%;
    display: flex;
    background: linear-gradient(
        90deg,
        rgba(189, 157, 82, 0.05),
        rgba(189, 157, 82, 0.07),
        rgba(189, 157, 82, 0.09),
        rgba(189, 157, 82, 0.11)
    );
    position: relative;
`;

export const ScrollWrapper = styled.div`
    position: absolute;
    bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 1rem;

    @media (max-width: 480px) {
        bottom: 8rem;
        right: 2rem;
        opacity: 1;
    }
`;

export const Title = styled.div`
    color: #bd9d52;
    margin-right: 0.5rem;
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
    background-color: #bd9d52;
`;

export const Arrow = styled(South)`
    color: #bd9d52;
    position: absolute;
    bottom: 0.5rem;
`;

export const Circle = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid #bd9d52;
`;
