import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    height: calc(100svh - var(--header-height));
    background-image: url('/customAssets/error-grid-1.png');
    background-size: calc(100vw / 4);
    background-repeat: repeat;
    background-position: center;
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
    background-color: var(--regular-black-color);
    box-shadow: var(--primary-box-shadow) var(--primary-white-color);

    @media (max-width: 480px) {
        height: 10rem;
        width: 20rem;
    }
`;

export const Code = styled.div`
    font-size: 5rem;
    font-family: var(--blocky-font);
    color: var(--primary-red-color);

    @media (max-width: 480px) {
        font-size: var(--header-large);
    }
`;

export const ErrorMessage = styled.div`
    font-size: 1.5rem;
    font-family: var(--fancy-font);
    color: var(--primary-white-color);

    @media (max-width: 480px) {
        font-size: var(--header-normal);
    }
`;
