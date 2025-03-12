import { PoetData } from '../../../../articlePages/language/poetPage/types/componentTypes';

export type PoetIntroProps = {
    poet: PoetData;
    scrollToView: (e: React.MouseEvent<HTMLSpanElement>) => void;
};
