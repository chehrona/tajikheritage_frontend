import React from "react";
import { useSetLang } from "../../../App";

import Dialog from "../../common/dialog/Dialog";

import {
    Desc,
    InfoContainer,
    StyledContent,
    InfoTitle,
    BodyContainer,
} from "./bookDialogStyles";

export default function BookDialog({ msg, setBookDialog }) {
    const { lang } = useSetLang();

    function handleClose() {
        setBookDialog(false);
    }

    return (
        <Dialog
            open={true}
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
                        <Desc>{msg}</Desc>
                    </BodyContainer>
                </InfoContainer>
            </StyledContent>
        </Dialog>
    );
}