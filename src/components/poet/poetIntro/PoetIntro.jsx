import React from 'react';

// Hooks
import { useGlobalData } from '../../../App';

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

export default function PoetIntro({ poet, scrollToView }) {
    const { lang } = useGlobalData();
    const yearOne = poet?.years[lang][0].split('');
    const yearTwo = poet?.years[lang][1].split('');

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
                                    delay={`${0.03 * i}s`}
                                    data={`#${poet?.sections.us[i]}`}
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
                                <NumSpan key={i} delay={`${0.08 * i}s`}>
                                    {num}
                                </NumSpan>
                            );
                        })}
                    </Year>
                    <div>
                        {yearTwo?.map((num, i) => {
                            return (
                                <NumSpan key={i} delay={`${0.09 * i}s`}>
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
                <PoetName color={1}>{poet?.name[lang][0]}</PoetName>
                <PoetName>{poet?.name[lang][1]}</PoetName>
            </PoetNameContainer>
        </MainContainer>
    );
}
