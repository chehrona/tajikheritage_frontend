import { NavLinkProps } from 'react-router-dom';

export type LinkProps = NavLinkProps & {
    $disabled: boolean;
    $type: string;
};
