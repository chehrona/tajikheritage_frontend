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
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import SearchBar from '../../components/common/searchBar/SearchBar';

// Types
import { Item } from './types/componentTypes';

// Styled components
import { PageContainer, InnerBoxContainer } from './middlePageStyles';

const MiddlePage: React.FC<{ page: string }> = ({ page }) => {
    const location = useLocation();
    const { lang } = useGlobalData();
    const [items, setItems] = useState<Item[]>([]);
    const [allItems, setAllItems] = useState<Item[]>([]);
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
            setLoading(false);
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
            <Loader inProp={loading} />
            {!loading && items.length > 0 ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <SearchBar
                            items={items}
                            setItems={setItems}
                            allItems={allItems}
                        />
                        <InnerBoxContainer $center={items.length % 3 === 0}>
                            {items.map((item, i) =>
                                page.includes('poets') ? (
                                    <PoetCard key={item.id} poet={item} i={i} />
                                ) : (
                                    <SquareCard
                                        key={item.id}
                                        item={item}
                                        i={i}
                                    />
                                ),
                            )}
                        </InnerBoxContainer>
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

export default MiddlePage;
