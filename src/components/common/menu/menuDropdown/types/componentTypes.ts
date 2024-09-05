import { Langs } from '../../../../../appTypes';

export type MenuProps = {
    isMenuShown: boolean;
    menuAnchorEl: React.MutableRefObject<HTMLElement | null>;
    setIsMenuShown: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MenuItem = {
    title: string;
    desc: string;
    link: string;
};

export type MenuPage = {
    [key in Langs]: MenuItem[];
};
