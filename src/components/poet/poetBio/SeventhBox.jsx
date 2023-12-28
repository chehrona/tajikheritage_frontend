import React, { useState, useEffect, useRef } from 'react';
import { useSetLang } from "../../../App";

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
                    width={screenSize}
                    height={'30rem'}
                    slides={poet?.seven[lang].slides}
                />
            </RightContainer>
        </BoxSeven>
    )
}