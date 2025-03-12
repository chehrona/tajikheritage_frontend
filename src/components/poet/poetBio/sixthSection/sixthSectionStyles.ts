import styled from 'styled-components';

export const Overlay = styled.div`
    background: var(--primary-grey-color);
    height: 30rem;
    width: 100%;
    overflow: hidden;
    filter: grayscale(1);

    @media (max-width: 480px) {
        height: calc(var(--slideshow-height) + 1rem);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 40rem;
    }
`;

export const BackImg = styled.div<{ $src: string }>`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: 0.2;
    filter: grayscale(1);
    background-image: ${({ $src }) => `url(${$src})`};

    @media (max-width: 480px) {
        margin-top: -3rem;
    }
`;

export const FinalQuoteWrapper = styled.div`
    position: absolute;
    text-align: center;
    width: 100%;
    left: 50%;
    top: 50%;
    color: var(--primary-gold-color);
    font-size: 2.2rem;
    font-style: italic;
    padding: 0% 10%;
    font-family: var(--fancy-font);
    transform: translate(-50%, -50%);
    text-shadow: 0.0625rem 0.0625rem 0.1875rem var(--primary-black-color);

    @media (max-width: 480px) {
        font-size: var(--header-big);
        line-height: var(--header-big-line-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        line-height: 2.4rem;
    }
`;

export const Author = styled.div`
    margin-top: 0.5rem;
    color: var(--primary-white-color);
    font-size: var(--body-text);
    font-style: normal;
    font-family: var(--regular-font);
    text-align: end;

    @media (max-width: 480px) {
        margin-top: var(--text-segment-gap);
        font-size: var(--body-text);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: var(--body-text);
    }
`;
