import React, { useEffect, useState } from 'react';

// Services
import { requestMiddlePage } from '../../services/request';

// Components
import SquareCard from '../../components/common/squareCard/SquareCard';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import SearchBar from '../../components/common/searchBar/SearchBar';

// Styles
import { PageContainer, InnerBoxContainer } from './middlePageStyles';

function MiddlePage({ page }) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestMiddlePage(page);

            setItems(data);
        } catch (error) {
            if (error.response) {
                if (
                    error.response.status === 404 ||
                    error.response.status === 500
                ) {
                    setError(error.response.data.message);
                }
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();
    }, []);

    return (
        <>
            <Loader inProp={loading} />
            {!loading && items.length > 0 ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <SearchBar items={items} setItems={setItems} />
                        <InnerBoxContainer justify={items.length}>
                            {items.map((item, i) => (
                                <SquareCard key={i} item={item} i={i} />
                            ))}
                        </InnerBoxContainer>
                    </PageContainer>
                </Fade>
            ) : (
                !loading && error && <Alert message={error} />
            )}
        </>
    );
}

export default MiddlePage;
