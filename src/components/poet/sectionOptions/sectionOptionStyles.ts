import styled from 'styled-components';

export const MainContainer = styled.div`
    display: none;

    @media (max-width: 480px) {
        display: flex;
        background-image: url(${'/noise.png'});
        min-height: fit-content;
        background-color: var(--primary-black-color);
        position: relative;
        height: 18rem;

        &:after {
            content: '';
            padding: 2rem;
            width: 100%;
            background: var(--primary-white-color);
            background-image: url(${'/noise.png'});
            -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
            position: absolute;
            bottom: -0.01rem;
            box-sizing: border-box;
        }

        &:before {
            content: '';
            padding: 2rem;
            width: 100%;
            background: var(--primary-black-color);
            -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
            position: absolute;
            top: -5rem;
            box-sizing: border-box;
        }
    }
`;

export const SegmentContainer = styled.div`
    font-size: var(--header-normal);
    padding: 0rem var(--page-padding);
    width: 100%;
    z-index: 10;
    position: absolute;
    top: -2rem;
`;

export const SectionTitle = styled.div`
    line-height: var(--header-large);
    color: var(--secondary-white-color);
    text-decoration: none;
    display: block;
    overflow: hidden;
`;

export const TitleSpan = styled.span`
    display: block;
    text-shadow: 0rem 0.35rem 1.5rem var(--secondary-white-color);
`;
