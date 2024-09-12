import { Langs } from '../../../../appTypes';
import { BodyObj } from '../../../common/descWrapper/types/componentTypes';
import { SlideImage } from '../../../common/slideshow/types/componentTypes';
import { PoetBioSectionOne } from '../firstSection/types/componentTypes';
import { PoetBioSectionTwo } from '../secondSection/types/componentTypes';
import { PoetBioSectionThree } from '../thirdSection/types/componentTypes';
import { PoetBioSectionFour } from '../forthSection/types/componentTypes';
import { PoetBioSectionFive } from '../fifthSection/types/componentTypes';

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
        [key in Langs]: PoetBioSectionFive;
    };
    six: {
        [key in Langs]: { desc: BodyObj; author: string; slides: SlideImage[] };
    };
};
