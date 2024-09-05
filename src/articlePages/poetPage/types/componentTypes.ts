import { Langs } from '../../../appTypes';
import { Source } from '../../../components/common/sources/types/componentTypes';
import { BodyObj } from '../../../components/common/descWrapper/types/componentTypes';
import {
    PoetBioSectionOne,
    PoetBioSectionTwo,
} from '../../../components/poet/poetBio/types/componentTypes';
import { PoetCareerTypes } from '../../../components/poet/poetCareer/types/componentTypes';
import { PoetWorksTypes } from '../../../components/poet/poetWorks/types/componentTypes';
import { PoetAwardType } from '../../../components/poet/poetAwards/types/componentTypes';
import { PoetMovieType } from '../../../components/poet/poetMovies/types/componentTypes';

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
        [key in Langs]: PoetMovieType[];
    };
    awards: {
        [key in Langs]: PoetAwardType[];
    };
    career: PoetCareerTypes;
    references: {
        [key in Langs]: Source[];
    };
};
