import { Langs } from '../../../../appTypes';

export type SectionDetails = {
    disabled: boolean;
    link: string;
    cardImg: {
        [key in Langs]: string;
    };
    cardTitle: {
        [key in Langs]: string;
    };
};

export type SectionCardProps = {
    section: SectionDetails;
};
