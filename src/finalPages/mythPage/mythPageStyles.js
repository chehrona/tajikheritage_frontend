import styled from "styled-components";
import { Alert } from "@mui/material";

export const PageContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    min-height: 40rem;
    background-color: white;
    padding: 2rem 3.7rem 2.8rem 3.2rem;
    
    @media (max-width: 480px) {
        padding: 0rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        padding: 1.5rem 1.8rem 2rem 1.2rem;
    }
`;

export const MythContainer = styled.div`
    border-radius: 4rem;
    min-height: 40rem;
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

export const StyledAlert = styled(Alert)`
    width: fit-content;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    z-index: 20;

    &.MuiPaper-root {
        font-family: 'IBM Plex Serif', serif;
        font-size: 1rem;
        justify-content: center;

        svg {
            font-size: 1.5rem;
        }
    }

    &.MuiAlert-icon {
        margin-right: 10px;
    }
`;
