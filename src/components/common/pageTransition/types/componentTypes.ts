import { ReactNode } from 'react';

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

export type PageTransitionProps = {
    type?: string;
    inProp: boolean;
    children: ReactNode;
};
