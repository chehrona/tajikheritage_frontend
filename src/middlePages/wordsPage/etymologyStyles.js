import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledSpan } from '../../components/common/descWrapper/descWrapperStyles';

export const PageContainer = styled.div`
    box-sizing: border-box;
    min-height: 100svh;
    padding: 2rem 3.8rem 2.8rem 3.2rem;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 480px) {
        padding: 1.5rem 3.2rem 1.5rem 3.2rem;
        min-height: calc(100svh - 10.5rem);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 4.2rem;
    }
`;

export const InnerBoxContainer = styled.div`
    padding-top: 2rem;

    @media (max-width: 480px) {
        gap: 2rem;
    }
`;

export const PageTitle = styled.div`
    font-size: 1.75rem;
    font-weight: bold;
    color: #0f0a00;
    font-family: 'EB Garamond', serif;
    margin-bottom: 1rem;
`;

export const FooterTitle = styled.div`
    font-size: 1.75rem;
    font-weight: bold;
    color: #0f0a00;
    font-family: 'EB Garamond', serif;
    margin-bottom: 1rem;
`;

export const ArticleContainer = styled.div`
    width: 100%;
    gap: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ justify }) =>
        justify % 3 > 3 ? 'center' : 'flex-start'};

    @media (max-width: 480px) {
        gap: 1rem;
        justify-content: space-between;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        justify-content: space-between;
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
`;

export const WordTitle = styled.div`
    font-weight: bold;
    font-size: 1.15rem;
    color: #bd9d52;
    margin-bottom: 0.25rem;
`;

export const WordDesc = styled(StyledSpan)`
    font-size: 1rem;
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
`;

export const LinkBox = styled(Link)`
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    border-radius: 0.7rem;
    bottom: 0rem;
    left: 0rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    cursor: pointer;
    text-decoration: none;
    background-color: #0f0a00;
`;

export const Instruction = styled.div`
    color: #fcf6e9;
    width: calc(100% - 3rem);
`;

export const StyledLink = styled.div`
    width: 3rem;
    height: 3rem;

    @media (max-width: 480px) {
        width: 5.5rem;
        height: 5.5rem;
        position: absolute;
        bottom: 0.5rem;
        margin: 0rem;
        transform: ${({ bottom }) =>
            bottom ? 'rotate(0deg)' : 'rotate(-180deg)'};
        ${({ bottom }) => (bottom ? 'right: 0.8rem' : 'left: 0.8rem')};

        &:disabled {
            display: none;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 4.5rem;
        height: 4.5rem;

        &.MuiIconButton-root {
            transform: ${({ bottom }) =>
                bottom ? 'rotate(90deg)' : 'rotate(-90deg)'};
            margin-bottom: ${({ bottom }) => bottom && '-0.6rem'};
            margin-top: ${({ bottom }) => !bottom && '-0.6rem'};
        }
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
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 2.5rem;
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

    @media (max-width: 480px) {
        margin: 1rem 0rem 0rem 1.5rem;
        font-size: 1.35rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
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
        padding: 0.25rem 0rem 0rem 2rem;
    }
`;

export const TextWrapper = styled.div`
    margin-top: 1rem;
`;
