import styled from 'styled-components';

export const MainContainer = styled.div`
    height: 20rem;

    @media (max-width: 480px) {
        display: flex;
        min-height: fit-content;
        background-color: var(--primary-black-color);
        position: relative;
        height: 17rem;

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
    width: 50%;
    gap: 1rem;
    z-index: 10;
    position: absolute;
    top: 5rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 480px) {
        top: -2.45rem;
        width: 100%;
        gap: 0rem;
    }
`;

export const SectionTitle = styled.div`
    color: var(--secondary-white-color);

    @media (max-width: 480px) {
        line-height: var(--header-large);
        color: var(--secondary-white-color);
        text-decoration: none;
        display: block;
        overflow: hidden;
    }
`;

export const TitleSpan = styled.span`
    display: block;
    cursor: pointer;
    transition: text-shadow 0.25s ease-in-out;

    &:hover {
        text-shadow: 0rem 0rem 1.5rem var(--secondary-white-color);
    }

    @media (max-width: 480px) {
        text-shadow: 0rem 0.35rem 1.5rem var(--secondary-white-color);

        &:hover {
            text-shadow: 0rem 0.35rem 1.5rem var(--secondary-white-color);
        }
    }
`;
