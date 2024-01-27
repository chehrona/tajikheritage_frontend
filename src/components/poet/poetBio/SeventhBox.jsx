import React, { useState, useEffect, useRef } from 'react';
import { useSetLang } from "../../../App";
import { useMediaQuery } from "react-responsive";

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

export default function SeventhBox({ poet }) {
    const { lang } = useSetLang();
    const parentRef = useRef(null);
    const [screenSize, setScreenSize] = useState(0);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const isTablet = useMediaQuery({ query: `(min-device-width: 481px) and (max-device-width: 1024px)` });

    let height = isMobile ? '23rem' : (isTablet ? '40rem' : '30rem');

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    return (
        <BoxSeven>
            <LeftContainer>
                <Overlay>
                    <BackImg src={process.env.REACT_APP_BASE_URL + poet.backdrops[2]} />
                </Overlay>
                <FinalQuote>
                    {poet?.seven[lang].desc}
                    <Author dangerouslySetInnerHTML={{__html: poet?.seven[lang].author}} />
                </FinalQuote>
            </LeftContainer>
            <RightContainer ref={parentRef}>
                <Slideshow
                    height={height}
                    width={screenSize}
                    slides={poet?.seven[lang].slides}
                />
            </RightContainer>
        </BoxSeven>
    )
}