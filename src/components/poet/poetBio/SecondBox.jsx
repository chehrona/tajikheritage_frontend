import React, { useState, useEffect } from 'react';
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useMediaQuery } from 'react-responsive';

import { ArrowForwardIos } from '@mui/icons-material';

import { DescWrapper } from '../../common/descWrapper/DescWrapper';

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

export default function SecondBox({ poet }) {
    const { lang } = useGlobalData();
    const [infoArr, setInfoArr] = useState([...poet?.two[lang]]);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    useEffect(() => {
        setInfoArr([...poet?.two[lang]]);
    }, [lang]);

    const moveUp = () => {
        if (infoArr.length > 1) {
            const movedItem = infoArr.pop();
            infoArr.unshift(movedItem);
            setInfoArr([...infoArr]);
        }
    };

    const moveDown = () => {
        if (infoArr.length > 1) {
            const movedItem = infoArr.shift();
            infoArr.push(movedItem);
            setInfoArr([...infoArr]);
        }
    };

    return (
        <BoxTwo>
            <InnerOverlay>
                <Backdrop
                    backdrop={
                        process.env.REACT_APP_BASE_URL + poet?.backdrops[0]
                    }
                />
            </InnerOverlay>
            <Slides>
                <SlideImg
                    id={infoArr[poet?.two[lang].length - 1]._id}
                    src={
                        process.env.REACT_APP_BASE_URL +
                        infoArr[poet?.two[lang].length - 1].img
                    }
                />
                <LineWrapper>
                    <SlideImg
                        id={infoArr[0]._id}
                        src={process.env.REACT_APP_BASE_URL + infoArr[0]?.img}
                        show={1}
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
                    id={infoArr[1]._id}
                    src={process.env.REACT_APP_BASE_URL + infoArr[1].img}
                />
            </Slides>
            <NavBox>
                <FillerOne />
                <FillerTwo />
                <NavWrapper>
                    <Line />
                    <StyledIconButton
                        onClick={moveUp}
                        disabled={infoArr[0] === poet?.two[lang][0]}
                    >
                        <Arrow>
                            <ArrowForwardIos />
                        </Arrow>
                    </StyledIconButton>
                </NavWrapper>
            </NavBox>
            <NavBox bottom={1}>
                <FillerOne />
                <FillerTwo />
                <NavWrapper>
                    <StyledIconButton
                        bottom={1}
                        onClick={moveDown}
                        disabled={
                            infoArr[0] === poet?.two[lang][infoArr?.length - 1]
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
                        bottom={1}
                        onClick={moveDown}
                        disabled={
                            infoArr[0] ===
                            poet?.two[lang][poet?.two[lang].length - 1]
                        }
                    >
                        <Arrow>
                            <ArrowForwardIos style={{ marginLeft: '1px' }} />
                        </Arrow>
                    </StyledIconButton>
                    <StyledIconButton
                        onClick={moveUp}
                        disabled={infoArr[0] === poet?.two[lang][0]}
                    >
                        <Arrow>
                            <ArrowForwardIos />
                        </Arrow>
                    </StyledIconButton>
                </div>
            )}
        </BoxTwo>
    );
}
