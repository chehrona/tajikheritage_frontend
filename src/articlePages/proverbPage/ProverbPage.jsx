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
import TextSegment from '../../components/common/articelTextSegment/TextSegment';

// Styled components
import {
    PageContainer,
    ProverbContainer,
    LogoWrapper,
    LogoContainer,
    LogoOuter,
    LogoInner,
    QuoteWrapper,
    Shadow,
    SvgContainer,
    TextContainer,
    Text,
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

    const toggleAudio = (e) => {
        if (lang !== 'tj') {
            const audioFile = e.currentTarget.children[0];
            audioFile.play();
        }
    };

    return (
        <>
            <Loader inProp={loading} />
            {proverb ? (
                <Fade inProp={!loading}>
                    <PageContainer>
                        <Shadow />
                        <ProverbContainer>
                            <LogoContainer>
                                <LogoWrapper
                                    onClick={(e) => toggleAudio(e)}
                                    lang={lang}
                                >
                                    <audio
                                        src={
                                            process.env.REACT_APP_BASE_URL +
                                            proverb?.sound
                                        }
                                    ></audio>
                                    <LogoOuter
                                        lang={lang}
                                        src={
                                            process.env.REACT_APP_BASE_URL +
                                            proverb?.logo.outer
                                        }
                                    />
                                    <LogoInner
                                        src={
                                            process.env.REACT_APP_BASE_URL +
                                            proverb?.logo.inner
                                        }
                                    />{' '}
                                </LogoWrapper>
                                <SvgContainer viewBox="0 0 200 200">
                                    <path
                                        id="text-path"
                                        stroke="none"
                                        fill="none"
                                        d="M 100, 200 C 155.23, 200 200, 155.23 200, 100 C 200, 44.77 155.23, 0 100, 0 C 44.77, 0 0, 44.77 0, 100 C 0, 155.23 44.77, 200 100, 200 Z"
                                    />
                                    <Text>
                                        <textPath
                                            href="#text-path"
                                            startOffset="50%"
                                            textAnchor="middle"
                                        >
                                            {lang === 'us'
                                                ? '• CLICK TO HEAR •'
                                                : lang === 'ru'
                                                ? '• ПОСЛУШАТЬ •'
                                                : ''}
                                        </textPath>
                                    </Text>
                                </SvgContainer>
                            </LogoContainer>
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
                            <Sources
                                data={proverb.references[lang]}
                                color={'#dedbdb'}
                                title={'#fcf6e9'}
                                background={'#0F0A00'}
                            />
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
