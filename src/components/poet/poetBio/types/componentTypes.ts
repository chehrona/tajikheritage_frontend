import { Langs } from '../../../../appTypes';
import { PoetBio } from '../../../../articlePages/poetPage/types/componentTypes';

export type PoetBioSectionOneDetails = {
    [key in Langs]: {
        year: string;
        desc: string;
        imgDesc: string;
    };
};

export type PoetBioSectionOne = PoetBioSectionOneDetails & {
    img: string;
};

export type PoetBioSectionOneProps = {
    poet: PoetBioSectionOne;
};

export type PoetBioSectionTwoDetails = {
    year: string;
    img: string;
    desc: {
        [key: string]: string;
    };
};

export type PoetBioSectionTwo = {
    [key: string]: PoetBioSectionTwoDetails[];
};

export type PoetBioSectionTwoProps = {
    poet: PoetBio;
};
