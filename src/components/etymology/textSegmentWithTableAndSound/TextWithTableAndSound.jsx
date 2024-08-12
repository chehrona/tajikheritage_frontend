import React, { useState } from 'react';

// Components
import { Tooltip } from '../../common/tooltip/Tooltip';
import SoundButton from '../../common/soundButton/SoundButton';
import ArticleSubtitle from '../../common/articleSubtitle/ArticleSubtitle';

// Styled components
import {
    TextBoxWrapper,
    WordDesc,
    TableImage,
    SoundBox,
} from './textSegmentWithTableAndSoundStyles';

export default function TextSegmentWithTableAndSound({ data, id }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <TextBoxWrapper>
            <ArticleSubtitle subtitle={data.subtitle} />
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
                    case element.startsWith('sound'):
                        return (
                            <SoundBox key={key}>
                                <WordDesc
                                    dangerouslySetInnerHTML={{
                                        __html: data.body[element].text,
                                    }}
                                />{' '}
                                {data.body[element].source.length > 0 ? (
                                    <SoundButton
                                        data={data.body[element].source}
                                    />
                                ) : null}
                            </SoundBox>
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
