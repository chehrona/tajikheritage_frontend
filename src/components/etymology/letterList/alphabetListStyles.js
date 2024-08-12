import styled from 'styled-components/macro';
import { IconButton } from '@mui/material';

export const AlphabetContainer = styled.div`
    padding: 0.5rem 0rem;
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    overflow: scroll;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 480px) {
        gap: 1rem;
        width: calc(100% - 3rem);
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        gap: 1rem;
    }
`;

export const LetterButton = styled(IconButton)`
    width: 2.75rem;
    height: 2.75rem;
    margin-top: -0.1rem;
    font-family: 'EB Garamond', serif;
    font-weight: bold;

    &.MuiIconButton-root {
        padding: 0.25rem;
        color: #bd9d52;
        margin-left: 0.3rem;
        background-color: #0f0a00;

        &:hover {
            color: #fcf6e9;
            transition: 0.1s all;
            background-color: #0f0a00;
            box-shadow: 0rem 0rem 0.3rem 0rem #0f0a00;
        }

        svg {
            filter: drop-shadow(0px 0px 1px #0f0a00);
        }
    }

    @media (max-device-width: 1024px) {
        width: 3.5rem;
        height: 3.5rem;

        &.MuiIconButton-root {
            &:hover {
                transition: none;
                background-color: #70654a;
                box-shadow: 0rem 0rem 0.3rem 0rem #bd9d52;
            }

            svg {
                filter: drop-shadow(0px 0px 0px #0f0a00);
            }
        }
    }
`;
