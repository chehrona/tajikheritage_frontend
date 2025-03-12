import React, { useState, useEffect } from 'react';

// Slice images
import staticData from '../../../../miscellaneous/history/calendarPage.json';

// Types
import { PieChartProps } from './types/componentTypes';

// Styles
import {
    SvgContainer,
    SliceGroup,
    CenterImage,
    SignTitle,
} from './pieChartStyles';

const PieChart: React.FC<PieChartProps> = ({
    signs,
    setIndex,
    setShowSignInfo,
}) => {
    const [size, setSize] = useState(window.innerHeight / 1.15);

    useEffect(() => {
        const updateSize = () => setSize(window.innerHeight / 1.15);
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const cx = size / 2;
    const cy = size / 2;
    const outerRadius = size / 2;
    const innerRadius = outerRadius * 0.35;
    const titleOuterRadius = outerRadius * 0.9;
    const titleInnerRadius = titleOuterRadius - 1;

    const toRadians = (deg: number) => (deg * Math.PI) / 180;

    const describeArc = (
        startAngle: number,
        endAngle: number,
        radius = outerRadius,
    ) => {
        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

        const x1 = cx + radius * Math.cos(toRadians(startAngle));
        const y1 = cy + radius * Math.sin(toRadians(startAngle));

        const x2 = cx + radius * Math.cos(toRadians(endAngle));
        const y2 = cy + radius * Math.sin(toRadians(endAngle));

        return { x1, y1, x2, y2, largeArcFlag };
    };

    const buildArcPath = (
        startAngle: number,
        endAngle: number,
        outerR: number,
        innerR: number,
    ) => {
        const { x1, y1, x2, y2, largeArcFlag } = describeArc(
            startAngle,
            endAngle,
            outerR,
        );
        const {
            x1: x4,
            y1: y4,
            x2: x3,
            y2: y3,
        } = describeArc(startAngle, endAngle, innerR);

        return [
            `M ${x1} ${y1}`,
            `A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            `L ${x3} ${y3}`,
            `A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${x4} ${y4}`,
            'Z',
        ].join(' ');
    };

    const sliceAngle = 30;
    const gapAngle = 0.25;

    const handleClick = (i: number) => {
        setIndex(i);
        setShowSignInfo(true);
    };

    return (
        <SvgContainer viewBox={`0 0 ${size} ${size}`} $size={size}>
            <CenterImage
                href={`${process.env.PUBLIC_URL}/customAssets/calendar/mūljar.png`}
                x={cx - innerRadius}
                y={cy - innerRadius}
                width={innerRadius * 2}
                height={innerRadius * 2}
                transform={`rotate(90, ${cx}, ${cy})`}
            />
            <defs>
                {signs.map((sign, i) => {
                    const borderStartAngle = i * sliceAngle;
                    const borderEndAngle = (i + 1) * sliceAngle;
                    const fillStartAngle = borderStartAngle + gapAngle / 2;
                    const fillEndAngle = borderEndAngle - gapAngle / 2;
                    const clipPathId = `clip-${i}`;
                    return (
                        <clipPath id={clipPathId} key={clipPathId}>
                            <path
                                d={buildArcPath(
                                    fillStartAngle,
                                    fillEndAngle,
                                    outerRadius,
                                    innerRadius,
                                )}
                            />
                        </clipPath>
                    );
                })}
            </defs>

            {staticData.MULCHAR_CHART_IMGS.map((image, i) => {
                const borderStartAngle = i * sliceAngle;
                const borderEndAngle = (i + 1) * sliceAngle;
                const fillStartAngle = borderStartAngle + gapAngle / 2;
                const fillEndAngle = borderEndAngle - gapAngle / 2;

                const midAngle = (fillStartAngle + fillEndAngle) / 2;
                const midAngleRad = toRadians(midAngle);

                const hoverDistance = 15;
                const translateX = hoverDistance * Math.cos(midAngleRad);
                const translateY = hoverDistance * Math.sin(midAngleRad);

                const imageSize = size / 6.5;
                const midRadius = (innerRadius + outerRadius) / 2.05;

                const centerX = cx + midRadius * Math.cos(midAngleRad);
                const centerY = cy + midRadius * Math.sin(midAngleRad);

                const x = centerX - imageSize / 2;
                const y = centerY - imageSize / 1.5;

                // Icons
                const iconSize = size / 21;
                const iconCenterX =
                    cx + (midRadius / 1.575) * Math.cos(midAngleRad);
                const iconCenterY =
                    cy + (midRadius / 1.575) * Math.sin(midAngleRad);

                const iconX = iconCenterX - iconSize / 2;
                const iconY = iconCenterY - iconSize / 3;

                // Text
                const textRadius = outerRadius - 17;
                const startX =
                    cx + textRadius * Math.cos(toRadians(borderStartAngle));
                const startY =
                    cy + textRadius * Math.sin(toRadians(borderStartAngle));
                const endX =
                    cx + textRadius * Math.cos(toRadians(borderEndAngle));
                const endY =
                    cy + textRadius * Math.sin(toRadians(borderEndAngle));

                const pathId = `textPath-${i}`;

                return (
                    <SliceGroup
                        key={i}
                        onClick={() => handleClick(i)}
                        x={translateX}
                        y={translateY}
                        cx={cx}
                        cy={cy}
                    >
                        <path
                            d={buildArcPath(
                                borderStartAngle,
                                borderEndAngle,
                                outerRadius,
                                innerRadius,
                            )}
                            fill="var(--primary-gold-color)"
                        />
                        <path
                            d={buildArcPath(
                                fillStartAngle,
                                fillEndAngle,
                                titleInnerRadius,
                                innerRadius,
                            )}
                            fill="var(--primary-black-color)"
                        />
                        <path
                            d={buildArcPath(
                                fillStartAngle,
                                fillEndAngle,
                                titleOuterRadius,
                                outerRadius,
                            )}
                            fill="var(--primary-black-color)"
                        />
                        <image
                            href={
                                process.env.REACT_APP_BASE_URL + image.img.src
                            }
                            x={x}
                            y={y}
                            width={imageSize}
                            height={imageSize}
                            transform={`rotate(${image.img.angle}, ${centerX}, ${centerY})`}
                        />
                        <defs>
                            <path
                                id={pathId}
                                d={`
                        M ${startX} ${startY} 
                        A ${textRadius} ${textRadius} 0 0 1 ${endX} ${endY}
                    `}
                                fill="none"
                            />
                        </defs>
                        <SignTitle
                            fill="var(--primary-gold-color)"
                            textAnchor="middle"
                        >
                            <textPath
                                href={`#${pathId}`}
                                startOffset="50%"
                                dominantBaseline="middle"
                            >
                                {signs[i].info.title}
                            </textPath>
                        </SignTitle>
                    </SliceGroup>
                );
            })}
        </SvgContainer>
    );
};

export default PieChart;
