import React, { useCallback, useState } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import staticTexts from '../../../miscellaneous/staticTexts.json';

// Services
import { addEmail } from '../../../services/request';

// Components
import Dialog from '../../common/dialog/Dialog';
import DialogContentWrapper from '../../common/dialogContentWrapper/DialogContentWrapper';
import CustomButton from '../../common/button/CustomButton';

// Types
import { BookPopupProps } from '../bookshelfDesign/types/componentTypes';

// Styled components
import {
    Desc,
    DialogBodyContainer,
    DialogTitle,
    InputWrapper,
    InputField,
    Error,
    BodyContainer,
} from './bookDialogStyles';

const BookDialog: React.FC<BookPopupProps> = ({ book, setBookIndex }) => {
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
        setBookIndex(-1);
        setEmail('');
        setError(false);
        setSuccess(false);
    }, [setBookIndex, setEmail, setError, setSuccess]);

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
                    }, 1500);
                });
        } else {
            setError(true);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <Dialog
            open={(book.msg?.length ?? 0) > 0}
            background={'light'}
            width={'500px'}
            height={'auto'}
            handleClose={handleClose}
        >
            <DialogContentWrapper>
                <DialogBodyContainer>
                    <DialogTitle $textColor={'dark'}>
                        {staticTexts.NO_BOOK_DIALOG.title[lang]}
                    </DialogTitle>
                    <BodyContainer>
                        <Desc>{book?.msg}</Desc>
                        {book?.email && (
                            <InputWrapper>
                                <InputField
                                    name="email-for-books"
                                    id="email-for-books"
                                    placeholder={
                                        staticTexts.NO_BOOK_DIALOG.input[lang]
                                    }
                                    value={email}
                                    onChange={(e) => handleChange(e)}
                                    onKeyDown={(e) => handleKeyDown(e)}
                                />
                                <CustomButton
                                    width="fit-content"
                                    text={
                                        staticTexts.NO_BOOK_DIALOG.button[lang]
                                    }
                                    handleClick={handleSubmit}
                                />
                            </InputWrapper>
                        )}
                        <Error $error={error} $success={success}>
                            {error
                                ? staticTexts.NO_BOOK_DIALOG.error[lang]
                                : success
                                ? staticTexts.NO_BOOK_DIALOG.success[lang]
                                : null}
                        </Error>
                    </BodyContainer>
                </DialogBodyContainer>
            </DialogContentWrapper>
        </Dialog>
    );
};

export default BookDialog;
