import React, { useCallback, useEffect, useState } from 'react';

// Material UI
import { ArrowForwardIos } from '@mui/icons-material';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { SlideshowProps } from './types/componentTypes';
import { Slide } from '../../../appTypes';

// Styled components
import {
    Arrow,
    ImgInfo,
    ImageContainer,
    ImageWrapper,
    ButtonWrapper,
    SlideContainer,
    StyledButton,
    PlaceIndicator,
    Circle,
} from './slideshowStyles';

const Slideshow: React.FC<SlideshowProps> = ({
    slides,
    width,
    height,
    topLeftRad,
}) => {
    const { lang } = useGlobalData();
    const [translate, setTranslate] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [infoArr, setInfoArr] = useState<Slide[]>([...slides]);

    useEffect(() => {
        setInfoArr([...slides]);
    }, [lang]);

    const movePrev = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
            setTranslate((prevState) => prevState + width);
        }
    }, [infoArr]);

    const moveNext = useCallback(() => {
        if (currentIndex < infoArr?.length - 1) {
            setCurrentIndex((prevState) => prevState + 1);
            setTranslate((prevState) => prevState - width);
        }
    }, [infoArr]);

    return (
        <SlideContainer>
            {slides.length > 1 && (
                <PlaceIndicator>
                    {slides?.map((slide, i) => {
                        return (
                            <Circle
                                key={slide.id}
                                $selected={i === currentIndex}
                            />
                        );
                    })}
                </PlaceIndicator>
            )}
            <ImageContainer>
                {infoArr?.map((entry) => {
                    const imgSrc = entry?.img
                        ? `${process.env.REACT_APP_BASE_URL}${entry.img}`
                        : `${process.env.PUBLIC_URL}/loader.png`;

                    const overlaySrc = entry?.overlay
                        ? `${process.env.REACT_APP_BASE_URL}${entry.overlay}`
                        : '';

                    return (
                        <ImageWrapper
                            key={`${entry?.img}.2`}
                            $width={width}
                            $height={height}
                            $translate={translate}
                            $topLeftRad={topLeftRad}
                            $src={imgSrc}
                            $overlay={overlaySrc}
                        >
                            {entry?.info && (
                                <ImgInfo
                                    dangerouslySetInnerHTML={{
                                        __html: entry?.info,
                                    }}
                                />
                            )}
                        </ImageWrapper>
                    );
                })}
            </ImageContainer>
            <ButtonWrapper>
                <StyledButton
                    $left={true}
                    onClick={movePrev}
                    disabled={currentIndex === 0}
                >
                    <Arrow>
                        <ArrowForwardIos style={{ marginLeft: '1px' }} />
                    </Arrow>
                </StyledButton>
                <StyledButton
                    $left={false}
                    onClick={moveNext}
                    disabled={currentIndex === infoArr?.length - 1}
                >
                    <Arrow>
                        <ArrowForwardIos />
                    </Arrow>
                </StyledButton>
            </ButtonWrapper>
        </SlideContainer>
    );
};

export default Slideshow;
