import React, { useState, useEffect } from 'react';

// Hooks
import { useLocation, useParams } from 'react-router-dom';
import { useGlobalData } from '../../hooks/useGlobalData';
import { useSetHeader } from '../../hooks/useSetHeader';

// Services
import { requestArticleInfo } from '../../services/request';

// Types
import { WordObj } from './types/componentTypes';
import { ErrorTypes } from '../../appTypes';

// Components
import Sources from '../../components/common/sources/Sources';
import Alert from '../../components/common/alert/Alert';
import SoundButton from '../../components/common/soundButton/SoundButton';
import TextSegment from '../../components/common/articleTextSegment/TextSegment';
import PageFirstContainer from '../../components/common/pageWrapper/ArticlePageFirstContainer';

// Styled components
import {
    WordTitle,
    Transcript,
    PronunciationWrapper,
    MainContainer,
} from './wordPageStyles';

const WordPage: React.FC<{ page: string }> = ({ page }) => {
    const { id } = useParams();
    const location = useLocation();
    const { lang, setIsLoading } = useGlobalData();
    const [word, setWord] = useState<WordObj>();
    // const [error, setError] = useState<BackendError>();

    const fetchData = async () => {
        try {
            setIsLoading(true);

            if (!id) {
                return;
            }

            const data = await requestArticleInfo(id, page);
            setWord(data);
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

    // Set page title
    useSetHeader(page, 'generic', word);

    useEffect(() => {
        // Get data
        fetchData();
    }, [location.pathname]);

    return (
        <>
            {word ? (
                <PageFirstContainer>
                    <MainContainer>
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
                                />
                            );
                        })}
                        <Sources data={word.references[lang]} />
                    </MainContainer>
                </PageFirstContainer>
            ) : null}
        </>
    );
};

export default WordPage;
