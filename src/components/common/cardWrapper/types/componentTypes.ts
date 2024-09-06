import { ReactNode } from 'react';

export type CardWrapperProps = {
    type: string;
    i: number;
    children: ReactNode;
    disabled?: boolean;
    page: string;
    setError?: React.Dispatch<React.SetStateAction<boolean>>;
};
