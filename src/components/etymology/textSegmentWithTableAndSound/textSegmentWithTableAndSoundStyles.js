import styled from 'styled-components';
import { StyledSpan } from '../../common/descWrapper/descWrapperStyles';

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
    cursor: ${({ expanded }) => (expanded ? 'zoom-out' : 'zoom-in')};

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
