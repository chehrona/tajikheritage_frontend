import { PoetData } from '../../../../articlePages/poetPage/types/componentTypes';

export type PoetIntroProps = {
    poet: PoetData;
    scrollToView: (e: React.MouseEvent<HTMLDivElement>) => void;
};
