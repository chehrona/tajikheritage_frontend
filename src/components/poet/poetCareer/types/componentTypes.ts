import { Langs } from '../../../../appTypes';
import { SlideImage } from '../../../common/slideshow/types/componentTypes';

export type CareerDetails = {
    text: string;
    slides: SlideImage[];
};

export type CareerObj = {
    [key in Langs]: CareerDetails[];
};

export type PoetCareerTypes = CareerObj & {
    years: string[];
};
