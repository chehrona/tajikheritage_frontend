import styled, { keyframes } from 'styled-components';
import { PlayArrow, ArrowForwardIos } from '@mui/icons-material';
import { IconButton } from '@mui/material';

// Types
import { InnerBoxProps } from './types/styleTypes';

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateX(0);
    }
    40% {
        transform: translateX(0.5rem);
    }
    60% {
        transform: translateX(0.7rem);
    }
`;

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    gap: var(--page-padding);
    padding: var(--page-padding);
    background-color: var(--primary-white-color);
    background-image: url(${'/customAssets/noise.png'});

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        overflow: hidden;
    }
`;

export const LeftContainer = styled.div`
    width: 35%;
    height: 100%;
`;

export const RightContainer = styled.div`
    width: 65%;
    max-height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: var(--input-radius);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary-gold-color);
        border-radius: var(--input-radius);
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: contain;
    height: 80%;
    width: 100%;
    border-radius: 0.5rem;
    position: relative;
    border: 1px solid var(--primary-shadow-color);
    background-color: var(--primary-black-color);
    box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 90%;
        width: 90%;
    }
`;

export const SignTitle = styled.div`
    color: var(--primary-gold-color);
    font-family: var(--fancy-font);
    font-size: var(--header-big);
    position: absolute;
    top: 0.85rem;
`;

export const SignImage = styled.img`
    width: 80%;
`;

export const DescContainer = styled.div`
    width: 100%;
`;

export const Subtitle = styled.div`
    width: 100%;
    font-size: var(--header-small);
    text-transform: uppercase;
    font-family: var(--fancy-font);
    font-weight: bold;
`;

export const TextWrapper = styled.div`
    width: 100%;
    margin-bottom: var(--text-segment-gap);
`;
