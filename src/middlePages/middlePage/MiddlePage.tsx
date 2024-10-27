import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { Outlet, useLocation } from 'react-router-dom';
import { useSetHeader } from '../../hooks/useSetHeader';

// Services
import { requestMiddlePage } from '../../services/request';

// Components
import AppLayout from '../../AppLayout';
import PoetCard from '../../components/poet/poetCard/PoetCard';
import SquareCard from '../../components/common/squareCard/SquareCard';
import Alert from '../../components/common/alert/Alert';
import SearchBar from '../../components/common/searchBar/SearchBar';
import LandingPageFirstContainer from '../../components/common/pageWrapper/LandingPageFirstContainer';

// Types
import { CardType } from './types/componentTypes';

// Styled components
import { InnerBoxContainer } from './middlePageStyles';

const MiddlePage: React.FC<{ page: string }> = ({ page }) => {
    const { pathname } = useLocation();
    const { setIsLoading } = useGlobalData();
    const [items, setItems] = useState<CardType[]>([]);
    const [allItems, setAllItems] = useState<CardType[]>([]);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const data = await requestMiddlePage(page);

            setItems(data);
            setAllItems(data);
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

    // Set a title
    useSetHeader(page, 'middle');

    useEffect(() => {
        // Get data
        fetchData();
    }, [pathname]);

    return (
        <>
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
                        <Outlet />
                    </LandingPageFirstContainer>
                ) : null}
            </AppLayout>
        </>
    );
};

export default MiddlePage;
