import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Material UI
import { ArrowForwardIos } from '@mui/icons-material';

// Components
import Alert from '../../../components/common/alert/Alert';

// Styled components
import {
    ArticleWrapper,
    WordTitle,
    WordDesc,
    LinkBox,
    Instruction,
    ArrowWrapper,
    Arrow,
} from '../etymologyStyles';

export default function ArticleCard({ data, i }) {
    const { lang } = useGlobalData();
    const [error, setError] = useState('');

    const handleNoContent = () => {
        setError({
            us: 'Article is not available yet',
            ru: 'Статья еще не доступна',
            tj: 'Мақола ҳанӯз вуҷуд надорад',
        });
    };

    return (
        <>
            <ArticleWrapper delay={`${0.01 * i}s`} disabled={data.disabled}>
                <WordTitle>{data.title[lang]}</WordTitle>
                <WordDesc
                    dangerouslySetInnerHTML={{
                        __html: data.desc[lang][1].body.text1,
                    }}
                ></WordDesc>
                {data.disabled ? (
                    <LinkBox disabled={data.disabled} onClick={handleNoContent}>
                        <Instruction>
                            {lang === 'us'
                                ? 'Read article'
                                : lang === 'ru'
                                ? 'Читать статью'
                                : 'Мақоларо хонед'}
                        </Instruction>
                        <ArrowWrapper>
                            <Arrow>
                                <ArrowForwardIos />
                            </Arrow>
                        </ArrowWrapper>
                    </LinkBox>
                ) : (
                    <LinkBox to={data?.id}>
                        <Instruction>
                            {lang === 'us'
                                ? 'Read article'
                                : lang === 'ru'
                                ? 'Читать статью'
                                : 'Мақоларо хонед'}
                        </Instruction>
                        <ArrowWrapper>
                            <Arrow>
                                <ArrowForwardIos />
                            </Arrow>
                        </ArrowWrapper>
                    </LinkBox>
                )}
            </ArticleWrapper>
            {error[lang]?.length > 0 && <Alert message={error} type={'info'} />}
        </>
    );
}
