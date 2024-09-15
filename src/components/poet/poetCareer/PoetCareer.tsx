import React, { useCallback, useEffect, useRef, useState } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../../hooks/useGlobalData';

// Material UI
import { ArrowForwardIos } from '@mui/icons-material';

// Components
import InfoBox from '../../common/infoBox/InfoBox';
import { DescWrapper } from '../../common/descWrapper/DescWrapper';

// Types
import { PoetCareerTypes } from './types/componentTypes';

// Styled components
import {
    Year,
    Line,
    CareerDesc,
    Step,
    Image,
    Footer,
    DescContainer,
    ImageWrapper,
    InfoContainer,
    StyledIconButton,
    InfoInnerContainer,
    MobileFooter,
    MainContainer,
    SlideUnit,
    YearSliderWrapper,
    YearWrapper,
    InfoWrapper,
} from './poetCareerStyles';

const PoetCareer: React.FC<{ points: PoetCareerTypes }> = ({ points }) => {
    const { lang } = useGlobalData();
    const parentRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [translate, setTranslate] = useState<number>(0);
    const [currentSize, setCurrentSize] = useState<number>(0);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    let gap = isMobile ? 32 : 50;

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;
        const childWidth = childRef?.current?.getBoundingClientRect().width;

        if (!childWidth || !parentWidth) {
            return;
        }

        const difference = parentWidth / 2 - (childWidth / 2 + gap);
        const translationValue = childWidth - difference;

        setTranslate(-translationValue);
        setCurrentSize(childWidth);
        setCurrentIndex(0);
    }, [lang]);

    const handleNext = useCallback(() => {
        if (currentIndex < points?.years?.length - 1) {
            setCurrentIndex((prevState) => prevState + 1);
            setTranslate((prevState) => prevState - currentSize - gap);
        }
    }, [currentIndex, points, currentSize, gap]);

    const handlePrev = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
            setTranslate((prevState) => prevState + currentSize + gap);
        }
    }, [currentIndex, currentSize, gap]);

    return (
        <MainContainer id="Career">
            <SlideUnit>
                <YearSliderWrapper>
                    <Line />
                    {points?.years?.map((year, i) => {
                        return (
                            <YearWrapper
                                key={`${year}.year`}
                                $size={i === currentIndex}
                            >
                                <Year $show={i !== currentIndex}>{year}</Year>
                            </YearWrapper>
                        );
                    })}
                </YearSliderWrapper>
                <InfoContainer ref={parentRef}>
                    <InfoInnerContainer $translate={translate}>
                        {points.desc[lang].map((entry, i) => {
                            return (
                                <InfoWrapper key={'a' + i} ref={childRef}>
                                    {entry.slides ? (
                                        <ImageWrapper>
                                            <Image
                                                $src={
                                                    process.env
                                                        .REACT_APP_BASE_URL +
                                                    entry.slides[0]?.img
                                                }
                                                $width={currentSize * 0.36}
                                            >
                                                {entry.slides[0]?.info && (
                                                    <InfoBox
                                                        text={
                                                            entry.slides[0]
                                                                ?.info
                                                        }
                                                    />
                                                )}
                                            </Image>
                                        </ImageWrapper>
                                    ) : null}
                                    <DescContainer>
                                        <DescWrapper
                                            data={entry.body}
                                            TextWrapper={CareerDesc}
                                        />
                                        <Footer>
                                            <StyledIconButton
                                                $left={true}
                                                onClick={handlePrev}
                                                disabled={i === 1}
                                            >
                                                <ArrowForwardIos />
                                            </StyledIconButton>
                                            <Step>{`${currentIndex + 1}/${
                                                points?.years.length
                                            }`}</Step>
                                            <StyledIconButton
                                                $left={false}
                                                onClick={handleNext}
                                                disabled={
                                                    i === points?.years?.length
                                                }
                                            >
                                                <ArrowForwardIos />
                                            </StyledIconButton>
                                        </Footer>
                                    </DescContainer>
                                </InfoWrapper>
                            );
                        })}
                    </InfoInnerContainer>
                    <MobileFooter>
                        <StyledIconButton
                            $left={true}
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                        >
                            <ArrowForwardIos />
                        </StyledIconButton>
                        <Step>{`${currentIndex + 1}/${
                            points?.years.length
                        }`}</Step>
                        <StyledIconButton
                            $left={false}
                            onClick={handleNext}
                            disabled={
                                currentIndex === points?.years?.length - 1
                            }
                        >
                            <ArrowForwardIos />
                        </StyledIconButton>
                    </MobileFooter>
                </InfoContainer>
            </SlideUnit>
        </MainContainer>
    );
};

export default PoetCareer;
