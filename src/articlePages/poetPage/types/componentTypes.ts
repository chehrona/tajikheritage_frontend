import { Langs } from '../../../appTypes';
import { Source } from '../../../components/common/sources/types/componentTypes';
import { BodyObj } from '../../../components/common/descWrapper/types/componentTypes';
import {
    PoetBioSectionOne,
    PoetBioSectionTwo,
} from '../../../components/poet/poetBio/types/componentTypes';
import { PoetCareerTypes } from '../../../components/poet/poetCareer/types/componentTypes';
import { PoetWorksTypes } from '../../../components/poet/poetWorks/types/componentTypes';
import { PoetAwardTypes } from '../../../components/poet/poetAwards/types/componentTypes';

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
        [key in Langs]: PoetWorksTypes[];
    };
    movies: {
        [key in Langs]: PoetMovie[];
    };
    awards: {
        [key in Langs]: PoetAwardTypes[];
    };
    career: PoetCareerTypes;
    references: {
        [key in Langs]: Source[];
    };
};
