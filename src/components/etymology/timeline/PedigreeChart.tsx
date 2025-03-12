import React from 'react';
import LanguageBox from './LanguageBox';
import { languages } from './data';
import { SvgContainer } from './timelineStyles';

const PedigreeChart: React.FC = () => {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                left: '100px',
            }}
        >
            <SvgContainer>
                {languages.map((language, languageIndex) => (
                    <line
                        key={`line-${languageIndex}`}
                        x1={language.connect.x1}
                        y1={language.connect.y1}
                        x2={language.connect.x2}
                        y2={language.connect.y2}
                        stroke="red"
                        strokeWidth="2"
                    />
                ))}
            </SvgContainer>
            {languages.map((box, boxIndex) => (
                <LanguageBox
                    key={`box-${boxIndex}`}
                    name={box.name}
                    index={boxIndex}
                    x={box.x}
                    y={box.y}
                    nodes={box.nodes}
                />
            ))}
        </div>
    );
};

export default PedigreeChart;
