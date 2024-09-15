import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 3rem 1rem 3rem;
    color: var(--primary-black-color);
    gap: 3rem;
    position: relative;

    @media (max-width: 480px) {
        flex-wrap: wrap;
        gap: var(--text-segment-gap);
        padding: 0rem 0rem calc(2 * var(--text-segment-gap)) 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem 1rem 2rem;
    }
`;

export const RightImageWrapper = styled.div`
    width: 50%;
    height: 30rem;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
        padding: 0rem var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 100%;
        height: 38rem;
    }
`;

export const FirstBoxImg = styled.img`
    width: 100%;
    height: auto;
`;

export const ImgInfo = styled.div`
    z-index: 10;
    font-style: italic;
    width: 100%;
    text-align: left;
    color: var(--primary-black-color);
    bottom: 0.5rem;
    padding: 0.25rem 0.5rem;

    @media (max-width: 480px) {
        font-size: var(--info-text);
        line-height: var(--body-text-line-height);
        padding: 0rem var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.25rem;
        line-height: 1.3rem;
    }
`;