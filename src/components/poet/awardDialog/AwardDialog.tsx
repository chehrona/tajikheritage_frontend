import React, { useCallback } from 'react';

// Components
import Dialog from '../../common/dialog/Dialog';

// Types
import { AwardDialogProps } from './types/componentTypes';

// Styled components
import {
    Desc,
    InfoContainer,
    StyledContent,
    InfoTitle,
    BodyContainer,
    AwardImg,
    Wrapper,
} from './awardDialogStyles';

const AwardDialog: React.FC<AwardDialogProps> = ({
    awardInfo,
    setShowAwardInfo,
    showAwardInfo,
}) => {
    const handleClose = useCallback(() => {
        setShowAwardInfo(false);
    }, [setShowAwardInfo]);

    if (!awardInfo) {
        handleClose();
        return null;
    }

    return (
        <Dialog
            width={'850px'}
            open={showAwardInfo}
            handleClose={handleClose}
            backdrop={'rgba(252 246 233 / 30%)'}
            background={'var(--primary-black-color)'}
        >
            <StyledContent>
                <InfoContainer>
                    <InfoTitle>{awardInfo?.title}</InfoTitle>
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
                </InfoContainer>
            </StyledContent>
        </Dialog>
    );
};

export default AwardDialog;
