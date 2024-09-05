import { Langs } from '../../../appTypes';

export type SectionType = {
    _id: string;
    img: {
        [key in Langs]: string;
    };
    link: string;
    title: {
        [key in Langs]: string;
    };
};
