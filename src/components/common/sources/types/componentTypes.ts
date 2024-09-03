import { Langs } from '../../../../appTypes';

export type Source = {
    name: string;
    link: string;
};

export type SourcesProps = {
    data: Source[];
};

export type TitleHeaderProps = {
    SOURCES_HEADER: {
        [key in Langs]: string;
    };
};
