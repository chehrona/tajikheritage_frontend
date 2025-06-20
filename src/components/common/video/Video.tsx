import React, { useState, useEffect, useCallback, useRef } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { VideoProps } from './types/componentTypes';

// Styled components
import { MainContainer, StyledFrame } from './videoStyles';
import { useMediaQuery } from 'react-responsive';
import {
    LineWrapper,
    Line,
    Circle,
} from '../articleSubtitle/articleSubtitleStyles';

const Video: React.FC<VideoProps> = ({ content }) => {
    const { lang } = useGlobalData();
    const [showVideo, setShowVideo] = useState<boolean>(false);
    const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [fullSize, setFullSize] = useState<boolean>(false);

    // const handleClose = useCallback(() => {
    //     setShowMovieInfo(false);
    //     setFullSize(false);
    //     setShowVideo(false);
    // }, [setShowMovieInfo]);

    const handleExpand = useCallback(() => {
        setFullSize((prevState) => !prevState);
    }, []);

    if (!content) {
        return null;
    }

    return (
        <MainContainer>
            <LineWrapper>
                <Line />
                <Circle />
            </LineWrapper>
            <StyledFrame
                src={`https://www.youtube-nocookie.com/embed/${content?.link}?autoplay=1&rel=0&modestbranding=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                ref={iframeRef}
            />
            <LineWrapper>
                <Circle />
                <Line />
            </LineWrapper>
        </MainContainer>
    );
};

export default Video;
