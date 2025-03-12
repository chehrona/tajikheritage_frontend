import React, { useCallback } from 'react';

// Components
import Dialog from '../../common/dialog/Dialog';

// Types
import { AwardDialogProps } from './types/componentTypes';
import DialogContentWrapper from '../../common/dialogContentWrapper/DialogContentWrapper';

// Styled components
import { Desc, BodyContainer, AwardImg, Wrapper } from './awardDialogStyles';
import {
    DialogBodyContainer,
    DialogTitle,
} from '../bookDialog/bookDialogStyles';

const AwardDialog: React.FC<AwardDialogProps> = ({
    awardInfo,
    showAwardInfo,
    setShowAwardInfo,
}) => {
    const handleClose = useCallback(() => {
        setShowAwardInfo(false);
    }, [setShowAwardInfo]);

    if (!awardInfo) {
        return null;
    }

    return (
        <Dialog
            width={'850px'}
            open={showAwardInfo}
            handleClose={handleClose}
            background={'dark'}
        >
            <DialogContentWrapper>
                <DialogBodyContainer>
                    <DialogTitle $textColor={'light'}>
                        {awardInfo?.title}
                    </DialogTitle>
                    <BodyContainer>
                        <Wrapper $first={true}>
                            <AwardImg
                                src={
                                    process.env.REACT_APP_BASE_URL +
                                    awardInfo?.img
                                }
                            />
                        </Wrapper>
                        <Wrapper $first={false}>
                            <Desc
                                dangerouslySetInnerHTML={{
                                    __html: awardInfo?.desc,
                                }}
                            />
                        </Wrapper>
                    </BodyContainer>
                </DialogBodyContainer>
            </DialogContentWrapper>
        </Dialog>
    );
};

export default AwardDialog;
