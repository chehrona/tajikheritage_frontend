import React from 'react';

// Components
import { DescWrapper } from '../../../common/descWrapper/DescWrapper';

// Types
import { PoetBioSectionFive } from './types/componentTypes';

// Styled components
import { Title } from '../poetBioStyles';
import { FifthBox, MainContainer } from './fifthSectionStyles';

const FifthSection: React.FC<{ bioFive: PoetBioSectionFive }> = ({
    bioFive,
}) => {
    return (
        <MainContainer>
            <Title $color={'var(--primary-gold-color)'} $align={'center'}>
                {bioFive?.year}
            </Title>
            <DescWrapper data={bioFive.desc} TextWrapper={FifthBox} />
        </MainContainer>
    );
};

export default FifthSection;
