import styled, { css } from 'styled-components';

// Types
import { ImageWrapperProps } from './types/styleTypes';

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
    height: ${({ $width, $height }) =>
        $height ? `${$height}` : $width && `${$width * 1.2049}px`};
    border-top-left-radius: ${({ $topLeftRad }) =>
        $topLeftRad && `${$topLeftRad}rem`};
    transform: ${({ $translate }) => `translateX(${$translate}px)`};
    ${({ $src }) =>
        $src
            ? css`
                  background-image: url(${$src});
                  background-size: cover;
              `
            : css`
                  background-image: url('/customAssets/loader.png');
              `}

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

    @media (max-width: 480px) {
        border-radius: 0rem;

        &::after {
            border-radius: 0rem;
        }
    }
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    transform: translateY(-50%);
    justify-content: space-between;
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

export const ImgInfo = styled.div`
    position: absolute;
    z-index: 11;
    font-style: italic;
    margin: 0.25rem;
    text-align: left;
    color: var(--regular-white-color);
    background-color: #262626a6;
    width: calc(100% - 0.5rem);
    padding: 0.25rem 0.5rem;
    height: auto;
    bottom: 0rem;
    font-size: var(--info-text);
    line-height: var(--info-text-line-height);
`;

export const PlaceIndicator = styled.div`
    display: flex;
    height: 1rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0.25rem;
    z-index: 1;
`;

export const Circle = styled.div<{ $selected: boolean }>`
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    background-color: var(--primary-gold-color);
    ${({ $selected }) =>
        $selected
            ? css`
                  border: 1px solid var(--secondary-gold-color);
                  opacity: 1;
              `
            : css`
                  border: 1px solid var(--primary-gold-color);
                  opacity: 0.5;
              `};
    margin-right: 0.25rem;

    &:last-child {
        margin-right: 0rem;
    }

    @media (max-width: 480px) {
        width: 0.5rem;
        height: 0.5rem;
    }
`;
