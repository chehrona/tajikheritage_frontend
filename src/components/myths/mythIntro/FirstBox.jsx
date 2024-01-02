import React, { useState, useEffect, useRef } from "react";

import Slideshow from "../../common/slideshow/Slideshow";
import { DescWrapper } from "../../common/descWrapper/DescWrapper";

import { 
    BoxWrapper,
    Title,
    FirstBox,
    Subtitle,
    TextContainer,
    RightContainer
} from "./mythIntroStyles";

export default function BoxOne({ myth, title, topRightRad }) {
    const parentRef = useRef(null);
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    return (
        <BoxWrapper reverse={0}>
            <RightContainer ref={parentRef}>
                <Slideshow
                    width={screenSize}
                    height={'35rem'}
                    slides={myth?.slides}
                    topLeftRad={topRightRad}
                />
            </RightContainer>
            <TextContainer>
                {title && <Title>{title}</Title>}
                <Subtitle>{myth.subtitle}</Subtitle>
                <DescWrapper desc={myth.body} TextWrapper={FirstBox} />
            </TextContainer>
        </BoxWrapper>
    );
}