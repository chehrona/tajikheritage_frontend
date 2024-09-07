import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
    0% { 
        -webkit-transform: rotate(0deg); 
        transform: rotate(0deg); 
    } 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform: rotate(360deg); 
    } 
`;

export const LogoContainer = styled.div`
    top: -2.5rem;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 2;

    @media (max-width: 480px) {
        top: -3.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        top: -3rem;
    }
`;

export const LogoWrapper = styled.div<{ $lang: string }>`
    position: absolute;
    top: 0rem;
    left: 50%;
    z-index: 3;
    transform: translateX(-50%);
    transition: transform 0.25s ease-in-out;
    cursor: ${({ $lang }) => $lang !== 'tj' && 'pointer'};

    &:hover {
        ${({ $lang }) =>
            $lang !== 'tj' &&
            css`
                filter: drop-shadow(0px 0px 0.25px var(--primary-black-color));
                transform: translateZ(1rem) translateX(-50%) scaleX(1.05)
                    scaleY(1.05);
                transition: transform 0.25s ease-in-out;
            `}
    }

    @media (max-device-width: 1024px) {
        &:hover {
            filter: none;
            transform: translateX(-50%);
            transition: transform 0.25s ease-in-out;
        }
    }
`;

export const LogoOuter = styled.img<{ $lang: string }>`
    height: 5rem;
    width: 5rem;
    ${({ $lang }) =>
        $lang !== 'tj' &&
        css`
            animation: ${spin} 10s linear infinite;
        `}

    @media (max-width: 480px) {
        height: 7rem;
        width: 7rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 6rem;
        width: 6rem;
    }
`;

export const LogoInner = styled.img`
    height: 5rem;
    width: 5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 480px) {
        height: 7rem;
        width: 7rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 6rem;
        width: 6rem;
    }
`;

export const SvgContainer = styled.svg`
    position: absolute;
    width: 7rem;
    height: 7rem;
    z-index: 2;
    top: -0.75rem;

    @media (max-width: 480px) {
        height: 9.8rem;
        width: 9.8rem;
        top: -1.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 9rem;
        width: 9.5rem;
        top: -1.65rem;
    }
`;

export const Text = styled.text`
    font-size: 1.5rem;
    text-anchor: middle;
    transform: rotateZ(180deg);
    transform-origin: center;
    fill: var(--primary-red-color);
    font-weight: bold;
    letter-spacing: 2.5px;

    @media (max-width: 480px) {
        font-size: 2rem;
        letter-spacing: 3px;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.85rem;
        letter-spacing: 3px;
    }
`;
