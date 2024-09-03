import { Source } from '../../../components/common/sources/types/componentTypes';
import { DescObj, Langs } from '../../../appTypes';

export type ProverbObj = {
    quote: {
        [key in Langs]: string;
    };
    desc: DescObj;
    references: {
        [key in Langs]: Source[];
    };
};
