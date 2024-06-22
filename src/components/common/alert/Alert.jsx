import React from 'react';

import { useSetLang } from '../../../App';

import { StyledAlert } from './alertStyles';

export default function Alert({ message }) {
    const { lang } = useSetLang();

    return <StyledAlert severity="error">{message[lang]}</StyledAlert>;
}
