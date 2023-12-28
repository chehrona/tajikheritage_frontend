import React, { useEffect, useState } from 'react';
import { useSetLang } from "../../../App";

import { ArrowForwardIos } from "@mui/icons-material";

import {
    Arrow,
    ImgInfo,
    ImageContainer,
    ImageWrapper,
    ButtonWrapper,
    SlideContainer,
    StyledButton
} from './slideshowStyles';

export default function Slideshow({
    slides,
    width,
    height,
    radius
}) {
    const { lang } = useSetLang();
    const [translate, setTranslate] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [infoArr, setInfoArr] = useState([...slides]);

    useEffect(() => {
        setInfoArr([...slides]);
    }, [lang]);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
            setTranslate(prevState => prevState + width);
        }
    };
    
    const moveNext = () => {
        if (currentIndex < infoArr?.length - 1) {            
            setCurrentIndex(prevState => prevState + 1);
            setTranslate(prevState => prevState - width);
        }
    };

    return (
        <SlideContainer>
            <ImageContainer>
                {infoArr?.map((entry, i) => {
                    return (
                        <ImageWrapper
                            key={i + 'b'}
                            src={process.env.REACT_APP_BASE_URL + entry?.img}
                            width={width}
                            height={height}
                            translate={translate}
                            radius={radius}
                        >
                            {entry?.info && <ImgInfo dangerouslySetInnerHTML={{__html: entry?.info}} />}
                        </ImageWrapper>
                    )
                })}
            </ImageContainer>
            <ButtonWrapper>
                <StyledButton left={true} onClick={movePrev} disabled={currentIndex === 0}>
                    <Arrow>
                        <ArrowForwardIos style={{marginLeft: '1px'}}/>
                    </Arrow>
                </StyledButton>
                <StyledButton onClick={moveNext} disabled={currentIndex === infoArr?.length - 1}>
                    <Arrow>
                        <ArrowForwardIos />
                    </Arrow>
                </StyledButton>
            </ButtonWrapper>
        </SlideContainer>
    )
}