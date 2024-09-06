import React, { useCallback, useState } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Services
import { addEmail } from '../../../services/request';

// Components
import Dialog from '../../common/dialog/Dialog';

// Types
import { BookDialogProps } from './types/componentTypes';

// Styled components
import {
    Desc,
    InfoContainer,
    StyledContent,
    InfoTitle,
    BodyContainer,
    InputWrapper,
    InputField,
    StyledButton,
    Error,
} from './bookDialogStyles';

const BookDialog: React.FC<BookDialogProps> = ({
    book,
    setBookDialog,
    bookDialog,
    setBookIndex,
}) => {
    const { lang } = useGlobalData();
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setError(false);

            const value = e.target.value.toLowerCase();
            setEmail(value);
        },
        [],
    );

    const handleClose = useCallback(() => {
        setBookDialog(false);
        setBookIndex(null);
        setEmail('');
        setError(false);
        setSuccess(false);
    }, [setBookIndex, setBookDialog]);

    const handleSubmit = async () => {
        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (validEmail.test(email)) {
            const info = {
                title: book?.title,
                email: email,
            };

            await addEmail(info)
                .then((res) => res.status === 200 && setSuccess(true))
                .finally(() => {
                    setTimeout(() => {
                        handleClose();
                    }, 1000);
                });
        } else {
            setError(true);
        }
    };

    return (
        <Dialog
            open={bookDialog}
            width={'500px'}
            height={'auto'}
            border={'1.5rem'}
            handleClose={handleClose}
            backdrop={'rgba(15 10 0 / 30%)'}
            background={'var(--primary-var(--regular-white-color);-color)'}
        >
            <StyledContent>
                <InfoContainer>
                    <InfoTitle>
                        {lang === 'us'
                            ? 'Apologies!'
                            : lang === 'ru'
                            ? 'Извините!'
                            : 'Бубахшед!'}
                    </InfoTitle>
                    <BodyContainer>
                        <Desc>{book?.msg}</Desc>
                        {book?.email && (
                            <InputWrapper>
                                <InputField
                                    placeholder={
                                        lang === 'us'
                                            ? 'Enter your email'
                                            : lang === 'ru'
                                            ? 'Адрес электронной почты'
                                            : 'Суроғаи почтаи электронӣ'
                                    }
                                    value={email}
                                    onChange={(e) => handleChange(e)}
                                />
                                <StyledButton onClick={handleSubmit}>
                                    {lang === 'us'
                                        ? 'Submit'
                                        : lang === 'ru'
                                        ? 'Ввод'
                                        : 'Фирист'}
                                </StyledButton>
                            </InputWrapper>
                        )}
                        <Error error={error} success={success}>
                            {error
                                ? lang === 'us'
                                    ? 'Invalid email'
                                    : lang === 'ru'
                                    ? 'Неверный адрес'
                                    : 'Почтаи электронӣ нодуруст'
                                : success &&
                                  (lang === 'us'
                                      ? 'We got your email address. Thank you.'
                                      : lang === 'ru'
                                      ? 'Мы получили ваш адрес электронной почты. Спасибо.'
                                      : 'Почтаи электрониатонро гирифтем. Раҳмат.')}
                        </Error>
                    </BodyContainer>
                </InfoContainer>
            </StyledContent>
        </Dialog>
    );
};

export default BookDialog;
