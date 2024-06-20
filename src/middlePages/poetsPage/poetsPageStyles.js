import styled from 'styled-components';

export const PageContainer = styled.div`
    box-sizing: border-box;
    min-height: 100svh;
    padding: 2rem 7rem 2rem 7rem;
    background: white;

    @media (max-width: 480px) {
        padding: 1.5rem 3.2rem 1.5rem 3.2rem;
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

    @media (max-width: 480px) {
        gap: 1rem;
    }
`;

export const TempPageContainer = styled.div`
    min-height: 100svh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TempImg = styled.img`
    height: 20rem;
`;

export const TempTitle = styled.div`
    color: #fcf6e9;
    margin: 2.5% 0% 5% 0%;
    font-size: 1.5rem;
`;
