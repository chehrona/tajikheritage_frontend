import React, { useState } from 'react';
import { useGlobalData } from '../../../App';

import AwardDialog from '../awardDialog/AwardDialog';

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

export default function PoetAwards({ poet }) {
    const { lang } = useGlobalData();
    const [showAwardInfo, setShowAwardInfo] = useState(false);
    const [awardInfo, setAwardInfo] = useState(null);

    function handleAwardDialog(e, award) {
        setShowAwardInfo(true);
        setAwardInfo(award);
    }

    return (
        <MainContainer id="Awards">
            <AwardWrapper length={poet[lang]}>
                {poet[lang].map((award, i) => {
                    return (
                        <AwardCard key={i} delay={`${0.05 * i}s`}>
                            <InnerContainer>
                                <Face>
                                    <Image
                                        src={
                                            process.env.REACT_APP_BASE_URL +
                                            award.img
                                        }
                                    />
                                </Face>
                                <Face back={true}>
                                    <Title>{award.title}</Title>
                                    {award.years.map((year) => {
                                        return <Year key={year}>{year}</Year>;
                                    })}
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
}
