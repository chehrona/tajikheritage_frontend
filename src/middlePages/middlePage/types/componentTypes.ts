import { PoetCardType } from '../../../components/poet/poetCard/types/componentTypes';
import { Langs } from '../../../appTypes';

export type CardType = PoetCardType & {
    years?: string[];
    name?: { [key in Langs]: string };
    cardImg: { [key in Langs]: string };
    desc?: { [key in Langs]: string };
};
