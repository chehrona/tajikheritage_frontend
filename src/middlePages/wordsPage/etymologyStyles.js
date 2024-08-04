import styled, { keyframes } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { StyledSpan } from '../../components/common/descWrapper/descWrapperStyles';

const slideOut = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    50% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const PageContainer = styled.div`
    box-sizing: border-box;
    min-height: 100svh;
    padding: 2rem 3.8rem 2.8rem 3.2rem;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 480px) {
        padding: 1.5rem 0rem;
        min-height: calc(100svh - 10.5rem);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 1.8rem 2rem 1.2rem;
    }
`;

export const PageTitle = styled.div`
    font-size: 1.75rem;
    font-weight: bold;
    color: #0f0a00;
    font-family: 'EB Garamond', serif;
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.25rem;
    }
`;

export const InnerBoxContainer = styled.div`
    padding-top: 2rem;
    width: 100%;

    @media (max-width: 480px) {
        gap: 2rem;
        padding: 1rem 1.5rem;
    }
`;

export const FooterTitle = styled.div`
    font-size: 1.75rem;
    font-weight: bold;
    color: #0f0a00;
    font-family: 'EB Garamond', serif;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
        font-size: 2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.25rem;
    }
`;

export const ArticleContainer = styled.div`
    width: 100%;
    gap: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};

    @media (max-width: 480px) {
        gap: 1rem;
        justify-content: space-between;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        justify-content: space-between;
        gap: 2rem;
    }
`;

export const ArticleWrapper = styled.div`
    background-color: #0f0a00;
    height: 12rem;
    width: 25rem;
    border-radius: 0.7rem;
    padding: 1rem;
    position: relative;
    background-image: url(${'/noise.png'});
    animation: ${slideOut} 1s ease-in-out forwards;
    overflow: hidden;
    transition: border-radius 250ms, box-shadow 400ms;
    animation-delay: ${({ delay }) => (delay ? delay : '0s')};
    filter: ${({ disabled }) =>
        disabled ? 'brightness(0.5)' : 'brightness(1)'};

    &:hover {
        box-shadow: 0rem 0rem 0.6rem #504221d1;
    }

    @media (max-width: 480px) {
        width: 100%;
        height: 15rem;
        box-shadow: 0rem 0rem 0.6rem #504221d1;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 15rem;
        width: 27rem;
        box-shadow: 0rem 0rem 0.6rem #504221d1;
    }
`;

export const WordTitle = styled.div`
    font-weight: bold;
    font-size: 1.15rem;
    color: #bd9d52;
    margin-bottom: 0.25rem;

    @media (max-width: 480px) {
        font-size: 1.45rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const WordDesc = styled(StyledSpan)`
    font-size: 1.1rem;
    width: 100%;
    height: calc(100% - 5.25rem);
    color: #fcf6e9;

    &:after {
        content: '';
        height: 3.5rem;
        width: 100%;
        left: 0rem;
        position: absolute;
        bottom: 4rem;
        background: linear-gradient(
            to bottom,
            rgba(252, 246, 233, 0),
            rgba(15, 10, 0, 0.75)
        );
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const LinkBox = styled(Link)`
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    border-radius: 0rem 0rem 0.7rem 0.7rem;
    bottom: 0rem;
    left: 0rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-decoration: none;
    background-color: #0f0a00;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const Instruction = styled.div`
    color: #fcf6e9;
    width: calc(100% - 3rem);

    @media (max-width: 480px) {
        width: calc(100% - 4rem);
    }
`;

export const ArrowWrapper = styled.div`
    width: 3rem;
    height: 3rem;

    @media (max-width: 1024px) {
        width: 4rem;
        height: 4rem;
    }
`;

export const Arrow = styled.div`
    color: #bd9d52;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
    border: 0.0625rem solid #bd9d52;
    box-shadow: 0rem 0rem 0.3rem 0rem #dedbdb;
`;

export const TextContainer = styled.div`
    border-radius: 4rem;
    min-height: 30rem;
    background: #fcf6e9;
    background-image: url(${'/noise.png'});
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem #504221d1;
    padding: 1rem 3rem 2rem 3rem;

    @media (max-width: 480px) {
        margin: 0rem;
        border-radius: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
        padding: 0.5rem 0rem 1.5rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 2.5rem;
    }
`;

export const FirstBox = styled.div`
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
        padding-top: 0.25rem;
    }
`;

export const TextWrapper = styled.div`
    margin-top: 1rem;
`;
