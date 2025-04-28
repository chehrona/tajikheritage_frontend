import React from 'react';

// Hooks
import { useToasts } from '../../../hooks/useToasts';

// Services
import { requestAllWords } from '../../../services/request';

// Components
import VerticalLetters from '../letterShapes/VerticalLetters';
import OvalLetters from '../letterShapes/OvalLetters';
import CircleLetters from '../letterShapes/CircleLetters';
import Instruction from '../letterShapes/Instruction';

// Types
import { LetterStackProps } from './types/componentTypes';
import { ErrorResponse } from '../../../appTypes';

// Styled components
import { LetterStackWrapper, LetterContainer } from './letterStackStyles';

const LetterStack: React.FC<LetterStackProps> = ({
    page,
    setValue,
    setItems,
}) => {
    const { showToast } = useToasts();

    const handleClick = async (char: string) => {
        try {
            const data = await requestAllWords(page, char);

            if (!data.length) {
                showToast('E_204', 'info', page);
            }

            setItems(data);
        } catch (error: unknown) {
            const customError = error as ErrorResponse;

            if (customError.status === 500) {
                showToast('E_500', 'error', page);
            }
        }

        setValue(char);
    };

    return (
        <LetterStackWrapper>
            <LetterContainer>
                <OvalLetters handleClick={handleClick} />
                <VerticalLetters handleClick={handleClick} />
                <CircleLetters handleClick={handleClick} />
                <Instruction />
            </LetterContainer>
        </LetterStackWrapper>
    );
};

export default LetterStack;
