import React, { useEffect, useState, useRef } from 'react';
import { useGlobalData } from '../../../App';
import { useMediaQuery } from 'react-responsive';

import Slideshow from '../../common/slideshow/Slideshow';

import {
    BoxSeven,
    FamilyDesc,
    LeftContainer,
    RightContainer,
    Year,
} from './poetBioStyles';

export default function ForthBox({ poet }) {
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
                <FamilyDesc>
                    <Year align={true} color={'#000'}>
                        {poet?.four[lang].year}
                    </Year>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: poet?.four[lang].desc,
                        }}
                    ></div>
                </FamilyDesc>
            </LeftContainer>
            <RightContainer ref={parentRef}>
                <Slideshow
                    width={screenSize}
                    height={height}
                    slides={poet?.four[lang].slides}
                />
            </RightContainer>
        </BoxSeven>
    );
}
