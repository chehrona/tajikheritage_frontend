import React from 'react';
import {
    MainContainer,
    TopNode,
    LeftNode,
    RightNode,
    BottomNode,
    TextContainer,
} from './languageBoxStyles';

const LanguageBox: React.FC<{
    name: string;
    index: number;
    x: number;
    y: number;
    nodes: { top: boolean; bottom: boolean; left: boolean; right: boolean };
}> = ({ name, index, x, y, nodes }) => {
    return (
        <MainContainer key={index} $x={x} $y={y} $empty={name.length === 0}>
            {nodes.top ? <TopNode /> : null}
            {nodes.right ? <RightNode /> : null}
            {nodes.left ? <LeftNode /> : null}
            {nodes.bottom ? <BottomNode /> : null}
            <TextContainer $empty={name.length === 0}>
                <div>{name}</div>
            </TextContainer>
        </MainContainer>
    );
};

export default LanguageBox;
