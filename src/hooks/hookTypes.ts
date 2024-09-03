import { Langs } from '../appTypes';

// useGlobalData
export type TitleProps = {
    [key in Langs]: string[][];
};

export type ContextTypes = {
    title: TitleProps;
    setTitle: React.Dispatch<React.SetStateAction<TitleProps>>;
    lang: Langs;
    setLang: React.Dispatch<React.SetStateAction<Langs>>;
    isPrint: boolean;
    setIsPrint: React.Dispatch<React.SetStateAction<boolean>>;
    showAdmin: boolean;
    setShowAdmin: React.Dispatch<React.SetStateAction<boolean>>;
};

// useHeader
export type Section = {
    link: string;
    title: {
        [key in Langs]: string[][];
    };
};

export type Entry = {
    sections: Section[];
};
