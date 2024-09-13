import { DialogProps } from '@mui/material';

export type StyledDialogProps = DialogProps & {
    $width: string;
    $backdrop: string;
    $background: string;
    $height?: string;
};
