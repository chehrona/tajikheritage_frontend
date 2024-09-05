import React from 'react';

import { DescWrapper } from '../../common/descWrapper/DescWrapper';

import {
    BoxThree,
    QuoteWrapper,
    QuoteOutline,
    QuoteSymbol,
    Quote,
    TextWrapper,
} from './poetBioStyles';

export default function ThirdBox({ poet }) {
    return (
        <BoxThree>
            <QuoteWrapper>
                <QuoteOutline>
                    <QuoteSymbol />
                </QuoteOutline>
            </QuoteWrapper>
            <Quote dangerouslySetInnerHTML={{ __html: poet?.quote }} />
            <DescWrapper desc={poet?.desc} TextWrapper={TextWrapper} />
        </BoxThree>
    );
}
