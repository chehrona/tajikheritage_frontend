import React, { useState, useEffect, useRef } from "react";

import Slideshow from "../../common/slideshow/Slideshow";
import { DescWrapper } from "../../common/descWrapper/DescWrapper";

import { 
    BoxWrapper,
    SecondBox,
    Subtitle,
    SlideContainer
} from "./mythIntroStyles";

export default function BoxTwo({ myth }) {
    const parentRef = useRef(null);
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    return (
        <BoxWrapper reverse={1}>
            <SlideContainer ref={parentRef} reverse={1}>
                <Slideshow
                    width={screenSize}
                    slides={myth?.slides}
                />
            </SlideContainer>
            <Subtitle dangerouslySetInnerHTML={{ __html: myth.subtitle}} reverse={1}></Subtitle>
            <DescWrapper desc={myth.body} TextWrapper={SecondBox} />
        </BoxWrapper>
    );
}