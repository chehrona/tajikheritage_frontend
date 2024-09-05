export type TransitionState =
    | 'entering'
    | 'entered'
    | 'exiting'
    | 'exited'
    | 'unmounted';

export type transitionStylesProps = {
    [key in TransitionState]: {
        [key in string]: number | string;
    };
};
