import React, { useCallback } from 'react';

// Slice images
import staticData from '../../../../miscellaneous/history/calendarPage.json';

// Hooks
import { useGlobalData } from '../../../../hooks/useGlobalData';
import { useMediaQuery } from 'react-responsive';

// Components
import Dialog from '../../../common/dialog/Dialog';
import DialogContentWrapper from '../../../common/dialogContentWrapper/DialogContentWrapper';
import { DescWrapper } from '../../../common/descWrapper/DescWrapper';

// Types
import { SignDialogProps } from './types/componentTypes';

// Styled components
import {
    MainContainer,
    ImageWrapper,
    SignImage,
    LeftContainer,
    SignTitle,
    RightContainer,
    DescContainer,
    Subtitle,
    TextWrapper,
} from './signDialogStyles';

const SignDialog: React.FC<SignDialogProps> = ({
    signInfo,
    showSignInfo,
    setShowSignInfo,
    calendar,
    index,
}) => {
    const { lang } = useGlobalData();
    const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });

    const handleClose = useCallback(() => {
        setShowSignInfo(false);
    }, [setShowSignInfo]);

    if (!signInfo) {
        return null;
    }

    return (
        <Dialog
            width={'1050px'}
            open={showSignInfo}
            background={'light'}
            height={isMobile ? '100%' : '90%'}
            handleClose={handleClose}
        >
            <DialogContentWrapper>
                {signInfo?.info.desc.map((entry, i) => {
                    return (
                        <MainContainer key={`sign_dialog_${i}`}>
                            <LeftContainer>
                                <ImageWrapper>
                                    <SignTitle>
                                        {signInfo?.info.title}
                                    </SignTitle>
                                    <SignImage
                                        src={
                                            process.env.REACT_APP_BASE_URL +
                                            staticData[calendar][index].img.src
                                        }
                                    />
                                </ImageWrapper>
                            </LeftContainer>
                            <RightContainer>
                                <DescContainer>
                                    <Subtitle>{entry.subtitle}</Subtitle>
                                    <DescWrapper
                                        data={entry.body}
                                        TextWrapper={TextWrapper}
                                    />
                                </DescContainer>
                            </RightContainer>
                        </MainContainer>
                    );
                })}
            </DialogContentWrapper>
        </Dialog>
    );
};

export default SignDialog;
