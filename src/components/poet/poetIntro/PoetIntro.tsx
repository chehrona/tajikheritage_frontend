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

const PoetIntro: React.FC<PoetIntroProps> = ({ poet, scrollToView }) => {
    const { lang } = useGlobalData();
    const yearOne = poet?.years[0].split('');
    const yearTwo = poet?.years[1].split('');
    const poetName = poet?.name[lang].split(' ');

    return (
        <MainContainer>
            <Overlay />
            <div>
                <SegmentContainer>
                    {poet?.sections[lang].map((piece, i) => {
                        return (
                            <SectionTitle
                                key={i}
                                onClick={(e) => scrollToView(e)}
                            >
                                <TitleSpan
                                    $delay={i}
                                    data-id={`#${poet?.sections.us[i]}`}
                                >
                                    {piece}
                                </TitleSpan>
                            </SectionTitle>
                        );
                    })}
                </SegmentContainer>
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
                <PoetName $color={true}>{poetName[0]}</PoetName>
                <PoetName>{poetName[1]}</PoetName>
            </PoetNameContainer>
        </MainContainer>
    );
};

export default PoetIntro;
