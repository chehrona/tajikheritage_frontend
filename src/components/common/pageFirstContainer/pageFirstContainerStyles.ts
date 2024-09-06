import styled from 'styled-components';

export const MainContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    min-height: 100svh;
    background-color: var(--regular-white-color);
    padding: 2rem 3.2rem 2.8rem 3.2rem;

    @media (max-width: 480px) {
        padding: 0rem;
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 1.2rem 2rem 1.2rem;
        font-size: 1.3rem;
    }
`;
