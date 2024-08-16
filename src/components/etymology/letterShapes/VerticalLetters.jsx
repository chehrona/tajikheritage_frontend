import React from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../../App';

// Helper
import letters from '../../../miscellaneous/staticTexts.json';

// Styled components
import { VerticalWrapper } from '../letterStack/letterStackStyles';

export default function VerticalLetters({ open, handleClick }) {
    const { lang } = useGlobalData();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const lettersToRender = isMobile
        ? letters.ETYM_PAGE_LETTERS_VERTICALS.m[lang]
        : letters.ETYM_PAGE_LETTERS_VERTICALS.d[lang];

    return (
        <>
            {lettersToRender?.map((letter, index) => {
                const { char, delay } = letter;
                const top = letter.position.t;
                const left = letter.position.l;

                return (
                    <VerticalWrapper
                        top={top}
                        left={left}
                        open={open}
                        delay={delay}
                        key={`${[lang]}_${char}_${index}`}
                        empty={char.startsWith('/storage')}
                        onClick={() => handleClick(char)}
                    >
                        {char.startsWith('/storage') ? (
                            <img
                                alt="filler"
                                src={process.env.REACT_APP_BASE_URL + char}
                            />
                        ) : (
                            <span>{char}</span>
                        )}
                    </VerticalWrapper>
                );
            })}
        </>
    );
}
