import React, { useEffect, useState, useRef } from 'react';

// Components
import Slideshow from '../../../common/slideshow/Slideshow';
import { DescWrapper } from '../../../common/descWrapper/DescWrapper';

// Types
import { PoetBioSectionFour } from './types/componentTypes';

// Styled components
import {
    BoxSix,
    SectionText,
    LeftContainer,
    RightContainer,
    Title,
} from '../poetBioStyles';
import { LeftTextWrapper } from './forthSectionStyles';

const ForthSection: React.FC<{ bioFour: PoetBioSectionFour }> = ({
    bioFour,
}) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const [screenSize, setScreenSize] = useState<number>(0);

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        if (parentWidth) {
            setScreenSize(parentWidth);
        }
    }, []);

    return (
        <BoxSix>
            <LeftContainer>
                <LeftTextWrapper>
                    <Title
                        $align={'center'}
                        $color={'var(--regular-black-color)'}
                    >
                        {bioFour?.year}
                    </Title>
                    <DescWrapper
                        data={bioFour?.desc}
                        TextWrapper={SectionText}
                    />
                </LeftTextWrapper>
            </LeftContainer>
            <RightContainer ref={parentRef}>
                <Slideshow
                    width={screenSize}
                    height={'var(--slideshow-height)'}
                    slides={bioFour?.slides}
                />
            </RightContainer>
        </BoxSix>
    );
};

export default ForthSection;
