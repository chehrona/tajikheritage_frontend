import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';
import { useSetHeader } from '../../hooks/useSetHeader';

// Services
import { requestPage } from '../../services/request';

// Components
import SectionCard from '../../components/common/sectionCard/SectionCard';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';

// Types
import { SectionType } from './types/componentTypes';

// Styled components
import { PageContainer, SectionBoxContainer } from './landingPageStyles';

const LandingPage: React.FC<{ page: string }> = ({ page }) => {
    const location = useLocation();
    const { lang } = useGlobalData();
    const [sections, setSections] = useState<SectionType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestPage(page);
            setSections(data[0].sections);
        } catch (error) {
            // if (error.response) {
            //     if (
            //         error.response.status === 404 ||
            //         error.response.status === 500
            //     ) {
            //         setError(error.response.data.message);
            //     }
            // }
        } finally {
            setLoading(false);
        }
    };

    // Set page title
    useSetHeader(page, 'landing', sections);

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
                        <SectionBoxContainer
                            $center={sections.length % 3 === 0}
                        >
                            {sections?.map((section, i) => {
                                return (
                                    <SectionCard
                                        i={i}
                                        key={section._id}
                                        section={section}
                                        link={section?.link}
                                    />
                                );
                            })}
                        </SectionBoxContainer>
                    </PageContainer>
                </Fade>
            ) : // !loading &&
            // error[lang]?.length > 0 && (
            //     <Alert message={error} type={'error'} />
            // )
            null}
        </>
    );
};

export default LandingPage;