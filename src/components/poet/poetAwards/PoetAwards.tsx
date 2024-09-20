import React, { useState } from 'react';

// Components
import AwardDialog from '../awardDialog/AwardDialog';

// Types
import { PoetAwardType } from './types/componentTypes';

// Styled components
import {
    MainContainer,
    AwardCard,
    Title,
    Image,
    InnerContainer,
    Face,
    Year,
    StyledIconButton,
    StyledInfoIcon,
    AwardWrapper,
} from './poetAwardStyles';

const PoetAwards: React.FC<{ awards: PoetAwardType[] }> = ({ awards }) => {
    const [awardInfo, setAwardInfo] = useState<PoetAwardType>();
    const [showAwardInfo, setShowAwardInfo] = useState<boolean>(false);

    function handleAwardDialog(
        e: React.MouseEvent<HTMLButtonElement>,
        award: PoetAwardType,
    ) {
        setShowAwardInfo(true);
        setAwardInfo(award);
    }

    return (
        <MainContainer id="Awards">
            <AwardWrapper>
                {awards.map((award, i) => {
                    return (
                        <AwardCard key={i} $delay={`${0.05 * i}s`}>
                            <InnerContainer>
                                <Face $back={false}>
                                    <Image
                                        src={
                                            process.env.REACT_APP_BASE_URL +
                                            award.img
                                        }
                                    />
                                </Face>
                                <Face $back={true}>
                                    <Title>{award.title}</Title>
                                    <Year>{award.year}</Year>
                                    <StyledIconButton
                                        onClick={(e) =>
                                            handleAwardDialog(e, award)
                                        }
                                    >
                                        <StyledInfoIcon />
                                    </StyledIconButton>
                                </Face>
                            </InnerContainer>
                        </AwardCard>
                    );
                })}
            </AwardWrapper>
            <AwardDialog
                awardInfo={awardInfo}
                showAwardInfo={showAwardInfo}
                setShowAwardInfo={setShowAwardInfo}
            />
        </MainContainer>
    );
};

export default PoetAwards;
