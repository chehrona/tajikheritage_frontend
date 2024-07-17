import React from 'react';

// Styled components
import {
    SectionContainer,
    InputWrapper,
    Label,
    EditableInput,
} from '../managementStyles';

export default function EditSection({ title, handleChange }) {
    return (
        <SectionContainer>
            <InputWrapper>
                <Label>English title</Label>
                <EditableInput
                    type="text"
                    value={title?.us}
                    onChange={(e) => handleChange(e, 'title', 'us')}
                />
            </InputWrapper>
            <InputWrapper>
                <Label>Russian title</Label>
                <EditableInput
                    type="text"
                    value={title?.ru}
                    onChange={(e) => handleChange(e, 'title', 'ru')}
                />
            </InputWrapper>
            <InputWrapper>
                <Label>Tajik title</Label>
                <EditableInput
                    type="text"
                    value={title?.tj}
                    onChange={(e) => handleChange(e, 'title', 'tj')}
                />
            </InputWrapper>
        </SectionContainer>
    );
}
