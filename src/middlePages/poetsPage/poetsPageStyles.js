import styled from 'styled-components';

export const PageContainer = styled.div`
    box-sizing: border-box;
    min-height: 100svh;
    padding: 2rem 7rem 2rem 7rem;
    background: white;

    @media (max-width: 480px) {
        padding: 1.5rem 2.5rem;
        min-height: calc(100svh - 10.5rem);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 4.2rem;
    }
`;

export const PoetBoxContainer = styled.div`
    gap: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2.25rem;

    @media (max-width: 480px) {
        gap: 1rem;
    }
`;
