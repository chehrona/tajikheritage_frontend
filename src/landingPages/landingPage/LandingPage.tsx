import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';
import { useSetHeader } from '../../hooks/useSetHeader';

// Services
import { requestPage } from '../../services/request';

// Components
import SectionCard from '../../components/common/sectionCard/SectionCard';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import LandingPageFirstContainer from '../../components/common/pageWrapper/LandingPageFirstContainer';

// Types
import { SectionDetails } from '../../components/common/sectionCard/types/componentTypes';

// Styled components
import { SectionBoxContainer } from './landingPageStyles';

const LandingPage: React.FC<{ page: string }> = ({ page }) => {
    const location = useLocation();
    const { lang } = useGlobalData();
    const [sections, setSections] = useState<SectionDetails[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestPage(page);
            setSections(data.sections);
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
            const timer = setTimeout(() => {
                setLoading(false);
            }, 400);

            return () => clearTimeout(timer);
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
            {!loading ? (
                <LandingPageFirstContainer>
                    <SectionBoxContainer $center={sections.length % 3 === 0}>
                        {sections?.map((section, i) => {
                            return (
                                <SectionCard
                                    key={section.cardTitle[lang]}
                                    section={section}
                                    link={section?.link}
                                />
                            );
                        })}
                    </SectionBoxContainer>
                </LandingPageFirstContainer>
            ) : null}
        </>
    );
};

export default LandingPage;
