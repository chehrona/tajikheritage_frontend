import styled from 'styled-components';

// Components
import { StyledSpan } from '../../components/common/descWrapper/descWrapperStyles';

export const BodyContainer = styled.div`
    padding: 2rem 0rem;
    min-height: 40rem;
    border-radius: 4rem;
    background: var(--primary-white-color);
    background-image: url(${'/noise.png'});
    margin-right: 0.86rem;
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
    color: var(--primary-shadow-color);
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

export const SoundBox = styled.div`
    display: flex;
    align-items: center;
    padding: 0rem 0rem 0.75rem 0rem;
`;
