import React, { useState, useEffect, useRef } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';

// Components
import Slideshow from '../../common/slideshow/Slideshow';
import { DescWrapper } from '../../common/descWrapper/DescWrapper';
import ArticleSubtitle from '../../common/articleSubtitle/ArticleSubtitle';

// Styled components
import { BoxWrapper, SecondBox, SlideContainer } from './mythIntroStyles';

export default function BoxTwo({ myth, noBorder }) {
    const parentRef = useRef(null);
    const [screenSize, setScreenSize] = useState(0);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    return (
        <BoxWrapper reverse={1} noBorder={noBorder}>
            <SlideContainer ref={parentRef} reverse={1}>
                <Slideshow width={screenSize} slides={myth?.slides} />
            </SlideContainer>
            {!isMobile && <div className="space"></div>}
            <ArticleSubtitle subtitle={myth.subtitle} reverse={true} />
            <DescWrapper desc={myth.body} TextWrapper={SecondBox} />
        </BoxWrapper>
    );
}
