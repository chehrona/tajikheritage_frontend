import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

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
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    return (
        <BoxWrapper reverse={0} >
            <SlideContainer ref={parentRef} reverse={0} topLeftRad={topLeftRad}>
                <Slideshow
                    width={screenSize}
                    slides={myth?.slides}
                    topLeftRad={isMobile ? 0 : topLeftRad}
                />
            </SlideContainer>
            {title && <Title>{title}</Title>}
            {!isMobile && <div className="space"></div>}
            <Subtitle dangerouslySetInnerHTML={{ __html: myth.subtitle}} reverse={0}></Subtitle>
            <DescWrapper desc={myth.body} TextWrapper={FirstBox} />
        </BoxWrapper>
    );
}