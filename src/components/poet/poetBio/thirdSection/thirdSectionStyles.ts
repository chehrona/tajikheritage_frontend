import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    position: relative;
    padding: var(--text-segment-gap) var(--page-padding);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem 2rem 2rem;
    }
`;

export const QuoteWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const QuoteOutline = styled.div`
    border: 0.125rem solid var(--primary-gold-color);
    border-radius: 50%;
    width: 5.25rem;
    height: 5.25rem;

    @media (max-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;
    }
`;

export const QuoteSymbol = styled.div`
    height: 100%;
    width: 100%;
    color: var(--primary-gold-color);
    transform: rotateZ(180deg);
    background-image: url('/customAssets/quote.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 60%;
`;

export const Quote = styled.div`
    font-size: var(--header-big);
    font-family: var(--fancy-font);
    font-style: bold;
    text-align: center;
    padding: var(--text-segment-gap) 0rem;
    line-height: var(--header-big-line-height);

    @media (max-width: 480px) {
        font-size: var(--header-medium);
        line-height: var(--header-medium-line-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        line-height: 2.4rem;
    }
`;

export const BoxThreeText = styled.div`
    column-count: 2;
    column-gap: var(--page-padding);
    overflow: hidden;

    @media (max-width: 480px) {
        column-count: 1;
        line-height: var(--body-text-line-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        column-gap: 2rem;
    }
`;
