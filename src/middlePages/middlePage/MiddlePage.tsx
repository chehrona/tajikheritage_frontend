import React, { useEffect, useState } from 'react';

// Hooks
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
    const [items, setItems] = useState<CardType[]>([]);
    const [allItems, setAllItems] = useState<CardType[]>([]);
    const [error, setError] = useState<number | null>(null);

    const fetchData = async () => {
        try {
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
        }
    };

    // Set a title
    useSetHeader(page, 'middle');

    useEffect(() => {
        // Get data
        fetchData();
    }, [pathname]);

    return (
        <React.Fragment>
            {error === 404 ? <PageNotFound /> : null}
            <AppLayout>
                <LandingPageFirstContainer>
                    {items.length > 0 ? (
                        <React.Fragment>
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
                        </React.Fragment>
                    ) : null}
                </LandingPageFirstContainer>
            </AppLayout>
        </React.Fragment>
    );
};

export default MiddlePage;
