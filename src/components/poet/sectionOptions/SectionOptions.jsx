/* 
This component contains the list of sections presented at the intro of the poet page. 
When clicked, it takes the user to that section, such as work, career, etc.
*/
import React from 'react';

// Hooks
import { useSetLang } from '../../../App';

// Styled components
import {
    MainContainer,
    SectionTitle,
    SegmentContainer,
    TitleSpan,
} from './sectionOptionStyles';

export default function SectionOptions({ poet, scrollToView }) {
    const { lang } = useSetLang();

    return (
        <MainContainer>
            <SegmentContainer>
                {poet?.sections[lang].map((piece, i) => {
                    return (
                        <SectionTitle key={i} onClick={(e) => scrollToView(e)}>
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
        </MainContainer>
    );
}
