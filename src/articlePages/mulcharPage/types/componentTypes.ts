import { Source } from '../../../components/common/sources/types/componentTypes';
import { Langs } from '../../../appTypes';
import { BodyObj } from '../../../components/common/descWrapper/types/componentTypes';
import { SlideImage } from '../../../components/common/slideshow/types/componentTypes';
import { DescDetails as DescObj } from '../../../appTypes';

export type SignObj = {
    id: string;
    img: {
        src: string;
        angle: number;
    };
    info: {
        title: string;
        desc: DescObj[];
    };
};

type DescDetails = {
    subtitle: string;
    body: BodyObj;
    full: {
        center: string;
        cloud: string;
    };
    signs: SignObj[];
    slides?: SlideImage[];
};

export type ArticleData = {
    name: {
        [key in Langs]: string;
    };
    desc: {
        [key in Langs]: DescDetails[];
    };
    references: {
        [key in Langs]: Source[];
    };
};
