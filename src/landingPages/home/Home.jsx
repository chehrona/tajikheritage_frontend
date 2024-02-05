import React, { useState, useEffect, useRef } from "react";
import { useSetLang } from "../../App";
import { useLocation } from 'react-router-dom';

import { stepInfo } from "./helper";
import { addVisit } from "../../services/request";

import HomeStepper from '../../components/homeStepper/HomeStepper';
import ImageBall from '../../components/imageBall/ImageBall';

import { InnerContainer, PageContainer } from './homePageStyles';

function Home() {
    const location = useLocation();
    const { lang, setTitle } = useSetLang();
    const containerRef = useRef(null);
    const divRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const [opacities, setOpacities] = useState([1, 0, 0, 0, 0]);

    const recordVisit = async () => {
        try {
            await addVisit('home');
        } catch (error) {
            console.error("Error recording visit:", error);
        }
    };

    useEffect(() => {
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
                    const opacity = 1 - (Math.abs(containerTop - divTop) / (0.8 * containerRect.height));
                    return opacity;
                }
            });

            setOpacities(newOpacities);
        }

        containerRef.current.addEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setTitle({
            one: lang === 'us' ? 'THE TAJIKS:' : (lang === 'ru' ? 'ТАДЖИКИ:' : 'ТОҶИКОН:'),
            two: lang === 'us' ? 'Iranians of the East' : (lang === 'ru' ? 'Иранцы Востока' : 'Эрониёни Шарқ')
        });
    }, [lang, location.pathname]);

    return (
        <PageContainer>
            <InnerContainer>
                <HomeStepper containerRef={containerRef} divRefs={divRefs} opacities={opacities} />
                {stepInfo?.map((entry, i) => {
                    return (
                        <ImageBall key={i} entry={entry} index={i} opacities={opacities} />
                    );
                })}
            </InnerContainer>
        </PageContainer>
    );
}

export default Home;