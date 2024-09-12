import styled from 'styled-components';
import { TitleWrapper } from '../../common/articleTitle/articleTitleStyles';

// Types
import { YearProps } from './types/styleTypes';

export const MainContainer = styled.div`
    background-image: url(${'/noise.png'});
    min-height: 20rem;
    padding-bottom: 3rem;
    background-color: var(--primary-white-color);
    font-size: var(--body-text);

    @media (max-width: 480px) {
        position: relative;
        padding-bottom: 0rem;
        font-size: var(--body-text);

        &::after {
            content: '';
            padding: 2rem;
            width: 100%;
            background: var(--primary-black-color);
            background-image: url(${'/noise.png'});
            -webkit-clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            position: absolute;
            bottom: 1rem;
            box-sizing: border-box;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding-bottom: 0rem;
        position: relative;

        &::after {
            content: '';
            padding: 3rem;
            width: 100%;
            background: var(--primary-black-color);
            background-image: url(${'/noise.png'});
            -webkit-clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            position: absolute;
            bottom: 1.01rem;
            box-sizing: border-box;
        }
    }
`;

export const Year = styled(TitleWrapper)<YearProps>`
    text-align: ${({ $align }) => $align && 'center'};
    color: ${({ $color }) => $color && $color};
    font-style: normal;
    font-weight: normal;
    text-shadow: none;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-bottom: ${({ $align }) => $align && '0rem'};
    }
`;

export const SectionText = styled.div`
    color: var(--primary-grey-color);

    @media (max-width: 480px) {
        padding: var(--text-segment-gap) var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 0rem 1rem 0rem;
    }
`;

// Box three ****************************
export const BoxThree = styled.div`
    width: 100%;
    position: relative;
    padding: 0rem 3rem 3rem 3rem;

    @media (max-width: 480px) {
        padding: var(--text-segment-gap) var(--page-padding);
    }

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
    width: 5rem;
    height: 5rem;

    @media (max-width: 1024px) {
        width: 5rem;
        height: 5rem;
    }
`;

export const QuoteSymbol = styled.div`
    height: 100%;
    width: 100%;
    color: var(--primary-gold-color);
    transform: rotateZ(180deg);
    background-image: url('/quote.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 60%;
`;

export const Quote = styled.div`
    font-size: 2.2rem;
    font-family: var(--fancy-font);
    font-style: bold;
    text-align: center;
    padding: 1rem 0rem;

    @media (max-width: 480px) {
        padding: var(--text-segment-gap) 0rem;
        font-size: var(--header-medium);
        line-height: var(--header-medium-line-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        line-height: 2.4rem;
    }
`;

export const TextWrapper = styled.div`
    column-count: 2;
    column-gap: 3rem;
    overflow: hidden;
    color: var(--primary-grey-color);
    font-family: var(--ordinary-font);

    @media (max-width: 480px) {
        column-count: 1;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        column-gap: 2rem;
    }
`;

// Box five ********************************
export const FamilyDesc = styled.div`
    width: 100%;
    height: 30rem;
    color: var(--primary-grey-color);
    padding: 0rem 2.8rem 3rem 3rem;
    border-bottom: 0.0625rem solid var(--primary-gold-color);
    border-top: 0.0625rem solid var(--primary-gold-color);
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }

    @media (max-width: 480px) {
        padding: 0rem var(--mobile-padding) 2rem var(--mobile-padding);
        height: auto;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem 2rem 2rem;
        height: auto;
    }
`;

export const ImageContainer = styled.div`
    position: absolute;
    display: flex;
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
`;

// Box five ********************************
export const BoxFive = styled.div`
    width: 100%;
    text-align: center;
    color: var(--primary-black-color);
    padding: 1.5rem 3rem 3rem 3rem;

    @media (max-width: 480px) {
        padding: 0rem var(--page-padding) var(--text-segment-gap)
            var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 2rem 2rem 2.5rem 2rem;
    }
`;

// Box six ********************************
export const BoxSix = styled.div`
    width: 100%;
    display: flex;
    min-height: 20rem;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        padding: var(--text-segment-gap) 0rem;
    }
`;

export const LeftContainer = styled.div`
    width: 50%;
    position: relative;
    height: 100%;

    @media (max-width: 1024px) {
        width: 100%;
        height: auto;
    }
`;

export const RightContainer = styled.div`
    width: 50%;
    height: 30rem;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;

    @media (max-width: 480px) {
        width: 100%;
        height: 25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 100%;
        height: 40rem;
    }
`;

export const Overlay = styled.div`
    background: var(--primary-grey-color);
    height: 30rem;
    width: 100%;
    overflow: hidden;
    filter: grayscale(1);

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
    font-family: var(--ordinary-font);
    text-align: end;

    @media (max-width: 480px) {
        margin-top: var(--text-segment-gap);
        font-size: var(--body-text);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: var(--body-text);
    }
`;
