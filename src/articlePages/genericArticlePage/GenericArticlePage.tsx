import React, { useState, useEffect } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useLocation, useParams } from 'react-router-dom';
import { useGlobalData } from '../../hooks/useGlobalData';
import { useSetHeader } from '../../hooks/useSetHeader';
import { useToasts } from '../../hooks/useToasts';

// Types
import { ErrorResponse } from '../../appTypes';
import { ArticleData } from './types/componentTypes';

// Services
import { requestArticleInfo } from '../../services/request';

// Pages
import PageNotFound from '../../errorPages/pageNotFound/PageNotFound';

// Components
import AppLayout from '../../AppLayout';
import TextSegment from '../../components/common/articleTextSegment/TextSegment';
import Sources from '../../components/common/sources/Sources';
import ArticlePageFirstContainer from '../../components/common/pageWrapper/ArticlePageFirstContainer';
import PageInnerContainer from '../../components/common/pageInnerContainer/PageInnerContainer';

// Styles
import { SourcePlaceholder } from '../../components/common/sources/sourceStyles';

const GenericArticlePage: React.FC<{ page: string }> = ({ page }) => {
    const { id } = useParams();
    const { pathname } = useLocation();
    const { showToast } = useToasts();
    const { lang } = useGlobalData();
    const [data, setData] = useState<ArticleData>();
    const [error, setError] = useState<number | null>(null);
    const isTablet = useMediaQuery({
        query: `(min-device-width: 481px) and (max-device-width: 1024px)`,
    });
    const topLeftRad = isTablet ? 2.5 : 4;

    const fetchData = async () => {
        try {
            if (!id) {
                return;
            }

            const data = await requestArticleInfo(id, page);
            setData(data);
        } catch (error: unknown) {
            const customError = error as ErrorResponse;

            if (customError.status === 404) {
                setError(404);
            } else if (customError.status === 500) {
                showToast('E_500', 'error', page);
            }
        }
    };

    // Set page title
    useSetHeader(page, 'generic', data);

    useEffect(() => {
        // Get data
        fetchData();
    }, [pathname]);

    return (
        <>
            {error === 404 ? <PageNotFound /> : null}
            <AppLayout>
                <ArticlePageFirstContainer>
                    {data ? (
                        <PageInnerContainer>
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
                            {data.references[lang] ? (
                                <Sources data={data.references[lang]} />
                            ) : (
                                <SourcePlaceholder />
                            )}
                        </PageInnerContainer>
                    ) : null}
                </ArticlePageFirstContainer>
            </AppLayout>
        </>
    );
};

export default GenericArticlePage;
