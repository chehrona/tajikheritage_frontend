import styled from 'styled-components/macro';
import { StyledSpan } from '../../components/common/descWrapper/descWrapperStyles';

export const PageContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    min-height: 40rem;
    background-color: white;
    padding: 2rem 3.8rem 2.8rem 3.2rem;

    @media (max-width: 480px) {
        padding: 0rem;
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding: 1.5rem 1.8rem 2rem 1.2rem;
    }
`;

export const BodyContainer = styled.div`
    padding: 2rem 0rem;
    min-height: 40rem;
    border-radius: 4rem;
    background: #fcf6e9;
    background-image: url(${'/noise.png'});
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem #504221d1;

    @media (max-width: 480px) {
        margin: 0rem;
        border-radius: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 2.5rem;
    }
`;

export const TextContainer = styled.div``;

export const WordTitle = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0rem 3rem;

    @media (max-width: 480px) {
        font-size: 1.75rem;
        padding: 0rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.75rem;
        padding: 0rem 2rem;
    }
`;

// SoundBox
export const PronunciationWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0.25rem 1rem 0.25rem 3rem;

    @media (max-width: 480px) {
        padding: 0.5rem 1.5rem 0.25rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0.5rem 2rem;
    }
`;

export const Transcript = styled.div`
    color: #70654a;
    font-size: 1.25rem;
    padding-right: 0.5rem;

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const TextBoxWrapper = styled.div`
    padding: 0.5rem 3rem;
    font-size: 1.1rem;

    @media (max-width: 480px) {
        font-size: 1.3rem;
        padding: 0.5rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        padding: 0.5rem 2rem;
    }
`;

export const WordDesc = styled(StyledSpan)`
    margin: 0.35rem 0rem;
`;

export const TableImage = styled.img`
    margin: 0.5rem 0rem;
    transition: 0.3s ease-in-out;
    height: ${({ expanded }) => (expanded ? '100svh' : '40svh')};
    border-radius: ${({ expanded }) => (expanded ? '1rem' : '0.75rem')};
    cursor: ${({ expanded }) => (expanded ? 'zoom-in' : 'zoom-in')};

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
        margin: 0.5rem 0rem 0rem 0rem;
        font-size: 1.35rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: auto;
        width: ${({ expanded }) => (expanded ? '100%' : '50%')};
        ${({ reverse, length }) => !reverse && length && 'margin-left: 2rem'};
    }
`;

export const SoundBox = styled.div`
    display: flex;
    align-items: center;
    padding: 0rem 0rem 0.75rem 0rem;
`;
