import React, { useState, useRef, useCallback } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useMediaQuery } from 'react-responsive';

// Components
import Dialog from '../../common/dialog/Dialog';
import DialogContentWrapper from '../../common/dialogContentWrapper/DialogContentWrapper';

// Types
import { MovieDialogProps } from './types/componentTypes';

// Styled components
import {
    Desc,
    StyledIconButton,
    MainContainer,
    MovieTitle,
    DirectorInfoWrapper,
    DirectorName,
    MovieImg,
    OverlayContainer,
    StudioNameWrapper,
    StudioImage,
    ReleaseInfoWrapper,
    InfoWrapper,
    ReleaseInfo,
    StyledPlayIcon,
    Line,
    DirectionText,
    PlayInstructionWrapper,
    StyledFrame,
    SlideUp,
    SlideDown,
    StyledArrowButton,
} from './movieDialogStyles';

const MovieDialog: React.FC<MovieDialogProps> = ({
    movieInfo,
    setShowMovieInfo,
    showMovieInfo,
}) => {
    const [showVideo, setShowVideo] = useState<boolean>(false);
    const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { lang } = useGlobalData();
    const [fullSize, setFullSize] = useState<boolean>(false);

    const handleClose = useCallback(() => {
        setShowMovieInfo(false);
        setFullSize(false);
        setShowVideo(false);
    }, [setShowMovieInfo]);

    const handleExpand = useCallback(() => {
        setFullSize((prevState) => !prevState);
    }, []);

    if (!movieInfo) {
        return null;
    }

    return (
        <Dialog
            width={'1350px'}
            open={showMovieInfo}
            background={'light'}
            height={isMobile ? '100%' : '80%'}
            handleClose={handleClose}
        >
            <DialogContentWrapper>
                <MainContainer>
                    {showVideo ? (
                        <StyledFrame
                            src={`https://www.youtube-nocookie.com/embed/${movieInfo?.link}?autoplay=1&rel=0&modestbranding=1`}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            ref={iframeRef}
                        />
                    ) : (
                        <>
                            <OverlayContainer $expand={fullSize} $width={false}>
                                <StyledArrowButton onClick={handleExpand}>
                                    {fullSize ? <SlideDown /> : <SlideUp />}
                                </StyledArrowButton>
                                <StudioNameWrapper>
                                    <StudioImage
                                        src={
                                            process.env.REACT_APP_BASE_URL +
                                            movieInfo?.studio
                                        }
                                    />
                                </StudioNameWrapper>
                                <InfoWrapper>
                                    <MovieTitle>{movieInfo?.title}</MovieTitle>
                                    <ReleaseInfoWrapper>
                                        {Object.keys(movieInfo.releaseInfo).map(
                                            (key) => {
                                                return (
                                                    <ReleaseInfo>
                                                        {
                                                            movieInfo
                                                                ?.releaseInfo[
                                                                key
                                                            ]
                                                        }
                                                    </ReleaseInfo>
                                                );
                                            },
                                        )}
                                    </ReleaseInfoWrapper>
                                    <Desc
                                        $expand={fullSize}
                                        dangerouslySetInnerHTML={{
                                            __html: movieInfo?.desc,
                                        }}
                                    />
                                    <DirectorInfoWrapper>
                                        {lang === 'us'
                                            ? 'Director'
                                            : lang === 'tj'
                                            ? 'Офаранда'
                                            : 'Режиссёр'}
                                        <DirectorName>
                                            {movieInfo?.director}
                                        </DirectorName>
                                    </DirectorInfoWrapper>
                                </InfoWrapper>
                            </OverlayContainer>
                            <MovieImg
                                src={
                                    process.env.REACT_APP_BASE_URL +
                                    movieInfo?.img
                                }
                            />
                            <PlayInstructionWrapper>
                                <StyledIconButton
                                    onClick={() => setShowVideo(true)}
                                >
                                    <StyledPlayIcon />
                                </StyledIconButton>
                                <Line />
                                <DirectionText>
                                    {lang === 'ru'
                                        ? 'Смотреть'
                                        : lang === 'tj'
                                        ? 'Тамошо'
                                        : 'Watch now'}
                                </DirectionText>
                            </PlayInstructionWrapper>
                        </>
                    )}
                </MainContainer>
            </DialogContentWrapper>
        </Dialog>
    );
};

export default MovieDialog;
