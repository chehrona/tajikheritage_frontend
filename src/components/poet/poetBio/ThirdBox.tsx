import React from 'react';

// Components
import { DescWrapper } from '../../common/descWrapper/DescWrapper';

// Types
import { PoetBioSectionThree } from './types/componentTypes';

// Styled components
import {
    BoxThree,
    QuoteWrapper,
    QuoteOutline,
    QuoteSymbol,
    Quote,
    TextWrapper,
} from './poetBioStyles';

const ThirdBox: React.FC<{ bioThree: PoetBioSectionThree }> = ({
    bioThree,
}) => {
    return (
        <BoxThree>
            <QuoteWrapper>
                <QuoteOutline>
                    <QuoteSymbol />
                </QuoteOutline>
            </QuoteWrapper>
            <Quote dangerouslySetInnerHTML={{ __html: bioThree?.quote }} />
            <DescWrapper data={bioThree?.desc} TextWrapper={TextWrapper} />
        </BoxThree>
    );
};

export default ThirdBox;
