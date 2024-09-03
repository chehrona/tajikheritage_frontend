import { Source } from '../../../components/common/sources/types/componentTypes';
import { Langs } from '../../../appTypes';

export type WordObj = {
    _id: string;
    title: {
        [key in Langs]: string;
    };
    syntax: {
        [key in Langs]: string;
    };
    transcript: string;
    audio: string;
    desc: {
        [key in Langs]: string[];
    };
    references: {
        [key in Langs]: Source[];
    };
};
