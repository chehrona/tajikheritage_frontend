import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    height: calc(100svh - var(--header-height));
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        background-size: 100vw;
    }
`;

export const CodeWrapper = styled.div`
    height: 15rem;
    width: 25rem;
    border-radius: var(--small-radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--text-segment-gap);
    background-color: var(--regular-black-color);
    box-shadow: var(--primary-box-shadow) var(--primary-white-color);

    @media (max-width: 480px) {
        height: 10rem;
        width: 20rem;
    }
`;

export const Code = styled.div`
    font-size: calc(2.75 * var(--header-large));
    font-weight: bold;
    font-family: var(--fancy-font);
    color: var(--primary-red-color);
    line-height: calc(2 * var(--header-large));

    @media (max-width: 480px) {
        font-size: var(--header-large);
    }
`;

export const ErrorMessage = styled.div`
    font-size: var(--header-small);
    color: var(--primary-white-color);

    @media (max-width: 480px) {
        font-size: var(--header-normal);
    }
`;
