import React, { useState, useEffect } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
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
import Alert from '../../components/common/alert/Alert';
import ArticlePageFirstContainer from '../../components/common/pageWrapper/ArticlePageFirstContainer';
import PageInnerContainer from '../../components/common/pageInnerContainer/PageInnerContainer';

const GenericArticlePage: React.FC<{ page: string }> = ({ page }) => {
    const { id } = useParams();
    const location = useLocation();
    const { lang, setIsLoading } = useGlobalData();
    const [data, setData] = useState<ArticleData>();
    const [error, setError] = useState<ErrorResponse>();
    const isTablet = useMediaQuery({
        query: `(min-device-width: 481px) and (max-device-width: 1024px)`,
    });
    const topLeftRad = isTablet ? 2.5 : 4;

    const fetchData = async () => {
        try {
            setIsLoading(true);

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
                setIsLoading(false);
            }, 550);

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
            {data ? (
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
                                    topLeftRad={topLeftRad}
                                />
                            );
                        })}
                        <Sources data={data.references[lang]} />
                    </PageInnerContainer>
                </ArticlePageFirstContainer>
            ) : null}
        </>
    );
};

export default GenericArticlePage;
