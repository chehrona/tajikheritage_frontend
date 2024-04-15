import styled from "styled-components";
import { IconButton } from '@mui/material';

export const StyledIconButton = styled(IconButton)`
    width: 3.5rem;
    height: 3.5rem;

    &.MuiIconButton-root {
        transform: ${({ bottom }) => bottom ? 'rotate(90deg)' : 'rotate(-90deg)'};
        margin-bottom: ${({ bottom }) => bottom && '-0.5rem'};
        margin-top: ${({ bottom }) => !bottom && '-0.5rem'};
    }

    @media (max-width: 480px) {
        width: 5.5rem;
        height: 5.5rem;

        &.MuiIconButton-root {
            position: absolute;
            bottom: 0.5rem;
            margin: 0rem;
            transform: ${({ bottom }) => bottom ? 'rotate(0deg)' : 'rotate(-180deg)'};
            ${({ bottom }) => bottom ? 'right: 0.8rem' : 'left: 0.8rem'};
        }

        &:disabled {
            display: none;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;

        &.MuiIconButton-root {
            transform: ${({ bottom }) => bottom ? 'rotate(90deg)' : 'rotate(-90deg)'};
            margin-bottom: ${({ bottom }) => bottom && '-0.6rem'};
            margin-top: ${({ bottom }) => !bottom && '-0.6rem'};
        }
    }
`;

export const Arrow = styled.div`
    color: #eac364;
    height: 100%;
    width: 100%;
    border: 0.0625rem solid #eac364;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bd9d5266;

    &:hover {
        box-shadow: 0rem 0rem 0.3rem 0rem #dedbdb;
    }

    @media (max-device-width: 1024px) {
        &:hover {
            box-shadow: 0rem 0rem 0rem 0rem #dedbdb;
        }
    }
`;

export const ImageContainer = styled.div`
    position: absolute;
    display: flex;
`;

export const ImageWrapper = styled.div`
    position: relative;
    transition: transform 0.5s;
    background-repeat: no-repeat;
    background-position: center center;
    min-width: ${({ width }) => width && `${width}px`};
    max-width: ${({ width }) => width && `${width}px`};
    background: ${({ src }) => src && `url(${ src })`};
    height: ${({ width, height }) => height ? height : (width && `${width*1.2049}px`)};
    border-top-left-radius: ${({ topLeftRad }) => topLeftRad && `${topLeftRad}rem`};
    border-bottom-left-radius: ${({ bottomLeftRad }) => bottomLeftRad && `${bottomLeftRad}rem`};
    transform: ${({ translate }) => `translateX(${translate}px)`};
    background-size: ${({ src }) => src && 'cover'};

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-image: ${({ overlay }) => overlay && `url(${ overlay })`};
        filter: drop-shadow(0px 0px 1px #dedbdb);
        border-top-left-radius: ${({ topLeftRad }) => topLeftRad && `${topLeftRad}rem`};
    }
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
`;

export const SlideContainer = styled.div`
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center center;
    background: ${({ src }) => src && `url(${ src })`};
    background-size: ${({ src }) => src ? 'cover' : 'contain'};
`;

export const StyledButton = styled(IconButton)`
    width: 3.5rem;
    height: 3.5rem;
    color: #bd9d52;
    display: flex;
    justify-content: center;
    align-items: center;

    &.MuiButtonBase-root {
        position: absolute;
        top: 50%;
        z-index: 10;
        ${({ left }) => left ? 'left: 0.5rem' : 'right: 0.5rem'};
        transform: translateY(-50%) ${({ left }) => left && 'rotate(-180deg)'};
    }

    &:disabled {
        display: none;
    }

    @media (max-width: 480px) {
        width: 5rem;
        height: 5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;
    }
`;

export const ImgInfo = styled.div`
    position: absolute;
    z-index: 11;
    font-style: italic;
    margin: 0.25rem;
    text-align: left;
    color: #fcf6e9;
    bottom: 0rem;
    background-color: #262626a6;
    width: calc(100% - 0.5rem);
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    height: auto;

    @media (max-width: 1024px) {
        font-size: 1.25rem;
        line-height: 1.4rem;
    }
`;

export const PlaceIndicator = styled.div`
    display: flex;
    height: 1.1rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0.25rem;
    z-index: 1;
`;

export const Circle = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #bd9d52;
    opacity: ${({ selected }) => selected ? "1" : "0.4"};
    margin-right: 0.25rem;

    &:last-child {
        margin-right: 0rem;
    }
`;