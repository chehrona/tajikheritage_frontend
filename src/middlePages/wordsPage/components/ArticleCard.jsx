import React from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Material UI
import { ArrowForwardIos } from '@mui/icons-material';

// Styled components
import {
    ArticleWrapper,
    WordTitle,
    WordDesc,
    LinkBox,
    Instruction,
    StyledLink,
    Arrow,
} from '../etymologyStyles';

export default function ArticleCard({ data }) {
    const { lang } = useGlobalData();

    return (
        <ArticleWrapper>
            <WordTitle>{data.title[lang]}</WordTitle>
            <WordDesc
                dangerouslySetInnerHTML={{
                    __html: data.desc[lang][1].body.text1,
                }}
            ></WordDesc>
            <LinkBox to={data?.id}>
                <Instruction>
                    {lang === 'us'
                        ? 'Read article'
                        : lang === 'ru'
                        ? 'Читать статью'
                        : 'Мақоларо хонед'}
                </Instruction>
                <StyledLink>
                    <Arrow>
                        <ArrowForwardIos />
                    </Arrow>
                </StyledLink>
            </LinkBox>
        </ArticleWrapper>
    );
}
