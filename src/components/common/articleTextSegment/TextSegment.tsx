import React, { useState, useEffect, useRef } from 'react';

// Components
import Slideshow from '../slideshow/Slideshow';
import { DescWrapper } from '../descWrapper/DescWrapper';
import ArticleSubtitle from '../articleSubtitle/ArticleSubtitle';
import ArticleTitle from '../articleTitle/ArticleTitle';

// Types
import { TextSegmentProps } from './types/componentTypes';

// Styled components
import {
    BoxWrapper,
    BaseText,
    LeftText,
    RightText,
    SlideContainer,
    HeaderWrapper,
} from './textSegmentStyles';

const TextSegment: React.FC<TextSegmentProps> = ({
    i,
    data,
    title = '',
    reverse = null,
    topLeftRad,
}) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [screenSize, setScreenSize] = useState<number>(0);
    const hasSlides = data.slides && data.slides.length > 0 ? true : false;

    useEffect(() => {
        if (parentRef && parentRef.current) {
            const parentWidth =
                parentRef?.current?.getBoundingClientRect().width;

            setScreenSize(parentWidth);
        }
    }, []);

    return (
        <BoxWrapper>
            {hasSlides ? (
                <SlideContainer
                    $i={i}
                    ref={parentRef}
                    $reverse={reverse}
                    $topLeftRad={i === 0 ? topLeftRad : 0}
                >
                    <Slideshow
                        width={screenSize}
                        slides={data?.slides}
                        topLeftRad={i === 0 ? topLeftRad : 0}
                    />
                </SlideContainer>
            ) : null}
            <HeaderWrapper>
                {i === 0 && <ArticleTitle title={title} />}
            </HeaderWrapper>
            <ArticleSubtitle
                hasSlides={hasSlides}
                subtitle={data.subtitle}
                reverse={reverse}
            />
            <DescWrapper
                data={data?.body}
                TextWrapper={
                    !hasSlides ? BaseText : reverse ? LeftText : RightText
                }
            />
        </BoxWrapper>
    );
};

export default TextSegment;
