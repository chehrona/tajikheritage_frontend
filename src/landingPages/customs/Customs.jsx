import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetLang } from "../../App";

import { requestPage } from "../../services/request";

import MythCard from '../../components/myths/mythCard/MythCard';
import Fade from "../../components/common/transition/Transition";
import Loader from "../../components/common/loader/Loader";
import Alert from "../../components/common/alert/Alert";

import { PageContainer, MythBoxContainer } from './customsPageStyles';

function Customs() {
    const location = useLocation();
    const { setLang } = useSetLang();
    const [myths, setMyths] = useState([]);
    const [error, setError] = useState(0);
    const [loading, setLoading] = useState(0);

    const fetchData = async () => {
        try {
            setLoading(1);
            const data = await requestPage("customs");
            setMyths(data);
        } catch (error) {
            setError(1);
        } finally {
            setLoading(0);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();

        if (location.search.length) {
            setLang(location.search.substring(1));
        }
    }, []);

    return (
        <>
            <Loader inProp={loading} />
            {myths ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <MythBoxContainer justify={myths?.length}>
                            {myths?.map((myth, i) => {
                                return (<MythCard key={i} myth={myth} i={i} />);
                            })}
                        </MythBoxContainer>
                    </PageContainer>
                 </Fade>
            ) : (error && <Alert />)}
        </>
    );
}

export default Customs;