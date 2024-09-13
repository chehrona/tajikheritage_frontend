import styled from 'styled-components';
import { DialogContent } from '@mui/material';

export const StyledContent = styled(DialogContent)`
    &.MuiDialogContent-root {
        position: relative;
        padding: 0rem;

        @media (max-width: 1024px) {
            overflow: hidden;
        }
    }
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
    font-size: var(--body-text);
    line-height: var(--body-text-line-height);
    padding: var(--text-segment-gap) var(--page-padding)
        calc(2 * var(--text-segment-gap)) var(--page-padding);
`;

export const Desc = styled.div`
    width: 100%;
    height: 100%;
    color: var(--secondary-white-color);
    line-height: 1.5rem;
    overflow-wrap: break-word;

    @media (max-width: 480px) {
        display: inline;
    }
`;

export const InfoTitle = styled.div`
    color: var(--regular-white-color);
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: var(--header-big);
    line-height: var(--header-big-line-height);
    font-family: var(--fancy-font);

    @media (max-width: 480px) {
        text-align: center;
        padding: 0rem calc(var(--page-padding) + 0.5rem) var(--text-segment-gap)
            var(--page-padding);
    }
`;

export const BodyContainer = styled.div`
    display: flex;

    @media (max-width: 480px) {
        display: block;
        padding: var(--text-segment-gap) 0rem 0rem 0rem;
        min-height: 15.5rem;
    }
`;

export const Wrapper = styled.div<{ $first: boolean }>`
    height: 100%;
    width: ${({ $first }) => ($first ? '25%' : '75%')};

    @media (max-width: 480px) {
        width: 100%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: ${({ $first }) => ($first ? '24.5%' : '76.5%')};
    }
`;

export const AwardImg = styled.img`
    border-radius: var(--small-radius);
    height: calc((var(--small-card-height) / 1.05) + var(--text-segment-gap));
    width: calc((var(--small-card-width) / 1.05) + var(--text-segment-gap));
    background: var(--primary-black-color);
    padding: var(--text-segment-gap);
    background-image: url(${'/noise.png'});
    box-shadow: 0rem 0rem 0.4rem 0.01rem var(--primary-gold-color);

    @media (max-width: 480px) {
        display: inline;
        float: left;
        margin-right: var(--text-segment-gap);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin-left: 1rem;
    }
`;
