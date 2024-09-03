import {
    InnerBall,
    OuterBall,
} from '../../../../landingPages/home/types/componentTypes';

export type BorderProps = OuterBall & {
    opacity: number;
};

export type HomeImageProps = Omit<InnerBall, 'img'> & {
    opacity: number;
};
