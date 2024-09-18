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
                ? 'padding: 0rem 0rem var(--text-segment-gap) var(--page-padding);'
                : 'padding: 0rem var(--page-padding) var(--text-segment-gap) 0rem;'
            : 'padding: 0rem var(--page-padding) var(--text-segment-gap) var(--page-padding);'};

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
        padding: 0rem 0rem var(--text-segment-gap) 0rem;
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
    float: ${({ $reverse }) => ($reverse ? 'right' : 'left')};
    border-top-left-radius: ${({ $topLeftRad }) =>
        $topLeftRad && `${$topLeftRad}rem`};
    margin: ${({ $i, $reverse }) =>
        $i === 0
            ? $reverse
                ? '0rem 0rem 2rem 3rem'
                : '0rem 3rem 2rem 0rem'
            : $reverse
            ? 'var(--text-segment-gap) 0rem 2rem 3rem'
            : 'var(--text-segment-gap) 3rem 2rem 0rem'};

    @media (max-width: 480px) {
        margin: 0rem;
        width: 100svw;
        height: 120.49svw;
        border-top-left-radius: 0rem;
        margin: ${({ $i }) =>
            $i === 0
                ? '0rem 0rem var(--text-segment-gap) 0rem'
                : 'var(--text-segment-gap) 0rem'};
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 30rem;
        height: 36.15rem;
        margin-bottom: 1rem;
        ${({ $reverse }) =>
            $reverse ? 'margin-left: 2rem' : 'margin-right: 2rem'};
    }
`;

export const BaseText = styled.div`
    width: 100%;
    position: relative;
    line-height: 1.7rem;
    font-size: var(--body-text);
    color: var(--primary-black-color);
    line-height: var(--body-text-line-height);

    @media (max-width: 480px) {
        padding: 0rem var(--page-padding);
        line-height: var(--body-text-line-height);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding: 0.25rem 0rem 0rem 2rem;
    }
`;

export const RightText = styled(BaseText)`
    padding-left: var(--page-padding);
`;

export const LeftText = styled(BaseText)`
    padding-right: var(--page-padding);
`;
