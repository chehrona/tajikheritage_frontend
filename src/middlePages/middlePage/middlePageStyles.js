import styled from 'styled-components';

export const PageContainer = styled.div`
    box-sizing: border-box;
    min-height: 100svh;
    padding: 2rem 4rem;
    background: white;

    @media (max-width: 480px) {
        padding: 1.5rem 3.2rem 1.5rem 3.2rem;
        min-height: calc(100svh - 10.5rem);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 4.2rem;
    }
`;

export const InnerBoxContainer = styled.div`
    gap: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ center }) =>
        center && center ? 'space-between' : 'flex-start'};

    @media (max-width: 480px) {
        justify-content: center;
        gap: 2rem;
    }
`;
