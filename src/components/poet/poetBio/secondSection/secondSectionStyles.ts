import styled, { keyframes } from 'styled-components';

// Standards
const squareSizeMobile = 13;
const squareSizeDesktop = 18;

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
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    margin: var(--text-segment-gap) 0rem;
    color: var(--primary-white-color);
    height: calc(38rem + ${squareSizeDesktop}rem);
    text-shadow: 0.0625rem 0.0625rem 0.1875rem var(--primary-black-color);

    @media (max-width: 480px) {
        flex-direction: column;
        height: 35.5rem;
    }
`;

export const InnerOverlay = styled.div`
    background: var(--primary-grey-color);
    margin: ${`${squareSizeDesktop / 2}rem`} 0rem;
    width: 100%;
    overflow: hidden;
    filter: grayscale(1);
    height: 38rem;

    @media (max-width: 480px) {
        height: 100%;
        margin: ${`${squareSizeMobile / 2}rem`} 0rem 0rem 0rem;
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
    width: ${squareSizeDesktop}rem;
    min-width: ${squareSizeDesktop}rem;
    min-height: ${squareSizeDesktop}rem;
    background: var(--primary-black-color) url('/customAssets/loader.png')
        center no-repeat;
    background-size: 50% auto;
    display: block;
    filter: grayscale(1)
        ${({ $show }) => ($show ? 'brightness(100%)' : 'brightness(50%)')};
    box-shadow: ${({ $show }) =>
        $show
            ? 'var(--primary-box-shadow) var(--secondary-white-color);'
            : 'var(--primary-box-shadow) var(--primary-shadow-color)'};

    @media (max-width: 480px) {
        width: ${squareSizeMobile}rem;
        min-height: ${squareSizeMobile}rem;
        max-height: ${squareSizeMobile}rem;
        display: ${({ $show }) => !$show && 'none'};
        animation: ${slideOut} 0.25s ease-in-out forwards;
    }
`;

export const Line = styled.div`
    height: 0.0625rem;
    width: 6rem;
    background: var(--primary-gold-color);
    margin: -0.5rem;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const NavButtonWrapper = styled.div`
    position: absolute;
    top: ${squareSizeDesktop / 2}rem;
    width: calc(100% - ${squareSizeDesktop}rem - 10%);
    left: calc(${squareSizeDesktop}rem + 10%);
    height: 38rem;
    padding: 3rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px) {
        position: absolute;
        top: 31.5rem;
        left: 0rem;
        width: 100%;
        height: 4rem;
        padding: 0rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const ButtonWrapper = styled.div<{ $top: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 4rem;
    position: relative;
    transform: ${({ $top }) => ($top ? 'rotateZ(-90deg)' : 'rotateZ(90deg)')};

    > button {
        transform: ${({ $top }) =>
            $top ? 'rotateZ(180deg)' : 'rotateZ(0deg)'};
    }

    @media (max-width: 480px) {
        width: 4rem;
        transform: ${({ $top }) => ($top ? 'rotateZ(0deg)' : 'rotateZ(0deg)')};

        > button {
            transform: ${({ $top }) =>
                $top ? 'rotateZ(0deg)' : 'rotateZ(0deg)'};
        }
    }
`;

export const LineWrapper = styled.div`
    display: flex;
    height: 20rem;
    width: 100%;
    transition: ease 1000ms;
    align-items: center;
    color: var(--secondary-white-color);

    @media (max-width: 480px) {
        flex-direction: column;
        position: relative;
    }
`;

export const Info = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    height: 19rem;
    padding: 0rem calc(1.5 * var(--page-padding));

    @media (max-width: 480px) {
        height: 18.5rem;
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
