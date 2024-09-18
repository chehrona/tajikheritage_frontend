import styled from 'styled-components';

export const BodyContainer = styled.div`
    display: flex;

    @media (max-width: 480px) {
        display: block;
        max-height: 65vh;
        overflow-y: scroll;
        min-height: var(--small-card-height);
        padding: var(--text-segment-gap)
            calc(var(--page-padding) - var(--input-radius))
            var(--text-segment-gap) var(--page-padding);
        margin: 0rem calc(var(--input-radius) / 2) var(--text-segment-gap) 0rem;

        &::-webkit-scrollbar {
            width: var(--input-radius);
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--primary-gold-color);
            border-radius: var(--input-radius);
        }
    }
`;

export const Desc = styled.div`
    width: 100%;
    height: 100%;
    color: var(--secondary-white-color);
    line-height: 1.5rem;
    overflow-wrap: break-word;

    @media (max-width: 480px) {
        display: inline;
        height: 20rem;
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
    background-image: url(${'/customAssets/noise.png'});
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
