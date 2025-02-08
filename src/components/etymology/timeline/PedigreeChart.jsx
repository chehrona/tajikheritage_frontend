import React from 'react';
import LanguageBox from './LanguageBox';
import { BOX_HEIGHT, BOX_WIDTH } from './languageBoxStyles';
import { data, languages } from './data';
import { SvgContainer } from './timelineStyles';

const PedigreeChart = () => {
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
            <div className="period_div">
                <div className="times">
                    {languages.map((box, boxIndex) => (
                        <LanguageBox
                            key={`box-${boxIndex}`}
                            text={box.name}
                            index={boxIndex}
                            x={box.x}
                            y={box.y}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PedigreeChart;
