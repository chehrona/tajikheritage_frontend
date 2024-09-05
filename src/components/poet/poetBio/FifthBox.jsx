import React from 'react';
import { BoxFive, Year } from './poetBioStyles';

export default function FifthBox({ poet }) {
    return (
        <BoxFive>
            <Year color={'#bd9d52'}>{poet?.year}</Year>
            <div dangerouslySetInnerHTML={{ __html: poet?.desc }}></div>
        </BoxFive>
    );
}
