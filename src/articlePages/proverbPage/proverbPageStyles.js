import styled, { keyframes, css } from 'styled-components/macro';

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

export const PageContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    min-height: 40rem;
    background-color: white;
    padding: 5rem 3.7rem 2.8rem 3.2rem;

    @media (max-width: 480px) {
        padding: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 1.8rem 2rem 1.2rem;
    }
`;

export const Shadow = styled.div`
    height: 8rem;
    position: absolute;
    top: 2rem;
    width: calc(100% - 6rem);
    background-color: #70654a;
    border-radius: 4rem 4rem 0rem 0rem;
`;

export const ProverbContainer = styled.div`
    border-radius: 4rem;
    position: relative;
    min-height: 40rem;
    background: #fcf6e9;
    background-image: url(${'/noise.png'});
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem #70654a;
    z-index: 3;

    @media (max-width: 480px) {
        margin: 0rem;
        border-radius: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 2.5rem;
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
                filter: drop-shadow(0px 0px 0.25px #0f0a00);
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
`;

export const LogoInner = styled.img`
    height: 5rem;
    width: 5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 1024px) {
        height: 7rem;
        width: 7rem;
    }
`;

export const SvgContainer = styled.svg`
    position: absolute;
    width: 7rem;
    height: 7rem;
    z-index: 2;
    top: -1rem;

    @media (max-width: 1024px) {
        height: 9rem;
        width: 9rem;
    }
`;

export const Text = styled.text`
    font-size: 1.5rem;
    text-anchor: middle;
    transform: rotateZ(180deg);
    transform-origin: center;
    fill: #ad0f0e;
    font-weight: bold;
    letter-spacing: 2.5px;
`;

export const QuoteWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.5rem;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-weight: bold;
    padding: ${({ lang }) =>
        lang === 'tj' ? '3rem 3rem 2rem 3rem' : '4.5rem 3rem 1rem 3rem'};

    @media (max-width: 1024px) {
        padding: ${({ lang }) =>
            lang === 'tj' ? '4rem 1.5rem' : '5.5rem 1.5rem 1rem 1.5rem'};
    }
`;

export const TextContainer = styled.div`
    padding-bottom: 1rem;
`;

export const Subtitle = styled.div`
    font-weight: 500;
    font-size: 1.15rem;
    width: fit-content;
    padding-right: 0.25rem;
    text-transform: uppercase;
    border-right: 2px solid #ad0f0e;
    border-bottom: 2px solid #ad0f0e;
`;

export const SectionBox = styled.div`
    width: 100%;
    color: #0f0a00;
    font-size: 1.1rem;
    position: relative;
    line-height: 1.7rem;

    ::-webkit-scrollbar {
        width: 0rem;
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
        padding: 0.5rem 1.5rem 0rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding: 0.25rem 2rem 0rem 0rem;
    }
`;
