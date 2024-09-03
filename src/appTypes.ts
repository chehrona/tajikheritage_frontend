import { BodyObj } from './components/common/descWrapper/types/componentTypes';

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
    slides: {
        info?: string;
        img?: string;
    };
};

export type DescObj = {
    [key in Langs]: DescDetails[];
};
