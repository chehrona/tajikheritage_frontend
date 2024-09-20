import { Langs } from '../../../appTypes';
import { SectionDetails } from '../../../components/common/sectionCard/types/componentTypes';

export type SectionCardType = {
    id: string;
    page: string;
    header: {
        [key in Langs]: string;
    };
    sections: SectionDetails[];
};
