import styled, { css } from 'styled-components';

// Types
import { BorderProps, HomeImageProps } from './types/styleTypes';

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0rem;
    pointer-events: none;

    @media (max-width: 480px) {
        display: none;
    }
`;

export const SphereBox = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0rem;
`;

export const Border = styled.div<BorderProps>`
    border-radius: 50%;
    position: absolute;
    opacity: ${({ $opacity }) => $opacity && $opacity};
    transform: scale(${({ $opacity }) => $opacity && $opacity});
    width: ${({ $size }) => $size && `${$size}rem`};
    height: ${({ $size }) => $size && `${$size}rem`};
    border: 0.0625rem solid var(--primary-gold-color);
    will-change: transform;
    z-index: 1;

    ${({ $bottom, $top, $right }) => css`
        bottom: ${$bottom && $bottom.d};
        top: ${$top && $top.d};
        right: ${$right && $right.d};
    `}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${({ $bottom, $top, $right }) => css`
            bottom: ${$bottom && $bottom.t};
            top: ${$top && $top.t};
            right: ${$right && $right.t};
        `}
    }
`;

export const HomeImage = styled.img<HomeImageProps>`
    position: absolute;
    object-fit: contain;
    border-radius: 50%;
    transform: scale(${({ $opacity }) => $opacity && $opacity});
    width: ${({ $size }) => $size && `${$size}rem`};
    height: ${({ $size }) => $size && `${$size}rem`};
    box-shadow: 0rem 0rem 0.5rem 0.25rem #504221;
    opacity: ${({ $opacity }) => $opacity && $opacity};
    will-change: transform;
    z-index: 0;

    ${({ $top, $bottom, $right }) => css`
        top: ${$top && $top.d};
        bottom: ${$bottom && $bottom.d};
        right: ${$right && $right.d};
    `}

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${({ $top, $bottom, $right }) => css`
            top: ${$top && $top.t};
            bottom: ${$bottom && $bottom.t};
            right: ${$right && $right.t};
        `}
    }
`;
