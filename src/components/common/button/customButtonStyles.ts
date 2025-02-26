import styled from 'styled-components';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)<{ $width: string }>`
    &.MuiButton-root {
        background: var(--primary-shadow-color);
        color: var(--primary-white-color);
        height: 100%;
        text-transform: none;
        font-size: var(--body-text);
        font-family: var(--regular-font);
        padding: 0.375rem 1rem;
        box-shadow: var(--primary-box-shadow) var(--primary-shadow-color);
        width: ${({ $width }) => $width};
    }

    &.MuiButton-root:hover {
        background: var(--primary-shadow-color);
    }

    @media (max-width: 480px) {
        &.MuiButton-root {
            padding: 0.375rem 0.95rem;
            margin: 0rem;
        }
    }
`;
