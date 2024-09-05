import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { Close, Menu as MenuIcon } from '@mui/icons-material';

export const MainContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 4rem;
    width: 10rem;

    @media (max-width: 480px) {
        width: 3rem;
        margin: 0rem;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    width: 6.5rem;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    transition: 0.5s ease-in-out;
`;

export const ButtonText = styled.div`
    color: #ffffff;
    font-size: 1rem;
    margin-right: -0.25rem;
    font-weight: normal;
    font-family: 'IBM Plex Serif', serif;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const StyledIconButton = styled.div`
    display: flex;
    justify-content: center;
    padding: 8px 0px;
    width: 3.5rem;
    margin-right: 1.5rem;

    @media (max-width: 480px) {
        padding: 8px;
        width: 100%;
        margin: 0rem;
    }
`;

export const StyledMenuIcon = styled(MenuIcon)`
    color: #bd9d52;

    &.MuiSvgIcon-root {
        width: 3.5rem;
        height: 2.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 4rem;
            height: 3rem;
        }
    }
`;

export const StyledCloseIcon = styled(Close)`
    color: #bd9d52;

    &.MuiSvgIcon-root {
        width: 3.5rem;
        height: 2.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 4rem;
            height: 3rem;
        }
    }
`;
