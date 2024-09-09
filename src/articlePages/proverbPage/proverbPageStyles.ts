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

export const Shadow = styled.div`
    height: 8rem;
    position: absolute;
    top: 2rem;
    z-index: 2;
    width: calc(100% - 6.2rem);
    background-color: var(--primary-shadow-color);
    border-radius: 4rem 4rem 0rem 0rem;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        top: 1.5rem;
        left: 1.3rem;
        width: calc(100% - 1.65rem);
        border-radius: 2.5rem 2.5rem 0rem 0rem;
    }
`;

export const ProverbContainer = styled.div`
    border-radius: 4rem;
    position: relative;
    min-height: 40rem;
    background: var(--primary-white-color);
    background-image: url(${'/noise.png'});
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem var(--primary-shadow-color);
    z-index: 3;
    margin-top: 3rem;

    @media (max-width: 480px) {
        margin: 0rem;
        border-radius: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-top: 3.5rem;
        border-radius: 2.5rem;
        box-shadow: 0.8rem 0.5rem 0rem 0.08rem var(--primary-shadow-color);
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

export const LogoWrapper = styled.div`
    position: absolute;
    top: 0rem;
    left: 50%;
    z-index: 3;
    transform: translateX(-50%);
    transition: transform 0.25s ease-in-out;
    cursor: ${({ lang }) => lang !== 'tj' && 'pointer'};

    &:hover {
        ${({ lang }) =>
            lang !== 'tj' &&
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

export const LogoOuter = styled.img`
    height: 5rem;
    width: 5rem;
    ${({ lang }) =>
        lang !== 'tj' &&
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
        top: 4rem;
        margin-left: -0.8rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 9rem;
        width: 9.5rem;
        top: 3.2rem;
        margin-left: -0.8rem;
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

export const QuoteWrapper = styled.div<{ $lang: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.5rem;
    font-family: var(--fancy-font);
    font-style: italic;
    font-weight: bold;
    padding: ${({ lang }) =>
        lang === 'tj' ? '3rem 3rem 2rem 3rem' : '4.5rem 3rem 1rem 3rem'};

    @media (max-width: 480px) {
        padding: ${({ $lang }) =>
            $lang === 'tj'
                ? '4rem 1.5rem 2.5rem 1.5rem'
                : '5.5rem 1.5rem 1rem 1.5rem'};
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: ${({ $lang }) =>
            $lang === 'tj' ? '4rem 2rem 2.5rem 2rem' : '5.5rem 2rem 2rem 2rem'};
    }
`;
