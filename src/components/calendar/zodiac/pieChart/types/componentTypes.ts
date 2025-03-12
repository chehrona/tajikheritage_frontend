import { SignObj } from '../../../../../articlePages/calendar/mulcharPage/types/componentTypes';

export type PieChartProps = {
    signs: SignObj[];
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    setShowSignInfo: React.Dispatch<React.SetStateAction<boolean>>;
};
