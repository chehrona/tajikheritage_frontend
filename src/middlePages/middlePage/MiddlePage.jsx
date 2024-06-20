import React, { useEffect, useState } from 'react';

import { requestMiddlePage } from '../../services/request';

import SquareCard from '../../components/common/squareCard/SquareCard';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';

import { PageContainer, InnerBoxContainer } from './middlePageStyles';

function MiddlePage({ page }) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestMiddlePage(page);

            setItems(data);
        } catch (error) {
            setError(true);
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
            {items ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <InnerBoxContainer justify={items?.length}>
                            {items?.map((item, i) => {
                                return <SquareCard key={i} item={item} i={i} />;
                            })}
                        </InnerBoxContainer>
                    </PageContainer>
                </Fade>
            ) : (
                error && <Alert />
            )}
        </>
    );
}

export default MiddlePage;
