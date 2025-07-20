import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { 
        -webkit-transform: rotate(0deg); 
        transform: rotate(0deg); 
    } 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform: rotate(360deg); 
    } 
`;

export const LogoContainer = styled.div`
    top: -2.5rem;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 2;

    @media (max-width: 480px) {
        top: -2.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        top: -3rem;
    }
`;

export const LogoWrapper = styled.div<{ $lang: string }>`
    position: absolute;
    top: 0rem;
    left: 50%;
    z-index: 3;
    transform: translateX(-50%);
    transition: transform 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
        filter: drop-shadow(0px 0px 0.25px var(--primary-black-color));
        transform: translateZ(1rem) translateX(-50%) scaleX(1.05) scaleY(1.05);
        transition: transform 0.25s ease-in-out;
    }

    @media (max-device-width: 1024px) {
        &:hover {
            filter: none;
            transform: translateX(-50%);
            transition: transform 0.25s ease-in-out;
        }
    }
`;

export const LogoOuter = styled.img<{ $lang: string }>`
    height: 5rem;
    width: 5rem;
    animation: ${spin} 10s linear infinite;

    @media (max-width: 480px) {
        height: 5rem;
        width: 5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 6rem;
        width: 6rem;
    }
`;

export const LogoInner = styled.img`
    height: 5rem;
    width: 5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 480px) {
        height: 5rem;
        width: 5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 6rem;
        width: 6rem;
    }
`;

export const Text = styled.img`
    position: absolute;
    width: 8rem;
    height: 8rem;
    z-index: 2;
    top: -1rem;

    @media (max-width: 480px) {
        height: 7.5rem;
        width: 7.5rem;
        top: -0.65rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 9rem;
        width: 9.5rem;
        top: -0.75rem;
    }
`;
