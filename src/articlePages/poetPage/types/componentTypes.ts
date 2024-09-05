import { Langs } from '../../../appTypes';
import { Source } from '../../../components/common/sources/types/componentTypes';
import { BodyObj } from '../../../components/common/descWrapper/types/componentTypes';
import {
    PoetBioSectionOne,
    PoetBioSectionTwo,
} from '../../../components/poet/poetBio/types/componentTypes';
import { PoetCareerTypes } from '../../../components/poet/poetCareer/types/componentTypes';

export type SectionType = {
    [key in Langs]: string[];
};

export type PoetBio = {
    backdrops: string[];
    one: PoetBioSectionOne;
    two: PoetBioSectionTwo;
    three: {
        [key in Langs]: BodyObj;
    };
};

export type PoetWork = {
    title: string;
    cover: string;
    msg?: string;
    email?: boolean;
    source?: string;
};

export type PoetAward = {
    title: string;
    img: string;
    desc: string;
    year: string;
};

export type PoetMovie = {
    title: string;
    studio: string;
    img: string;
    duration: string;
    genre: string;
    year: string;
    link: string;
    lang: string;
    desc: string;
    director: string;
};

export type PoetData = {
    id: string;
    name: {
        [key in Langs]: string[];
    };
    years: number[];
    desc: {
        [key in Langs]: string[];
    };
    img: {
        card: string;
        main: string;
    };
    sections: SectionType;
    bio: PoetBio;
    works: {
        [key in Langs]: PoetWork[];
    };
    movies: {
        [key in Langs]: PoetMovie[];
    };
    awards: {
        [key in Langs]: PoetAward[];
    };
    career: PoetCareerTypes;
    references: {
        [key in Langs]: Source[];
    };
};
