import styled, { css } from 'styled-components';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export const MainContainer = styled.div`
    border-radius: 0rem 0rem var(--page-radius) var(--page-radius);
    background: var(--primary-white-color);
    background-image: url(${'/customAssets/noise.png'});
    padding: var(--text-segment-gap) var(--page-padding)
        calc(6 * var(--text-segment-gap)) var(--page-padding);

    @media (max-width: 480px) {
        padding: var(--text-segment-gap) var(--page-padding)
            calc(4 * var(--text-segment-gap)) var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0rem 2rem 2rem 2rem;
    }
`;

export const DropDownContainer = styled.div`
    width: 100%;
`;

export const StyledDownIcon = styled(ExpandMore)`
    color: var(--primary-shadow-color);
`;

export const StyledUpIcon = styled(ExpandLess)`
    color: var(--primary-shadow-color);
`;

export const RefContainer = styled.div<{ $open: boolean }>`
    max-width: 100%;
    display: block;
    position: relative;
    border-radius: var(--small-radius);
    margin-top: var(--text-segment-gap);
    color: var(--secondary-white-color);
    background: var(--primary-black-color);
    transition: all 0.5s linear 0s;
    ${({ $open }) =>
        $open
            ? css`
                  height: 20rem;
                  box-shadow: var(--primary-box-shadow)
                      var(--primary-black-color);
                  padding: var(--input-radius) calc(var(--input-radius) / 2)
                      var(--input-radius) 0rem;
              `
            : css`
                  height: 0rem;
                  padding: 0rem;
              `};

    @media (max-width: 480px) {
        ${({ $open }) =>
            $open
                ? css`
                      height: 30rem;
                  `
                : css`
                      height: 0rem;
                  `};
    }
`;

export const RefWrapper = styled.div<{ $open: boolean }>`
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100%;
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    width: calc(100% - var(--input-radius));
    padding: 0rem calc(var(--page-padding) - 1rem - (var(--input-radius) / 2))
        var(--text-segment-gap) calc(var(--page-padding) - 1rem);

    &::-webkit-scrollbar {
        width: var(--input-radius);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primary-gold-color);
        border-radius: var(--input-radius);
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 0rem calc(var(--page-padding) - (var(--input-radius) / 2))
            var(--text-segment-gap) var(--page-padding);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0.75rem 2rem 1rem 1.75rem;
    }
`;

export const SubTitle = styled.div`
    font-size: var(--header-big);
    font-family: var(--fancy-font);
    font-style: italic;
    font-weight: 500;
    margin: var(--text-segment-gap) 0rem;
    color: var(--primary-white-color);

    @media (max-width: 1024px) {
        font-size: var(--header-medium);
        margin: 0rem 0rem var(--text-segment-gap) 0rem;
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
    bottom: 0px;

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
    padding: 0rem var(--input-radius) var(--input-radius) var(--input-radius);

    @media (max-width: 480px) {
        padding: 0rem var(--input-radius) var(--input-radius)
            var(--input-radius);
    }
`;
