import styled from 'styled-components';

export const MainContainer = styled.div`
    background-image: url(${'/noise.png'});
    min-height: fit-content;
    padding-bottom: 8rem;
    background-color: var(--primary-black-color);
    position: relative;
    height: 21rem;

    &:after {
        content: '';
        padding: 3rem;
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
        padding: 3rem;
        width: 100%;
        background: var(--primary-black-color);
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        top: -6rem;
        box-sizing: border-box;
    }
`;

export const SegmentContainer = styled.div`
    font-size: 2rem;
    padding: 0rem 1.5rem;
    width: 100%;
    z-index: 10;
    position: absolute;
    top: -2rem;
`;

export const SectionTitle = styled.div`
    line-height: 3rem;
    color: #dedbdb;
    text-decoration: none;
    display: block;
    overflow: hidden;
`;

export const TitleSpan = styled.span<{ data: string }>`
    padding-left: 0.3rem;
    padding-right: 1rem;
    display: block;
    text-shadow: 0rem 0.5rem 1rem #dedbdb;
`;
