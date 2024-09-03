import React from 'react';
import { useGlobalData } from '../../../hooks/useGlobalData';

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
    const { lang } = useGlobalData();

    return (
        <BoxThree>
            <QuoteWrapper>
                <QuoteOutline>
                    <QuoteSymbol />
                </QuoteOutline>
            </QuoteWrapper>
            <Quote
                dangerouslySetInnerHTML={{ __html: poet?.three[lang].quote }}
            />
            <DescWrapper
                desc={poet?.three[lang].desc}
                TextWrapper={TextWrapper}
            />
        </BoxThree>
    );
}
