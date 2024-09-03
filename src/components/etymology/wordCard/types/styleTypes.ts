import { LinkProps } from '@mui/material';

export type LinkBoxProps = LinkProps & {
    disabled?: boolean;
};

export type CardWrapperProps = {
    disabled: boolean | undefined;
    delay: string;
};

export type WordDescProps = {
    dangerouslySetInnerHTML: {
        __html: string;
    };
};
