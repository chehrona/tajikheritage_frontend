import { PoetCardType } from '../../../components/poet/poetCard/types/componentTypes';
import { Langs } from '../../../appTypes';

export type Item = PoetCardType & {
    years?: string[];
    name?: { [key in Langs]: string };
    img: { [key in Langs]: string };
    desc?: { [key in Langs]: string };
};
