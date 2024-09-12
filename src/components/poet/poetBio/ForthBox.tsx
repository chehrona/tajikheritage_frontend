import React, { useEffect, useState, useRef } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';

// Components
import Slideshow from '../../common/slideshow/Slideshow';
import { DescWrapper } from '../../common/descWrapper/DescWrapper';

// Types
import { PoetBioSectionFour } from './types/componentTypes';

// Styled components
import {
    BoxSix,
    SectionText,
    FamilyDesc,
    LeftContainer,
    RightContainer,
    Year,
} from './poetBioStyles';

const ForthBox: React.FC<{ bioFour: PoetBioSectionFour }> = ({ bioFour }) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [screenSize, setScreenSize] = useState<number>(0);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const isTablet = useMediaQuery({
        query: `(min-device-width: 481px) and (max-device-width: 1024px)`,
    });

    let height = isMobile ? 25 : isTablet ? 40 : 30;

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        if (parentWidth) {
            setScreenSize(parentWidth);
        }
    }, []);

    return (
        <BoxSix>
            <LeftContainer>
                <FamilyDesc>
                    <Year $align={true} $color={'var(--regular-black-color)'}>
                        {bioFour?.year}
                    </Year>
                    <DescWrapper
                        data={bioFour?.desc}
                        TextWrapper={SectionText}
                    />
                </FamilyDesc>
            </LeftContainer>
            <RightContainer ref={parentRef}>
                <Slideshow
                    width={screenSize}
                    height={height}
                    slides={bioFour?.slides}
                />
            </RightContainer>
        </BoxSix>
    );
};

export default ForthBox;
