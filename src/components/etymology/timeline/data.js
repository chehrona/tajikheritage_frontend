import { ROW_HEIGHT } from './timelineStyles';
import { BOX_WIDTH, GAP_WIDTH, BOX_HEIGHT } from './languageBoxStyles';

export const languages = [
    {
        name: 'Proto-Indo-European',
        x: 2 * BOX_WIDTH,
        y: 4 * BOX_HEIGHT,
        connect: {
            x1: 2 * BOX_WIDTH + BOX_WIDTH / 2,
            y1: 4.5 * BOX_HEIGHT,
            x2: 2 * BOX_WIDTH + BOX_WIDTH / 2,
            y2: 5.5 * BOX_HEIGHT,
        },
    },
    {
        name: '',
        x: 2 * BOX_WIDTH,
        y: 5.5 * BOX_HEIGHT,
        connect: {
            x1: 1.5 * BOX_WIDTH,
            y1: 5.5 * BOX_HEIGHT,
            x2: 3 * BOX_WIDTH,
            y2: 5.5 * BOX_HEIGHT,
        },
    },
    {
        name: '',
        x: BOX_WIDTH,
        y: 5.5 * BOX_HEIGHT,
        connect: {
            x1: 2.5 * BOX_WIDTH,
            y1: 5.5 * BOX_HEIGHT,
            x2: 3.5 * BOX_WIDTH,
            y2: 5.5 * BOX_HEIGHT,
        },
    },
    {
        name: '',
        x: 3 * BOX_WIDTH,
        y: 5.5 * BOX_HEIGHT,
        connect: {
            x1: 2.5 * BOX_WIDTH,
            y1: 5.5 * BOX_HEIGHT,
            x2: 3.5 * BOX_WIDTH,
            y2: 5.5 * BOX_HEIGHT,
        },
    },
    {
        name: 'Anatolian',
        x: BOX_WIDTH,
        y: 9 * BOX_HEIGHT,
        connect: {
            x1: 1.5 * BOX_WIDTH,
            y1: 8.5 * BOX_HEIGHT,
            x2: 1.5 * BOX_WIDTH,
            y2: 5.5 * BOX_HEIGHT,
        },
    },
    {
        name: '',
        x: 3 * BOX_WIDTH,
        y: 7 * BOX_HEIGHT,
        connect: {
            x1: 3.5 * BOX_WIDTH,
            y1: 5.5 * BOX_HEIGHT,
            x2: 3.5 * BOX_WIDTH,
            y2: 7 * BOX_HEIGHT,
        },
    },
    {
        name: '',
        x: 2 * BOX_WIDTH,
        y: 7 * BOX_HEIGHT,
        connect: {
            x1: 2.5 * BOX_WIDTH,
            y1: 7 * BOX_HEIGHT,
            x2: 3.5 * BOX_WIDTH,
            y2: 7 * BOX_HEIGHT,
        },
    },
    {
        name: '',
        x: 4 * BOX_WIDTH,
        y: 7 * BOX_HEIGHT,
        connect: {
            x1: 3.5 * BOX_WIDTH,
            y1: 7 * BOX_HEIGHT,
            x2: 4.5 * BOX_WIDTH,
            y2: 7 * BOX_HEIGHT,
        },
    },
    {
        name: '',
        x: 4 * BOX_WIDTH,
        y: 7 * BOX_HEIGHT,
        connect: {
            x1: 3.5 * BOX_WIDTH,
            y1: 7 * BOX_HEIGHT,
            x2: 4.5 * BOX_WIDTH,
            y2: 7 * BOX_HEIGHT,
        },
    },
    {
        name: '',
        x: 2 * BOX_WIDTH,
        y: 23 * BOX_HEIGHT,
        connect: {
            x1: 2.5 * BOX_WIDTH,
            y1: 7 * BOX_HEIGHT,
            x2: 2.5 * BOX_WIDTH,
            y2: 23 * BOX_HEIGHT,
        },
    },
    {
        name: '',
        x: 3 * BOX_WIDTH,
        y: 8.75 * BOX_HEIGHT,
        connect: {
            x1: 2.5 * BOX_WIDTH,
            y1: 7 * BOX_HEIGHT,
            x2: 2.5 * BOX_WIDTH,
            y2: 23 * BOX_HEIGHT,
        },
    },
    {
        name: '',
        x: 3 * BOX_WIDTH,
        y: 8 * BOX_HEIGHT,
        connect: {
            x1: 3.5 * BOX_WIDTH,
            y1: 7 * BOX_HEIGHT,
            x2: 4.5 * BOX_WIDTH,
            y2: 7 * BOX_HEIGHT,
        },
    },
    {
        name: '',
        x: 4 * BOX_WIDTH,
        y: 8 * BOX_HEIGHT,
        connect: {
            x1: 3.5 * BOX_WIDTH,
            y1: 7 * BOX_HEIGHT,
            x2: 4.5 * BOX_WIDTH,
            y2: 7 * BOX_HEIGHT,
        },
    },
    // {
    //     name: '',
    //     x: 2 * BOX_WIDTH,
    //     y: BOX_HEIGHT * 3,
    //     connect: {
    //         x1: BOX_WIDTH * 1.5,
    //         y1: BOX_HEIGHT * 3,
    //         x2: BOX_WIDTH * 2.5,
    //         y2: BOX_HEIGHT * 3,
    //     },
    // },
    // {
    //     name: '',
    //     x: 2 * BOX_WIDTH,
    //     y: BOX_HEIGHT * 3.5,
    //     connect: {
    //         x1: 2.5 * BOX_WIDTH,
    //         y1: BOX_HEIGHT * 3,
    //         x2: 2.5 * BOX_WIDTH,
    //         y2: BOX_HEIGHT * 3.5,
    //     },
    // },
    // {
    //     name: '',
    //     x: 2 * BOX_WIDTH,
    //     y: BOX_HEIGHT * 3.5,
    //     connect: {
    //         x1: 2.5 * BOX_WIDTH,
    //         y1: BOX_HEIGHT * 3,
    //         x2: 2.5 * BOX_WIDTH,
    //         y2: BOX_HEIGHT * 3.5,
    //     },
    // },
];

