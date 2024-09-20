import { Source } from '../../../components/common/sources/types/componentTypes';
import { DescDetails, Langs } from '../../../appTypes';

export type ArticleData = {
    name: {
        [key in Langs]: string;
    };
    desc: {
        [key in Langs]: DescDetails[];
    };
    references: {
        [key in Langs]: Source[];
    };
};
