import styled from 'styled-components';
import { Dialog } from '@mui/material';

// Types
import { StyledDialogProps } from './types/styleTypes';

export const StyledDialog = styled(Dialog)<StyledDialogProps>`
    & .MuiPaper-root {
        font-size: var(--body-text);
        border-radius: var(--big-radius);
        box-shadow: 0rem 0rem 0.3rem 0rem var(--primary-black-color);
        width: ${({ $width }) => $width && $width};
        max-width: ${({ $width }) => $width && $width};
        height: ${({ $height }) => $height && $height};
        background-color: ${({ $background }) =>
            $background === 'dark'
                ? 'var(--primary-black-color)'
                : 'var(--primary-white-color)'};

        @media (max-width: 480px) {
            font-size: var(--body-text);
            margin: 0rem;
            width: calc(100vw - (2 * var(--page-padding)));
            max-width: calc(100vw - (2 * var(--page-padding)));
            height: ${({ $height }) => ($height ? $height : 'fit-content')};
        }
    }

    & .MuiModal-backdrop {
        background-color: ${({ $background }) =>
            $background === 'dark'
                ? 'rgba(252 246 233 / 30%)'
                : 'rgba(15 10 0 / 30%)'};
    }
`;

export const DialogHeaderWrapper = styled.div`
    position: absolute;
    right: 0rem;
`;
