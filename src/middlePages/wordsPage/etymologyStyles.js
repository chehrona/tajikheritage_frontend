import styled, { keyframes } from 'styled-components/macro';

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
    padding: 2rem 3.8rem 2.8rem 3.2rem;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 480px) {
        padding: 1.5rem 0rem;
        min-height: calc(100svh - 10.5rem);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 1.8rem 2rem 1.2rem;
    }
`;

export const PageTitle = styled.div`
    font-size: 1.75rem;
    font-weight: bold;
    color: #0f0a00;
    font-family: 'EB Garamond', serif;
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.25rem;
    }
`;

export const InnerBoxContainer = styled.div`
    padding-top: 2rem;
    width: 100%;

    @media (max-width: 480px) {
        gap: 2rem;
        padding: 1rem 1.5rem;
    }
`;

export const FooterTitle = styled.div`
    font-size: 1.75rem;
    font-weight: bold;
    color: #0f0a00;
    font-family: 'EB Garamond', serif;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
        font-size: 2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.25rem;
    }
`;

export const CardsContainer = styled.div`
    width: 100%;
    gap: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ center }) =>
        center ? 'space-between' : 'flex-start'};

    @media (max-width: 480px) {
        gap: 1rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        gap: 2rem;
    }
`;

export const TextContainer = styled.div`
    border-radius: 4rem;
    min-height: 30rem;
    background: #fcf6e9;
    background-image: url(${'/noise.png'});
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem #504221d1;
    padding: 1rem 3rem 2rem 3rem;
    animation: ${slideOut} 1s ease-in-out forwards;

    @media (max-width: 480px) {
        margin: 0rem;
        border-radius: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
        padding: 0.5rem 0rem 1.5rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 2.5rem;
    }
`;

export const FirstBox = styled.div`
    width: 100%;
    color: #0f0a00;
    font-size: 1.1rem;
    position: relative;
    line-height: 1.7rem;

    ::-webkit-scrollbar {
        width: 0rem;
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
        padding: 0.5rem 1.5rem 0rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding-top: 0.25rem;
    }
`;

export const TextWrapper = styled.div`
    margin-top: 1rem;
`;
