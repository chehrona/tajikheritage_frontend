import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Material UI
import { ArrowForwardIos } from '@mui/icons-material';

// Helper
import alert from '../../../miscellaneous/alertMessages.json';

// Components
import Alert from '../../common/alert/Alert';

// Types
import { WordCardProps, WordDescTypes } from './types/componentTypes';

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

const WordCard: React.FC<WordCardProps> = ({ data, i }) => {
    const { lang } = useGlobalData();
    const [error, setError] = useState(false);

    const handleNoContent = () => {
        setError(true);
    };

    const renderWordDesc = (data: WordDescTypes) => {
        if (
            data &&
            data.desc &&
            data.desc[lang] &&
            data.desc[lang][1] &&
            data.desc[lang][1].body
        ) {
            return (
                <WordDesc
                    dangerouslySetInnerHTML={{
                        __html: data.desc[lang][1].body.text1 as string,
                    }}
                ></WordDesc>
            );
        }
    };

    return (
        <>
            <CardWrapper delay={`${0.01 * i}s`} disabled={data.disabled}>
                <WordTitle>{data.title[lang]}</WordTitle>
                {renderWordDesc(data)}
                {data.disabled ? (
                    <LinkBox
                        to={'#'}
                        disabled={data.disabled}
                        onClick={handleNoContent}
                    >
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
};

export default WordCard;
