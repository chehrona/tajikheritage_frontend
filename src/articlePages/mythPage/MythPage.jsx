import React, { useState, useEffect } from 'react';

// Hooks
import { useParams } from 'react-router-dom';
import { useGlobalData } from '../../App';

// Services
import { requestArticleInfo } from '../../services/request';

// Components
import BoxOne from '../../components/myths/mythIntro/FirstBox';
import BoxTwo from '../../components/myths/mythIntro/SecondBox';
import Sources from '../../components/common/sources/Sources';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';

// Styled components
import { PageContainer, TextContainer } from './mythPageStyles';

export default function MythPage({ page }) {
    const { id } = useParams();
    const { lang } = useGlobalData();
    const [myth, setMyth] = useState();
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestArticleInfo(id, page);
            setMyth(data);
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
            {!loading && myth ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <TextContainer>
                            <BoxOne
                                myth={myth.desc[lang][0]}
                                title={myth.name[lang]}
                                topLeftRad={4}
                            />
                            <BoxTwo myth={myth.desc[lang][1]} />
                            <BoxOne myth={myth.desc[lang][2]} />
                            <BoxTwo myth={myth.desc[lang][3]} />
                            <BoxOne myth={myth.desc[lang][4]} />
                            <BoxTwo myth={myth.desc[lang][5]} noBorder={1} />
                            <Sources
                                data={myth.references[lang]}
                                color={'#dedbdb'}
                                title={'#fcf6e9'}
                                background={'#0F0A00'}
                            />
                        </TextContainer>
                    </PageContainer>
                </Fade>
            ) : (
                !loading && <Alert message={error} />
            )}
        </>
    );
}
