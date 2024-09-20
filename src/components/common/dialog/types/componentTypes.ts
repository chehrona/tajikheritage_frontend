import { ReactNode } from 'react';

export type DialogProps = {
    handleClose: () => void;
    open: boolean;
    children: ReactNode;
    width: string;
    background: string;
    height?: string;
};
