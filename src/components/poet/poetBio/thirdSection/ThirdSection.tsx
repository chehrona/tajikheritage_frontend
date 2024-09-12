import React from 'react';

// Components
import { DescWrapper } from '../../../common/descWrapper/DescWrapper';

// Types
import { PoetBioSectionThree } from './types/componentTypes';

// Styled components
import {
    MainContainer,
    QuoteWrapper,
    QuoteOutline,
    QuoteSymbol,
    Quote,
    BoxThreeText,
} from './thirdSectionStyles';

const ThirdSection: React.FC<{ bioThree: PoetBioSectionThree }> = ({
    bioThree,
}) => {
    return (
        <MainContainer>
            <QuoteWrapper>
                <QuoteOutline>
                    <QuoteSymbol />
                </QuoteOutline>
            </QuoteWrapper>
            <Quote dangerouslySetInnerHTML={{ __html: bioThree?.quote }} />
            <DescWrapper data={bioThree?.desc} TextWrapper={BoxThreeText} />
        </MainContainer>
    );
};

export default ThirdSection;
