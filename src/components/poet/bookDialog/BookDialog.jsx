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

    function handleClose() {
        setBookDialog(false);
        setBookIndex(null);
        setEmail("");
        setError(false);
    }

    function handleSubmit() {
        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (validEmail.test(email)) {
            const info = {
                title: book?.title,
                email: email
            };
    
            addEmail(info);
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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <StyledButton onClick={handleSubmit}>
                                {lang === "us" ? "Submit" : (lang === "ru" ? "Ввод" : "Фирист")}
                            </StyledButton>
                        </InputWrapper>}
                        <Error>{error && (lang === "us" ? "Invalid email" : (lang === "ru" ? "Неверный адрес" : "Почтаи электронӣ нодуруст"))}</Error>
                    </BodyContainer>
                </InfoContainer>
            </StyledContent>
        </Dialog>
    );
}