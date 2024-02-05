import React, { useEffect, useRef, useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import { useSetLang } from "../../../App";
import { useMediaQuery } from 'react-responsive';

import {
    Text,
    Year,
    Line,
    Desc,
    Step,
    Image,
    Footer,
    InfoBox,
    DescWrapper,
    ImageWrapper,
    InfoContainer,
    StyledCloseIcon,
    StyledExpandIcon,
    StyledIconButton,
    StyledCloseButton,
    InfoInnerContainer,
    MobileFooter,
    MainContainer,
    YearSlider,
    UnitWrapper,
    YearWrapper,
    InfoWrapper,
    StyledExpandButton,
} from "./poetCareerStyles";

export default function PoetCareer({ points }) {
    const { lang } = useSetLang();
    const [showInfo, setShowInfo] = useState(true);
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

        const difference = parentWidth/2 - (childWidth/2 + gap);
        const translationValue = childWidth - difference;

        setTranslate(-translationValue);
        setCurrentSize(childWidth);
        setCurrentIndex(0);
        setShowInfo(true);
    }, [lang]);

    const handleNext = () => {
        if (currentIndex < points?.years?.length - 1) {            
            setCurrentIndex(prevState => prevState + 1);
            setTranslate((prevState) => prevState - currentSize - gap);
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
            setTranslate((prevState) => prevState + currentSize + gap);
        }
    }

    return (
        <MainContainer id='Career'>
            <YearSlider>
                <UnitWrapper>
                    <Line />
                    {points?.years?.map((point, i) => {
                        return (
                            <YearWrapper key={i + 1} size={i === currentIndex}>
                                <Year show={i !== currentIndex}>{point}</Year>
                            </YearWrapper>   
                        );
                    })}
                </UnitWrapper>
                <InfoContainer ref={parentRef}>
                    <InfoInnerContainer translate={translate}>
                        {points[lang].map((entry, i) => {
                            return (
                                <InfoBox key={'a' + i} ref={childRef}>
                                    <ImageWrapper>
                                        <Image
                                            src={process.env.REACT_APP_BASE_URL + entry.slides[0]?.img}
                                            width={currentSize * 0.36}
                                            height={"26rem"}
                                        >
                                            {entry.slides[0]?.info && (
                                                showInfo ? (
                                                    <InfoWrapper>
                                                        <Text dangerouslySetInnerHTML={{__html: entry.slides[0]?.info}} />
                                                        <StyledCloseButton onClick={() => setShowInfo(false)}>
                                                            <StyledCloseIcon />
                                                        </StyledCloseButton>
                                                    </InfoWrapper>
                                                ) : (
                                                    <>
                                                        <StyledExpandButton onClick={() => setShowInfo(true)}>
                                                            <StyledExpandIcon />
                                                        </StyledExpandButton>
                                                    </>
                                                )
                                            )}
                                        </Image>
                                    </ImageWrapper>
                                    <DescWrapper>
                                        <Desc dangerouslySetInnerHTML={{__html: entry?.text}} />
                                        <Footer>
                                            <StyledIconButton left={1} onClick={handlePrev} disabled={i === 1}>
                                                <ArrowForwardIos />
                                            </StyledIconButton>
                                            <Step>{`${currentIndex + 1}/${points?.years.length}`}</Step>
                                            <StyledIconButton onClick={handleNext} disabled={i === points?.years?.length}>
                                                <ArrowForwardIos />
                                            </StyledIconButton>
                                        </Footer>
                                    </DescWrapper>
                                </InfoBox>
                            );
                        })}
                    </InfoInnerContainer>
                    <MobileFooter>
                        <StyledIconButton left={1} onClick={handlePrev} disabled={currentIndex === 0}>
                            <ArrowForwardIos />
                        </StyledIconButton>
                        <Step>{`${currentIndex + 1}/${points?.years.length}`}</Step>
                        <StyledIconButton onClick={handleNext} disabled={currentIndex === points?.years?.length - 1}>
                            <ArrowForwardIos />
                        </StyledIconButton>
                    </MobileFooter>
                </InfoContainer>
            </YearSlider>
        </MainContainer>
    );
}