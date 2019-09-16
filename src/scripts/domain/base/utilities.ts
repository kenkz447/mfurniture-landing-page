import { BreakPoint } from 'qoobee';

const showdown = require('showdown');

const converter = new showdown.Converter();

export const markdownToHTML = (markdown: string) => {
    if (!markdown) {
        return '';
    }

    return converter.makeHtml(markdown);
}

export const sortById = (p1, p2) => p2.id! - p1.id!;

export const isSmallDevice = (breakPoint: BreakPoint) => breakPoint === 'sm';
