import React, { useEffect, useState } from 'react';

import { requestPage } from '../../services/request';

import SectionCard from '../../components/common/sectionCard/SectionCard';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';

import { PageContainer, SectionBoxContainer } from './landingPageStyles';

function LandingPage({ page }) {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestPage(page);
            setSections(data[0].sections);
        } catch (error) {
            if (error.response) {
                if (
                    error.response.status === 404 ||
                    error.response.status === 500
                ) {
                    setError(error.response.data.message);
                }
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();
    }, []);

    return (
        <>
            <Loader inProp={loading} />
            {!loading && sections.length > 0 ? (
                <Fade inProp={!loading}>
                    <PageContainer justify={sections?.length}>
                        <SectionBoxContainer>
                            {sections?.map((section, i) => {
                                return (
                                    <SectionCard
                                        key={i}
                                        section={section}
                                        i={i}
                                        link={section?.link}
                                    />
                                );
                            })}
                        </SectionBoxContainer>
                    </PageContainer>
                </Fade>
            ) : (
                !loading && <Alert message={error} />
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

export default LandingPage;
