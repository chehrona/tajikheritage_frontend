import React, { useState, useEffect, useCallback } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useMediaQuery } from 'react-responsive';

// Material UI
import { ArrowForwardIos } from '@mui/icons-material';

// Components
import { DescWrapper } from '../../common/descWrapper/DescWrapper';

// Types
import { PoetBioSectionTwoDetails, PoetBioType } from './types/componentTypes';

// Styled components
import {
    Year,
    BoxTwo,
    Slides,
    SlideImg,
    Backdrop,
    NavBox,
    Line,
    Arrow,
    InnerOverlay,
    LineWrapper,
    Text,
    Info,
    NavWrapper,
    FillerOne,
    FillerTwo,
    StyledIconButton,
} from './poetBioStyles';

const SecondBox: React.FC<{ bioData: PoetBioType }> = ({ bioData }) => {
    const { lang } = useGlobalData();
    const [infoArr, setInfoArr] = useState<PoetBioSectionTwoDetails[]>([
        ...bioData?.two[lang],
    ]);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    useEffect(() => {
        setInfoArr([...bioData?.two[lang]]);
    }, [lang]);

    const moveUp = useCallback(() => {
        if (infoArr.length > 1) {
            const movedItem = infoArr.pop() as PoetBioSectionTwoDetails;
            infoArr.unshift(movedItem);
            setInfoArr([...infoArr]);
        }
    }, [infoArr]);

    const moveDown = useCallback(() => {
        if (infoArr.length > 1) {
            const movedItem = infoArr.shift() as PoetBioSectionTwoDetails;
            infoArr.push(movedItem);
            setInfoArr([...infoArr]);
        }
    }, [infoArr]);

    return (
        <BoxTwo>
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
                        <Year>{infoArr[0]?.year}</Year>
                        <DescWrapper
                            data={infoArr[0]?.desc}
                            TextWrapper={Text}
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
                    <StyledIconButton
                        $bottom={false}
                        onClick={moveUp}
                        $disabled={infoArr[0] === bioData?.two[lang][0]}
                    >
                        <Arrow>
                            <ArrowForwardIos />
                        </Arrow>
                    </StyledIconButton>
                </NavWrapper>
            </NavBox>
            <NavBox $bottom={true}>
                <FillerOne />
                <FillerTwo />
                <NavWrapper>
                    <StyledIconButton
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
                    </StyledIconButton>
                    <Line />
                </NavWrapper>
            </NavBox>
            {isMobile && (
                <div>
                    <StyledIconButton
                        $bottom={true}
                        onClick={moveDown}
                        $disabled={
                            infoArr[0] ===
                            bioData?.two[lang][bioData?.two[lang].length - 1]
                        }
                    >
                        <Arrow>
                            <ArrowForwardIos style={{ marginLeft: '1px' }} />
                        </Arrow>
                    </StyledIconButton>
                    <StyledIconButton
                        $bottom={false}
                        onClick={moveUp}
                        $disabled={infoArr[0] === bioData?.two[lang][0]}
                    >
                        <Arrow>
                            <ArrowForwardIos />
                        </Arrow>
                    </StyledIconButton>
                </div>
            )}
        </BoxTwo>
    );
};

export default SecondBox;
