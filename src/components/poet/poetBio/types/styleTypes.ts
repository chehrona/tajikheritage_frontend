import { IconButtonProps } from '@mui/material';

export type YearProps = {
    $align?: boolean;
    $color?: string;
};

export type StyledIconButtonProps = IconButtonProps & {
    $bottom: boolean;
    $disabled?: boolean;
};

export type ImageWrapperProps = {
    $width: number;
    $src: string;
    $translate: number;
};

export type StyledButtonProps = IconButtonProps & {
    $left: boolean;
};
