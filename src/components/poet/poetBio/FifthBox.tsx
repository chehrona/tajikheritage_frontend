import React from 'react';

// Components
import { DescWrapper } from '../../common/descWrapper/DescWrapper';

// Types
import { PoetBioSectionFiveDetails } from './types/componentTypes';

// Styled components
import { BoxFive, StyledDiv, Year } from './poetBioStyles';

const FifthBox: React.FC<{ bioFive: PoetBioSectionFiveDetails }> = ({
    bioFive,
}) => {
    return (
        <BoxFive>
            <Year $color={'#bd9d52'}>{bioFive?.year}</Year>
            <DescWrapper data={bioFive.desc} TextWrapper={StyledDiv} />
        </BoxFive>
    );
};

export default FifthBox;
