import styled, { keyframes } from 'styled-components';
import { Alert } from '@mui/material';

const slideOut = keyframes`
    0% {
        transform: translateX(100%);
    }
    50% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(0);
    }
`;

export const StyledAlert = styled(Alert)`
    width: fit-content;
    position: fixed;
    right: 0.5rem;
    top: 0.5rem;
    z-index: 20;
    animation: ${slideOut} 0.5s ease-in-out forwards;

    &.MuiPaper-root {
        font-family: 'IBM Plex Serif', serif;
        font-size: 1.1rem;
        justify-content: center;
        align-items: center;

        svg {
            font-size: 1.5rem;
        }
    }

    &.MuiAlert-root {
        padding: 0.25rem 0.75rem;
    }

    &.MuiPaper-root > .MuiAlert-icon {
        margin-right: 0.5rem;
    }

    @media (max-width: 1024px) {
        &.MuiPaper-root {
            font-size: 1.15rem;

            svg {
                font-size: 2rem;
            }
        }

        &.MuiAlert-root {
            padding: 0.15rem 0.65rem;
        }
    }
`;
