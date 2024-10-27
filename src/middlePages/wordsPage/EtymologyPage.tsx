import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';
import { useSetHeader } from '../../hooks/useSetHeader';

// Helper
import staticText from '../../miscellaneous/staticTexts.json';

// Services
import { requestMiddlePage } from '../../services/request';

// Components
import AppLayout from '../../AppLayout';
import SquareCard from '../../components/common/squareCard/SquareCard';
import Alert from '../../components/common/alert/Alert';
import LetterStack from '../../components/etymology/letterStack/LetterStack';
import LandingPageFirstContainer from '../../components/common/pageWrapper/LandingPageFirstContainer';

// Types
import { ErrorResponse } from '../../appTypes';
import { CardType } from '../middlePage/types/componentTypes';

// Styled components
import { PageTitle } from './etymologyStyles';
import { SectionBoxContainer } from '../../landingPages/landingPage/landingPageStyles';

const EtymologyPage: React.FC<{ page: string }> = ({ page }) => {
    const location = useLocation();
    const { lang, setIsLoading } = useGlobalData();
    const [items, setItems] = useState<CardType[]>([]);
    const [allItems, setAllItems] = useState<CardType[]>([]);
    const [error, setError] = useState<any>();
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const data = await requestMiddlePage(page);

            setItems(data);
            setAllItems(data);
        } catch (error: unknown) {
            const customError = error as ErrorResponse;

            if (customError.status === 404) {
                setError(404);
            } else if (customError.status === 500) {
                setError(500);
            }
        } finally {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 550);

            return () => clearTimeout(timer);
        }
    };

    // Set page title
    useSetHeader(page, 'middle', allItems);

    useEffect(() => {
        // Get data
        fetchData();
    }, [location.pathname]);

    return (
        <AppLayout>
            {items.length > 0 ? (
                <LandingPageFirstContainer>
                    <PageTitle>{staticText.ETYM_PAGE_HEADER[lang]}</PageTitle>
                    {/* Don't change to search bar, filtering is different */}
                    <LetterStack
                        setItems={setItems}
                        allItems={allItems}
                        isDropdownOpen={isDropdownOpen}
                        setIsDropdownOpen={setIsDropdownOpen}
                    />
                    {!isDropdownOpen && (
                        <SectionBoxContainer $center={items.length % 3 === 0}>
                            {items.map((item, i) => {
                                return <SquareCard key={item.id} data={item} />;
                            })}
                        </SectionBoxContainer>
                    )}
                </LandingPageFirstContainer>
            ) : (
                error !== undefined && <Alert message={error} type={'error'} />
            )}
        </AppLayout>
    );
};

export default EtymologyPage;
