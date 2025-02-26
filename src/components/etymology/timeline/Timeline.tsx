import React, { useCallback, useState } from 'react';

import {
    ContentContainer,
    Table,
    TBody,
    TableRow,
    VerticalTextCell,
    YearCell,
    HexagonBox,
} from './timelineStyles';
import Dialog from '../../common/dialog/Dialog';
import staticTexts from '../../../miscellaneous/staticTexts.json';
import { useGlobalData } from '../../../hooks/useGlobalData';
import PedigreeChart from './PedigreeChart';
import { data, BOX_WIDTH } from './data';
import Controls from './Controls';

const Timeline: React.FC = () => {
    const { lang } = useGlobalData();
    const [isOpen, setIsOpen] = useState(true);
    const [scale, setScale] = useState(1);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <Dialog
            background="light"
            open={true}
            width={`${BOX_WIDTH * 33}px`}
            height="50rem"
            handleClose={handleClose}
        >
            <ContentContainer
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                }}
            >
                <Table>
                    <TBody>
                        {data.map((entry, entryIndex) => (
                            <React.Fragment key={entryIndex}>
                                {entry.years.map((year, yearIndex) => (
                                    <TableRow
                                        key={yearIndex}
                                        $mid={year.length !== 0}
                                    >
                                        {yearIndex === 0 && (
                                            <VerticalTextCell
                                                rowSpan={entry.years.length}
                                            >
                                                {entry.period}
                                            </VerticalTextCell>
                                        )}
                                        <YearCell>
                                            {year.length ? (
                                                <HexagonBox>{year}</HexagonBox>
                                            ) : null}
                                        </YearCell>
                                    </TableRow>
                                ))}
                            </React.Fragment>
                        ))}
                    </TBody>
                </Table>
                <PedigreeChart />
            </ContentContainer>
            <Controls setScale={setScale} />
        </Dialog>
    );
};

export default Timeline;
