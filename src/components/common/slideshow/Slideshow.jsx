import React, { useEffect, useState } from 'react';

// Material UI
import { ArrowForwardIos } from '@mui/icons-material';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

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

export default function Slideshow({ slides, width, height, topLeftRad }) {
    const { lang } = useGlobalData();
    const [translate, setTranslate] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [infoArr, setInfoArr] = useState([...slides]);

    useEffect(() => {
        setInfoArr([...slides]);
    }, [lang]);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
            setTranslate((prevState) => prevState + width);
        }
    };

    const moveNext = () => {
        if (currentIndex < infoArr?.length - 1) {
            setCurrentIndex((prevState) => prevState + 1);
            setTranslate((prevState) => prevState - width);
        }
    };

    return (
        <SlideContainer>
            {slides.length > 1 && (
                <PlaceIndicator>
                    {slides?.map((slide, i) => {
                        return (
                            <Circle
                                key={`${slide?.img}.1`}
                                selected={i === currentIndex}
                            />
                        );
                    })}
                </PlaceIndicator>
            )}
            <ImageContainer>
                {infoArr?.map((entry) => {
                    return (
                        <ImageWrapper
                            key={`${entry?.img}.2`}
                            width={width}
                            height={height}
                            translate={translate}
                            topLeftRad={topLeftRad}
                            src={process.env.REACT_APP_BASE_URL + entry?.img}
                            overlay={
                                process.env.REACT_APP_BASE_URL + entry?.overlay
                            }
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
                    left={1}
                    onClick={movePrev}
                    disabled={currentIndex === 0}
                >
                    <Arrow>
                        <ArrowForwardIos style={{ marginLeft: '1px' }} />
                    </Arrow>
                </StyledButton>
                <StyledButton
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
}
