import React, { useState, useEffect } from 'react';

// Hooks
import { useParams, useLocation, ErrorResponse } from 'react-router-dom';
import { useGlobalData } from '../../hooks/useGlobalData';
import { useToasts } from '../../hooks/useToasts';

// Service
import { requestArticleInfo } from '../../services/request';

// Types
import { ProverbObj } from './types/componentTypes';
import { DescDetails } from '../../appTypes';

// Pages
import PageNotFound from '../../errorPages/pageNotFound/PageNotFound';

// Components
import Sources from '../../components/common/sources/Sources';
import AppLayout from '../../AppLayout';
import TextSegment from '../../components/common/articleTextSegment/TextSegment';
import ProverbSoundBox from '../../components/proverb/soundBox/ProverbSoundBox';
import ArticlePageFirstContainer from '../../components/common/pageWrapper/ArticlePageFirstContainer';

// Styled components
import {
    ProverbInnerContainer,
    QuoteWrapper,
    Shadow,
} from './proverbPageStyles';

const ProverbPage = () => {
    const { id } = useParams();
    const { showToast } = useToasts();
    const { pathname } = useLocation();
    const { lang, setIsLoading } = useGlobalData();
    const [proverb, setProverb] = useState<ProverbObj>();
    const [error, setError] = useState<number | null>(null);

    const fetchData = async () => {
        try {
            setIsLoading(true);

            if (!id) {
                return;
            }

            const data = await requestArticleInfo(id, 'language/proverb');
            setProverb(data);
        } catch (error: unknown) {
            const customError = error as ErrorResponse;

            if (customError.status === 404) {
                setError(404);
            } else if (customError.status === 500) {
                showToast('E_500', 'error', 'language/proverb');
            }
        } finally {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 550);

            return () => clearTimeout(timer);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();
    }, [pathname]);

    return (
        <>
            {error === 404 || proverb?.disabled ? <PageNotFound /> : null}
            <AppLayout>
                <ArticlePageFirstContainer>
                    <Shadow />
                    <ProverbInnerContainer $height={40}>
                        {proverb ? (
                            <>
                                <ProverbSoundBox proverb={proverb} />
                                <QuoteWrapper
                                    dangerouslySetInnerHTML={{
                                        __html: proverb?.quote[lang],
                                    }}
                                />
                                {proverb.desc[lang].map(
                                    (entry: DescDetails, i) => {
                                        const isSlides =
                                            entry.slides &&
                                            entry.slides.length > 0;

                                        return (
                                            <TextSegment
                                                i={i}
                                                key={`${proverb?.quote[lang]}_${i}`}
                                                reverse={
                                                    isSlides ? i % 2 > 0 : null
                                                }
                                                data={entry}
                                                topLeftRad={0}
                                            />
                                        );
                                    },
                                )}
                                {proverb.references ? (
                                    <Sources data={proverb.references[lang]} />
                                ) : null}
                            </>
                        ) : null}
                    </ProverbInnerContainer>
                </ArticlePageFirstContainer>
            </AppLayout>
        </>
    );
};

export default ProverbPage;
