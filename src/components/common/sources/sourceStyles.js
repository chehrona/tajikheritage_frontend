import styled from 'styled-components';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export const MainContainer = styled.div`
    border-radius: 0rem 0rem 4rem 4rem;
    background: #fcf6e9;
    background-image: url(${'/noise.png'});
    padding: 3rem;
    padding-top: 0rem;

    @media (max-width: 480px) {
        border-radius: 0rem 0rem 2rem 2rem;
        padding: 0rem 1.5rem 1rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        border-radius: 0rem 0rem 2.5rem 2.5rem;
        padding: 0rem 2rem 2rem 2rem;
    }
`;

export const DropDownContainer = styled.div`
    width: 100%;
    margin-bottom: 2rem;
    padding-top: 1rem;

    @media (max-width: 480px) {
        padding-top: 0rem;
        margin-bottom: 1rem;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.4;

    &:hover {
        opacity: 1;
    }
`;

export const Line = styled.div`
    height: 0.1rem;
    width: 15rem;
    background: #504221d1;
    margin-right: ${({ right }) => (right ? '0.3rem' : '0rem')};
    margin-left: ${({ right }) => (right ? '0rem' : '0.3rem')};

    @media (max-width: 480px) {
        width: 10rem;
    }
`;

export const StyledDownIcon = styled(ExpandMore)`
    color: #504221d1;
`;

export const StyledUpIcon = styled(ExpandLess)`
    color: #504221d1;
`;

export const RefContainer = styled.div`
    display: flex;
    max-width: 100%;
    border-radius: 1rem;
    margin-top: 0.8rem;
    display: block;
    position: relative;
    color: #dedbdb;
    background: #0f0a00;
    transition: all 0.5s linear 0s;
    height: ${({ open }) => (open ? '15rem' : '0rem')};
    padding: ${({ open }) => open && '0.8rem 0rem 1.75rem 0rem'};
    box-shadow: ${({ open }) => open && `0rem 0rem 0.4rem 0.01rem #0F0A00`};

    @media (max-width: 480px) {
        height: ${({ open }) => (open ? '30rem' : '0rem')};
    }
`;

export const RefWrapper = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100%;
    margin: 0.5rem 0.25rem;
    width: calc(100% - 0.5rem);
    padding: 0rem 2rem 1rem 2rem;
    display: ${({ open }) => (open ? 'block' : 'none')};

    ::-webkit-scrollbar {
        width: 0.5rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #bd9d52;
        border-radius: 0.25rem;
    }

    @media (max-width: 480px) {
        padding: 0.2rem 1.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 0.75rem 2rem 1rem 1.75rem;
    }
`;

export const SubTitle = styled.div`
    font-size: 2rem;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #fcf6e9;

    @media (max-width: 1024px) {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }
`;

export const Reference = styled.span`
    font-size: 1.1rem;
    line-height: 1.7rem;

    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const RefBox = styled.div`
    display: flex;
    align-items: start;
    font-size: 1.1rem;
    line-height: 1.7rem;
    position: relative;

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
`;

export const RefIndex = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`;

export const SourceLink = styled.a`
    color: #bd9d52;
    margin-left: 0.5rem;
    position: absolute;
    margin-left: 5px;
    bottom: -3.5px;

    &:link &:active {
        color: #bd9d52;
    }
`;

export const SourceWrapper = styled.div`
    display: inline-block;
`;
