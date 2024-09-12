import React from 'react';

// Components
import { DescWrapper } from '../../../common/descWrapper/DescWrapper';

// Types
import { PoetBioSectionFive } from './types/componentTypes';

// Styled components
import { Title } from '../poetBioStyles';
import { MainContainer } from './fifthSectionStyles';

const FifthSection: React.FC<{ bioFive: PoetBioSectionFive }> = ({
    bioFive,
}) => {
    return (
        <MainContainer>
            <Title $color={'var(--primary-gold-color)'}>{bioFive?.year}</Title>
            <DescWrapper data={bioFive.desc} />
        </MainContainer>
    );
};

export default FifthSection;
