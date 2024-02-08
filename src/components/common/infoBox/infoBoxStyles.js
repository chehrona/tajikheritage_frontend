import styled from "styled-components";
import { IconButton } from '@mui/material';
import { Close, OpenInFull } from "@mui/icons-material";

export const InfoWrapper = styled.div`
    display: flex;
    position: absolute;
    z-index: 11;
    font-style: italic;
    margin: 0.25rem;
    text-align: left;
    color: #fcf6e9;
    bottom: 0rem;
    background-color: #262626a6;
    width: calc(100% - 0.5rem);
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    height: auto;

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        font-size: 1.25rem;
        line-height: 1.4rem;
    }
`;

export const StyledCloseButton = styled(IconButton)`
    width: 1.5rem;
    height: 1.75rem;
    top: 0rem;
    right: 0rem;
    z-index: 10;

    &.MuiIconButton-root {
        position: absolute;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        top: 0.25rem;
        right: 0.25rem;
    }
`;

export const StyledCloseIcon = styled(Close)`
    color: #bd9d52;

    &.MuiSvgIcon-root {
        width: 1.5rem;
        height: 1.5rem;
    }

    @media (max-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 3rem;
            height: 2.5rem;
        }
    }
`;
export const StyledExpandButton = styled(IconButton)`
    width: 1.5rem;
    height: 1.75rem;
    bottom: 0rem;
    right: 0rem;
    z-index: 10;

    &.MuiIconButton-root {
        position: absolute;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        bottom: 0.45rem;
        right: 0.65rem;
    }
`;

export const StyledExpandIcon = styled(OpenInFull)`
    color: #bd9d52;
    transform: rotateZ(90deg);

    &.MuiSvgIcon-root {
        width: 1.25rem;
        height: 1.25rem;
    }

    @media (max-width: 1024px) {
        &.MuiSvgIcon-root {
            width: 3rem;
            height: 2.5rem;
        }
    }
`;

export const Text = styled.div`
    width: calc(100% - 1rem);
`;