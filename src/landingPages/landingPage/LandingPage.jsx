import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';

// Services
import { requestPage } from '../../services/request';

// Components
import SectionCard from '../../components/common/sectionCard/SectionCard';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';

// Styled components
import { PageContainer, SectionBoxContainer } from './landingPageStyles';

function LandingPage({ page }) {
    const location = useLocation();
    const { lang, title, setTitle } = useGlobalData();
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestPage(page);
            setSections(data[0].sections);

            let tempHeader = { ...title };
            for (const key in title) {
                let titleArr = [...title[key]];

                // New title
                const newItem = [`${data[0].header[key].toUpperCase()}`, ''];

                titleArr[1] = newItem;

                tempHeader[key] = titleArr;
            }

            setTitle(tempHeader);
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
    }, [location.pathname, lang]);

    return (
        <>
            <Loader inProp={loading} />
            {!loading && sections.length > 0 ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <SectionBoxContainer center={sections.length % 3 === 0}>
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
                !loading &&
                error[lang]?.length > 0 && (
                    <Alert message={error} type={'error'} />
                )
            )}
        </>
    );
}

export default LandingPage;
