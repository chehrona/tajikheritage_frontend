import styled, { keyframes } from 'styled-components';
import { PlayArrow, ArrowForwardIos } from '@mui/icons-material';
import { IconButton, DialogContent } from '@mui/material';

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

export const StyledContent = styled(DialogContent)`
    position: relative;
    height: 20rem;
    font-size: var(--body-text);
    line-height: var(--body-text-height);

    &.MuiDialogContent-root {
        padding: 0rem;
        overflow: hidden;
    }
`;

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        overflow: hidden;
    }
`;

export const OverlayContainer = styled.div<InnerBoxProps>`
    width: 65%;
    height: 100%;
    background: var(--primary-white-color);
    position: relative;
    padding: 2rem;

    ${({ $width }) =>
        $width &&
        `
        background: var(--primary-black-color);
        position: relative;
    `}

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        z-index: 2;
        padding: var(--page-padding);
        border-radius: var(--big-radius);
        overflow-x: hidden;
        position: absolute;
        display: ${({ $width }) => $width && 'none'};
        overflow-y: ${({ $expand }) => ($expand ? 'scroll' : 'hidden')};
        top: ${({ $expand }) => ($expand ? '0rem' : '40%')};
        transition: all 0.5s;
        box-shadow: 0rem 0rem 0.6rem var(--primary-shadow-color);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 50%;
        top: 55%;
        width: 100%;
        z-index: 2;
        position: absolute;
    }
`;

export const StudioNameWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;
`;

export const StudioImage = styled.img`
    height: 100%;
`;

export const MovieTitle = styled.div`
    overflow-wrap: break-word;
    font-style: bold;
    font-size: 3.5rem;
    line-height: 3.5rem;
    width: 100%;
    text-transform: uppercase;
    font-family: var(--fancy-font);
    text-shadow: 0.0625rem 0.0625rem 0.1875rem var(--primary-shadow-color);

    @media (max-width: 480px) {
        font-size: var(--header-big);
        line-height: var(--header-big-line-height);
    }
`;

export const ReleaseInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    color: var(--primary-shadow-color);
    width: 100%;
    gap: 1rem;

    @media (max-width: 480px) {
        gap: 0rem;
        justify-content: space-between;
        padding: var(--text-segment-gap) 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 3rem;
    }
`;

export const Desc = styled.div<{ $expand: boolean }>`
    width: 100%;
    text-align: justify;

    @media (max-width: 480px) {
        line-height: var(--body-text-line-height);
        position: relative;

        ${({ $expand }) =>
            !$expand &&
            `
            &:after {
                content: "";
                height: 20rem;
                width: 100%;
                left: 0;
                position: absolute;
                bottom: 0;
                background: linear-gradient(to bottom, rgba(252, 246, 233, 0), rgba(252, 246, 233, 1));
            }
        `}
    }
`;

export const StyledIconButton = styled(IconButton)`
    width: 5.5rem;
    height: 5.5rem;

    &.MuiIconButton-root {
        background: var(--primary-shadow-color);

        &:hover {
            background: var(--primary-shadow-color);
        }
    }

    @media (max-width: 480px) {
        width: 5.5rem;
        height: 5.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 12rem;
        height: 12rem;
    }
`;

export const StyledArrowButton = styled(IconButton)`
    &.MuiIconButton-root {
        display: none;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            display: block;
            width: 2.5rem;
            height: 2.5rem;
            position: absolute;
            top: -1rem;
            left: calc(50% - var(--page-padding));
            transform: rotate(-90deg) translateX(-50%);
        }
    }
`;

export const InfoWrapper = styled.div`
    width: 100%;
    padding-right: 27%;
    margin-top: 1rem;

    @media (max-width: 1024px) {
        margin: 0rem 0rem var(--text-segment-gap) 0rem;
        padding-right: 0%;
    }
`;

export const StyledPlayIcon = styled(PlayArrow)`
    color: var(--primary-white-color);

    &.MuiSvgIcon-root {
        width: 3rem;
        height: 3rem;
    }

    @media (max-width: 480px) {
        &.MuiSvgIcon-root {
            width: 4rem;
            height: 4rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 8rem;
            height: 8rem;
        }
    }
`;

export const MovieImg = styled.img`
    height: 85%;
    width: auto;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(0%, -50%);
    box-shadow: 0rem 0rem 1rem 0.2rem var(--primary-shadow-color);

    @media (max-width: 1024px) {
        top: 0rem;
        left: auto;
        transform: none;
        width: 100%;
        height: auto;
        border-radius: var(--big-radius);
    }
`;

export const ReleaseInfo = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 1rem;
    margin: 3rem 0rem;

    @media (max-width: 480px) {
        padding: 0rem;
        margin: 0rem;
        width: fit-content;
        flex-shrink: 0;
    }
`;

export const DirectorInfoWrapper = styled.div`
    width: 100%;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: var(--fancy-font);

    @media (max-width: 1024px) {
        padding: calc(2 * var(--text-segment-gap)) 0rem var(--text-segment-gap)
            0rem;
        font-size: var(--header-medium);
        line-height: var(--header-medium-line-height);
    }
`;

export const DirectorName = styled.div`
    text-transform: none;
    font-size: var(--body-text);
    line-height: var(--header-normal-line-height);
    font-family: var(--regular-font);
`;

export const PlayInstructionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    position: absolute;
    left: 75%;
    top: 15%;
    width: 25%;

    @media (max-width: 1024px) {
        left: 50%;
        right: auto;
        justify-content: center;
        transform: translateX(-50%);
    }
`;

export const Line = styled.div`
    width: 5rem;
    background: var(--primary-white-color);
    height: 0.05rem;
    margin-right: 1rem;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const DirectionText = styled.div`
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--primary-white-color);
    font-family: var(--fancy-font);

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const StyledFrame = styled.iframe`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: var(--big-radius);
`;

export const SlideUp = styled(ArrowForwardIos)`
    transform: rotate(-90deg);
    animation: ${bounce} 2s infinite;
`;

export const SlideDown = styled(ArrowForwardIos)`
    transform: rotate(-180deg);
`;
