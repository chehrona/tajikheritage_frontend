import { BodyObj } from './components/common/descWrapper/types/componentTypes';
import { SlideImage } from './components/common/slideshow/types/componentTypes';

export type Langs = 'us' | 'ru' | 'tj';

export type ErrorResponse = {
    status: number;
    data: {
        message: {
            [key in Langs]: string;
        };
    };
};

export type ErrorTypes = Error & {
    response?: ErrorResponse;
};

export type DescDetails = {
    subtitle: string;
    body: BodyObj;
    slides?: SlideImage[];
};

export type DescObj = {
    [key in Langs]: DescDetails[];
};
