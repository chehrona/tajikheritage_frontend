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
        padding-top: 7rem;
    }
`;

export const YearSlider = styled.div`
    padding: 2rem 3rem 2rem 3rem;
    height: 38rem;

    @media (max-width: 480px) {
        height: 41rem;
        padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 34rem;
        padding: 0.5rem 2rem 0.5rem 2rem;
    }
`;

export const UnitWrapper = styled.div`
    width: 100%;
    position: relative;
    color: var(--primary-white-color);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const YearWrapper = styled.div<{ $size: boolean }>`
    z-index: 1;
    background: var(--primary-black-color);
    border-radius: 1.5rem;
    position: relative;
    background-image: url(${'/noise.png'});
    width: 0rem;
    height: 0rem;
    border: 0.5rem solid var(--primary-gold-color);

    ${({ $size }) =>
        $size &&
        `
        padding: 0rem 0.5rem;
        width: fit-content;
        height: fit-content;
        border: 1px solid var(--primary-gold-color);
    `}
`;

export const Year = styled.div<{ $show: boolean }>`
    display: ${({ $show }) => $show && 'none'};
    margin: 0.4rem 1rem 0.4rem 1rem;
`;

export const Line = styled.div`
    background: var(--primary-gold-color);
    height: 0.0625rem;
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
        height: 35.5rem;
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
        gap: 30px;
    }
`;

export const InfoWrapper = styled.div`
    height: 26rem;
    min-width: 810px;
    max-width: 810px;
    background: var(--primary-white-color);
    border-radius: 1rem;
    display: flex;

    @media (max-width: 480px) {
        height: 34rem;
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
    border-radius: 1rem;
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

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary-gold-color);
        border-radius: 0.25rem;
    }

    @media (max-width: 480px) {
        padding: 1.5rem;
        font-size: 1.3rem;
        height: 32.6rem;
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
    border-radius: 0rem 0rem 1rem 1rem;
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
        justify-content: center;
        align-items: center;
        width: calc(100vw - 3rem);
        height: 3rem;
        background: var(--primary-white-color);
        border-radius: 0rem 0rem 1rem 1rem;
        position: absolute;
        bottom: 0rem;
        right: 0rem;
        z-index: 1000;
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
        font-size: 2rem;
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
