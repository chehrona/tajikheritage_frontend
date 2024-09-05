import React, { useState, useEffect } from 'react';

// Hooks
import { useLocation, useParams } from 'react-router-dom';
import { useGlobalData } from '../../hooks/useGlobalData';
import { useMediaQuery } from 'react-responsive';

// Types
import { ErrorTypes, ErrorResponse } from '../../appTypes';
import { ArticleData } from './types/componentTypes';

// Services
import { requestArticleInfo } from '../../services/request';

// Components
import TextSegment from '../../components/common/articleTextSegment/TextSegment';
import Sources from '../../components/common/sources/Sources';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import TextListContainer from '../../components/common/textListContainer/TextListContainer';
import PageFirstContainer from '../../components/common/pageFirstContainer/PageFirstContainer';

const GenericArticlePage: React.FC<{ page: string }> = ({ page }) => {
    const { id } = useParams();
    const location = useLocation();
    const { lang } = useGlobalData();
    const [data, setData] = useState<ArticleData>();
    const [error, setError] = useState<ErrorResponse>();
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        try {
            setLoading(true);

            if (!id) {
                return;
            }

            const data = await requestArticleInfo(id, page);
            setData(data);
        } catch (error: unknown) {
            const customError = error as ErrorTypes;
            console.log(error, 'error *** ');

            if (customError.response) {
                if (
                    customError.response.status === 404 ||
                    customError.response.status === 500
                ) {
                    // setError(customError.response.data.message);
                }
            }
        } finally {
            setLoading(false);
        }
    };

    // Set page title
    // useHeader(page, data);

    useEffect(() => {
        // Get data
        fetchData();
    }, [location.pathname]);

    return (
        <>
            <Loader inProp={loading} />
            {!loading && data ? (
                <Fade inProp={!loading}>
                    <PageFirstContainer>
                        <TextListContainer height={40}>
                            {data.desc[lang].map((entry, i) => {
                                return (
                                    <TextSegment
                                        i={i}
                                        key={`${data?.name[lang]}_${i}`}
                                        reverse={i % 2 > 0}
                                        data={entry}
                                        title={data.name[lang]}
                                        noBorder={
                                            i === data.desc[lang].length - 1 &&
                                            true
                                        }
                                    />
                                );
                            })}
                            <Sources data={data.references[lang]} />
                        </TextListContainer>
                    </PageFirstContainer>
                </Fade>
            ) : // !loading &&
            // error[lang].length > 0 && (
            //     <Alert message={error} type={'error'} />
            // )
            null}
        </>
    );
};

export default GenericArticlePage;
