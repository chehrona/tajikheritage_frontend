import { SignObj } from '../../../../../articlePages/calendar/mulcharPage/types/componentTypes';

export type SignDialogProps = {
    index: number;
    calendar: 'MULCHAR_CHART_IMGS' | 'ZODIAC_CHART_IMGS';
    signInfo: SignObj;
    showSignInfo: boolean;
    setShowSignInfo: React.Dispatch<React.SetStateAction<boolean>>;
};
