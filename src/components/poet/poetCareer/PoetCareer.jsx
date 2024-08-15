import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../../App';

import { ArrowForwardIos } from '@mui/icons-material';

import InfoBox from '../../common/infoBox/InfoBox';

import {
    Year,
    Line,
    Desc,
    Step,
    Image,
    Footer,
    DescWrapper,
    ImageWrapper,
    InfoContainer,
    StyledIconButton,
    InfoInnerContainer,
    MobileFooter,
    MainContainer,
    YearSlider,
    UnitWrapper,
    YearWrapper,
    InfoWrapper,
} from './poetCareerStyles';

export default function PoetCareer({ points }) {
    const { lang } = useGlobalData();
    const parentRef = useRef(null);
    const childRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [currentSize, setCurrentSize] = useState(0);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    let gap = isMobile ? 30 : 50;

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;
        const childWidth = childRef?.current?.getBoundingClientRect().width;

        const difference = parentWidth / 2 - (childWidth / 2 + gap);
        const translationValue = childWidth - difference;

        setTranslate(-translationValue);
        setCurrentSize(childWidth);
        setCurrentIndex(0);
    }, [lang]);

    const handleNext = () => {
        if (currentIndex < points?.years?.length - 1) {
            setCurrentIndex((prevState) => prevState + 1);
            setTranslate((prevState) => prevState - currentSize - gap);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
            setTranslate((prevState) => prevState + currentSize + gap);
        }
    };

    return (
        <MainContainer id="Career">
            <YearSlider>
                <UnitWrapper>
                    <Line />
                    {points?.years?.map((point, i) => {
                        return (
                            <YearWrapper
                                key={`${point}.point`}
                                size={i === currentIndex}
                            >
                                <Year show={i !== currentIndex}>{point}</Year>
                            </YearWrapper>
                        );
                    })}
                </UnitWrapper>
                <InfoContainer ref={parentRef}>
                    <InfoInnerContainer translate={translate}>
                        {points[lang].map((entry, i) => {
                            return (
                                <InfoWrapper key={'a' + i} ref={childRef}>
                                    <ImageWrapper>
                                        <Image
                                            src={
                                                process.env.REACT_APP_BASE_URL +
                                                entry.slides[0]?.img
                                            }
                                            width={currentSize * 0.36}
                                        >
                                            {entry.slides[0]?.info && (
                                                <InfoBox
                                                    text={entry.slides[0]?.info}
                                                />
                                            )}
                                        </Image>
                                    </ImageWrapper>
                                    <DescWrapper>
                                        <Desc
                                            dangerouslySetInnerHTML={{
                                                __html: entry?.text,
                                            }}
                                        />
                                        <Footer>
                                            <StyledIconButton
                                                left={1}
                                                onClick={handlePrev}
                                                disabled={i === 1}
                                            >
                                                <ArrowForwardIos />
                                            </StyledIconButton>
                                            <Step>{`${currentIndex + 1}/${
                                                points?.years.length
                                            }`}</Step>
                                            <StyledIconButton
                                                onClick={handleNext}
                                                disabled={
                                                    i === points?.years?.length
                                                }
                                            >
                                                <ArrowForwardIos />
                                            </StyledIconButton>
                                        </Footer>
                                    </DescWrapper>
                                </InfoWrapper>
                            );
                        })}
                    </InfoInnerContainer>
                    <MobileFooter>
                        <StyledIconButton
                            left={1}
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                        >
                            <ArrowForwardIos />
                        </StyledIconButton>
                        <Step>{`${currentIndex + 1}/${
                            points?.years.length
                        }`}</Step>
                        <StyledIconButton
                            onClick={handleNext}
                            disabled={
                                currentIndex === points?.years?.length - 1
                            }
                        >
                            <ArrowForwardIos />
                        </StyledIconButton>
                    </MobileFooter>
                </InfoContainer>
            </YearSlider>
        </MainContainer>
    );
}
