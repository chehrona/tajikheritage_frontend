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
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import SoundButton from '../../components/common/soundButton/SoundButton';
import TextSegment from '../../components/common/articleTextSegment/TextSegment';
import PageFirstContainer from '../../components/common/pageWrapper/ArticlePageFirstContainer';

// Styled components
import {
    WordTitle,
    Transcript,
    PronunciationWrapper,
    BodyContainer,
} from './wordPageStyles';

const WordPage: React.FC = () => {
    const { id } = useParams();
    const location = useLocation();
    const { lang } = useGlobalData();
    const [word, setWord] = useState<WordObj>();
    // const [error, setError] = useState<BackendError>();
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        try {
            setLoading(true);

            if (!id) {
                return;
            }

            const data = await requestArticleInfo(id, 'language/word/');
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
            setLoading(false);
        }
    };

    // Set page title
    useSetHeader('etymology', 'generic', word);

    useEffect(() => {
        // Get data
        fetchData();
    }, [location.pathname]);

    return (
        <>
            <Loader inProp={loading} />
            {!loading && word ? (
                <Fade inProp={!loading}>
                    <PageFirstContainer>
                        <BodyContainer>
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
                        </BodyContainer>
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

export default WordPage;
