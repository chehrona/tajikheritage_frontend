import React from "react";

import { useSetLang } from "../../../App";

import { 
    StyledAlert
} from "./alertStyles";

export default function Alert() {
    const { lang } = useSetLang();

    return (
        <StyledAlert severity="error">
            {
                lang === "us" ? "Sorry, there was an error. Reload the page" : (
                lang === "ru" ? "Извините произошла ошибка. Перезагрузите страницу" : 
                "Бубахшед, хатогие рух дод. Саҳифаро аз нав кунед")
            }
        </StyledAlert>
    );
}