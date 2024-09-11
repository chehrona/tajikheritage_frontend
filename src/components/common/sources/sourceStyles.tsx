import styled, { css } from 'styled-components';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export const MainContainer = styled.div`
    border-radius: 0rem 0rem 4rem 4rem;
    background: var(--primary-white-color);
    background-image: url(${'/noise.png'});
    padding: 3rem;
    padding-top: 0rem;

    @media (max-width: 480px) {
        border-radius: 0rem;
        padding: 1rem var(--page-padding) 3rem var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 0rem 0rem 2.5rem 2.5rem;
        padding: 0rem 2rem 2rem 2rem;
    }
`;

export const DropDownContainer = styled.div`
    width: 100%;
    margin-bottom: 2rem;
    padding-top: 1rem;

    @media (max-width: 480px) {
        padding-top: 0rem;
        margin-bottom: 1rem;
    }
`;

export const StyledDownIcon = styled(ExpandMore)`
    color: var(--primary-shadow-color);
`;

export const StyledUpIcon = styled(ExpandLess)`
    color: var(--primary-shadow-color);
`;

export const RefContainer = styled.div<{ $open: boolean }>`
    max-width: 100%;
    border-radius: 0.7rem;
    margin-top: 0.8rem;
    display: block;
    position: relative;
    color: var(--secondary-white-color);
    background: var(--primary-black-color);
    transition: all 0.5s linear 0s;
    ${({ $open }) =>
        $open
            ? css`
                  height: 15rem;
                  box-shadow: 0rem 0rem 0.4rem 0.01rem
                      var(--primary-black-color);
              `
            : css`
                  height: 0rem;
              `};

    @media (max-width: 480px) {
        height: ${({ $open }) => ($open ? '30rem' : '0rem')};
    }
`;

export const RefWrapper = styled.div<{ $open: boolean }>`
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100%;
    margin: 0.5rem 0.25rem;
    width: calc(100% - 0.5rem);
    padding: 0rem 2rem 1rem 2rem;
    display: ${({ $open }) => ($open ? 'block' : 'none')};

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary-gold-color);
        border-radius: 0.25rem;
    }

    @media (max-width: 480px) {
        width: 100%;
        margin: 0rem;
        padding: var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0.75rem 2rem 1rem 1.75rem;
    }
`;

export const SubTitle = styled.div`
    font-size: 2rem;
    font-family: var(--fancy-font);
    font-style: italic;
    font-weight: 500;
    margin-bottom: 1rem;
    color: var(--primary-white-color);

    @media (max-width: 1024px) {
        font-size: var(--header-medium);
        margin-bottom: 0.5rem;
    }
`;

export const Reference = styled.span`
    font-size: var(--body-text);
    line-height: var(--body-text-line-height);
`;

export const RefBox = styled.div`
    display: flex;
    align-items: start;
    position: relative;
    font-size: var(--body-text);
`;

export const RefIndex = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`;

export const SourceLink = styled.a`
    color: var(--primary-gold-color);
    position: absolute;
    margin-left: 5px;
    bottom: -3.5px;

    &:link &:active {
        color: var(--primary-gold-color);
    }

    @media (max-width: 1024px) {
        bottom: 2px;
        margin-left: 3px;

        > svg {
            font-size: 1.3rem;
        }
    }
`;

export const SourceWrapper = styled.div`
    display: inline-block;

    @media (max-width: 480px) {
        padding: 0.25rem 0rem;
    }
`;
