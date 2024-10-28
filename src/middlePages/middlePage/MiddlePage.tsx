import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';
import { useSetHeader } from '../../hooks/useSetHeader';
import { useToasts } from '../../hooks/useToasts';

// Services
import { requestMiddlePage } from '../../services/request';

// Components
import AppLayout from '../../AppLayout';
import PoetCard from '../../components/poet/poetCard/PoetCard';
import SquareCard from '../../components/common/squareCard/SquareCard';
import SearchBar from '../../components/common/searchBar/SearchBar';
import LandingPageFirstContainer from '../../components/common/pageWrapper/LandingPageFirstContainer';
import PageNotFound from '../../errorPages/pageNotFound/PageNotFound';

// Types
import { CardType } from './types/componentTypes';
import { ErrorResponse } from '../../appTypes';

// Styled components
import { InnerBoxContainer } from './middlePageStyles';

const MiddlePage: React.FC<{ page: string }> = ({ page }) => {
    const { pathname } = useLocation();
    const { showToast } = useToasts();
    const { setIsLoading } = useGlobalData();
    const [items, setItems] = useState<CardType[]>([]);
    const [allItems, setAllItems] = useState<CardType[]>([]);
    const [error, setError] = useState<number | null>(null);

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
                showToast('E_500', 'error', page);
            }
        } finally {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 550);

            return () => clearTimeout(timer);
        }
    };

    // Set a title
    useSetHeader(page, 'middle');

    useEffect(() => {
        // Get data
        fetchData();
    }, [pathname]);

    return (
        <>
            {error === 404 ? <PageNotFound /> : null}
            <AppLayout>
                {items.length > 0 ? (
                    <LandingPageFirstContainer>
                        <SearchBar
                            items={items}
                            setItems={setItems}
                            allItems={allItems}
                        />
                        <InnerBoxContainer $center={items.length % 3 === 0}>
                            {items.map((item, i) =>
                                page.includes('poets') ? (
                                    <PoetCard key={item.id} poet={item} />
                                ) : (
                                    <SquareCard key={item.id} data={item} />
                                ),
                            )}
                        </InnerBoxContainer>
                    </LandingPageFirstContainer>
                ) : null}
            </AppLayout>
        </>
    );
};

export default MiddlePage;
