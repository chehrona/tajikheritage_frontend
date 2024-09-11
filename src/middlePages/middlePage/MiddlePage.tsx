import React, { useEffect, useState } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/useGlobalData';
import { useLocation } from 'react-router-dom';
import { useSetHeader } from '../../hooks/useSetHeader';

// Services
import { requestMiddlePage } from '../../services/request';

// Components
import PoetCard from '../../components/poet/poetCard/PoetCard';
import SquareCard from '../../components/common/squareCard/SquareCard';
import PageTransition from '../../components/common/pageTransition/Transition';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import SearchBar from '../../components/common/searchBar/SearchBar';
import LandingPageFirstContainer from '../../components/common/pageWrapper/LandingPageFirstContainer';

// Types
import { CardType } from './types/componentTypes';

// Styled components
import { InnerBoxContainer } from './middlePageStyles';

const MiddlePage: React.FC<{ page: string }> = ({ page }) => {
    const location = useLocation();
    const { lang } = useGlobalData();
    const [items, setItems] = useState<CardType[]>([]);
    const [allItems, setAllItems] = useState<CardType[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        try {
            setLoading(true);
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
                setLoading(false);
            }, 400);

            return () => clearTimeout(timer);
        }
    };

    // Set a title
    useSetHeader(page, 'middle', allItems);

    useEffect(() => {
        // Get data
        fetchData();
    }, [location.pathname, lang]);

    return (
        <>
            <Loader inProp={loading}>
                {!loading && items.length > 0 ? (
                    <PageTransition inProp={!loading}>
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
                    </PageTransition>
                ) : // !loading &&
                // error[lang]?.length > 0 && (
                //     <Alert message={error} type={'error'} />
                // )
                null}
            </Loader>
        </>
    );
};

export default MiddlePage;
