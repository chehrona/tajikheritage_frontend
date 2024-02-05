import React, { useEffect, useState } from 'react';
import { useSetLang } from '../../App';
import { useLocation } from 'react-router-dom';

import { requestPage } from "../../services/request";

import MythCard from '../../components/myths/mythCard/MythCard';
import Fade from "../../components/common/transition/Transition";
import Loader from "../../components/common/loader/Loader";
import Alert from "../../components/common/alert/Alert";

import { PageContainer, MythBoxContainer } from './customsPageStyles';

function Customs() {
    const location = useLocation();
    const { setTitle, lang } = useSetLang();
    const [myths, setMyths] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestPage("customs");
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

    useEffect(() => {
        if (myths) {
            setTitle({
                one: lang === 'us' ? '<i>Customs</i>' : (lang === 'ru' ? '<i>Обычаи</i>' : '<i>Расму оин</i>'),
                two: ''
            });
        }
    }, [lang, location.pathname, myths]);

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