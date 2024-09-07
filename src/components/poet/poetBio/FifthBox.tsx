import React from 'react';

// Components
import { DescWrapper } from '../../common/descWrapper/DescWrapper';

// Types
import { PoetBioSectionFiveDetails } from './types/componentTypes';

// Styled components
import { BoxFive, Year } from './poetBioStyles';

const FifthBox: React.FC<{ bioFive: PoetBioSectionFiveDetails }> = ({
    bioFive,
}) => {
    return (
        <BoxFive>
            <Year $color={'var(--primary-gold-color)'}>{bioFive?.year}</Year>
            <DescWrapper data={bioFive.desc} />
        </BoxFive>
    );
};

export default FifthBox;
