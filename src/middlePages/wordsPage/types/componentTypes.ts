import { Langs, DescObj } from '../../../appTypes';
import { Source } from '../../../components/common/sources/types/componentTypes';

export type WordItemType = {
    disabled: boolean;
    id: string;
    related: string[];
    tags: string[];
    title: {
        [key in Langs]: string;
    };
    transcript: string;
    syntax: {
        [key in Langs]: string;
    };
    origin: string[];
    audio: string;
    desc: DescObj;
    references: Source[];
};
