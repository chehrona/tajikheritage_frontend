import { ReactNode } from 'react';

export type DialogProps = {
    handleClose: () => void;
    open: boolean;
    children: ReactNode;
    width: string;
    backdrop: string;
    background: string;
    height?: string;
    border: string;
};
