import { Source } from '../../../components/common/sources/types/componentTypes';
import { DescDetails, Langs } from '../../../appTypes';

export type WordObj = {
    _id: string;
    title: {
        [key in Langs]: string;
    };
    name: {
        [key in Langs]: string;
    };
    syntax: {
        [key in Langs]: string;
    };
    transcript: string;
    disabled: boolean;
    audio: string;
    desc: { [key in Langs]: DescDetails[] };
    references: {
        [key in Langs]: Source[];
    };
};
