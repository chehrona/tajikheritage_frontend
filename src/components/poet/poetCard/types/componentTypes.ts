import { Langs } from '../../../../appTypes';
import { PoetData } from '../../../../articlePages/poetPage/types/componentTypes';

export type PoetCardType = Omit<
    PoetData,
    'sections' | 'bio' | 'works' | 'movies' | 'awards' | 'career' | 'references'
> & {
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
