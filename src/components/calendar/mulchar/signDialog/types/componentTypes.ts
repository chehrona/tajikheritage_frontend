import { SignObj } from '../../../../../articlePages/mulcharPage/types/componentTypes';

export type SignDialogProps = {
    signInfo: SignObj;
    showSignInfo: boolean;
    setShowSignInfo: React.Dispatch<React.SetStateAction<boolean>>;
};
