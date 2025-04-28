import { CardType } from '../../../../middlePages/middlePage/types/componentTypes';

export type LetterStackProps = {
    page: string;
    setItems: React.Dispatch<React.SetStateAction<CardType[]>>;
    setValue: React.Dispatch<React.SetStateAction<string>>;
};
