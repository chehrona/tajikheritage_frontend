import styled from 'styled-components';

// Types
import { BoxWrapperProps, SlideContainerProps } from './types/styleTypes';

export const BoxWrapper = styled.div<BoxWrapperProps>`
    width: 100%;
    display: block;
    position: relative;
    ${({ $reverse }) =>
        $reverse !== null
            ? $reverse
                ? 'padding-left: 3rem;'
                : 'padding-right: 3rem;'
            : 'padding: 0rem 3rem;'};

    &::after {
        content: '';
        clear: both;
        display: table;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        ${({ $reverse }) =>
            $reverse !== null
                ? $reverse
                    ? 'padding: 0rem 0rem 2rem 0rem'
                    : 'padding: 0rem 2rem 2rem 0rem'
                : 'padding: 0rem 2rem 2rem 2rem'};
    }

    @media (max-width: 480px) {
        padding: 1rem 0rem 1rem 0rem;
        display: flex;
        flex-direction: column;

        &::after {
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
    border-top-left-radius: ${({ $topLeftRad }) =>
        $topLeftRad && `${$topLeftRad}rem`};
    ${({ $reverse }) =>
        $reverse ? 'margin-left: 3rem;' : 'margin-right: 3rem;'};

    @media (max-width: 480px) {
        width: 100svw;
        height: 120.49svw;
        margin: 0rem 0rem 2rem 0rem;
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
    font-size: 4rem;
    font-weight: 500;
    font-style: italic;
    font-family: var(--fancy-font);
    color: var(--regular-black-color);
    text-shadow: 0.0625rem 0.0625rem 0.0875rem var(--primary-black-color);
    margin-bottom: 0.5rem;

    @media (max-width: 480px) {
        font-size: 4.5rem;
        margin: 0rem 0rem 0.75rem 1.5rem;
    }
`;

export const BaseText = styled.div`
    width: 100%;
    font-size: var(--desktop-body-text);
    position: relative;
    line-height: 1.7rem;
    color: var(--primary-black-color);

    &::-webkit-scrollbar {
        width: 0rem;
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
        padding: 0rem var(--mobile-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding: 0.25rem 0rem 0rem 2rem;
    }
`;

export const RightText = styled(BaseText)`
    padding-left: 3rem;

    @media (max-width: 480px) {
        padding-left: var(--mobile-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding-left: 2rem;
    }
`;

export const LeftText = styled(BaseText)`
    padding-right: 3rem;

    @media (max-width: 480px) {
        padding-right: var(--mobile-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding-right: 2rem;
    }
`;
