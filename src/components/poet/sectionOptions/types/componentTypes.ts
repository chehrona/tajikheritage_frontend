import { SectionType } from '../../../../articlePages/poetPage/types/componentTypes';

export type SectionOptionsProps = {
    sections: SectionType;
    scrollToView: (e: React.MouseEvent<HTMLSpanElement>) => void;
};
