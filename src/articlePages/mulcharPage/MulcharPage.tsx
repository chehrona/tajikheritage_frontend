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
import PieChart from '../../components/calendar/mulchar/pieChart/PieChart';
import SignDialog from '../../components/calendar/mulchar/signDialog/SignDialog';
import ZodiacCalculator from '../../components/calendar/mulchar/zodiacCalculator/ZodiacCalculator';

// Styles
import { ExtrasContainer, ChartContainer } from './mulcharPageStyles';

const MulcharPage: React.FC<{ page: string }> = ({ page }) => {
    const { id } = useParams();
    const { pathname } = useLocation();
    const { showToast } = useToasts();
    const { lang, isLoading, setIsLoading } = useGlobalData();
    const [data, setData] = useState<ArticleData>();
    const [error, setError] = useState<number | null>(null);
    const [showSignInfo, setShowSignInfo] = useState(false);
    const [index, setIndex] = useState<number>(0);
    const isTablet = useMediaQuery({
        query: `(min-device-width: 481px) and (max-device-width: 1024px)`,
    });
    const topLeftRad = isTablet ? 2.5 : 4;

    const fetchData = async () => {
        if (isLoading) return;

        try {
            setIsLoading(true);

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
        } finally {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 550);

            return () => clearTimeout(timer);
        }
    };

    useSetHeader(page, 'generic', data);

    useEffect(() => {
        fetchData();
    }, [pathname]);

    return (
        <>
            {error === 404 ? <PageNotFound /> : null}
            <AppLayout>
                <ArticlePageFirstContainer>
                    {data ? (
                        <PageInnerContainer height={40}>
                            {data.desc[lang].map((entry, i) => (
                                <React.Fragment key={i}>
                                    <TextSegment
                                        i={i}
                                        key={`${data?.name[lang]}_${i}`}
                                        reverse={i % 2 > 0}
                                        data={entry}
                                        title={data.name[lang]}
                                        topLeftRad={topLeftRad}
                                    />
                                    {entry.signs ? (
                                        <ExtrasContainer>
                                            <ChartContainer>
                                                <PieChart
                                                    signs={entry.signs}
                                                    setIndex={setIndex}
                                                    setShowSignInfo={
                                                        setShowSignInfo
                                                    }
                                                />
                                            </ChartContainer>
                                            <SignDialog
                                                signInfo={entry.signs[index]}
                                                setShowSignInfo={
                                                    setShowSignInfo
                                                }
                                                showSignInfo={showSignInfo}
                                            />
                                        </ExtrasContainer>
                                    ) : null}
                                    {entry.predict ? (
                                        <ZodiacCalculator
                                            signs={data.desc[lang][1].signs}
                                        />
                                    ) : null}
                                </React.Fragment>
                            ))}
                            <Sources data={data.references[lang]} />
                        </PageInnerContainer>
                    ) : null}
                </ArticlePageFirstContainer>
            </AppLayout>
        </>
    );
};

export default MulcharPage;
