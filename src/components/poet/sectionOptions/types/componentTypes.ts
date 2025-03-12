import { SectionType } from '../../../../articlePages/language/poetPage/types/componentTypes';

export type SectionOptionsProps = {
    sections: SectionType;
    scrollToView: (e: React.MouseEvent<HTMLSpanElement>) => void;
};
