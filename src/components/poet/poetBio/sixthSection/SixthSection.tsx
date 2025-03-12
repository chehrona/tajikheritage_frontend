import React, { useState, useEffect, useRef } from 'react';

// Hooks
import { useGlobalData } from '../../../../hooks/useGlobalData';

// Components
import Slideshow from '../../../common/slideshow/Slideshow';
import { DescWrapper } from '../../../common/descWrapper/DescWrapper';

// Types
import { PoetBioType } from '../types/componentTypes';

// Styled components
import { BoxSix, LeftContainer, RightContainer } from '../poetBioStyles';
import {
    BackImg,
    Overlay,
    Author,
    FinalQuoteWrapper,
} from './sixthSectionStyles';

const SixthSection: React.FC<{ poet: PoetBioType }> = ({ poet }) => {
    const { lang } = useGlobalData();
    const parentRef = useRef<HTMLDivElement>(null);
    const [screenSize, setScreenSize] = useState<number>(0);

    useEffect(() => {
        if (!parentRef.current) {
            return;
        }

        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    return (
        <BoxSix>
            <LeftContainer>
                <Overlay>
                    <BackImg
                        $src={
                            process.env.REACT_APP_BASE_URL + poet.backdrops[2]
                        }
                    />
                </Overlay>
                <FinalQuoteWrapper>
                    <DescWrapper data={poet?.six[lang].desc} />
                    <Author
                        dangerouslySetInnerHTML={{
                            __html: poet?.six[lang].author,
                        }}
                    />
                </FinalQuoteWrapper>
            </LeftContainer>
            <RightContainer ref={parentRef}>
                <Slideshow
                    height={'var(--slideshow-height)'}
                    width={screenSize}
                    slides={poet?.six[lang].slides}
                />
            </RightContainer>
        </BoxSix>
    );
};

export default SixthSection;
