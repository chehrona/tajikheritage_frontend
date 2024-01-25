import React, { useState } from "react";
import { useSetLang } from "../../../App";

import { addEmail } from "../../../services/request";

import Dialog from "../../common/dialog/Dialog";

import {
    Desc,
    InfoContainer,
    StyledContent,
    InfoTitle,
    BodyContainer,
    InputWrapper,
    InputField,
    StyledButton,
    Error
} from "./bookDialogStyles";

export default function BookDialog({ book, setBookDialog, bookDialog, setBookIndex }) {
    const { lang } = useSetLang();
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    function handleChange(e) {
        setError(false);

        const value = e.target.value.toLowerCase();
        setEmail(value);
    }

    function handleClose() {
        setBookDialog(false);
        setBookIndex(null);
        setEmail("");
        setError(false);
        setSuccess(false);
    }

    const handleSubmit = async () => {
        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (validEmail.test(email)) {
            const info = {
                title: book?.title,
                email: email
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
    }

    return (
        <Dialog
            open={bookDialog}
            width={"500px"}
            border={"1.5rem"}
            handleClose={handleClose}
            backdrop={"rgba(15 10 0 / 30%)"}
            background={"#fcf6e9"}
        >
            <StyledContent>
                <InfoContainer>
                    <InfoTitle>
                        {lang === "us" ? "Apologies!" : (lang === "ru" ? "Извините!" : "Бубахшед!")}
                    </InfoTitle>
                    <BodyContainer>
                        <Desc>{book?.msg}</Desc>
                        {!book?.email && <InputWrapper>
                            <InputField
                                placeholder={lang === "us" ? "Enter your email" : (lang === "ru" ? "Адрес электронной почты" : "Суроғаи почтаи электронӣ")}
                                value={email}
                                onChange={(e) => handleChange(e)}
                            />
                            <StyledButton onClick={handleSubmit}>
                                {lang === "us" ? "Submit" : (lang === "ru" ? "Ввод" : "Фирист")}
                            </StyledButton>
                        </InputWrapper>}
                        <Error error={error} success={success}>{error ? 
                            (lang === "us" ? "Invalid email" : (lang === "ru" ? "Неверный адрес" : "Почтаи электронӣ нодуруст")) : (
                                success && (lang === "us" ? "We got your email. Thank you." : (lang === "ru" ? "Неверный адрес" : "Почтаи электрониатонро гирифтем. Раҳмат.")))}
                        </Error>
                    </BodyContainer>
                </InfoContainer>
            </StyledContent>
        </Dialog>
    );
}