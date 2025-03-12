import { IconButtonProps } from '@mui/material';

export type StyledIconButtonProps = IconButtonProps & {
    $left: boolean;
};

export type ImageProps = {
    $width: number;
    $src: string;
};
