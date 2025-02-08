import React from 'react';
import { MainContainer, BoxText, TextContainer } from './languageBoxStyles';

const LanguageBox: React.FC<{
    text: string;
    index: number;
    x: number;
    y: number;
}> = ({ text, index, x, y }) => {
    return (
        <MainContainer key={index} $x={x} $y={y} $empty={text.length === 0}>
            <TextContainer $empty={text.length === 0}>
                <BoxText>{text}</BoxText>
            </TextContainer>
        </MainContainer>
    );
};

export default LanguageBox;
