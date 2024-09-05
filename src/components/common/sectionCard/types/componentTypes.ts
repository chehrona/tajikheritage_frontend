import { Langs } from '../../../../appTypes';

export type SectionCardProps = {
    section: {
        img: {
            [key in Langs]: string;
        };
        title: {
            [key in Langs]: string;
        };
    };
    link: string;
    i: number;
};
