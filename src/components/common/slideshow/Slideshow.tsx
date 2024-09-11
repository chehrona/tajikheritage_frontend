import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Components
import LeftButton from '../navButtons/LeftButton';
import RightButton from '../navButtons/RightButton';

// Types
import { SlideshowProps, SlideImage } from './types/componentTypes';

// Styled components
import {
    ImgInfo,
    ImageContainer,
    ImageWrapper,
    ButtonWrapper,
    SlideContainer,
    PlaceIndicator,
    Circle,
} from './slideshowStyles';

const Slideshow: React.FC<SlideshowProps> = ({
    slides = [],
    width,
    height,
    topLeftRad,
}) => {
    const { lang } = useGlobalData();
    const [translate, setTranslate] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [infoArr, setInfoArr] = useState<SlideImage[]>([]);

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

    console.log(currentIndex);

    return (
        <SlideContainer>
            {slides.length > 1 && (
                <PlaceIndicator>
                    {slides?.map((slide, i) => {
                        return (
                            <Circle
                                key={`${slide?.img}_1`}
                                $selected={i === currentIndex}
                            />
                        );
                    })}
                </PlaceIndicator>
            )}
            <ImageContainer>
                {infoArr.length > 0
                    ? infoArr?.map((entry) => {
                          const imgSrc = entry?.img
                              ? `${process.env.REACT_APP_BASE_URL}${entry.img}`
                              : `${process.env.PUBLIC_URL}/loader.png`;

                          const overlaySrc = entry?.overlay
                              ? `${process.env.REACT_APP_BASE_URL}${entry.overlay}`
                              : '';

                          return (
                              <ImageWrapper
                                  key={`${entry?.img}_2`}
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
                      })
                    : null}
            </ImageContainer>
            {infoArr?.length > 1 ? (
                <ButtonWrapper>
                    <LeftButton
                        disabled={currentIndex === 0}
                        movePrev={movePrev}
                    />
                    <RightButton
                        disabled={currentIndex === infoArr?.length - 1}
                        moveNext={moveNext}
                    />
                </ButtonWrapper>
            ) : null}
        </SlideContainer>
    );
};

export default Slideshow;
