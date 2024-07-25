import React, { useState } from 'react';

// Components
import { Tooltip } from '../../components/common/tooltip/Tooltip';

// Styled components
import {
    TextBoxWrapper,
    Subtitle,
    WordDesc,
    TableImage,
} from './wordPageStyles';

export default function TextBox({ data, id }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <TextBoxWrapper>
            <Subtitle dangerouslySetInnerHTML={{ __html: data.subtitle }} />
            {Object.keys(data.body).map((element) => {
                const key = `${id}_${element}`;
                switch (true) {
                    case element.startsWith('text'):
                        return (
                            <WordDesc
                                key={key}
                                dangerouslySetInnerHTML={{
                                    __html: data.body[element],
                                }}
                            />
                        );
                    case element.startsWith('tooltip'):
                        return (
                            <Tooltip key={key} content={data.body[element]} />
                        );
                    case element.startsWith('table'):
                        return (
                            <TableImage
                                key={key}
                                onClick={() =>
                                    setExpanded((prevState) => !prevState)
                                }
                                expanded={expanded}
                                src={`${process.env.REACT_APP_BASE_URL}${data.body[element]}`}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </TextBoxWrapper>
    );
}
