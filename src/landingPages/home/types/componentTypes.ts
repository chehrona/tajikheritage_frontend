import { Langs } from '../../../appTypes';

export type TitleType = {
    [key in Langs]: string;
};

type LanguageDetails = {
    text: string;
    font: number;
    margin: {
        d: number;
        m: number;
        t: number;
    };
};

export type OuterBall = {
    [key in string]: {
        top?: { d: string; t: string };
        right: { d: string; t: string };
        bottom?: { d: string; t: string };
    };
};

export type InnerBall = {
    [key in string]: {
        top?: { d: string; t: string };
        right: { d: string; t: string };
        bottom?: { d: string; t: string };
        img: string;
    };
};

type StepDetails = {
    num: string;
    title: {
        [key in Langs]: LanguageDetails;
    };
    desc: {
        link: string;
        text: {
            [key in Langs]: string;
        };
    };
    outer: OuterBall;
    inner: InnerBall;
};

export type HomeStepperType = StepDetails[];
