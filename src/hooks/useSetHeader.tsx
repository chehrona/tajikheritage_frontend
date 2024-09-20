import React, { useEffect } from 'react';

// Hooks
import { useGlobalData } from './useGlobalData';

// Services
import { requestPage } from '../services/request';

// Helper
import staticTexts from '../miscellaneous/staticTexts.json';

// Types
import { Langs } from '../appTypes';
import { HeaderDataType, Section, TitleProps } from './hookTypes';

export const useSetHeader = (page: string, type?: string, pageData?: any) => {
    const { title, setTitle } = useGlobalData();

    const modifiedPage =
        type === 'landing' ? page : page.substring(0, page.indexOf('/'));

    const link =
        type === 'middle'
            ? page.substring(page.indexOf('_') + 1)
            : page.substring(page.indexOf('/') + 1, page.length - 1);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                const headerData = await requestPage(modifiedPage);

                let tempHeader = { ...title };

                if (type === 'landing') {
                    updateLandingPageTitle(tempHeader, headerData);
                } else {
                    updatePageTitle(tempHeader, headerData);
                }

                setTitle(tempHeader);
            } catch (error: unknown) {
                setTitle(staticTexts.HEADER);
            }
        };

        if (page === 'reset') {
            setTitle(staticTexts.HEADER);
        } else {
            fetchHeaderData();
        }
    }, [page, pageData]);

    const updateLandingPageTitle = (
        tempHeader: TitleProps,
        headerData: HeaderDataType,
    ) => {
        const { header } = headerData;

        for (const key in title) {
            const typedKey = key as Langs;
            let titleArr = [...title[typedKey]];

            // New title
            const newItem = [`${header[typedKey].toUpperCase()}`, ''];

            titleArr[1] = newItem;

            tempHeader[typedKey] = titleArr;
        }
    };

    const updatePageTitle = (
        tempHeader: TitleProps,
        headerData: HeaderDataType,
    ) => {
        const { header, sections } = headerData;

        sections?.forEach((section: Section) => {
            const { link: sectionLink, cardTitle: sectionTitle } = section;

            if (sectionLink === link) {
                for (const key in title) {
                    const typedKey = key as Langs;

                    let titleArr = [...title[typedKey]];
                    let newItem = [];

                    if (type === 'middle') {
                        newItem = [
                            `${header[typedKey].toUpperCase()}`,
                            `${
                                sectionTitle[typedKey] !== undefined
                                    ? sectionTitle[typedKey]
                                    : ''
                            }`,
                        ];
                    } else {
                        newItem = [
                            `${sectionTitle[typedKey].toUpperCase()}`,
                            `${
                                pageData?.name[typedKey] !== undefined
                                    ? pageData?.name[typedKey]
                                    : ''
                            }`,
                        ];
                    }

                    titleArr[1] = newItem;
                    tempHeader[typedKey] = titleArr;
                }
            }
        });
    };
};
