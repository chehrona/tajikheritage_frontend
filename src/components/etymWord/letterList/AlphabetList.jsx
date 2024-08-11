import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../../App';

// Service
import { requestAllWordForLetter } from '../../../services/request';

// Helper
import letters from '../../../miscellanious/staticTexts.json';
import alert from '../../../miscellanious/alertMessages.json';

// Components
import Alert from '../../common/alert/Alert';

// Styled components
import { AlphabetContainer, LetterButton } from './alphabetListStyles';

export default function AlphabetList({ setItems, allItems }) {
    const { lang } = useGlobalData();
    const [noMatch, setNoMatch] = useState(false);

    const handleClick = async (letter) => {
        setNoMatch(false);
        const allWordsForLetter = await requestAllWordForLetter(letter, lang);

        if (allWordsForLetter.length > 0) {
            setItems(allWordsForLetter);
        } else {
            setNoMatch(true);
            setItems(allItems);
        }
    };

    return (
        <>
            <AlphabetContainer>
                {letters.ETYM_PAGE_LETTERS[lang].map((letter, i) => {
                    return (
                        <LetterButton
                            key={`${lang}_${letter}_${i}`}
                            onClick={() => handleClick(letter)}
                        >
                            {letter}
                        </LetterButton>
                    );
                })}
            </AlphabetContainer>
            {noMatch && (
                <Alert message={alert.WORDS_NOT_FOUND} type={'error'} />
            )}
        </>
    );
}
