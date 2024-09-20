import styled from 'styled-components';

export const PoetCardContent = styled.div`
    width: 100%;
    height: 100%;
    color: var(--primary-white-color);
    background: var(--primary-black-color);
    position: relative;
    padding: 2rem;

    // Done
    @media (max-width: 480px) {
        padding: 1rem 0.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem;
    }
`;

export const PoetImgContainer = styled.div`
    height: 20rem;
    width: 15rem;
    border-radius: 9rem;
    border: 2px solid var(--primary-gold-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0rem 0rem 3rem var(--primary-shadow-color);

    // Done
    @media (max-width: 480px) {
        height: 10.8rem;
        width: 8.25rem;
        border-radius: 4rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 23.5rem;
        width: 17.5rem;
    }
`;

export const PoetImage = styled.img`
    border-radius: 9rem;
    height: 18.5rem;
    width: 13.5rem;
    margin: 0.3rem;
    box-shadow: var(--primary-box-shadow) var(--primary-gold-color);
    background: var(--primary-black-color) url('/customAssets/loader.png')
        center no-repeat;
    background-size: 50% auto;

    // Done
    @media (max-width: 480px) {
        height: 10.05rem;
        width: 7.5rem;
        border-radius: 4.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 22rem;
        width: 16rem;
    }
`;

export const PoetNameBox = styled.div`
    position: absolute;
    top: 17.5rem;
    left: 2rem;

    // Done
    @media (max-width: 480px) {
        top: 9.5rem;
        left: 1rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        top: 17rem;
        left: 1.5rem;
    }
`;

export const PoetName = styled.div`
    font-size: var(--header-large);
    line-height: var(--header-large);
    font-style: italic;
    font-family: var(--fancy-font);
    text-shadow: 0rem 0rem 0.25rem black;

    // Done
    @media (max-width: 480px) {
        font-size: var(--header-medium);
        line-height: var(--header-medium);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 3rem;
    }
`;

export const PoetDates = styled.div`
    font-size: var(--header-small);
    font-family: var(--regular-font);
    padding-top: calc(var(--text-segment-gap) / 2);

    // Done
    @media (max-width: 480px) {
        font-size: var(--body-text);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
        margin-top: 0.5rem;
    }
`;

export const PoetInfoContainer = styled.div`
    position: absolute;
    padding: 0rem 2rem 2rem 2rem;
    left: 0rem;
    bottom: 0rem;
    width: 100%;
    color: var(--secondary-white-color);
    font-size: var(--body-text);

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.15rem;
        max-height: 8.75rem;
        max-width: 25rem;
        height: 8.75rem;
        padding: 0rem 1.5rem 1.5rem 1.5rem;
        overflow: hidden;
    }
`;
