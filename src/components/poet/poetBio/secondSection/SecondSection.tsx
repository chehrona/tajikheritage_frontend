import React, { useState, useEffect } from 'react';

// Hooks
import { useGlobalData } from '../../../../hooks/useGlobalData';

// Components
import { DescWrapper } from '../../../common/descWrapper/DescWrapper';
import LeftButton from '../../../common/navButtons/LeftButton';
import RightButton from '../../../common/navButtons/RightButton';

// Types
import { PoetBioSectionTwoDetails } from './types/componentTypes';
import { PoetBioType } from '../types/componentTypes';

// Styled components
import { Year } from '../poetBioStyles';
import {
    MainContainer,
    InnerOverlay,
    Backdrop,
    Slides,
    SlideImg,
    LineWrapper,
    Info,
    BoxTwoText,
    NavBox,
    NavButtonWrapper,
    NavWrapper,
    FillerOne,
    FillerTwo,
    Line,
} from './secondSectionStyles';

const SecondSection: React.FC<{ bioData: PoetBioType }> = ({ bioData }) => {
    const { lang } = useGlobalData();
    const [infoArr, setInfoArr] = useState<PoetBioSectionTwoDetails[]>([
        ...bioData?.two[lang],
    ]);

    useEffect(() => {
        setInfoArr([...bioData?.two[lang]]);
    }, [lang]);

    const moveUp = () => {
        if (infoArr.length > 1) {
            const movedItem = infoArr.pop() as PoetBioSectionTwoDetails;
            infoArr.unshift(movedItem);
            setInfoArr([...infoArr]);
        }
    };

    const moveDown = () => {
        if (infoArr.length > 1) {
            const movedItem = infoArr.shift() as PoetBioSectionTwoDetails;
            infoArr.push(movedItem);
            setInfoArr([...infoArr]);
        }
    };

    return (
        <MainContainer>
            <InnerOverlay>
                <Backdrop
                    $backdrop={
                        process.env.REACT_APP_BASE_URL + bioData?.backdrops[0]
                    }
                />
            </InnerOverlay>
            <Slides>
                <SlideImg
                    key={infoArr[bioData?.two[lang].length - 1].img}
                    src={
                        process.env.REACT_APP_BASE_URL +
                        infoArr[bioData?.two[lang].length - 1].img
                    }
                />
                <LineWrapper>
                    <SlideImg
                        key={infoArr[0].img}
                        src={process.env.REACT_APP_BASE_URL + infoArr[0]?.img}
                        $show={true}
                    />
                    <Info>
                        <Year $color={'var(--primary-white-color)'}>
                            {infoArr[0]?.year}
                        </Year>
                        <DescWrapper
                            data={infoArr[0]?.desc}
                            TextWrapper={BoxTwoText}
                        />
                    </Info>
                </LineWrapper>
                <SlideImg
                    key={infoArr[1].img}
                    src={process.env.REACT_APP_BASE_URL + infoArr[1].img}
                />
            </Slides>
            <NavBox $bottom={false}>
                <FillerOne />
                <FillerTwo />
                <NavWrapper>
                    <Line />
                    {/* <StyledIconButton
                        $bottom={false}
                        onClick={moveUp}
                        $disabled={infoArr[0] === bioData?.two[lang][0]}
                    >
                        <Arrow>
                            <ArrowForwardIos />
                        </Arrow>
                    </StyledIconButton> */}
                </NavWrapper>
            </NavBox>
            <NavBox $bottom={true}>
                <FillerOne />
                <FillerTwo />
                <NavWrapper>
                    {/* <StyledIconButton
                        $bottom={true}
                        onClick={moveDown}
                        $disabled={
                            infoArr[0] ===
                            bioData?.two[lang][infoArr?.length - 1]
                        }
                    >
                        <Arrow>
                            <ArrowForwardIos style={{ marginLeft: '1px' }} />
                        </Arrow>
                    </StyledIconButton> */}
                    <Line />
                </NavWrapper>
            </NavBox>
            <NavButtonWrapper>
                <LeftButton
                    disabled={infoArr[0] === bioData?.two[lang][0]}
                    movePrev={moveUp}
                />
                <RightButton
                    disabled={
                        infoArr[0] ===
                        bioData?.two[lang][bioData?.two[lang].length - 1]
                    }
                    moveNext={moveDown}
                />
            </NavButtonWrapper>
        </MainContainer>
    );
};

export default SecondSection;
