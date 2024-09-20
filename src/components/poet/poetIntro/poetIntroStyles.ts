import styled, { keyframes, css } from 'styled-components';

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

const slideUp = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    
    }
`;

export const MainContainer = styled.div`
    background: var(--primary-black-color);
    display: flex;
    justify-content: space-between;
    position: relative;
    border-radius: var(--page-radius) var(--page-radius) 0rem 0rem;
    overflow: hidden;

    &:after {
        content: '';
        padding: 3rem;
        width: 100%;
        background: var(--primary-white-color);
        -webkit-clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
        clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        bottom: -0.01rem;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        flex-direction: column-reverse;

        &:after {
            content: '';
            padding: 2rem;
            width: 100%;
            background: var(--primary-white-color);
            -webkit-clip-path: polygon(
                -10px 0px,
                100% 100%,
                100% 100%,
                0% 100%
            );
            clip-path: polygon(-10px 0px, 100% 100%, 100% 100%, 0% 100%);
            position: absolute;
            bottom: 0rem;
            box-sizing: border-box;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 2.5rem 2.5rem 0rem 0rem;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0rem;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-image: url(${'/customAssets/noise.png'});
    border-radius: var(--page-radius) var(--page-radius) 0rem 0rem;
`;

export const FadedImage = styled.img`
    width: 47rem;
    min-height: 50rem;
    height: auto;
    background: var(--primary-black-color);
    transform-origin: center;
    border-radius: 5rem var(--page-radius) 0rem 5rem;

    @media (max-width: 480px) {
        width: 100%;
        min-height: 25rem;
        margin-left: -12%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 2.5rem 2.5rem 0rem 2.5rem;
        min-height: 40rem;
        width: 40rem;
    }
`;

export const SegmentContainer = styled.div`
    margin: 5rem;
    font-size: 1.5rem;
    width: 100%;
    z-index: 2;
    position: relative;

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin: 2.5rem 3rem 3rem 3rem;
        min-width: 12rem;
    }
`;

export const SectionTitle = styled.div`
    line-height: 3rem;
    color: var(--secondary-white-color);
    text-decoration: none;
    display: block;
    overflow: hidden;
`;

export const TitleSpan = styled.span<{ $delay: number }>`
    padding-left: 0.3rem;
    display: block;
    opacity: 0;
    transform: translateY(-100%);
    animation: ${slideUp} 1s ease-in-out forwards;
    animation-delay: ${({ $delay }) => ($delay ? `${0.03 * $delay}s` : '0s')};
    transition: font-size 0.25s ease-in-out;

    &:hover {
        text-shadow: 0.1rem 1rem 2rem var(--secondary-white-color);
        font-size: 1.6rem;
        cursor: pointer;
        transition: font-size 0.25s ease-in-out;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        text-shadow: 0.1rem 1rem 2rem var(--secondary-white-color);
        font-size: 1.75rem;

        &:hover {
            font-size: 1.75rem;
        }
    }
`;

export const PoetName = styled.div<{ $color?: boolean }>`
    opacity: 0;
    font-size: 8rem;
    font-weight: bold;
    font-style: italic;
    animation-delay: 0.1s;
    text-shadow: 0rem 0rem 5rem black;
    animation: ${slideOut} 1s ease-in-out forwards;

    ${({ $color }) =>
        $color
            ? css`
                  animation-delay: 0s;
                  margin-right: 2rem;
                  color: transparent;
                  -webkit-text-stroke-width: 0.22rem;
                  -webkit-text-stroke-color: var(--primary-gold-color);
              `
            : css`
                  color: var(--secondary-white-color);
                  -webkit-text-stroke-color: transparent;
              `}

    @media (max-width: 480px) {
        font-size: calc(1.35 * var(--header-large));
        line-height: calc(1.4 * var(--header-large));
        text-align: left;
        text-shadow: 0rem 0rem 2rem black;

        ${({ $color }) =>
            $color
                ? css`
                      margin: 0rem;
                      -webkit-text-stroke-width: 0.15rem;
                  `
                : css`
                      -webkit-text-stroke-color: transparent;
                  `}
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 6.5rem;
    }
`;

export const PoetNameContainer = styled.div`
    position: absolute;
    left: var(--page-padding);
    bottom: 6rem;
    display: flex;
    z-index: 2;

    @media (max-width: 480px) {
        top: 11.25rem;
        display: block;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        left: 3rem;
        bottom: 7rem;
    }
`;

export const YearsContainer = styled.div`
    color: var(--secondary-white-color);
    font-size: 10rem;
    min-height: 24rem;
    position: absolute;
    top: 4rem;
    left: 14rem;
    opacity: 0.25;
    font-weight: bold;
    z-index: 10;

    @media (max-width: 480px) {
        font-size: var(--header-large);
        min-height: 8rem;
        position: absolute;
        top: var(--page-padding);
        right: var(--page-padding);
        text-align: right;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 8rem;
        left: 8rem;
    }
`;

export const Year = styled.div`
    margin-left: 9rem;

    @media (max-width: 480px) {
        margin: 0rem var(--page-padding) 0rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-bottom: 1rem;
    }
`;

export const NumSpan = styled.span<{ $delay: string }>`
    opacity: 0;
    display: inline-block;
    animation: ${slideOut} 1s ease-in-out forwards;
    animation-delay: ${({ $delay }) => ($delay ? $delay : '0s')};
`;
