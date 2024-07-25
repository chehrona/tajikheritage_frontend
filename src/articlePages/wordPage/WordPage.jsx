import React, { useState, useEffect } from 'react';

// Hooks
import { useLocation, useParams } from 'react-router-dom';
import { useGlobalData } from '../../App';
import { useMediaQuery } from 'react-responsive';

// Services
import { requestPage, requestArticleInfo } from '../../services/request';

// Material UI
import { VolumeUp } from '@mui/icons-material';

// Components
import Sources from '../../components/common/sources/Sources';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import TextBox from './TextBox';

// Styled components
import {
    PageContainer,
    TextContainer,
    WordTitle,
    StyledIconButton,
} from './wordPageStyles';

export default function WordPage({ page }) {
    const { id } = useParams();
    const location = useLocation();
    const { lang, title, setTitle } = useGlobalData();
    const [word, setWord] = useState();
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const isTablet = useMediaQuery({
        query: `(min-device-width: 481px) and (max-device-width: 1024px)`,
    });

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
    }, [location.pathname]);

    const toggleAudio = (e) => {
        if (lang !== 'tj') {
            const audioFile = e.currentTarget.children[0];
            audioFile.play();
        }
    };

    return (
        <>
            <Loader inProp={loading} />
            {!loading && word ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <TextContainer>
                            <WordTitle>{`${word.title[lang]} (${word.syntax[lang]})`}</WordTitle>
                            <StyledIconButton onClick={(e) => toggleAudio(e)}>
                                <audio
                                    src={
                                        process.env.REACT_APP_BASE_URL +
                                        word?.sound
                                    }
                                ></audio>
                                <VolumeUp />
                            </StyledIconButton>
                            {word.desc[lang].map((entry, i) => {
                                return (
                                    <TextBox
                                        key={`${word?._id}_${i}`}
                                        id={`${word?._id}_${i}`}
                                        data={entry}
                                    />
                                );
                            })}
                            <Sources
                                data={word.references[lang]}
                                color={'#dedbdb'}
                                title={'#fcf6e9'}
                                background={'#0F0A00'}
                            />
                        </TextContainer>
                    </PageContainer>
                </Fade>
            ) : (
                !loading && error.length > 0 && <Alert message={error} />
            )}
        </>
    );
}
