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
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

// useSetHeader
export type Section = {
    cardImg: {
        [key in Langs]: string;
    };
    cardTitle: { [key in Langs]: string };
    link: string;
};

export type HeaderDataType = {
    id: string;
    page: string;
    header: {
        [key in Langs]: string;
    };
    sections: Section[];
};

export type Entry = {
    sections: Section[];
};

// useToasts
export type ToastTypes = 'success' | 'error' | 'info';
