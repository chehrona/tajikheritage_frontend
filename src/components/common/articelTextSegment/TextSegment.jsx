import React, { useState, useEffect, useRef } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';

// Components
import Slideshow from '../slideshow/Slideshow';
import { DescWrapper } from '../descWrapper/DescWrapper';

// Styled components
import {
    BoxWrapper,
    Title,
    FirstBox,
    SecondBox,
    Subtitle,
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
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const isTablet = useMediaQuery({
        query: `(min-device-width: 481px) and (max-device-width: 1024px)`,
    });

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    return (
        <BoxWrapper reverse={reverse} noBorder={noBorder}>
            {data?.slides.length > 0 ? (
                <SlideContainer
                    ref={parentRef}
                    reverse={reverse}
                    topLeftRad={topLeftRad}
                >
                    <Slideshow
                        width={screenSize}
                        slides={data?.slides}
                        topLeftRad={isMobile ? 0 : isTablet ? 2.5 : topLeftRad}
                    />
                </SlideContainer>
            ) : null}
            {title && <Title>{title}</Title>}
            {!isMobile && <div className="space"></div>}
            <Subtitle
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
                reverse={reverse}
                length={!data?.slides.length > 0}
            ></Subtitle>
            <DescWrapper
                desc={data.body}
                TextWrapper={reverse ? SecondBox : FirstBox}
            />
        </BoxWrapper>
    );
}
