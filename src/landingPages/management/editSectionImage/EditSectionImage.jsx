import React from 'react';

// Styled components
import {
    SectionContainer,
    InputWrapper,
    Label,
    EditableInput,
} from '../managementStyles';

export default function EditSectionImage({
    handleFileChange,
    handleUrlChange,
    img,
}) {
    return (
        <SectionContainer>
            <InputWrapper>
                <Label>English image</Label>
                <EditableInput
                    type="text"
                    value={img.us}
                    onChange={(e) => handleUrlChange(e, 'us')}
                />
                <EditableInput
                    file={true}
                    type="file"
                    onChange={(e) => handleFileChange(e, 'us')}
                />
            </InputWrapper>
            <InputWrapper>
                <Label>Russian image</Label>
                <EditableInput
                    type="text"
                    value={img.ru}
                    onChange={(e) => handleUrlChange(e, 'ru')}
                />
                <EditableInput
                    file={true}
                    type="file"
                    onChange={(e) => handleFileChange(e, 'ru')}
                />
            </InputWrapper>
            <InputWrapper>
                <Label>Tajik image</Label>
                <EditableInput
                    type="text"
                    value={img.tj}
                    onChange={(e) => handleUrlChange(e, 'tj')}
                />
                <EditableInput
                    file={true}
                    type="file"
                    onChange={(e) => handleFileChange(e, 'tj')}
                />
            </InputWrapper>
        </SectionContainer>
    );
}
