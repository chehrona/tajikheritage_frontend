import React from 'react';

// Styles
import { SvgContainer, SliceGroup, size, CenterImage } from './pieChartStyles';
import { PieChartProps } from './types/componentTypes';

const cx = size / 2;
const cy = size / 2;
const outerRadius = size / 2;
const innerRadius = outerRadius * 0.35;

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

const PieChart: React.FC<PieChartProps> = ({
    signs,
    setIndex,
    setShowSignInfo,
}) => {
    const sliceAngle = 30;
    const gapAngle = 0.5;

    const handleClick = (i: number) => {
        setIndex(i);

        setShowSignInfo(true);
    };

    console.log(signs, 'signs');

    return (
        <SvgContainer viewBox={`0 0 ${size} ${size}`}>
            <CenterImage
                href={`${process.env.PUBLIC_URL}/customAssets/center.png`}
                x={cx - innerRadius}
                y={cy - innerRadius}
                width={innerRadius * 2}
                height={innerRadius * 2}
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

            {signs.map((sign, i) => {
                const borderStartAngle = i * sliceAngle;
                const borderEndAngle = (i + 1) * sliceAngle;
                const fillStartAngle = borderStartAngle + gapAngle / 2;
                const fillEndAngle = borderEndAngle - gapAngle / 2;

                const midAngle = (fillStartAngle + fillEndAngle) / 2;
                const midAngleRad = toRadians(midAngle);

                const hoverDistance = 15;
                const translateX = hoverDistance * Math.cos(midAngleRad);
                const translateY = hoverDistance * Math.sin(midAngleRad);

                const imageSize = size / 7;
                const midRadius = (outerRadius + innerRadius) / 2;
                const centerX = cx + midRadius * Math.cos(midAngleRad);
                const centerY = cy + midRadius * Math.sin(midAngleRad);

                const x = centerX - imageSize / 2;
                const y = centerY - imageSize / 1.5;

                const clipPathId = `clip-${i}`;

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
                                outerRadius,
                                innerRadius,
                            )}
                            fill="var(--primary-black-color)"
                        />
                        <image
                            href={process.env.REACT_APP_BASE_URL + sign.img.src}
                            clipPath={`url(#${clipPathId})`}
                            x={x}
                            y={y}
                            width={imageSize}
                            height={imageSize}
                            transform={`rotate(${sign.img.angle}, ${centerX}, ${centerY})`}
                        />
                    </SliceGroup>
                );
            })}
        </SvgContainer>
    );
};

export default PieChart;
