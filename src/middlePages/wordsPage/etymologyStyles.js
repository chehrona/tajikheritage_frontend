import styled from 'styled-components/macro';
import { MainContainer } from '../../components/common/pageFirstContainer/pageFirstContainerStyles';

export const PageFirstContainer = styled(MainContainer)`
    @media (max-width: 480px) {
        padding: 1.5rem 2.5rem;
        font-size: 1.3rem;
    }
`;

export const PageTitle = styled.div`
    font-size: 1.75rem;
    font-weight: bold;
    color: #0f0a00;
    font-family: 'EB Garamond', serif;
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 2.25rem;
    }
`;

export const CardsContainer = styled.div`
    width: 100%;
    gap: 3rem;
    height: 27rem;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2.25rem;
    justify-content: ${({ center }) =>
        center ? 'space-between' : 'flex-start'};

    @media (max-width: 480px) {
        gap: 1rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        gap: 2rem;
    }
`;
