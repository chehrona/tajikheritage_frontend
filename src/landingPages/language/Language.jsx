import React, { useEffect, useState } from 'react';
import { useSetLang } from '../../App';
import { useLocation } from 'react-router-dom';

import { requestPage } from "../../services/request";

import SectionCard from '../../components/common/sectionCard/SectionCard';
import Fade from '../../components/common/transition/Transition';
import Loader from "../../components/common/loader/Loader";

import { PageContainer, SectionBoxContainer } from './languagePageStyles';

function Language() {
    const location = useLocation();
    const { setTitle, lang } = useSetLang();
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestPage("language");
            setSections(data[0].sections);
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
        if (sections) {
            setTitle({
                one: lang === 'us' ? '<i>Language & Literature</i>' : (lang === 'ru' ? '<i>Язык и литература</i>' : '<i>Забон ва адабиёт</i>'),
                two: ''
            });
        }
    }, [lang, location.pathname, sections]);

    return (
        <>
            <Loader inProp={loading} />
            {sections && (
                <Fade inProp={!loading}>
                    <PageContainer justify={sections?.length}>
                        <SectionBoxContainer>
                            {sections?.map((section, i) => {
                                return (<SectionCard key={i} section={section} i={i} link={section?.link} />);
                            })}
                        </SectionBoxContainer>
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

export default Language;