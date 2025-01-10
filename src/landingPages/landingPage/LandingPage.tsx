import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';
import { useSetHeader } from '../../hooks/useSetHeader';
import { useToasts } from '../../hooks/useToasts';

// Services
import { requestPage } from '../../services/request';

// Components
import AppLayout from '../../AppLayout';
import SectionCard from '../../components/common/sectionCard/SectionCard';
import LandingPageFirstContainer from '../../components/common/pageWrapper/LandingPageFirstContainer';
import PageNotFound from '../../errorPages/pageNotFound/PageNotFound';

// Types
import { ErrorResponse } from '../../appTypes';
import { SectionDetails } from '../../components/common/sectionCard/types/componentTypes';

// Styled components
import { SectionBoxContainer } from './landingPageStyles';

const LandingPage: React.FC<{ page: string }> = ({ page }) => {
    const { pathname } = useLocation();
    const { showToast } = useToasts();
    const { lang, setIsLoading } = useGlobalData();
    const [sections, setSections] = useState<SectionDetails[]>([]);
    const [error, setError] = useState<number | null>(null);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const data = await requestPage(page);
            setSections(data.sections);
        } catch (error) {
            const customError = error as ErrorResponse;

            if (customError.status === 404) {
                setError(404);
            } else if (customError.status === 500) {
                showToast('E_500', 'error', page);
            }
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

    return (
        <>
            {error === 404 ? <PageNotFound /> : null}
            <AppLayout>
                <LandingPageFirstContainer>
                    {sections.length > 0 ? (
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
                    ) : null}
                </LandingPageFirstContainer>
            </AppLayout>
        </>
    );
};

export default LandingPage;
