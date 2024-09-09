import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${process.env.PUBLIC_URL}/error-grid.png);
    background-size: calc(100vw / 8);
    background-repeat: repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        background-size: calc(100vw / 3);
    }
`;

export const CodeWrapper = styled.div`
    height: 15rem;
    width: 25rem;
    border-radius: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--regular-black-color);
    box-shadow: 0 0 0.5rem var(--primary-white-color);
`;

export const Code = styled.div`
    font-size: 5rem;
    font-family: var(--blocky-font);
    color: var(--primary-red-color);
`;

export const ErrorMessage = styled.div`
    font-size: 1.5rem;
    font-family: var(--fancy-font);
    color: var(--primary-white-color);
`;
