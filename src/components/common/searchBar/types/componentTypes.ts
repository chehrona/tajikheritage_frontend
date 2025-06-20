import { CardType } from '../../../../middlePages/middlePage/types/componentTypes';

export type SearchBarProps = {
    page: string;
    setItems: React.Dispatch<React.SetStateAction<any>>;
    externalValue?: string;
};
