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

export const SectionCardWrapper = styled.div`
    opacity: 0;
    width: 23rem;
    height: 35rem;
    color: #fcf6e9;
    padding: 0.5rem;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0f0a00;
    border-radius: 0.7rem;
    transition: border-radius 250ms, box-shadow 400ms;
    animation: ${slideOut} 1s ease-in-out forwards;
    animation-delay: ${({ delay }) => (delay ? delay : '0s')};

    &:hover {
        border-radius: 1.5rem;
        box-shadow: 0rem 0rem 0.6rem #504221d1;
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
        height: 30.5rem;
        width: 22rem;
        box-shadow: 0rem 0rem 0.6rem #504221d1;

        &:hover {
            border-radius: 1.5rem;
            transition: none;
        }
    }
`;

export const SectionTitle = styled.div`
    font-size: 2rem;
    font-weight: 500;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    text-align: center;
    margin-bottom: 1rem;
    line-height: ${({ length }) => length > 20 && '2.05rem'};

    @media (max-width: 480px) {
        font-size: 1.25rem;
        margin-bottom: 0.25rem;
        line-height: ${({ length }) => length > 20 && '1.3rem'};
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.2rem;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('/border.png') center no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    filter: drop-shadow(0px 0px 2.5px #bd9d52);
`;

export const SectionImage = styled.div`
    background-size: contain;
    width: 80%;
    height: 80%;
    background-position: center;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 0px 1px #dedbdb);
    background-image: ${({ src }) => src && `url(${src})`};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
