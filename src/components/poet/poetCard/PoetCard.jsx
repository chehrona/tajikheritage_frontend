import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Components
import Alert from '../../common/alert/Alert';

// Styled components
import {
    PoetCardWrapper,
    PoetImage,
    PoetDates,
    PoetImgContainer,
    PoetNameBox,
    PoetName,
    PoetInfoContainer,
    StyledLink,
    CardContainer,
} from './poetCardStyles';

export default function PoetCard({ poet, i }) {
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
            {poet?.disabled ? (
                <CardContainer onClick={handleNoContent}>
                    <PoetCardWrapper delay={`${0.01 * i}s`}>
                        <PoetImgContainer>
                            <PoetImage
                                src={process.env.REACT_APP_BASE_URL + poet?.img}
                            />
                            <PoetNameBox>
                                <PoetName>{poet?.name[lang][0]}</PoetName>
                                <PoetName>{poet?.name[lang][1]}</PoetName>
                                <PoetDates>
                                    {poet?.years[lang][0]}-
                                    {poet?.years[lang][1]}
                                </PoetDates>
                            </PoetNameBox>
                        </PoetImgContainer>
                        <PoetInfoContainer
                            dangerouslySetInnerHTML={{
                                __html: poet?.desc[lang],
                            }}
                        />
                    </PoetCardWrapper>
                </CardContainer>
            ) : (
                <StyledLink to={'/language/poets/' + poet?.id}>
                    <PoetCardWrapper delay={`${0.01 * i}s`}>
                        <PoetImgContainer>
                            <PoetImage
                                src={process.env.REACT_APP_BASE_URL + poet?.img}
                            />
                            <PoetNameBox>
                                <PoetName>{poet?.name[lang][0]}</PoetName>
                                <PoetName>{poet?.name[lang][1]}</PoetName>
                                <PoetDates>
                                    {poet?.years[lang][0]}-
                                    {poet?.years[lang][1]}
                                </PoetDates>
                            </PoetNameBox>
                        </PoetImgContainer>
                        <PoetInfoContainer
                            dangerouslySetInnerHTML={{
                                __html: poet?.desc[lang],
                            }}
                        />
                    </PoetCardWrapper>
                </StyledLink>
            )}
            {error[lang]?.length > 0 && <Alert message={error} type={'info'} />}
        </>
    );
}
