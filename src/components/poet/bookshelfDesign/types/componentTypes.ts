import { PoetWorksTypes } from '../../poetWorks/types/componentTypes';

export type BookshelfDesignProps = {
    shelfNum: number;
    work: PoetWorksTypes[];
    poet: any;
};

export type BookPopupProps = {
    book: PoetWorksTypes;
    setBookIndex: React.Dispatch<React.SetStateAction<number>>;
};
