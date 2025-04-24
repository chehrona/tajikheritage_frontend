import { Langs } from '../../../../../appTypes';

export type MenuProps = {
    menuAnchorEl: React.MutableRefObject<HTMLElement | null>;
};

export type MenuItem = {
    title: string;
    desc: string;
    link: string;
};

export type MenuPage = {
    [key in Langs]: MenuItem[];
};
