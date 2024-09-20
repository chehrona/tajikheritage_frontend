/* 
This component contains the list of sections presented at the intro of the poet page. 
When clicked, it takes the user to that section, such as work, career, etc.
*/

import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Types
import { SectionOptionsProps } from './types/componentTypes';

// Styled components
import {
    MainContainer,
    SectionTitle,
    SegmentContainer,
    TitleSpan,
} from './sectionOptionStyles';

const SectionOptions: React.FC<SectionOptionsProps> = ({
    sections,
    scrollToView,
}) => {
    const { lang } = useGlobalData();

    return (
        <MainContainer>
            <SegmentContainer>
                {sections[lang].map((section, i) => {
                    return (
                        <SectionTitle key={i}>
                            <TitleSpan
                                data-id={`#${sections.us[i]}`}
                                onClick={(e) => scrollToView(e)}
                            >
                                {section}
                            </TitleSpan>
                        </SectionTitle>
                    );
                })}
            </SegmentContainer>
        </MainContainer>
    );
};

export default SectionOptions;
