import styled from 'styled-components';
import { IconButton } from '@mui/material';

// Types
import { StyledIconButtonProps, ImageProps } from './types/styleTypes';

export const MainContainer = styled.div`
    background: var(--primary-black-color);
    position: relative;
    background-image: url(${'/noise.png'});
    padding-bottom: 9rem;
    padding-top: 9rem;

    &:before {
        content: '';
        padding: 3rem;
        width: 100%;
        background: var(--primary-white-color);
        background-image: url(${'/noise.png'});
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
    padding: 2rem 3rem 2rem 3rem;
    height: 38rem;

    @media (max-width: 480px) {
        padding: var(--text-segment-gap) var(--page-padding);
        height: 80svh;
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
    background-image: url(${'/noise.png'});
    background: var(--primary-black-color);
    border: var(--input-radius) solid var(--primary-gold-color);

    ${({ $size }) =>
        $size &&
        `
        padding: 0.25rem 0.5rem;
        width: fit-content;
        height: fit-content;
        border: 1px solid var(--primary-gold-color);
    `}
`;

export const Year = styled.div<{ $show: boolean }>`
    display: ${({ $show }) => $show && 'none'};
    margin: 0.4rem 1rem 0.4rem 1rem;

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
    margin-top: 2rem;
    display: flex;
    overflow: hidden;
    position: relative;
    height: 27rem;

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
    background: var(--primary-white-color);
    border-radius: var(--big-radius);
    display: flex;

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
    border-radius: var(--big-radius);
    position: relative;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const Desc = styled.div`
    padding: 1.5rem 2rem 1.5rem 2rem;
    font-size: var(--body-text);
    line-height: 2rem;
    height: 26rem;
    text-align: justify;
    overflow-y: scroll;

    padding: 0rem calc(var(--page-padding) - (var(--input-radius) / 2))
        var(--text-segment-gap) var(--page-padding);

    @media (max-width: 480px) {
        padding: var(--text-segment-gap) var(--page-padding);
        line-height: var(--body-text-line-height);
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
    bottom: 0.5rem;
    right: 0rem;
    z-index: 10;

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
    width: 5rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-family: var(--fancy-font);

    @media (max-width: 480px) {
        width: fit-content;
        font-size: var(--header-normal);
    }
`;

export const StyledIconButton = styled(IconButton)<StyledIconButtonProps>`
    height: 2rem;
    width: 2rem;
    transform: ${({ $left }) => $left && 'rotate(180deg)'};

    svg {
        fill: var(--primary-gold-color);
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
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    transform: translateX(${({ translate }) => `${translate}px`});
    background-size: ${({ $src }) => $src && 'contain'};

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        background-size: ${({ $src }) => $src && 'cover'};
    }
`;
