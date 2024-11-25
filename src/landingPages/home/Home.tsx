import React, { useState, useEffect, useRef } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';

// Helpers
import staticText from '../../miscellaneous/staticTexts.json';

// Services
import { addVisit } from '../../services/request';

// Components
import HomeStepper from '../../components/home/homeStepper/HomeStepper';
import BigCircle from '../../components/home/imageBalls/BigCircle';
import MediumCircle from '../../components/home/imageBalls/MediumCircle';
import SmallCircle from '../../components/home/imageBalls/SmallCircle';

// Types
import { TitleType, HomeStepperType } from './types/componentTypes';

// Styled components
import {
    InnerContainer,
    PageContainer,
    ScrollWrapper,
    Title,
    IconWrapper,
    Line,
    Arrow,
    Circle,
    ImageBallWrapper,
} from './homePageStyles';
import AppLayout from '../../AppLayout';

const Home: React.FC = () => {
    const title = staticText.HOME_SCROLL as TitleType;
    const stepInfo = staticText.HOME_STEPPER as HomeStepperType;
    const containerRef = useRef<HTMLDivElement>(null);
    const { lang, setTitle } = useGlobalData();
    const divRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];
    const [scrollIndicator, setScrollIndicator] = useState<boolean>(true);
    const [opacities, setOpacities] = useState<number[]>([1, 0, 0, 0, 0]);

    const recordVisit = async () => {
        try {
            await addVisit('home');
        } catch (error) {
            console.error('Error recording visit:', error);
        }
    };

    useEffect(() => {
        setTitle(staticText.HEADER);
        recordVisit();

        const handleScroll = () => {
            const containerElement = containerRef.current;
            if (containerElement === null) {
                return;
            }

            const containerRect = containerElement.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerBottom = containerRect.bottom;

            const newOpacities = divRefs.map((ref) => {
                const divElement = ref.current;
                if (divElement === null) {
                    return 0;
                }
                const divRect = divElement.getBoundingClientRect();
                const divTop = divRect.top;
                const divBottom = divRect.bottom;

                if (divBottom < containerTop || divTop > containerBottom) {
                    return 0;
                } else {
                    setScrollIndicator(false);

                    const opacity =
                        1 -
                        Math.abs(containerTop - divTop) /
                            (0.8 * containerRect.height);
                    return opacity;
                }
            });

            setOpacities(newOpacities);
        };

        const containerElement = containerRef.current;
        if (containerElement) {
            containerElement.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (containerElement) {
                containerElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <AppLayout>
            <PageContainer>
                {scrollIndicator && (
                    <ScrollWrapper>
                        <Title>{title[lang]}</Title>
                        <IconWrapper>
                            <Line />
                            <Arrow />
                            <Circle />
                        </IconWrapper>
                    </ScrollWrapper>
                )}
                <InnerContainer>
                    <HomeStepper
                        containerRef={containerRef}
                        divRefs={divRefs}
                        opacities={opacities}
                    />
                    {stepInfo?.map((entry, i) => {
                        return (
                            <ImageBallWrapper key={`${title[lang]}_${i}`}>
                                <BigCircle
                                    opacities={opacities}
                                    index={i}
                                    entry={entry}
                                />
                                <MediumCircle
                                    opacities={opacities}
                                    index={i}
                                    entry={entry}
                                />
                                <SmallCircle
                                    opacities={opacities}
                                    index={i}
                                    entry={entry}
                                />
                            </ImageBallWrapper>
                        );
                    })}
                </InnerContainer>
            </PageContainer>
        </AppLayout>
    );
};

export default Home;