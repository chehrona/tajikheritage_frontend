import React, { useState, useEffect, useRef } from 'react';
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useMediaQuery } from 'react-responsive';

import Slideshow from '../../common/slideshow/Slideshow';

import {
    BoxSeven,
    FinalQuote,
    LeftContainer,
    RightContainer,
    BackImg,
    Overlay,
    Author,
} from './poetBioStyles';

export default function SixthBox({ poet }) {
    const { lang } = useGlobalData();
    const parentRef = useRef(null);
    const [screenSize, setScreenSize] = useState(0);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const isTablet = useMediaQuery({
        query: `(min-device-width: 481px) and (max-device-width: 1024px)`,
    });

    let height = isMobile ? '23rem' : isTablet ? '40rem' : '30rem';

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    return (
        <BoxSeven>
            <LeftContainer>
                <Overlay>
                    <BackImg
                        src={process.env.REACT_APP_BASE_URL + poet.backdrops[2]}
                    />
                </Overlay>
                <FinalQuote>
                    {poet?.six[lang].desc}
                    <Author
                        dangerouslySetInnerHTML={{
                            __html: poet?.six[lang].author,
                        }}
                    />
                </FinalQuote>
            </LeftContainer>
            <RightContainer ref={parentRef}>
                <Slideshow
                    height={height}
                    width={screenSize}
                    slides={poet?.six[lang].slides}
                />
            </RightContainer>
        </BoxSeven>
    );
}
