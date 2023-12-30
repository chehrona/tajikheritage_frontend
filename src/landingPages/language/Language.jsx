import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetLang } from "../../App";

import { requestPage } from "../../services/request";

import PoetCard from '../../components/poet/poetCard/PoetCard';
import Fade from '../../components/common/transition/Transition';
import Loader from "../../components/common/loader/Loader";

import { PageContainer, PoetBoxContainer } from './languagePageStyles';

function Language() {
    const location = useLocation();
    const { setLang } = useSetLang();
    const [poets, setPoets] = useState([]);
    const [loading, setLoading] = useState(0);

    const fetchData = async () => {
        try {
            setLoading(1);
            const data = await requestPage("language");
            setPoets(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(0);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();

        if (location.search.length) {
            setLang(location.search.substring(1));
        }
    }, []);

    return (
        <>
            <Loader inProp={loading} />
            {poets && (
                <Fade inProp={!loading}>
                    <PageContainer justify={poets?.length}>
                        <PoetBoxContainer>
                            {poets?.map((poet, i) => {
                                return (<PoetCard key={i} poet={poet} i={i} />);
                            })}
                        </PoetBoxContainer>
                    </PageContainer>
                </Fade>
            )}
        </>
    );
}

export default Language;