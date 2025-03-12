import React from 'react';

// Hooks
import { useMediaQuery } from 'react-responsive';
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import staticText from '../../../miscellaneous/language/etymologyPage.json';

// Styled components
import { InstructionWrapper } from '../letterStack/letterStackStyles';

const Instruction: React.FC<{ open: boolean }> = ({ open }) => {
    const { lang } = useGlobalData();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    const lettersToRender = isMobile
        ? staticText.ETYM_PAGE_LETTERS_INSTRUCTION.m[lang]
        : staticText.ETYM_PAGE_LETTERS_INSTRUCTION.d[lang];

    return (
        <>
            {lettersToRender?.map((letter, index) => {
                const { char } = letter;
                const top = letter.position.t;
                const left = letter.position.l;

                return (
                    <InstructionWrapper
                        $top={top}
                        $left={left}
                        $open={open}
                        key={`${[lang]}_${char}_${index}`}
                    >
                        <span>
                            {lang === 'us'
                                ? 'Click on a letter'
                                : lang === 'ru'
                                ? 'Нажмите на букву'
                                : lang === 'tj'
                                ? 'Ҳарферо зер кунед'
                                : 'حرفی را زیر کنید'}
                        </span>
                    </InstructionWrapper>
                );
            })}
        </>
    );
};

export default Instruction;
