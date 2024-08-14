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

// export const BodyWrapper = styled.div`
//     background-color: red;
//     margin-top: 0.5rem;
//     display: flex;
//     max-width: 100%;
//     transition: all 0.5s linear 0s;
//     height: ${({ open }) => (open ? '27rem' : '0rem')};

//     @media (max-width: 480px) {
//         height: ${({ open }) => (open ? '30rem' : '0rem')};
//     }
// `;
