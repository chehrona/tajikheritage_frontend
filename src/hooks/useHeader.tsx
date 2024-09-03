import React, { useState, useEffect } from 'react';

// Servives
import { requestPage } from '../services/request';

// Types
import { Entry, Section, TitleProps } from './hookTypes';

export const useHeader = (page: string, data: any, title: any) => {
    const [header, setHeader] = useState<TitleProps>(title);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                const headerData = await requestPage(
                    page.substring(0, page.indexOf('/')),
                );

                let tempHeader = { ...title };

                headerData.forEach((entry: any) => {
                    entry.sections.forEach((section: any) => {
                        if (
                            section.link ===
                            page.substring(
                                page.indexOf('/') + 1,
                                page.length - 1,
                            )
                        ) {
                            for (const key in title) {
                                let titleArr = [...title[key]];

                                // New title
                                const newItem = [
                                    `${section.title[key].toUpperCase()}`,
                                    `${data.name[key]}`,
                                ];

                                titleArr[1] = newItem;

                                tempHeader[key] = titleArr;
                            }
                        }
                    });
                });

                setHeader(tempHeader);
            } catch (error: unknown) {
                console.error('Failed to set header', error);
            }
        };

        fetchHeaderData();
    }, [page, data, title]);

    return header;
};
