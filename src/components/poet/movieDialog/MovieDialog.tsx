import React, { useState, useRef, useCallback } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useMediaQuery } from 'react-responsive';

// Components
import Dialog from '../../common/dialog/Dialog';
import { ZoomTransition } from '../../common/transitions/Transitions';

// Types
import { MovieDialogProps } from './types/componentTypes';

// Styled components
import {
    Desc,
    StyledIconButton,
    InfoContainer,
    StyledContent,
    InfoTitle,
    Director,
    MovieImg,
    InnerBox,
    StudioName,
    ReleaseInfo,
    InfoWrapper,
    InfoBox,
    StyledPlayIcon,
    Line,
    Direction,
    DirBox,
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
            backdrop={'rgba(15 10 0 / 30%)'}
            background={'var(--primary-black-color)'}
            height={isMobile ? '100%' : '80%'}
            handleClose={handleClose}
        >
            <StyledContent>
                <ZoomTransition in={showVideo}>
                    {showVideo ? (
                        <InfoContainer>
                            <StyledFrame
                                src={`https://www.youtube-nocookie.com/embed/${movieInfo?.link}?autoplay=1&rel=0&modestbranding=1`}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                ref={iframeRef}
                            />
                        </InfoContainer>
                    ) : (
                        <InfoContainer>
                            <InnerBox $expand={fullSize} $width={false}>
                                <StyledArrowButton onClick={handleExpand}>
                                    {fullSize ? <SlideDown /> : <SlideUp />}
                                </StyledArrowButton>
                                <StudioName
                                    src={
                                        process.env.REACT_APP_BASE_URL +
                                        movieInfo?.studio
                                    }
                                ></StudioName>
                                <InfoWrapper>
                                    <InfoTitle>{movieInfo?.title}</InfoTitle>
                                    <ReleaseInfo>
                                        <InfoBox $year={true}>
                                            {movieInfo?.year}
                                        </InfoBox>
                                        <InfoBox>{movieInfo?.lang}</InfoBox>
                                        <InfoBox>{movieInfo?.genre}</InfoBox>
                                        <InfoBox>{movieInfo?.duration}</InfoBox>
                                    </ReleaseInfo>
                                    <Desc
                                        $expand={fullSize}
                                        dangerouslySetInnerHTML={{
                                            __html: movieInfo?.desc,
                                        }}
                                    />
                                    <Director>
                                        {lang === 'us'
                                            ? 'Director'
                                            : lang === 'tj'
                                            ? 'Офаранда'
                                            : 'Режиссёр'}
                                    </Director>
                                    <div>{movieInfo?.director}</div>
                                </InfoWrapper>
                            </InnerBox>
                            <MovieImg
                                src={
                                    process.env.REACT_APP_BASE_URL +
                                    movieInfo?.img
                                }
                            />
                            <DirBox>
                                <StyledIconButton
                                    onClick={() => setShowVideo(true)}
                                >
                                    <StyledPlayIcon />
                                </StyledIconButton>
                                <Line />
                                <Direction>
                                    {lang === 'ru'
                                        ? 'Смотреть'
                                        : lang === 'tj'
                                        ? 'Тамошо'
                                        : 'Watch now'}
                                </Direction>
                            </DirBox>
                        </InfoContainer>
                    )}
                </ZoomTransition>
            </StyledContent>
        </Dialog>
    );
};

export default MovieDialog;
