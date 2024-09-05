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
    FamilyDesc,
    LeftContainer,
    RightContainer,
    StyledDiv,
    Year,
} from './poetBioStyles';

const ForthBox: React.FC<{ bioFour: PoetBioSectionFour }> = ({ bioFour }) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [screenSize, setScreenSize] = useState<number>(0);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const isTablet = useMediaQuery({
        query: `(min-device-width: 481px) and (max-device-width: 1024px)`,
    });

    let height = isMobile ? 276 : isTablet ? 520 : 480;

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
                    <Year $align={true} $color={'#000'}>
                        {bioFour?.year}
                    </Year>
                    <DescWrapper data={bioFour?.desc} TextWrapper={StyledDiv} />
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
