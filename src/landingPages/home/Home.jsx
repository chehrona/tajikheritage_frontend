import React, { useState, useEffect, useRef } from 'react';

// Hooks
import { useGlobalData } from '../../App';

// Helpers
import { header } from '../../components/common/header/helper';
import scrollText from '../../miscellanious/staticTexts.json';
import { stepInfo } from '../../components/home/homeStepper/helper';

// Services
import { addVisit } from '../../services/request';

// Components
import HomeStepper from '../../components/home/homeStepper/HomeStepper';
import ImageBall from '../../components/home/imageBall/ImageBall';

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
} from './homePageStyles';

function Home() {
    const containerRef = useRef(null);
    const { lang, setTitle } = useGlobalData();
    const divRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];
    const [scrollIndicator, setScrollIndicator] = useState(true);
    const [opacities, setOpacities] = useState([1, 0, 0, 0, 0]);

    const recordVisit = async () => {
        try {
            await addVisit('home');
        } catch (error) {
            console.error('Error recording visit:', error);
        }
    };

    useEffect(() => {
        setTitle(header);
        recordVisit();
        // Scrolling
        const handleScroll = () => {
            const containerRect = containerRef.current.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerBottom = containerRect.bottom;

            const newOpacities = divRefs.map((ref) => {
                const divRect = ref.current.getBoundingClientRect();
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

        containerRef.current.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <PageContainer>
            {scrollIndicator && (
                <ScrollWrapper>
                    <Title>{scrollText.HOME_SCROLL[lang]}</Title>
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
                        <ImageBall
                            key={i}
                            entry={entry}
                            index={i}
                            opacities={opacities}
                        />
                    );
                })}
            </InnerContainer>
        </PageContainer>
    );
}

export default Home;
