import { NavLinkProps } from 'react-router-dom';

export type LinkProps = NavLinkProps & {
    $delay: string;
    $disabled: boolean;
    $type: string;
};
