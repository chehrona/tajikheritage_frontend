import React, { ChangeEvent, useState } from 'react';

// Slice images
import staticData from '../../../../miscellaneous/history/calendarPage.json';

// Styles
import {
    InputWrapper,
    MainContainer,
    InputField,
    CardWrapper,
    SignImage,
    CardInnerContainer,
    NoSignWrapper,
    CardFace,
    CardTitle,
} from './zodiacCalculatorStyles';

// Types
import { SignObj } from '../../../../articlePages/calendar/muljarPage/types/componentTypes';

const ZodiacCalculator: React.FC<{ signs: SignObj[] }> = ({ signs }) => {
    const [year, setYear] = useState<string>('');
    const [index, setIndex] = useState<number | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputYear = e.target.value;
        if (!/^\d{4}$/.test(inputYear)) {
            setYear(inputYear);
            setIndex(null);
            return;
        }
        const yearIndex = (parseInt(inputYear) - 16) % 12;
        setYear(inputYear);
        setIndex(yearIndex);
    };

    return (
        <MainContainer>
            <InputWrapper>
                <InputField
                    name="muljar_year"
                    id="muljar_year"
                    value={year}
                    onChange={handleChange}
                />
            </InputWrapper>
            <CardWrapper>
                <CardInnerContainer
                    $flip={
                        index !== null &&
                        index >= 0 &&
                        index < signs.length &&
                        year.length > 0
                    }
                >
                    <CardFace $back={true}>
                        {index !== null &&
                        index >= 0 &&
                        index < signs.length &&
                        year.length > 0 ? (
                            <>
                                <CardTitle>{signs[index].info.title}</CardTitle>
                                <SignImage
                                    src={`${process.env.REACT_APP_BASE_URL}${staticData.MULJAR_CHART_IMGS[index]?.img?.src}`}
                                    alt={signs[index]?.id}
                                />
                            </>
                        ) : null}
                    </CardFace>
                    <CardFace $back={false}>
                        <NoSignWrapper>?</NoSignWrapper>
                    </CardFace>
                </CardInnerContainer>
            </CardWrapper>
        </MainContainer>
    );
};

export default ZodiacCalculator;
