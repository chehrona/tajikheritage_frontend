import React, { useState, useEffect } from 'react';

// Hooks
import { useParams, useLocation } from 'react-router-dom';
import { useGlobalData } from '../../hooks/useGlobalData';

// Service
import { requestArticleInfo } from '../../services/request';

// Types
import { ProverbObj } from './types/componentTypes';
import { DescDetails, ErrorTypes } from '../../appTypes';

// Components
import Sources from '../../components/common/sources/Sources';
import Alert from '../../components/common/alert/Alert';
import TextSegment from '../../components/common/articleTextSegment/TextSegment';
import ProverbSoundBox from '../../components/proverb/soundBox/ProverbSoundBox';

// Styled components
import {
    ProverbInnerContainer,
    QuoteWrapper,
    Shadow,
} from './proverbPageStyles';
import ArticlePageFirstContainer from '../../components/common/pageWrapper/ArticlePageFirstContainer';

const ProverbPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const { lang, setIsLoading } = useGlobalData();
    const [proverb, setProverb] = useState<ProverbObj>();
    // const [error, setError] = useState<BackendError>();

    const fetchData = async () => {
        try {
            setIsLoading(true);

            if (!id) {
                return;
            }

            const data = await requestArticleInfo(id, 'language/proverb');
            setProverb(data);
        } catch (error: unknown) {
            const customError = error as ErrorTypes;

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

    useEffect(() => {
        // Get data
        fetchData();
    }, [location.pathname]);

    return (
        <>
            {proverb ? (
                <ArticlePageFirstContainer>
                    <Shadow />
                    <ProverbInnerContainer $height={40}>
                        <ProverbSoundBox proverb={proverb} />
                        <QuoteWrapper
                            $lang={lang}
                            dangerouslySetInnerHTML={{
                                __html: proverb?.quote[lang],
                            }}
                        />
                        {proverb.desc[lang].map((entry: DescDetails, i) => {
                            const isSlides =
                                entry.slides && entry.slides.length > 0;

                            return (
                                <TextSegment
                                    i={i}
                                    key={`${proverb?.quote[lang]}_${i}`}
                                    reverse={isSlides ? i % 2 > 0 : null}
                                    data={entry}
                                />
                            );
                        })}
                        {proverb.references ? (
                            <Sources data={proverb.references[lang]} />
                        ) : null}
                    </ProverbInnerContainer>
                </ArticlePageFirstContainer>
            ) : null}
        </>
    );
};

export default ProverbPage;
