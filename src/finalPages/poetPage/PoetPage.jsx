import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { useSetLang } from "../../App";

import { requestPoet } from "../../services/request";

import PoetBio from "../../components/poet/poetBio/PoetBio";
import PoetIntro from "../../components/poet/poetIntro/PoetIntro";
import PoetWorks from "../../components/poet/poetWorks/PoetWorks";
import PoetAwards from "../../components/poet/poetAwards/PoetAwards";
import PoetMovies from "../../components/poet/poetMovies/PoetMovies";
import Sources from "../../components/common/sources/Sources";
import PoetCareer from "../../components/poet/poetCareer/PoetCareer";
import SectionOptions from "../../components/poet/sectionOptions/SectionOptions";
import Loader from "../../components/common/loader/Loader";
import Fade from "../../components/common/transition/Transition";

import { 
    PageContainer,
    PoetContainer,
} from "./poetPageStyles";

export default function PoetPage() {
    const { id } = useParams();
    const { lang } = useSetLang();
    const [poet, setPoet] = useState();
    const [loading, setLoading] = useState(0);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const fetchData = async () => {
        try {
            setLoading(1);
            const data = await requestPoet(id);
            setPoet(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(0);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();
    }, []);

    const scrollToView = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute("data");
        const parent = document.querySelector(".content-container");
        
        if (parent) {
            parent.scrollTo({
                top: document.querySelector(target).offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <Loader inProp={loading} />
            {poet && (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <PoetContainer>
                            <PoetIntro poet={poet} scrollToView={scrollToView} />
                            {isMobile && <SectionOptions poet={poet} scrollToView={scrollToView} />}
                            <PoetBio poet={poet} />
                            <PoetWorks poet={poet?.works} />
                            <PoetMovies poet={poet?.movies} />
                            <PoetCareer points={poet?.career} />
                            <PoetAwards poet={poet?.awards} />
                            <Sources
                                data={poet?.references[lang]}
                                line={'#504221d1'}
                                color={'#dedbdb'}
                                title={'#fcf6e9'}
                                background={'#0F0A00'}
                            />
                        </PoetContainer>
                    </PageContainer>
                </Fade>
            )}
        </>
    ); 
}
