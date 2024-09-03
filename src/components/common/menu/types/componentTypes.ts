import { Langs } from '../../../../appTypes';

export type MenuProps = {
    isMenuShown: boolean;
    setIsMenuShown: (isMenuShown: boolean) => void;
};

export type MenuItem = {
    title: string;
    desc: string;
    link: string;
};

export type MenuPage = {
    [key in Langs]: MenuItem[];
};
