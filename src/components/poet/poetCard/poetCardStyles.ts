import styled from 'styled-components';

export const PoetCardContent = styled.div`
    width: 100%;
    height: 100%;
    color: var(--primary-white-color);
    background: var(--primary-black-color);
    position: relative;
`;

export const PoetImgContainer = styled.div`
    height: 20rem;
    width: 15rem;
    border-radius: 9rem;
    border: 0.15rem solid var(--primary-gold-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0rem 0rem 3rem rgba(189, 157, 82, 0.8);

    @media (max-width: 480px) {
        height: 12rem;
        width: 9rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 23rem;
        width: 17rem;
    }
`;

export const PoetImage = styled.img`
    border-radius: 9rem;
    height: 18.5rem;
    width: 13.5rem;
    margin: 0.3rem;
    box-shadow: 0rem 0rem 1rem rgba(189, 157, 82, 0.8);
    background: var(--primary-black-color) url('/loader.png') center no-repeat;
    background-size: 50% auto;

    @media (max-width: 480px) {
        border-radius: 4.5rem;
        height: 11rem;
        width: 8rem;
        margin: 0.15rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 22rem;
        width: 16rem;
    }
`;

export const PoetName = styled.div`
    font-size: 2.5rem;
    font-family: var(--fancy-font);
    font-style: italic;
    text-shadow: 0rem 0rem 0.25rem black;

    @media (max-width: 480px) {
        font-size: 2.2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 3rem;
    }
`;

export const PoetNameBox = styled.div`
    position: absolute;
    top: 15.8rem;
    line-height: 2.5rem;
    left: -2rem;

    @media (max-width: 480px) {
        top: 9rem;
        line-height: 1.7rem;
        left: -0.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        top: 17rem;
    }
`;

export const PoetDates = styled.div`
    font-size: 1.25rem;
    font-family: var(--ordinary-font);

    @media (max-width: 480px) {
        margin-top: 1rem;
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

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.15rem;
    }
`;
