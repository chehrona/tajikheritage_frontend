import React, { useState, useEffect } from 'react';

// Hooks
import { useParams, useLocation } from 'react-router-dom';
import { useGlobalData } from '../../App';

// Service
import { requestPage, requestArticleInfo } from '../../services/request';

// Components
import Sources from '../../components/common/sources/Sources';
import Fade from '../../components/common/transition/Fade';
import Loader from '../../components/common/loader/Loader';
import Alert from '../../components/common/alert/Alert';
import TextSegment from '../../components/common/articleTextSegment/TextSegment';
import ProverbSoundBox from '../../components/proverb/soundBox/ProverbSoundBox';

// Styled components
import {
    PageContainer,
    ProverbContainer,
    QuoteWrapper,
    Shadow,
    TextContainer,
} from './proverbPageStyles';

export default function ProverbPage() {
    const { id } = useParams();
    const location = useLocation();
    const { lang, title, setTitle } = useGlobalData();
    const [proverb, setProverb] = useState();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await requestArticleInfo(id, 'language/proverb');
            setProverb(data);

            // Setting the title
            const headerData = await requestPage('language');

            let tempHeader = { ...title };

            headerData.forEach((entry) => {
                entry.sections.forEach((section) => {
                    if (section.link === '') {
                        for (const key in title) {
                            let titleArr = [...title[key]];

                            // New title
                            const newItem = [
                                `${section.title[key].toUpperCase()}`,
                                `${data.name[key][1]}`,
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
            {proverb ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <Shadow />
                        <ProverbContainer>
                            <ProverbSoundBox proverb={proverb} />
                            <QuoteWrapper
                                lang={lang}
                                dangerouslySetInnerHTML={{
                                    __html: proverb?.quote[lang],
                                }}
                            />
                            <TextContainer>
                                {proverb.desc[lang].map((entry, i) => {
                                    return (
                                        <TextSegment
                                            key={`${proverb?.quote[lang]}_${i}`}
                                            reverse={i % 2 > 0}
                                            data={entry}
                                            title={false}
                                            topLeftRad={0}
                                            noBorder={true}
                                        />
                                    );
                                })}
                            </TextContainer>
                            {proverb.references ? (
                                <Sources data={proverb.references[lang]} />
                            ) : null}
                        </ProverbContainer>
                    </PageContainer>
                </Fade>
            ) : (
                !loading &&
                error[lang]?.length > 0 && (
                    <Alert message={error} type={'error'} />
                )
            )}
        </>
    );
}
