import { IconButtonProps } from '@mui/material';

export type ImageWrapperProps = {
    $width: number;
    $height?: number;
    $translate: number;
    $topLeftRad?: number;
    $src: string;
    $overlay?: string;
};

export type StyledButtonProps = IconButtonProps & {
    $left: boolean;
};
