import React, { useState, useEffect } from 'react';

// Hooks
import { useLocation, useParams } from 'react-router-dom';
import { useGlobalData } from '../../App';

// Services
import { requestPage, requestArticleInfo } from '../../services/request';

// Components
import Sources from '../../components/common/sources/Sources';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import SoundButton from '../../components/common/soundButton/SoundButton';
import TextBox from './components/TextBox';

// Styled components
import {
    PageContainer,
    TextContainer,
    WordTitle,
    Transcript,
    PronunciationWrapper,
    BodyContainer,
} from './wordPageStyles';

export default function WordPage({ page }) {
    const { id } = useParams();
    const location = useLocation();
    const { lang, title, setTitle } = useGlobalData();
    const [word, setWord] = useState('');
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestArticleInfo(id, 'language/word/');
            setWord(data);

            // Setting the title
            const headerData = await requestPage('language');

            let tempHeader = { ...title };

            headerData.forEach((entry) => {
                entry.sections.forEach((section) => {
                    if (section.link === 'etymology') {
                        for (const key in title) {
                            let titleArr = [...title[key]];

                            // New title
                            const newItem = [
                                `${section.title[key].toUpperCase()}`,
                                `${data.title[key].substring(
                                    0,
                                    data.title[key].indexOf('|'),
                                )}`,
                            ];

                            titleArr[1] = newItem;

                            tempHeader[key] = titleArr;
                        }
                    }
                });
            });

            setTitle(tempHeader);
        } catch (error) {
            if (error.response) {
                if (
                    error.response.status === 404 ||
                    error.response.status === 500
                ) {
                    setError(error.response.data.message);
                }
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();
    }, [location.pathname, lang]);

    return (
        <>
            <Loader inProp={loading} />
            {!loading && word ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <BodyContainer>
                            <WordTitle>{`${word.title[lang]} (${word.syntax[lang]})`}</WordTitle>
                            <PronunciationWrapper>
                                <Transcript>{word.transcript}</Transcript>
                                <SoundButton data={word.audio} />
                            </PronunciationWrapper>
                            <TextContainer>
                                {word.desc[lang].map((entry, i) => {
                                    return (
                                        <TextBox
                                            key={`${word?._id}_${i}`}
                                            id={`${word?._id}_${i}`}
                                            data={entry}
                                        />
                                    );
                                })}
                            </TextContainer>
                            <Sources
                                data={word.references[lang]}
                                color={'#dedbdb'}
                                title={'#fcf6e9'}
                                background={'#0F0A00'}
                            />
                        </BodyContainer>
                    </PageContainer>
                </Fade>
            ) : (
                !loading && error.length > 0 && <Alert message={error} />
            )}
        </>
    );
}
