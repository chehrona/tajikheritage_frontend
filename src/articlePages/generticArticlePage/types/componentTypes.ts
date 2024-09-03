import { Source } from '../../../components/common/sources/types/componentTypes';
import { Langs } from '../../../appTypes';

export type ArticleData = {
    name: {
        [key in Langs]: string[];
    };
    desc: {
        [key in Langs]: string[];
    };
    references: {
        [key in Langs]: Source[];
    };
};
