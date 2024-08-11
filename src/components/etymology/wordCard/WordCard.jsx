import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Material UI
import { ArrowForwardIos } from '@mui/icons-material';

// Helper
import alert from '../../../miscellaneous/alertMessages.json';

// Components
import Alert from '../../common/alert/Alert';

// Styled components
import {
    CardWrapper,
    WordTitle,
    WordDesc,
    LinkBox,
    Instruction,
    ArrowWrapper,
    Arrow,
} from './wordCardStyles';

export default function WordCard({ data, i }) {
    const { lang } = useGlobalData();
    const [error, setError] = useState(false);

    const handleNoContent = () => {
        setError(true);
    };

    return (
        <>
            <CardWrapper delay={`${0.01 * i}s`} disabled={data.disabled}>
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
            </CardWrapper>
            {error && (
                <Alert message={alert.ARTICLE_UNAVAILABLE} type={'info'} />
            )}
        </>
    );
}
