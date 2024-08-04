import React, { useState, useEffect, useRef } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';

// Components
import Slideshow from '../../common/slideshow/Slideshow';
import { DescWrapper } from '../../common/descWrapper/DescWrapper';
import ArticleSubtitle from '../../common/articleSubtitle/ArticleSubtitle';

// Styled components
import { BoxWrapper, Title, FirstBox, SlideContainer } from './mythIntroStyles';

export default function BoxOne({ myth, title, topLeftRad }) {
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
        <BoxWrapper reverse={0}>
            <SlideContainer ref={parentRef} reverse={0} topLeftRad={topLeftRad}>
                <Slideshow
                    width={screenSize}
                    slides={myth?.slides}
                    topLeftRad={isMobile ? 0 : isTablet ? 2.5 : topLeftRad}
                />
            </SlideContainer>
            {title && <Title>{title}</Title>}
            {!isMobile && <div className="space"></div>}
            <ArticleSubtitle subtitle={myth.subtitle} />
            <DescWrapper desc={myth.body} TextWrapper={FirstBox} />
        </BoxWrapper>
    );
}
