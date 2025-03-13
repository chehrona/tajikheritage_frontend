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
import { Title } from '../poetBioStyles';
import {
    MainContainer,
    InnerOverlay,
    Backdrop,
    Slides,
    SlideImg,
    LineWrapper,
    Info,
    BoxTwoText,
    NavButtonWrapper,
    ButtonWrapper,
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
                        <Title
                            $color={'var(--primary-white-color)'}
                            $align={'center'}
                        >
                            {infoArr[0]?.year}
                        </Title>
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
            <NavButtonWrapper>
                <ButtonWrapper $top={true}>
                    <LeftButton disabled={false} movePrev={moveUp} />
                    <Line />
                </ButtonWrapper>
                <ButtonWrapper $top={false}>
                    <RightButton disabled={false} moveNext={moveDown} />
                    <Line />
                </ButtonWrapper>
            </NavButtonWrapper>
        </MainContainer>
    );
};

export default SecondSection;
