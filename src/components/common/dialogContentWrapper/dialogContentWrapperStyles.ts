import styled from 'styled-components';
import { DialogContent } from '@mui/material';

export const StyledContent = styled(DialogContent)`
    position: relative;
    font-size: var(--body-text);
    line-height: var(--body-text-height);

    &.MuiDialogContent-root {
        padding: 0rem;
        overflow: hidden;
    }
`;
