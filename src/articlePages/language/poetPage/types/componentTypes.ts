import { Langs } from '../../../../appTypes';
import { Source } from '../../../../components/common/sources/types/componentTypes';
import { PoetCareerTypes } from '../../../../components/poet/poetCareer/types/componentTypes';
import { PoetWorksTypes } from '../../../../components/poet/poetWorks/types/componentTypes';
import { PoetAwardType } from '../../../../components/poet/poetAwards/types/componentTypes';
import { PoetMovieType } from '../../../../components/poet/poetMovies/types/componentTypes';
import { PoetBioType } from '../../../../components/poet/poetBio/types/componentTypes';

export type SectionType = {
    [key in Langs]: string[];
};

export type PoetData = {
    id: string;
    name: {
        [key in Langs]: string;
    };
    years: string[];
    desc: {
        [key in Langs]: string[];
    };
    img: {
        card: string;
        main: string;
    };
    sections: SectionType;
    bio: PoetBioType;
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
