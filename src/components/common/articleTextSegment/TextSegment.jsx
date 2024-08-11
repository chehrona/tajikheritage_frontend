import React, { useState, useEffect, useRef } from 'react';

// Components
import Slideshow from '../slideshow/Slideshow';
import { DescWrapper } from '../descWrapper/DescWrapper';
import ArticleSubtitle from '../articleSubtitle/ArticleSubtitle';

// Styled components
import {
    BoxWrapper,
    Title,
    FirstBox,
    SecondBox,
    SlideContainer,
} from './textSegmentStyles';

export default function TextSegment({
    data,
    title,
    topLeftRad,
    reverse,
    noBorder,
}) {
    const parentRef = useRef(null);
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    return (
        <BoxWrapper reverse={reverse} noBorder={noBorder}>
            {data.slides && data?.slides.length > 0 ? (
                <SlideContainer
                    ref={parentRef}
                    reverse={reverse}
                    topLeftRad={topLeftRad}
                >
                    <Slideshow
                        width={screenSize}
                        slides={data?.slides}
                        topLeftRad={topLeftRad}
                    />
                </SlideContainer>
            ) : null}
            {title && <Title>{title}</Title>}
            <ArticleSubtitle
                length={data.slides.length === 0}
                reverse={reverse}
                subtitle={data.subtitle}
            ></ArticleSubtitle>
            <DescWrapper
                desc={data?.body}
                TextWrapper={reverse ? SecondBox : FirstBox}
            />
        </BoxWrapper>
    );
}
