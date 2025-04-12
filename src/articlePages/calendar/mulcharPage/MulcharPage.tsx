import React, { useState, useEffect } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useSetHeader } from '../../../hooks/useSetHeader';
import { useToasts } from '../../../hooks/useToasts';

// Types
import { ErrorResponse } from '../../../appTypes';
import { ArticleData } from './types/componentTypes';

// Services
import { requestArticleInfo } from '../../../services/request';

// Pages
import PageNotFound from '../../../errorPages/pageNotFound/PageNotFound';

// Components
import AppLayout from '../../../AppLayout';
import TextSegment from '../../../components/common/articleTextSegment/TextSegment';
import Sources from '../../../components/common/sources/Sources';
import ArticlePageFirstContainer from '../../../components/common/pageWrapper/ArticlePageFirstContainer';
import PageInnerContainer from '../../../components/common/pageInnerContainer/PageInnerContainer';
import PieChart from '../../../components/calendar/mulchar/pieChart/PieChart';
import SignDialog from '../../../components/calendar/mulchar/signDialog/SignDialog';
import MulcharCalculator from '../../../components/calendar/mulchar/mulcharCalculator/MulcharCalculator';

// Styles
import { ExtrasContainer, ChartContainer } from './mulcharPageStyles';

const MuljarPage: React.FC<{ page: string }> = ({ page }) => {
    const { pathname } = useLocation();
    const { showToast } = useToasts();
    const { lang } = useGlobalData();
    const [data, setData] = useState<ArticleData>();
    const [error, setError] = useState<number | null>(null);
    const [showSignInfo, setShowSignInfo] = useState(false);
    const [index, setIndex] = useState<number>(0);
    const isTablet = useMediaQuery({
        query: `(min-device-width: 481px) and (max-device-width: 1024px)`,
    });
    const topLeftRad = isTablet ? 2.5 : 4;

    const fetchData = async () => {
        try {
            const data = await requestArticleInfo('mūljar', page);
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
                        <PageInnerContainer>
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
                                                calendar={'MULCHAR_CHART_IMGS'}
                                                showSignInfo={showSignInfo}
                                                index={index}
                                            />
                                        </ExtrasContainer>
                                    ) : null}
                                    {entry.predict ? (
                                        <MulcharCalculator
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

export default MuljarPage;
