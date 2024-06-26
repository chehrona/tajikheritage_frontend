import React, { useEffect, useState } from 'react';

import { requestMiddlePage } from '../../services/request';

import MythCard from '../../components/myths/mythCard/SquareCard';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';

import { PageContainer, MythBoxContainer } from './mythsPageStyles';

function MythsPage() {
    const [myths, setMyths] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestMiddlePage('customs/myths');
            setMyths(data);
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
            {myths ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <MythBoxContainer justify={myths?.length}>
                            {myths?.map((myth, i) => {
                                return <MythCard key={i} myth={myth} i={i} />;
                            })}
                        </MythBoxContainer>
                    </PageContainer>
                </Fade>
            ) : (
                error && <Alert />
            )}
        </>
    );
}

export default MythsPage;
