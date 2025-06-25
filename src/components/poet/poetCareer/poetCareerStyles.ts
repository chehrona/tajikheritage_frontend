import styled from 'styled-components';
import { IconButton } from '@mui/material';

// Types
import { StyledIconButtonProps, ImageProps } from './types/styleTypes';

export const MainContainer = styled.div`
    background: var(--primary-black-color);
    position: relative;
    background-image: url(${'/customAssets/noise.webp'});
    padding: calc(3rem + (3.75 * var(--text-segment-gap))) 0rem;

    &:before {
        content: '';
        padding: 3rem;
        width: 100%;
        background: var(--primary-white-color);
        background-image: url(${'/customAssets/noise.webp'});
        -webkit-clip-path: polygon(-10px 0px, 100% 0%, 100% 0%, 0% 100%);
        clip-path: polygon(-10px 0px, 100% 0%, 100% 0%, 0% 100%);
        position: absolute;
        top: -0.03rem;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        padding: calc(2rem + (2.75 * var(--text-segment-gap))) 0rem;

        &:before {
            padding: 2rem;
            top: 0rem;
        }
    }
`;

export const SlideUnit = styled.div`
    padding: calc(2 * var(--text-segment-gap)) var(--page-padding);
    height: 75svh;

    @media (max-width: 480px) {
        height: 80svh;
        padding: var(--text-segment-gap) var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 34rem;
        padding: var(--text-segment-gap) 2rem var(--text-segment-gap) 2rem;
    }
`;

export const YearSliderWrapper = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;
    color: var(--primary-white-color);
`;

export const YearWrapper = styled.div<{ $size: boolean }>`
    z-index: 1;
    position: relative;
    width: 0rem;
    height: 0rem;
    border-radius: var(--big-radius);
    background: var(--primary-black-color);
    border: 0.45rem solid var(--primary-gold-color);

    ${({ $size }) =>
        $size &&
        `
        padding: 0.25rem 0.5rem;
        width: fit-content;
        height: fit-content;
        border: 1px solid var(--primary-gold-color);
        box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
    `}

    @media (max-width: 480px) {
        border: var(--input-radius) solid var(--primary-gold-color);

        ${({ $size }) =>
            $size &&
            `
        padding: 0.25rem 0.5rem;
        width: fit-content;
        height: fit-content;
        border: 1px solid var(--primary-gold-color);
    `}
    }
`;

export const Year = styled.div<{ $show: boolean }>`
    display: ${({ $show }) => $show && 'none'};
    margin: 0.25rem 0.75rem;
    font-size: var(--header-normal);

    @media (max-width: 480px) {
        margin: 0rem;
        font-size: var(--body-text);
    }
`;

export const Line = styled.div`
    background: var(--primary-gold-color);
    height: 2px;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const InfoContainer = styled.div`
    display: flex;
    overflow: hidden;
    position: relative;
    height: 29rem;
    padding-top: calc(2 * var(--text-segment-gap));

    @media (max-width: 480px) {
        flex-direction: column;
        margin-top: var(--text-segment-gap);
        height: calc(100% - var(--header-height));
    }
`;

export const InfoInnerContainer = styled.div<{ $translate: number }>`
    position: absolute;
    display: flex;
    gap: 50px;
    transition: all 0.5s;
    transform: translateX(${({ $translate }) => `${$translate}px`});

    @media (max-width: 480px) {
        position: relative;
        gap: calc(2 * var(--page-padding));
    }
`;

export const InfoWrapper = styled.div`
    height: 26rem;
    min-width: 810px;
    max-width: 810px;
    background: var(--primary-black-color);
    border-radius: var(--big-radius);
    display: flex;
    box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);

    @media (max-width: 480px) {
        border-radius: var(--big-radius) var(--big-radius) 0rem 0rem;
        height: calc(80svh - 2.5 * var(--header-height));
        min-width: calc(100vw - 3rem);
        max-width: calc(100vw - 3rem);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        min-width: calc(100vw - 2rem - 100px);
        max-width: calc(100vw - 2rem - 100px);
    }
`;

