import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Service
import { requestAllWordForLetter } from '../../../services/request';

//Helper
import letters from '../../../miscellaneous/staticTexts.json';
import alert from '../../../miscellaneous/alertMessages.json';

// Components
import Alert from '../../common/alert/Alert';

// Styled components
import { LetterWrapper, MainContainer } from './letterStackStyles';

export default function LetterStack({
    setItems,
    allItems,
    setValue,
    isDropdownOpen,
}) {
    const { lang } = useGlobalData();
    // const [noMatch, setNoMatch] = useState(false);

    const handleClick = async (letter) => {
        // setNoMatch(false);
        setValue(letter);
        const allWordsForLetter = await requestAllWordForLetter(letter, lang);

        if (allWordsForLetter.length > 0) {
            setItems(allWordsForLetter);
        } else {
            // setNoMatch(true);
            setItems(allItems);
        }
    };

    return (
        <>
            <MainContainer>
                {letters.ETYM_PAGE_LETTERS[lang].map((letter, index) => {
                    const left = letter.position.l;
                    const top = letter.position.t;
                    const shape = letter.shape;
                    const char = letter.char;

                    return (
                        <LetterWrapper
                            top={top}
                            left={left}
                            shape={shape}
                            open={isDropdownOpen}
                            onClick={() => handleClick(char)}
                            empty={char.startsWith('/storage')}
                            key={`${[lang]}_${char}_${index}`}
                        >
                            {char.startsWith('/storage') ? (
                                <img
                                    alt="filler"
                                    shape={shape}
                                    src={process.env.REACT_APP_BASE_URL + char}
                                />
                            ) : char === 'i' ? (
                                <span>
                                    {lang === 'us'
                                        ? 'Click on a letter'
                                        : lang === 'ru'
                                        ? 'Нажмите на букву'
                                        : 'Ҳарферо зер кунед'}
                                </span>
                            ) : (
                                <span>{char}</span>
                            )}
                        </LetterWrapper>
                    );
                })}
            </MainContainer>
        </>
    );
}
