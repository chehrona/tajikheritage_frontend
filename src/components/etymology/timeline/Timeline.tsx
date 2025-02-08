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
import { data } from './data';

const Timeline: React.FC = () => {
    const { lang } = useGlobalData();
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <Dialog
            // hideBackdrop={true}
            background="light"
            open={true}
            width="80rem"
            height="50rem"
            handleClose={handleClose}
        >
            <ContentContainer>
                <Table>
                    <TBody>
                        {data.map((entry, entryIndex) => (
                            <React.Fragment key={entryIndex}>
                                {entry.years.map((year, yearIndex) => (
                                    <TableRow
                                        key={yearIndex}
                                        $mid={year.length !== 0}
                                        $background={entry.background}
                                    >
                                        {yearIndex === 0 && (
                                            <VerticalTextCell
                                                rowSpan={entry.years.length}
                                            >
                                                {entry.period}
                                            </VerticalTextCell>
                                        )}{' '}
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
        </Dialog>
    );
};

export default Timeline;
