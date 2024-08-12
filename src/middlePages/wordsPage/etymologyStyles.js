import styled from 'styled-components/macro';

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

export const InnerBoxContainer = styled.div`
    padding-top: 2rem;
    width: 100%;

    @media (max-width: 480px) {
        gap: 2rem;
        padding: 1rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        gap: 1rem;
    }
`;

export const FooterTitle = styled.div`
    font-size: 1.75rem;
    font-weight: bold;
    color: #0f0a00;
    font-family: 'EB Garamond', serif;
    margin-bottom: 1rem;

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
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ center }) =>
        center ? 'space-between' : 'flex-start'};

    @media (max-width: 480px) {
        gap: 1rem;
        padding: ${({ show }) => show && '0.5rem 1.5rem 2rem 1.5rem'};
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        gap: 2rem;
    }
`;

export const FirstBox = styled.div`
    width: 100%;
    color: #0f0a00;
    font-size: 1.1rem;
    position: relative;
    line-height: 1.7rem;

    ::-webkit-scrollbar {
        width: 0rem;
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
        padding: 0.5rem 1.5rem 0rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding-top: 0.25rem;
    }
`;

export const TextWrapper = styled.div`
    padding: 1rem 3rem;

    @media (max-width: 480px) {
        padding: 0.5rem 1.5rem;
    }
`;
