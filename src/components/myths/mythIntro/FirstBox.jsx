import React, { useState, useEffect, useRef } from "react";

import Slideshow from "../../common/slideshow/Slideshow";
import { DescWrapper } from "../../common/descWrapper/DescWrapper";

import { 
    BoxWrapper,
    Title,
    FirstBox,
    Subtitle,
    SlideContainer
} from "./mythIntroStyles";

export default function BoxOne({ myth, title, topLeftRad }) {
    const parentRef = useRef(null);
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    return (
        <BoxWrapper reverse={0}>
            <SlideContainer ref={parentRef} reverse={0} topLeftRad={topLeftRad}>
                <Slideshow
                    width={screenSize}
                    slides={myth?.slides}
                    topLeftRad={topLeftRad}
                />
            </SlideContainer>
            {title && <Title>{title}</Title>}
            <Subtitle dangerouslySetInnerHTML={{ __html: myth.subtitle}} reverse={0}></Subtitle>
            <DescWrapper desc={myth.body} TextWrapper={FirstBox} />
        </BoxWrapper>
    );
}