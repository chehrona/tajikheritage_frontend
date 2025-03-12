import { CardType } from '../../../../middlePages/middlePage/types/componentTypes';

export type LetterStackProps = {
    allItems: CardType[];
    setItems: React.Dispatch<React.SetStateAction<CardType[]>>;
    isDropdownOpen: boolean;
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
