import styled from 'styled-components';
import { Alert } from '@mui/material';

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
