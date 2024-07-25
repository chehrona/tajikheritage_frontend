import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

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
    padding: 2rem 7rem 2rem 7rem;
    background: white;

    @media (max-width: 480px) {
        padding: 1.5rem 2.5rem 1.5rem 2.5rem;
        min-height: calc(100svh - 10.5rem);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 4.2rem;
    }
`;

export const SectionBoxContainer = styled.div`
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

export const SectionCardWrapper = styled.div`
    opacity: 0;
    width: 23rem;
    height: 35rem;
    color: #fcf6e9;
    cursor: pointer;
    background: #0f0a00;
    position: relative;
    border-radius: 0.7rem;
    transition: border-radius 250ms, box-shadow 400ms;
    animation: ${slideOut} 1s ease-in-out forwards;
    animation-delay: ${({ delay }) => (delay ? delay : '0s')};

    &:hover {
        border-radius: 1.5rem;
        box-shadow: 0rem 0rem 0.6rem #504221d1;
        transition: border-radius 250ms, box-shadow 400ms;
    }

    @media (max-width: 480px) {
        height: 19.025rem;
        width: 12.5rem;
        transition: none;
        box-shadow: 0rem 0rem 0.6rem #504221d1;

        &:hover {
            border-radius: 0.7rem;
            transition: none;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 1.5rem;
        transition: none;
        height: 38rem;
        width: 25rem;
        box-shadow: 0rem 0rem 0.6rem #504221d1;

        &:hover {
            border-radius: 1.5rem;
            transition: none;
        }
    }
`;

export const SectionImgContainer = styled.div`
    height: 20rem;
    width: 15rem;
    border-radius: 9rem;
    border: 0.15rem solid #bd9d52;
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

export const SectionImage = styled.img`
    border-radius: 9rem;
    height: 18.5rem;
    width: 13.5rem;
    margin: 0.3rem;
    box-shadow: 0rem 0rem 1rem rgba(189, 157, 82, 0.8);
    background: #0f0a00 url('/loader.png') center no-repeat;
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

export const SectionName = styled.div`
    font-size: 2.5rem;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    text-shadow: 0rem 0rem 0.25rem black;

    @media (max-width: 480px) {
        font-size: 2.2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 3rem;
    }
`;

export const SectionNameBox = styled.div`
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

export const SectionDates = styled.div`
    font-size: 1.25rem;
    font-family: 'IBM Plex Serif', serif;

    @media (max-width: 480px) {
        margin-top: 1rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
        margin-top: 0.5rem;
    }
`;

export const SectionInfoContainer = styled.div`
    position: absolute;
    left: 2rem;
    bottom: 3rem;
    width: 20rem;

    @media (max-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.15rem;
        bottom: 2rem;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
