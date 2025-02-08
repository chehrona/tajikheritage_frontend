import { ROW_HEIGHT } from './timelineStyles';
import { BOX_WIDTH, GAP_WIDTH, BOX_HEIGHT } from './languageBoxStyles';

export const languages = [
    {
        name: '?',
        x: 2 * BOX_WIDTH,
        y: 1 * BOX_HEIGHT,
        connect: {
            x1: 2.5 * BOX_WIDTH,
            y1: 1.5 * BOX_HEIGHT,
            x2: 2.5 * BOX_WIDTH,
            y2: 3.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'Proto-Indo-European',
        x: 2 * BOX_WIDTH,
        y: 4 * BOX_HEIGHT,
        connect: {
            x1: 2.5 * BOX_WIDTH,
            y1: 4.5 * BOX_HEIGHT,
            x2: 2.5 * BOX_WIDTH,
            y2: 5.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'a',
        x: 2 * BOX_WIDTH,
        y: 5.5 * BOX_HEIGHT,
        connect: {
            x1: 1.5 * BOX_WIDTH,
            y1: 5.5 * BOX_HEIGHT,
            x2: 3.5 * BOX_WIDTH,
            y2: 5.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'b',
        x: BOX_WIDTH,
        y: 5.5 * BOX_HEIGHT,
        connect: {
            x1: 1.5 * BOX_WIDTH,
            y1: 5.5 * BOX_HEIGHT,
            x2: 1.5 * BOX_WIDTH,
            y2: 8.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'Anatolian',
        x: BOX_WIDTH,
        y: 9 * BOX_HEIGHT,
        connect: {
            x1: 1.5 * BOX_WIDTH,
            y1: 9.5 * BOX_HEIGHT,
            x2: 1.5 * BOX_WIDTH,
            y2: 10 * BOX_HEIGHT,
        },
    },
    {
        name: 'c',
        x: 3 * BOX_WIDTH,
        y: 5.5 * BOX_HEIGHT,
        connect: {
            x1: 3.5 * BOX_WIDTH,
            y1: 5.5 * BOX_HEIGHT,
            x2: 3.5 * BOX_WIDTH,
            y2: 7 * BOX_HEIGHT,
        },
    },
    {
        name: 'd',
        x: 3 * BOX_WIDTH,
        y: 7 * BOX_HEIGHT,
        connect: {
            x1: 2.5 * BOX_WIDTH,
            y1: 7 * BOX_HEIGHT,
            x2: 4.5 * BOX_WIDTH,
            y2: 7 * BOX_HEIGHT,
        },
    },
    {
        name: 'e',
        x: 2 * BOX_WIDTH,
        y: 7 * BOX_HEIGHT,
        connect: {
            x1: 2.5 * BOX_WIDTH,
            y1: 7 * BOX_HEIGHT,
            x2: 2.5 * BOX_WIDTH,
            y2: 22.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'Tocharian',
        x: 2 * BOX_WIDTH,
        y: 24 * BOX_HEIGHT,
        connect: {
            x1: 2.5 * BOX_WIDTH,
            y1: 23.5 * BOX_HEIGHT,
            x2: 2.5 * BOX_WIDTH,
            y2: 23.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'f',
        x: 4 * BOX_WIDTH,
        y: 7 * BOX_HEIGHT,
        connect: {
            x1: 4.5 * BOX_WIDTH,
            y1: 7 * BOX_HEIGHT,
            x2: 4.5 * BOX_WIDTH,
            y2: 8.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'g',
        x: 4 * BOX_WIDTH,
        y: 8.5 * BOX_HEIGHT,
        connect: {
            x1: 6.5 * BOX_WIDTH,
            y1: 8.5 * BOX_HEIGHT,
            x2: 3.5 * BOX_WIDTH,
            y2: 8.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'i',
        x: 3 * BOX_WIDTH,
        y: 8.5 * BOX_HEIGHT,
        connect: {
            x1: 3.5 * BOX_WIDTH,
            y1: 8.5 * BOX_HEIGHT,
            x2: 3.5 * BOX_WIDTH,
            y2: 14.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'j',
        x: 6 * BOX_WIDTH,
        y: 8.5 * BOX_HEIGHT,
        connect: {
            x1: 6.5 * BOX_WIDTH,
            y1: 8.5 * BOX_HEIGHT,
            x2: 6.5 * BOX_WIDTH,
            y2: 10 * BOX_HEIGHT,
        },
    },
    {
        name: 'k',
        x: 6 * BOX_WIDTH,
        y: 10 * BOX_HEIGHT,
        connect: {
            x1: 6.5 * BOX_WIDTH,
            y1: 10 * BOX_HEIGHT,
            x2: 6.5 * BOX_WIDTH,
            y2: 10.75 * BOX_HEIGHT,
        },
    },
    {
        name: 'l',
        x: 6 * BOX_WIDTH,
        y: 10.75 * BOX_HEIGHT,
        connect: {
            x1: 5.5 * BOX_WIDTH,
            y1: 10.75 * BOX_HEIGHT,
            x2: 7.5 * BOX_WIDTH,
            y2: 10.75 * BOX_HEIGHT,
        },
    },
    {
        name: 'm',
        x: 5 * BOX_WIDTH,
        y: 10.75 * BOX_HEIGHT,
        connect: {
            x1: 5.5 * BOX_WIDTH,
            y1: 10.75 * BOX_HEIGHT,
            x2: 5.5 * BOX_WIDTH,
            y2: 12.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'n',
        x: 5 * BOX_WIDTH,
        y: 12.5 * BOX_HEIGHT,
        connect: {
            x1: 4.5 * BOX_WIDTH,
            y1: 12.5 * BOX_HEIGHT,
            x2: 6.5 * BOX_WIDTH,
            y2: 12.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'p',
        x: 4 * BOX_WIDTH,
        y: 12.5 * BOX_HEIGHT,
        connect: {
            x1: 4.5 * BOX_WIDTH,
            y1: 12.5 * BOX_HEIGHT,
            x2: 4.5 * BOX_WIDTH,
            y2: 13.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'r',
        x: 6 * BOX_WIDTH,
        y: 12.5 * BOX_HEIGHT,
        connect: {
            x1: 6.5 * BOX_WIDTH,
            y1: 12.5 * BOX_HEIGHT,
            x2: 6.5 * BOX_WIDTH,
            y2: 13.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'Paleo Balkan',
        x: 3 * BOX_WIDTH,
        y: 15 * BOX_HEIGHT,
        connect: {
            x1: 3.5 * BOX_WIDTH,
            y1: 15.5 * BOX_HEIGHT,
            x2: 3.5 * BOX_WIDTH,
            y2: 16 * BOX_HEIGHT,
        },
    },
];

export const data = [
    {
        period: 'Copper Age',
        years: ['', '', '4000BCE', ''],
    },
    {
        period: 'Bronze Age',
        years: ['3000BCE', '', '2000BCE'],
    },
    {
        period: 'Iron Age',
        years: ['', '1000BCE'],
    },
    {
        period: 'Antiquity',
        years: ['', '1CE'],
    },
    {
        period: 'Middle Ages',
        years: ['', '1000CE'],
    },
    {
        period: 'Modern',
        years: ['', '2000CE', ''],
    },
];
