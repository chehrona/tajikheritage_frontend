import React, { useState, useRef, ReactElement, useCallback } from 'react';

// Material UI
import { Zoom } from '@mui/material';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useMediaQuery } from 'react-responsive';

// Components
import Dialog from '../../common/dialog/Dialog';

// Types
import { MovieDialogProps } from './types/componentTypes';
import { TransitionProps } from '@mui/material/transitions';

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

// Zoom in of the dialog
const Transition = React.forwardRef<
    unknown,
    TransitionProps & {
        children: ReactElement;
    }
>((props, ref) => {
    const { children, ...otherProps } = props;

    return (
        <Zoom
            easing={{ enter: 'linear', exit: 'linear' }}
            ref={ref}
            {...otherProps}
        >
            {children}
        </Zoom>
    );
});

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
        handleClose();
        return null;
    }

    return (
        <Dialog
            width={'1350px'}
            border={'2rem'}
            open={showMovieInfo}
            backdrop={'rgba(15 10 0 / 30%)'}
            background={'var(--primary-black-color)'}
            height={isMobile ? '100%' : '80%'}
            handleClose={handleClose}
        >
            <StyledContent>
                <Transition in={showVideo}>
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
                </Transition>
            </StyledContent>
        </Dialog>
    );
};

export default MovieDialog;
