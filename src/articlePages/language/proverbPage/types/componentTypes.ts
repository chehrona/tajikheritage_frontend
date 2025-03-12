import { Source } from '../../../../components/common/sources/types/componentTypes';
import { DescObj, Langs } from '../../../../appTypes';

export type ProverbObj = {
    _id: string;
    id: string;
    sound: string;
    tags: string[];
    disabled: boolean;
    img: {
        [key in Langs]: string;
    };
    logo: {
        outer: string;
        inner: string;
    };
    quote: {
        [key in Langs]: string;
    };
    desc: DescObj;
    references: {
        [key in Langs]: Source[];
    };
};
