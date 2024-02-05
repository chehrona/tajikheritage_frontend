import React, { useEffect, useState } from 'react';
import { useSetLang } from '../../App';
import { useLocation } from 'react-router-dom';

import { requestMiddlePage } from "../../services/request";

import PoetCard from '../../components/poet/poetCard/PoetCard';
import Fade from '../../components/common/transition/Fade';
import Loader from "../../components/common/loader/Loader";

import { PageContainer, PoetBoxContainer } from './poetsPageStyles';

function PoetsPage() {
    const location = useLocation();
    const { setTitle, lang } = useSetLang();
    const [poets, setPoets] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestMiddlePage("language/poets");
            setPoets(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();
    }, []);

    useEffect(() => {
        if (poets) {
            setTitle({
                one: lang === 'us' ? '<i>Poets & writers</i>' : (lang === 'ru' ? '<i>Поэты и писатели</i>' : '<i>Шоиру нависандагон</i>'),
                two: ''
            });
        }
    }, [lang, location.pathname]);

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
        // <TempPageContainer>
        //     <TempTitle>
        //         {
        //             lang === "us" ? "Exciting updates are on the way!" : (
        //             lang === "ru" ? "Обновления уже в пути!" : 
        //             "Навигариҳо дар роҳ ҳастанд!")
        //         }
        //     </TempTitle>
        //     <TempImg src={'/loader.png'} />
        // </TempPageContainer>
    );
}

export default PoetsPage;