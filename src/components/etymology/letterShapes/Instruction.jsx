import React from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../../App';

// Helper
import staticText from '../../../miscellaneous/staticTexts.json';

// Styled components
import { InstructionWrapper } from '../letterStack/letterStackStyles';

export default function Instruction({ open }) {
    const { lang } = useGlobalData();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const lettersToRender = isMobile
        ? staticText.ETYM_PAGE_LETTERS_INSTRUCTION.m[lang]
        : staticText.ETYM_PAGE_LETTERS_INSTRUCTION.d[lang];

    return (
        <>
            {lettersToRender?.map((letter, index) => {
                const { delay, char } = letter;
                const top = letter.position.t;
                const left = letter.position.l;

                return (
                    <InstructionWrapper
                        top={top}
                        left={left}
                        open={open}
                        delay={delay}
                        key={`${[lang]}_${char}_${index}`}
                    >
                        <span>
                            {lang === 'us'
                                ? 'Click on a letter'
                                : lang === 'ru'
                                ? 'Нажмите на букву'
                                : 'Ҳарферо зер кунед'}
                        </span>
                    </InstructionWrapper>
                );
            })}
        </>
    );
}
