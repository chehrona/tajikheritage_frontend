import styled from 'styled-components';
import { Search, Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const SearchContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 7rem;

    @media (max-width: 480px) {
        height: 5.5rem;
    }
`;

export const InputWrapper = styled.div`
    height: 3.5rem;
    width: 30rem;
    background: url('/customAssets/search.png') center no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 480px) {
        width: 100%;
        height: 3rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 35rem;
        height: 4rem;
    }
`;

export const InputField = styled.input`
    outline: none;
    border: none;
    width: 24.5rem;
    margin-left: 1.5rem;
    padding-left: 0.45rem;
    height: 3.4rem;
    font-size: var(--header-small);
    background-color: transparent;
    font-family: var(--regular-font);

    &::placeholder {
        color: var(--secondary-grey-color);
    }

    @media (max-width: 480px) {
        font-size: var(--body-text);
        height: 100%;
        margin: 0rem 1.25rem;
        padding-left: 2.15rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        margin: 0rem 2.25rem;
        font-size: 1.35rem;
        width: 26rem;
    }
`;

export const StyledSearchIcon = styled(Search)`
    color: var(--secondary-grey-color);
    position: absolute;
    left: 1.75rem;

    &.MuiSvgIcon-root {
        width: 1.8rem;
        height: 1.8rem;
    }

    @media (max-width: 480px) {
        left: 1.5rem;

        &.MuiSvgIcon-root {
            width: 1.75rem;
            height: 1.75rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        left: 2rem;

        &.MuiSvgIcon-root {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`;

export const StyledClearIcon = styled(Close)`
    color: var(--secondary-grey-color);

    &.MuiSvgIcon-root {
        width: 1.8rem;
        height: 1.8rem;
    }

    @media (max-width: 480px) {
        &.MuiSvgIcon-root {
            width: 1.75rem;
            height: 1.75rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`;

export const StyledIconButton = styled(IconButton)`
    width: 2.5rem;
    height: 2.5rem;

    &.MuiIconButton-root {
        position: absolute;
        right: 1.75rem;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            position: absolute;
            right: 1.05rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        width: 3.5rem;
        height: 3.5rem;
    }
`;

export const InputAlert = styled.div`
    margin-top: 0.5rem;
    color: var(--primary-red-color);
    font-size: var(--body-text);

    @media (max-width: 480px) {
        margin-top: 0.25rem;
    }
`;
