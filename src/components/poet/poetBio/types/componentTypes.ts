import { Langs } from '../../../../appTypes';
import { BodyObj } from '../../../common/descWrapper/types/componentTypes';
import { SlideImage } from '../../../common/slideshow/types/componentTypes';
import { PoetBioSectionOne } from '../firstSection/types/componentTypes';
import { PoetBioSectionTwo } from '../secondSection/types/componentTypes';

// Section three
export type PoetBioSectionThree = {
    quote: string;
    desc: BodyObj;
};

// Section four
export type PoetBioSectionFour = {
    year: string;
    slides: SlideImage[];
    desc: BodyObj;
};

// Section five
export type PoetBioSectionFiveDetails = {
    year: string;
    desc: BodyObj;
};

// Poet bio ****************************
export type PoetBioType = {
    backdrops: string[];
    one: {
        [key in Langs]: PoetBioSectionOne;
    };
    two: PoetBioSectionTwo;
    three: {
        [key in Langs]: PoetBioSectionThree;
    };
    four: {
        [key in Langs]: PoetBioSectionFour;
    };
    five: {
        [key in Langs]: PoetBioSectionFiveDetails;
    };
    six: {
        [key in Langs]: { desc: BodyObj; author: string; slides: SlideImage[] };
    };
};
