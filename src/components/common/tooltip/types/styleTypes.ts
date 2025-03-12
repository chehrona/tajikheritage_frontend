import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

export type StyledTooltipProps = MuiTooltipProps & {
    className?: string;
    content?: {
        img?: string;
        text: string;
    };
};
