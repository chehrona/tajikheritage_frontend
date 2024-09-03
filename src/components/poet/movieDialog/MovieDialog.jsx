import React, { useState, useRef } from 'react';

// Material UI
import { Slide } from '@mui/material';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useMediaQuery } from 'react-responsive';

// Components
import Dialog from '../../common/dialog/Dialog';

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

const ContentTransition = ({ children, ...props }) => (
    <Slide direction="left" {...props}>
        {children}
    </Slide>
);

export default function MovieDialog({
    movieInfo,
    setShowMovieInfo,
    showMovieInfo,
}) {
    const [showVideo, setShowVideo] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });
    const iframeRef = useRef(null);
    const { lang } = useGlobalData();
    const [fullSize, setFullSize] = useState(0);

    function handleClose() {
        setShowMovieInfo(false);
        setFullSize(false);
        setShowVideo(false);
    }

    function handleExpand() {
        setFullSize((prevState) => !prevState);
    }

    return (
        <Dialog
            width={'1350px'}
            border={'2rem'}
            open={showMovieInfo}
            backdrop={'rgba(15 10 0 / 30%)'}
            background={'#0F0A00'}
            height={isMobile ? '100%' : '80%'}
            handleClose={handleClose}
        >
            <StyledContent
                Transition={ContentTransition}
                TransitionProps={{
                    in: showVideo,
                    easing: { enter: 'linear', exit: 'linear' },
                }}
            >
                {showVideo ? (
                    <InfoContainer>
                        <StyledFrame
                            src={`https://www.youtube-nocookie.com/embed/${movieInfo?.link}?autoplay=1&rel=0&modestbranding=1`}
                            allow="autoplay; encrypted-media"
                            frameBorder="0"
                            fullWidth
                            allowFullScreen
                            ref={iframeRef}
                        />
                    </InfoContainer>
                ) : (
                    <InfoContainer expand={fullSize}>
                        <InnerBox expand={fullSize}>
                            <StyledArrowButton arrow={1} onClick={handleExpand}>
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
                                    <InfoBox year={1}>
                                        {movieInfo?.year}
                                    </InfoBox>
                                    <InfoBox>{movieInfo?.lang}</InfoBox>
                                    <InfoBox>{movieInfo?.genre}</InfoBox>
                                    <InfoBox>{movieInfo?.duration}</InfoBox>
                                </ReleaseInfo>
                                <Desc
                                    expand={fullSize}
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
                                process.env.REACT_APP_BASE_URL + movieInfo?.img
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
            </StyledContent>
        </Dialog>
    );
}
