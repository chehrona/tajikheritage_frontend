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
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import TextSegment from '../../components/common/articleTextSegment/TextSegment';
import ProverbSoundBox from '../../components/proverb/soundBox/ProverbSoundBox';

// Styled components
import { ProverbContainer, QuoteWrapper, Shadow } from './proverbPageStyles';
import PageFirstContainer from '../../components/common/pageFirstContainer/PageFirstContainer';

const ProverbPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const { lang } = useGlobalData();
    const [proverb, setProverb] = useState<ProverbObj>();
    // const [error, setError] = useState<BackendError>();
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        try {
            setLoading(true);

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
            {proverb ? (
                <Fade inProp={!loading}>
                    <PageFirstContainer>
                        <Shadow />
                        <ProverbContainer>
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
                        </ProverbContainer>
                    </PageFirstContainer>
                </Fade>
            ) : // !loading &&
            // error.length > 0 && <Alert message={error} type={'error'} />
            null}
        </>
    );
};

export default ProverbPage;
