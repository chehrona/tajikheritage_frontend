import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';
import { useSetHeader } from '../../hooks/useSetHeader';

// Services
import { requestPage } from '../../services/request';

// Components
import AppLayout from '../../AppLayout';
import SectionCard from '../../components/common/sectionCard/SectionCard';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import LandingPageFirstContainer from '../../components/common/pageWrapper/LandingPageFirstContainer';

// Types
import { SectionDetails } from '../../components/common/sectionCard/types/componentTypes';

// Styled components
import { SectionBoxContainer } from './landingPageStyles';

const LandingPage: React.FC<{ page: string }> = ({ page }) => {
    const { pathname } = useLocation();
    const { lang, setIsLoading } = useGlobalData();
    const [sections, setSections] = useState<SectionDetails[]>([]);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            setIsLoading(true);
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
                setIsLoading(false);
            }, 550);

            return () => clearTimeout(timer);
        }
    };

    // Set page title
    useSetHeader(page, 'landing', sections);

    useEffect(() => {
        // Get data
        fetchData();
    }, [pathname]);

    console.log(sections, 'sections');

    return (
        <>
            <AppLayout>
                {sections.length > 0 ? (
                    <LandingPageFirstContainer>
                        <SectionBoxContainer
                            $center={sections.length % 3 === 0}
                        >
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
            </AppLayout>
        </>
    );
};

export default LandingPage;