export const DescContainer = styled.div`
    height: 100%;
    position: relative;
    border-radius: 0rem var(--big-radius) var(--big-radius) 0rem;
    background: var(--primary-white-color);
    padding-top: var(--text-segment-gap);

    @media (max-width: 480px) {
        border-radius: var(--big-radius) var(--big-radius) 0rem 0rem;
        width: 100%;
    }
`;

export const CareerDesc = styled.div`
    font-size: var(--body-text);
    line-height: var(--body-text-line-height);
    height: 22rem;
    text-align: justify;
    overflow-y: scroll;
    padding: 0rem calc(var(--page-padding) - 1rem - var(--input-radius))
        var(--text-segment-gap) calc(var(--page-padding) - 1rem);
    margin: calc(var(--input-radius) / 2) calc(var(--input-radius) / 2)
        calc(var(--input-radius) / 2) 0rem;

    &::-webkit-scrollbar {
        width: var(--input-radius);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary-gold-color);
        border-radius: var(--input-radius);
    }

    @media (max-width: 480px) {
        padding: 0rem calc(var(--page-padding) - var(--input-radius))
            var(--text-segment-gap) var(--page-padding);
        min-height: 100%;
        height: 100%;
        max-height: 100%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        height: 23rem;
        margin: 0.5rem 0.25rem;
        padding: 1rem 1.75rem 2rem 1.5rem;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: var(--primary-white-color);
    border-radius: 0rem 0rem var(--big-radius) var(--big-radius);
    position: absolute;
    bottom: 0rem;
    right: 0rem;
    z-index: 10;
    height: 3rem;

    @media (max-width: 480px) {
        display: none;
        visibility: hidden;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        bottom: 0rem;
    }
`;

export const MobileFooter = styled.div`
    display: none;

    @media (max-width: 480px) {
        display: flex;
        height: var(--header-height);
        justify-content: center;
        align-items: center;
        background: var(--primary-white-color);
        border-radius: 0rem 0rem var(--big-radius) var(--big-radius);
        position: absolute;
        bottom: 0rem;
        right: 0rem;
        z-index: 1000;
        width: calc(100% - var(--page-padding));
        margin: 0rem calc(var(--page-padding) / 2);
    }
`;

export const Step = styled.div`
    min-width: 5rem;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--header-medium);
    font-family: var(--fancy-font);

    @media (max-width: 480px) {
        font-size: var(--header-normal);
    }
`;

export const StyledIconButton = styled(IconButton)<StyledIconButtonProps>`
    transform: ${({ $left }) => $left && 'rotate(180deg)'};

    svg {
        fill: var(--primary-gold-color);
        font-size: var(--header-big);
    }

    &:disabled {
        svg {
            fill: lightgray;
        }
    }

    @media (max-width: 480px) {
        height: 4rem;
        width: 4rem;

        svg {
            font-size: 2rem;
        }
    }
`;

export const ImageWrapper = styled.div`
    transition: 100ms ease-in-out;

    > * > * {
        border-bottom-left-radius: calc(var(--big-radius) - 0.25rem);
    }

    > * {
        border-top-left-radius: var(--big-radius);
        border-bottom-left-radius: var(--big-radius);
    }

    @media (max-width: 480px) {
        display: none;
    }
`;

export const Image = styled.div<ImageProps>`
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    height: 26rem;
    min-width: ${({ $width }) => $width && `${$width}px`};
    max-width: ${({ $width }) => $width && `${$width}px`};
    background: ${({ $src }) => $src && `url(${$src})`};
    transform: translateX(${({ translate }) => `${translate}px`});
    background-size: ${({ $src }) => $src && 'contain'};

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        background-size: ${({ $src }) => $src && 'cover'};
    }
`;
