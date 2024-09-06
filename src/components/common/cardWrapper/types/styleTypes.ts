import { NavLinkProps } from 'react-router-dom';

export type LinkProps = NavLinkProps & {
    $delay: string;
    $disabled: boolean;
    $height: {
        d: number;
        t: number;
        m: number;
    };
};
