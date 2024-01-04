import styled from "styled-components/macro";

export const BoxWrapper = styled.div`
    width: 100%;
    position: relative;
    display: block;
    border-bottom: 0.0625rem solid #bd9d52;
    ${({ reverse }) => reverse ? "padding-left: 3rem" : "padding-right: 3rem"};
    
    ::after {
        content: "";
        clear: both;
        display: table;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${({ reverse }) => reverse ? "padding-left: 2rem" : "padding-right: 2rem"};
    }
`;

export const SlideContainer = styled.div`
    width: 29rem;
    height: 35rem;
    z-index: 2;
    position: relative;
    background-color: #0F0A00;
    margin-bottom: 2rem;
    float: ${({ reverse }) =>  reverse ? "right": "left"};
    ${({ reverse }) => reverse ? "margin-left: 3rem" : "margin-right: 3rem"};
    border-top-left-radius: ${({ topLeftRad }) => topLeftRad && `${topLeftRad}rem`};

    @media (max-width: 480px) {
        width: 98.04%;
        height: 100%;
        margin-top: ${({ first }) => first && '-2rem'};
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 30rem;
        margin-bottom: 1rem;
        ${({ reverse }) => reverse ? "margin-left: 2rem" : "margin-right: 2rem"};
    }
`;

export const Title = styled.div`
    color: #000;
    font-size: 4rem;
    font-weight: 500;
    font-style: italic;
    font-family: 'EB Garamond', serif;
    text-shadow: 0.0625rem 0.0625rem 0.0875rem #0F0A00;

    @media (max-width: 480px) {
        font-size: 4.5rem;
    }
`;

export const Subtitle = styled.span`
    font-weight: 500;
    font-size: 1.15rem;
    width: fit-content;
    padding-right: 0.25rem;
    text-transform: uppercase;
    border-right: 2px solid #ad0f0e;
    border-bottom: 2px solid #ad0f0e;
`;

export const FirstBox = styled.div`
    width: 100%;
    color: #0F0A00;
    font-size: 1.1rem;
    position: relative;
    line-height: 1.7rem;
    padding-left: 3rem;

    ::-webkit-scrollbar {
        width: 0rem;
    }

    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding-left: 2rem;
    }
`;

export const SecondBox = styled.div`
    width: 100%;
    color: #0F0A00;
    font-size: 1.1rem;
    position: relative;
    line-height: 1.7rem;
    padding-right: 3rem;

    ::-webkit-scrollbar {
        width: 0rem;
    }

    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding-right: 2rem;
    }
`;