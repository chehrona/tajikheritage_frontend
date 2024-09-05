import { Slide } from '../../../../appTypes';

export type SlideshowProps = {
    topLeftRad?: number;
    width: number;
    height?: number;
    slides: Slide[];
};

export type SlideImage = {
    id: string;
    img: string;
    info: string;
    overlay?: string;
};
