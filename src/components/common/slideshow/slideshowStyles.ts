import styled from 'styled-components';
import { IconButton } from '@mui/material';

// Types
import { ImageWrapperProps, StyledButtonProps } from './types/styleTypes';

export const Arrow = styled.div`
    color: var(--secondary-gold-color);
    height: 100%;
    width: 100%;
    border: 0.0625rem solid var(--secondary-gold-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bd9d5266;

    &:hover {
        box-shadow: 0rem 0rem 0.3rem 0rem var(--secondary-white-color);
    }

    @media (max-device-width: 1024px) {
        &:hover {
            box-shadow: 0rem 0rem 0rem 0rem var(--secondary-white-color);
        }
    }
`;

export const ImageContainer = styled.div`
    position: absolute;
    display: flex;
`;

export const ImageWrapper = styled.div<ImageWrapperProps>`
    position: relative;
    transition: transform 0.5s;
    background-repeat: no-repeat;
    background-position: center center;
    min-width: ${({ $width }) => $width && `${$width}px`};
    max-width: ${({ $width }) => $width && `${$width}px`};
    background: ${({ $src }) => $src && `url(${$src})`};
    height: ${({ $width, $height }) =>
        $height ? `${$height}rem` : $width && `${$width * 1.2049}px`};
    border-top-left-radius: ${({ $topLeftRad }) =>
        $topLeftRad && `${$topLeftRad}rem`};
    transform: ${({ $translate }) => `translateX(${$translate}px)`};
    background-size: ${({ $src }) => $src && 'cover'};

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-image: ${({ $overlay }) => $overlay && `url(${$overlay})`};
        filter: drop-shadow(0px 0px 1px var(--secondary-white-color));
        border-top-left-radius: ${({ $topLeftRad }) =>
            $topLeftRad && `${$topLeftRad}rem`};
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
`;

export const StyledButton = styled(IconButton)<StyledButtonProps>`
    width: 3.5rem;
    height: 3.5rem;
    color: var(--primary-gold-color);
    display: flex;
    justify-content: center;
    align-items: center;

    &.MuiButtonBase-root {
        position: absolute;
        top: 50%;
        z-index: 10;
        ${({ $left }) => ($left ? 'left: 0.5rem' : 'right: 0.5rem')};
        transform: translateY(-50%) ${({ $left }) => $left && 'rotate(-180deg)'};
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
    color: var(--regular-white-color);
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

    @media (max-width: 480px) {
    }
`;

export const Circle = styled.div<{ $selected: boolean }>`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--primary-gold-color);
    border: 1px solid var(--secondary-gold-color);
    opacity: ${({ $selected }) => ($selected ? '1' : '0.4')};
    margin-right: 0.25rem;

    &:last-child {
        margin-right: 0rem;
    }
`;
