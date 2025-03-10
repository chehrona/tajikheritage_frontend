import { SignObj } from '../../../../../articlePages/calendar/muljarPage/types/componentTypes';

export type PieChartProps = {
    signs: SignObj[];
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    setShowSignInfo: React.Dispatch<React.SetStateAction<boolean>>;
};
