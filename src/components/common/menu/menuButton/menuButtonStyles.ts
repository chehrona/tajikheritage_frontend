import styled from 'styled-components';
import { Close, Menu as MenuIcon } from '@mui/icons-material';

export const MainContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 4rem;
    width: 7.5rem;

    background-color: green;

    @media (max-width: 480px) {
        width: 3rem;
        margin: 0rem;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.5s ease-in-out;
`;

export const ButtonText = styled.div`
    color: #ffffff;
    font-size: 1rem;
    font-weight: normal;
    font-family: 'IBM Plex Serif', serif;
    min-width: 5.25rem;
    max-width: 5.25rem;

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
    color: var(--primary-gold-color);

    &.MuiSvgIcon-root {
        width: 2.25rem;
        height: 2.25rem;

        background-color: black;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 4rem;
            height: 3rem;
        }
    }
`;

export const StyledCloseIcon = styled(Close)`
    color: var(--primary-gold-color);

    &.MuiSvgIcon-root {
        width: 2.5rem;
        height: 2.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 4rem;
            height: 3rem;
        }
    }
`;
