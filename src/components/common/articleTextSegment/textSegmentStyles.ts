import styled from 'styled-components';

// Types
import { BoxWrapperProps, SlideContainerProps } from './types/styleTypes';

export const BoxWrapper = styled.div<BoxWrapperProps>`
    width: 100%;
    position: relative;
    display: block;
    border-bottom: ${({ $noBorder }) =>
        $noBorder ? 'none' : '0.0625rem solid #bd9d52'};
    ${({ $reverse }) =>
        $reverse ? 'padding-left: 3rem' : 'padding-right: 3rem'};

    ::after {
        content: '';
        clear: both;
        display: table;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${({ $reverse }) =>
            $reverse
                ? 'padding: 0rem 0rem 1rem 2rem'
                : 'padding: 0rem 2rem 1rem 0rem'};
    }

    @media (max-width: 480px) {
        padding: 0rem;
        display: flex;
        flex-direction: column;

        ::after {
            content: '';
            clear: none;
            display: none;
        }
    }
`;

export const SlideContainer = styled.div<SlideContainerProps>`
    width: 29rem;
    height: 35rem;
    z-index: 2;
    position: relative;
    margin-bottom: 2rem;
    float: ${({ $reverse }) => ($reverse ? 'right' : 'left')};
    ${({ $reverse }) =>
        $reverse ? 'margin-left: 3rem' : 'margin-right: 3rem'};
    border-top-left-radius: ${({ $topLeftRad }) =>
        $topLeftRad && `${$topLeftRad}rem`};

    @media (max-width: 480px) {
        width: 100svw;
        height: 120.49svw;
        margin: 0rem 0rem 1rem 0rem;
        border-top-left-radius: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 30rem;
        height: 36.15rem;
        margin-bottom: 1rem;
        ${({ $reverse }) =>
            $reverse ? 'margin-left: 2rem' : 'margin-right: 2rem'};
    }
`;

export const Title = styled.div`
    color: #000;
    font-size: 4rem;
    font-weight: 500;
    padding-top: 0.5rem;
    font-style: italic;
    font-family: 'EB Garamond', serif;
    text-shadow: 0.0625rem 0.0625rem 0.0875rem #0f0a00;
    margin-bottom: 0.5rem;

    @media (max-width: 480px) {
        font-size: 4.5rem;
        margin: -1rem 0rem 0rem 1.5rem;
    }
`;

export const FirstBox = styled.div`
    width: 100%;
    color: #0f0a00;
    font-size: 1.1rem;
    position: relative;
    line-height: 1.7rem;
    padding-left: 3rem;

    ::-webkit-scrollbar {
        width: 0rem;
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
        padding: 0.5rem 1.5rem 0rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding: 0.25rem 0rem 0rem 2rem;
    }
`;

export const SecondBox = styled.div`
    width: 100%;
    color: #0f0a00;
    font-size: 1.1rem;
    position: relative;
    line-height: 1.7rem;
    padding-right: 3rem;

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
