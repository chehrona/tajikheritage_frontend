import React from 'react';

import { useGlobalData } from '../../../App';

import { StyledAlert } from './alertStyles';

export default function Alert({ message }) {
    const { lang } = useGlobalData();

    return <StyledAlert severity="error">{message[lang]}</StyledAlert>;
}
