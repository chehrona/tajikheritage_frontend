import React, { useState, useEffect, useRef } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';

// Components
import Slideshow from '../slideshow/Slideshow';
import { DescWrapper } from '../descWrapper/DescWrapper';
import ArticleSubtitle from '../articleSubtitle/ArticleSubtitle';

// Types
import { TextSegmentProps } from './types/componentTypes';

// Styled components
import {
    BoxWrapper,
    Title,
    FirstBox,
    SecondBox,
    SlideContainer,
} from './textSegmentStyles';

const TextSegment: React.FC<TextSegmentProps> = ({
    i,
    data,
    title,
    reverse,
    noBorder,
}) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [screenSize, setScreenSize] = useState<number>(0);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const isTablet = useMediaQuery({
        query: `(min-device-width: 481px) and (max-device-width: 1024px)`,
    });
    const topLeftRad = isMobile ? 0 : i === 0 ? (isTablet ? 2.5 : 4) : 0;

    useEffect(() => {
        if (parentRef && parentRef.current) {
            const parentWidth =
                parentRef?.current?.getBoundingClientRect().width;

            setScreenSize(parentWidth);
        }
    }, []);

    return (
        <BoxWrapper $reverse={reverse} $noBorder={noBorder}>
            {data.slides && data?.slides.length > 0 ? (
                <SlideContainer
                    ref={parentRef}
                    $reverse={reverse}
                    $topLeftRad={topLeftRad}
                >
                    <Slideshow
                        width={screenSize}
                        slides={data?.slides}
                        topLeftRad={topLeftRad}
                    />
                </SlideContainer>
            ) : null}
            {i === 0 && <Title>{title}</Title>}
            <ArticleSubtitle
                length={data.slides.length === 0}
                reverse={reverse}
                subtitle={data.subtitle}
            ></ArticleSubtitle>
            <DescWrapper
                data={data?.body}
                TextWrapper={reverse ? SecondBox : FirstBox}
            />
        </BoxWrapper>
    );
};

export default TextSegment;
