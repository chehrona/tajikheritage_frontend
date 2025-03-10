import styled from 'styled-components';

export const size = window.innerHeight / 1.15;

export const ImageContainer = styled.div`
    justify-content: center;
    position: relative;
    height: 100svh;
    width: calc(100svw - 4 * var(--page-padding));
    display: flex;
    justify-content: center;
    padding: var(--text-segment-gap) var(--page-padding);
`;

export const SvgContainer = styled.svg`
    width: ${size}px;
    height: ${size}px;
    position: relative;
    z-index: 10;
    overflow: visible;
    perspective: 1000px;
`;

export const SliceGroup = styled.g<{
    x: number;
    y: number;
    cx: number;
    cy: number;
}>`
    cursor: pointer;
    transition: transform 0.4s ease, filter 0.4s ease;
    transform-origin: ${({ cx, cy }) => `${cx}px ${cy}px`};

    &:hover {
        transform: scale(1.05) translateX(${({ x }) => x}px)
            translateY(${({ y }) => y}px);
        z-index: 100;
        filter: drop-shadow(0rem 0.25rem 0.5rem var(--primary-shadow-color));

        image {
            filter: brightness(120%);
        }
    }
`;

export const CenterImage = styled.image`
    border-radius: 50%;
`;

export const SignTitle = styled.text`
    fill: var(--primary-white-color);
    font-size: var(--body-text);
    font-weight: bold;
`;