export const data = [
    {
        period: 'Copper Age',
        years: ['', '', '4000BCE', ''],
        background: '#ebceae',
    },
    {
        period: 'Bronze Age',
        years: ['3000BCE', '', '2000BCE'],
        background: '#dfc9af',
    },
    {
        period: 'Iron Age',
        background: '#e9e8e2',
        years: ['', '1000BCE'],
    },
    {
        period: 'Antiquity',
        background: '#e1d2b8',
        years: ['', '1CE', ''],
    },
    // {
    //     period: 'Middle Ages',
    //     background: '#bfcac1',
    //     languages: [
    //         {
    //             time: '',
    //             boxes: [
    //                 {
    //                     name: 'Tocharian A',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //                 {
    //                     name: 'Old English',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //                 {
    //                     name: 'Old French',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //                 {
    //                     name: 'Middle Chinese',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //             ],
    //         },
    //         {
    //             time: '1000CE',
    //             boxes: [
    //                 {
    //                     name: 'New Persian',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //                 {
    //                     name: 'Old French',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //                 {
    //                     name: 'Middle Chinese',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //             ],
    //         },
    //     ],
    // },
    // {
    //     period: 'Modern',
    //     background: '#c6d8b6',
    //     languages: [
    //         {
    //             time: '',
    //             boxes: [
    //                 {
    //                     name: 'Latin',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //                 {
    //                     name: 'Old Persian',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //                 {
    //                     name: 'Old Chinese',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //             ],
    //         },
    //         {
    //             time: '2000CE',
    //             boxes: [
    //                 {
    //                     name: 'English',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //                 {
    //                     name: 'French',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //                 {
    //                     name: 'Mandarin Chinese',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //                 {
    //                     name: 'Spanish',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //             ],
    //         },
    //         {
    //             time: '',
    //             boxes: [
    //                 {
    //                     name: 'Latin',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //                 {
    //                     name: 'Old Persian',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //                 {
    //                     name: 'Old Chinese',
    //                     x: BOX_WIDTH,
    //                     y: BOX_HEIGHT * 2,
    //                     connect: {
    //                         x1: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y1: BOX_HEIGHT * 2 + BOX_HEIGHT / 2,
    //                         x2: BOX_WIDTH + BOX_WIDTH / 2,
    //                         y2: BOX_HEIGHT * 4 - BOX_HEIGHT / 2,
    //                     },
    //                 },
    //             ],
    //         },
    //     ],
    // },
];
