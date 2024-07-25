import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { StyledSpan } from '../../components/common/descWrapper/descWrapperStyles';

export const PageContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    min-height: 40rem;
    background-color: white;
    padding: 2rem 3.8rem 2.8rem 3.2rem;
    @media (max-width: 480px) {
        padding: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 1.8rem 2rem 1.2rem;
    }
`;

export const TextContainer = styled.div`
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

export const WordTitle = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0rem 3rem;
`;

export const StyledIconButton = styled(IconButton)`
    width: 2.5rem;
    height: 2.5rem;
    margin-top: -0.1rem;

    &.MuiIconButton-root {
        margin-left: 0.3rem;
    }

    &:hover {
        color: #59a959;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            color: #59a959;
        }
    }
`;

export const TextBoxWrapper = styled.div`
    padding: 0.5rem 3rem;
`;

export const Subtitle = styled.span`
    font-weight: 500;
    font-size: 1.15rem;
    width: fit-content;
    padding-right: 0.25rem;
    text-transform: uppercase;
    border-right: 2px solid #ad0f0e;
    border-bottom: 2px solid #ad0f0e;
    ${({ reverse, length }) => !reverse && length && 'margin-left: 3rem'};

    @media (max-width: 480px) {
        margin: 1rem 0rem 0rem 1.5rem;
        font-size: 1.35rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
        ${({ reverse, length }) => !reverse && length && 'margin-left: 2rem'};
    }
`;

export const WordDesc = styled(StyledSpan)`
    margin: 0.35rem 0rem;
`;

export const TableImage = styled.img`
    margin: 0.5rem 0rem;
    transition: 0.3s ease-in-out;
    width: ${({ expanded }) => (expanded ? '100%' : '30%')};
    border-radius: ${({ expanded }) => (expanded ? '1rem' : '0.75rem')};
    cursor: ${({ expanded }) => (expanded ? 'zoom-in' : 'zoom-in')};
`;
