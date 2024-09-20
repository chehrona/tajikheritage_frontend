import styled from 'styled-components';
import { MainContainer } from '../../components/common/pageInnerContainer/pageInnerContainerStyles';

export const Shadow = styled.div`
    height: 8rem;
    top: 2rem;
    z-index: 2;
    position: absolute;
    width: calc(100% - 6.34rem);
    background-color: var(--primary-shadow-color);
    border-radius: var(--page-radius) var(--page-radius) 0rem 0rem;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        top: 1.5rem;
        left: 1.3rem;
        width: calc(100% - 1.65rem);
    }
`;

export const ProverbInnerContainer = styled(MainContainer)`
    position: relative;
    z-index: 3;
    margin-top: 3rem;

    @media (max-width: 480px) {
        margin-top: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-top: 3.5rem;
    }
`;

export const QuoteWrapper = styled.div<{ $lang: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-style: italic;
    font-weight: bold;
    font-family: var(--fancy-font);
    font-size: var(--header-large);
    line-height: var(--header-big-line-height);
    padding: ${({ $lang }) =>
        $lang === 'tj'
            ? '3rem var(--page-padding) calc(2 * var(--text-segment-gap)) var(--page-padding)'
            : '4.5rem var(--page-padding) calc(2 * var(--text-segment-gap)) var(--page-padding)'};

    @media (max-width: 480px) {
        font-size: var(--header-big);
        padding: ${({ $lang }) =>
            $lang === 'tj'
                ? '3.25rem var(--page-padding) var(--text-segment-gap) var(--page-padding)'
                : '4.5rem var(--page-padding) var(--text-segment-gap) var(--page-padding)'};
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: ${({ $lang }) =>
            $lang === 'tj' ? '4rem 2rem 2.5rem 2rem' : '5.5rem 2rem 2rem 2rem'};
    }
`;