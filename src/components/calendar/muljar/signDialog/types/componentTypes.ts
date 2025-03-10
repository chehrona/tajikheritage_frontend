import { SignObj } from '../../../../../articlePages/calendar/muljarPage/types/componentTypes';

export type SignDialogProps = {
    index: number;
    calendar: 'MULJAR_CHART_IMGS' | 'ZODIAC_CHART_IMGS';
    signInfo: SignObj;
    showSignInfo: boolean;
    setShowSignInfo: React.Dispatch<React.SetStateAction<boolean>>;
};
