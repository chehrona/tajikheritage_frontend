import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { PoetIntroProps } from './types/componentTypes';

// Styled components
import {
    MainContainer,
    SectionTitle,
    TitleSpan,
    SegmentContainer,
    FadedImage,
    PoetNameContainer,
    PoetName,
    YearsContainer,
    Year,
    NumSpan,
    Overlay,
} from './poetIntroStyles';
import SectionOptions from '../sectionOptions/SectionOptions';

const PoetIntro: React.FC<PoetIntroProps> = ({ poet, scrollToView }) => {
    const { lang } = useGlobalData();
    const yearOne = poet?.years[0].split('');
    const yearTwo = poet?.years[1].split('');
    const poetName = poet?.name[lang].split(' ');

    return (
        <MainContainer>
            <Overlay />
            <div>
                <SectionOptions
                    sections={poet.sections}
                    scrollToView={scrollToView}
                />
                <YearsContainer>
                    <Year>
                        {yearOne?.map((num, i) => {
                            return (
                                <NumSpan key={i} $delay={`${0.08 * i}s`}>
                                    {num}
                                </NumSpan>
                            );
                        })}
                    </Year>
                    <div>
                        {yearTwo?.map((num, i) => {
                            return (
                                <NumSpan key={i} $delay={`${0.09 * i}s`}>
                                    {num}
                                </NumSpan>
                            );
                        })}
                    </div>
                </YearsContainer>
            </div>
            <FadedImage
                src={process.env.REACT_APP_BASE_URL + poet?.img?.main}
            />
            <PoetNameContainer>
                <PoetName $color={false}>{poetName[0]}</PoetName>
                <PoetName $color={true}>{poetName[1]}</PoetName>
            </PoetNameContainer>
        </MainContainer>
    );
};

export default PoetIntro;
