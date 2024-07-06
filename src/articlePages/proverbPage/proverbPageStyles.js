import styled from 'styled-components';
import { Alert } from '@mui/material';

export const PageContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    min-height: 40rem;
    background-color: white;
    padding: 5.5rem 3.7rem 2.8rem 3.2rem;

    @media (max-width: 480px) {
        padding: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 1.8rem 2rem 1.2rem;
    }
`;

export const ProverbContainer = styled.div`
    border-radius: 4rem;
    min-height: 40rem;
    background: #fcf6e9;
    background-image: url(${'/noise.png'});
    box-shadow: 0.8rem -3.5rem 0rem 0.08rem #504221d1;

    @media (max-width: 480px) {
        margin: 0rem;
        border-radius: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 2.5rem;
    }
`;

export const LogoWrapper = styled.div`
    width: calc(100% - 6.9rem);
    position: absolute;
    top: 2.5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    margin: 0.5rem;
    height: 4rem;
    width: 4rem;
    background-color: red;
`;

export const QuoteWrapper = styled.div`
    width: 100%;
    background-color: green;
    min-height: 4rem;
    height: 4rem;
    margin-top: 8rem;
`;
