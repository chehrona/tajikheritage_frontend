import { Langs } from '../../../../appTypes';

export type PoetCardType = {
    id: string;
    name: {
        [key in Langs]: string[];
    };
    years: string[];
    desc: {
        [key in Langs]: string;
    };
    img: string;
    tags: string[];
    disabled: boolean;
};

export type PoetCardProps = {
    poet: PoetCardType;
    i: number;
};
