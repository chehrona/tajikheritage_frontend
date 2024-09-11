import React, { useState, useEffect } from 'react';

// Hooks
import { useLocation, useParams } from 'react-router-dom';
import { useGlobalData } from '../../hooks/useGlobalData';
import { useSetHeader } from '../../hooks/useSetHeader';

// Types
import { ErrorTypes, ErrorResponse } from '../../appTypes';
import { ArticleData } from './types/componentTypes';

// Services
import { requestArticleInfo } from '../../services/request';

// Components
import TextSegment from '../../components/common/articleTextSegment/TextSegment';
import Sources from '../../components/common/sources/Sources';
import PageTransition from '../../components/common/pageTransition/Transition';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import ArticlePageFirstContainer from '../../components/common/pageWrapper/ArticlePageFirstContainer';
import PageInnerContainer from '../../components/common/pageInnerContainer/PageInnerContainer';

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
            const timer = setTimeout(() => {
                setLoading(false);
            }, 400);

            return () => clearTimeout(timer);
        }
    };

    // Set page title
    useSetHeader(page, 'generic', data);

    useEffect(() => {
        // Get data
        fetchData();
    }, [location.pathname]);

    return (
        <>
            <Loader inProp={loading} />
            {!loading && data ? (
                <PageTransition inProp={!loading}>
                    <ArticlePageFirstContainer>
                        <PageInnerContainer height={40}>
                            {data.desc[lang].map((entry, i) => {
                                return (
                                    <TextSegment
                                        i={i}
                                        key={`${data?.name[lang]}_${i}`}
                                        reverse={i % 2 > 0}
                                        data={entry}
                                        title={data.name[lang]}
                                    />
                                );
                            })}
                            <Sources data={data.references[lang]} />
                        </PageInnerContainer>
                    </ArticlePageFirstContainer>
                </PageTransition>
            ) : // !loading &&
            // error[lang].length > 0 && (
            //     <Alert message={error} type={'error'} />
            // )
            null}
        </>
    );
};

export default GenericArticlePage;
