export type SlideImage = {
    id: string;
    img: string;
    info: string;
    overlay?: string;
};

export type SlideshowProps = {
    topLeftRad?: number;
    width: number;
    height?: string;
    slides?: SlideImage[];
};
