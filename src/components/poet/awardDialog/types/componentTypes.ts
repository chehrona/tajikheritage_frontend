import { PoetAwardType } from '../../poetAwards/types/componentTypes';

export type AwardDialogProps = {
    awardInfo?: PoetAwardType;
    setShowAwardInfo: React.Dispatch<React.SetStateAction<boolean>>;
    showAwardInfo: boolean;
};
