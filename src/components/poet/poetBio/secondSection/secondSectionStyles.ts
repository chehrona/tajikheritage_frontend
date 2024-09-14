import styled, { keyframes } from 'styled-components';

// Standards
const squareSizeMobile = 13;

const slideOut = keyframes`
    0% {
        transform: translateX(${squareSizeMobile / 2}rem);
    }
    50% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(0);
    }
`;

export const MainContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 9rem;
    color: var(--primary-white-color);
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    text-shadow: 0.0625rem 0.0625rem 0.1875rem var(--primary-black-color);

    @media (max-width: 480px) {
        margin: var(--text-segment-gap) 0rem;
        color: var(--primary-white-color);
    }
`;

export const InnerOverlay = styled.div`
    background: var(--primary-grey-color);
    margin-top: 8rem;
    width: 100%;
    overflow: hidden;
    filter: grayscale(1);
    height: 40rem;

    @media (max-width: 480px) {
        height: calc(100svh - ${squareSizeMobile}rem);
        margin-top: ${`${squareSizeMobile / 2}rem`};
    }
`;

export const Backdrop = styled.div<{ $backdrop: string }>`
    height: 100%;
    width: 100%;
    opacity: 0.2;
    filter: grayscale(1);
    background-size: cover;
    background-position: center;
    background-image: ${({ $backdrop }) => `url(${$backdrop})`};

    @media (max-width: 480px) {
        opacity: 0.12;
    }
`;

export const Slides = styled.div`
    left: 10%;
    top: 0rem;
    z-index: 1;
    position: absolute;
    pointer-events: none;

    @media (max-width: 480px) {
        left: auto;
        height: 100%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        left: 2rem;
    }
`;

export const SlideImg = styled.img<{ $show?: boolean }>`
    width: 18rem;
    display: block;
    filter: grayscale(1)
        ${({ $show }) => ($show ? 'brightness(100%)' : 'brightness(60%)')};
    box-shadow: ${({ $show }) =>
        $show
            ? '0rem 0rem 0.5rem 0.1rem var(--secondary-white-color);'
            : '0rem 0rem 1rem 0.2rem var(--primary-shadow-color)'};

    @media (max-width: 480px) {
        width: ${squareSizeMobile}rem;
        min-height: ${squareSizeMobile}rem;
        max-height: ${squareSizeMobile}rem;
        display: ${({ $show }) => !$show && 'none'};
        animation: ${slideOut} 0.25s ease-in-out forwards;
    }
`;

export const NavBox = styled.div<{ $bottom: boolean }>`
    width: 100%;
    height: 10rem;
    position: absolute;
    right: 0rem;
    display: flex;
    ${({ $bottom }) => ($bottom ? 'bottom: 0rem' : 'top: 8rem')};

    @media (max-width: 480px) {
        height: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 5rem;
        ${({ $bottom }) => ($bottom ? 'bottom: 3rem' : 'top: 8rem')};
    }
`;

export const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 8rem;
    }
`;

export const Line = styled.div`
    width: 0.0625rem;
    height: 7rem;
    background: var(--primary-gold-color);
`;

export const NavButtonWrapper = styled.div`
    display: none;

    @media (max-width: 480px) {
        position: absolute;
        top: ${`${squareSizeMobile / 1.75}rem`};
        left: 0rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

export const LineWrapper = styled.div`
    color: var(--secondary-white-color);
    display: flex;
    height: 20rem;
    width: 100%;
    transition: ease 1000ms;
    align-items: center;

    @media (max-width: 480px) {
        flex-direction: column;
        position: relative;
    }
`;

export const Info = styled.div`
    padding: 0rem 10%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    pointer-events: auto;

    @media (max-width: 480px) {
        padding: 0.5rem var(--mobile-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem;
    }
`;

export const BoxTwoText = styled.div`
    text-align: justify;
    word-wrap: break-word;
    word-break: break-word;
    line-height: var(--body-text-line-height);
    font-size: var(--body-text);

    &::-webkit-scrollbar {
        width: var(--input-radius);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary-gold-color);
        border-radius: var(--input-radius);
    }

    @media (max-width: 480px) {
        max-height: calc(
            100svh - ${1.65 * squareSizeMobile}rem - var(--header-big) -
                var(--text-segment-gap)
        );
        overflow-y: auto;
        margin-right: calc(var(--input-radius) / 2);
        padding: 0rem calc(var(--page-padding) - (var(--input-radius) / 2))
            var(--text-segment-gap) var(--page-padding);
    }
`;

export const FillerOne = styled.div`
    min-width: 10%;

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        min-width: 2rem;
    }
`;

export const FillerTwo = styled.div`
    min-width: 18rem;

    @media (max-width: 480px) {
        display: none;
    }
`;
