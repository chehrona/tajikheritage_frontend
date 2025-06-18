import React, { useState, useEffect } from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useLocation, useParams } from 'react-router-dom';
import { useGlobalData } from '../../../hooks/useGlobalData';
import { useSetHeader } from '../../../hooks/useSetHeader';
import { useToasts } from '../../../hooks/useToasts';

// Services
import { requestArticleInfo } from '../../../services/request';

// Types
import { WordObj } from './types/componentTypes';
import { ErrorResponse } from '../../../appTypes';

// Components
import AppLayout from '../../../AppLayout';
import PageNotFound from '../../../errorPages/pageNotFound/PageNotFound';
import Sources from '../../../components/common/sources/Sources';
import SoundButton from '../../../components/common/soundButton/SoundButton';
import TextSegment from '../../../components/common/articleTextSegment/TextSegment';
import PageInnerContainer from '../../../components/common/pageInnerContainer/PageInnerContainer';
import ArticlePageFirstContainer from '../../../components/common/pageWrapper/ArticlePageFirstContainer';

// Styled components
import { WordTitle, Transcript, PronunciationWrapper } from './wordPageStyles';
import Timeline from '../../../components/etymology/timeline/Timeline';

const WordPage: React.FC<{ page: string }> = ({ page }) => {
    const { id } = useParams();
    const { pathname } = useLocation();
    const { showToast } = useToasts();
    const { lang } = useGlobalData();
    const [word, setWord] = useState<WordObj>();
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
            setWord(data);
        } catch (error: any) {
            const customError = error as ErrorResponse;

            if (customError.status === 404) {
                setError(404);
            } else if (customError.status === 500) {
                showToast('E_500', 'error', page);
            }
        }
    };

    // Set page title
    useSetHeader(page, 'generic', word);

    useEffect(() => {
        // Get data
        fetchData();
    }, [pathname]);

    return (
        <React.Fragment>
            {error === 404 || word?.disabled ? <PageNotFound /> : null}
            {/* <Timeline /> */}
            <AppLayout>
                <ArticlePageFirstContainer>
                    <PageInnerContainer>
                        {word ? (
                            <React.Fragment>
                                <WordTitle>{`${word.title[lang]} (${word.syntax[lang]})`}</WordTitle>
                                <PronunciationWrapper>
                                    <Transcript>{word.transcript}</Transcript>
                                    <SoundButton data={word.audio} />
                                </PronunciationWrapper>
                                {word.desc[lang].map((entry, i) => {
                                    return (
                                        <TextSegment
                                            i={i}
                                            key={`${word?._id}_${i}`}
                                            data={entry}
                                            topLeftRad={topLeftRad}
                                        />
                                    );
                                })}
                                <Sources data={word.references[lang]} />
                            </React.Fragment>
                        ) : null}
                    </PageInnerContainer>
                </ArticlePageFirstContainer>
            </AppLayout>
        </React.Fragment>
    );
};

export default WordPage;
