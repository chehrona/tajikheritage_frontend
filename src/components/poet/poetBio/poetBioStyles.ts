import styled from 'styled-components';
import { TitleWrapper } from '../../common/articleTitle/articleTitleStyles';

// Types
import { YearProps } from './types/styleTypes';

export const MainContainer = styled.div`
    background-image: url(${'/customAssets/noise.png'});
    min-height: 20rem;
    padding-bottom: 3rem;
    background-color: var(--primary-white-color);
    font-size: var(--body-text);
    color: var(--primary-black-color);

    @media (max-width: 480px) {
        position: relative;
        padding-bottom: 0rem;
        font-size: var(--body-text);

        &::after {
            content: '';
            padding: 2rem;
            width: 100%;
            background: var(--primary-black-color);
            background-image: url(${'/customAssets/noise.png'});
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
            background-image: url(${'/customAssets/noise.png'});
            -webkit-clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            position: absolute;
            bottom: 1.01rem;
            box-sizing: border-box;
        }
    }
`;

export const Title = styled(TitleWrapper)<YearProps>`
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
    @media (max-width: 480px) {
        line-height: var(--body-text-line-height);
        padding: var(--text-segment-gap) var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 0rem 1rem 0rem;
    }
`;

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
        height: var(--slideshow-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 100%;
        height: 40rem;
    }
`;
