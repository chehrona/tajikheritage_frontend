import styled from 'styled-components';
import { Search } from '@mui/icons-material';

export const SearchContainer = styled.div`
    width: 100%;
    height: 5.5rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const InputWrapper = styled.div`
    height: 3.5rem;
    width: 30rem;
    background: url('/search.png') center no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputField = styled.input`
    outline: none;
    border: none;
    width: 24.5rem;
    padding-left: 0.45rem;
    height: 3.4rem;
    font-size: 1.25rem;
    background-color: transparent;
    font-family: 'IBM Plex Serif', serif;

    &::placeholder {
        color: #a39f9b;
        opacity: 1;
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const StyledSearchIcon = styled(Search)`
    color: #a39f9b;

    &.MuiSvgIcon-root {
        width: 1.8rem;
        height: 1.8rem;
    }
`;

export const InputAlert = styled.div`
    color: #ad0f0e;
    height: 1.5rem;
    margin: 0.35rem 0rem 0rem -2.75rem;
`;
