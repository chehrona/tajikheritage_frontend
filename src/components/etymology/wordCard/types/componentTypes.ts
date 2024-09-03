import { Langs } from '../../../../appTypes';
import { BodyObj } from '../../../common/descWrapper/types/componentTypes';

export type DescDetails = {
    subtitle: string;
    body: BodyObj;
};

export type WordDescTypes = {
    desc: {
        [key in Langs]: DescDetails[];
    };
};

export type WordCardProps = {
    i: number;
    data: {
        id: string;
        disabled?: boolean;
        title: {
            [key in Langs]: string;
        };
        desc: {
            [key in Langs]: DescDetails[];
        };
    };
};
