import * as marked from 'marked';
import { BreakPoint } from 'qoobee';

export const sortById = (p1, p2) => p2.id! - p1.id!;

export const isSmallDevice = (breakPoint: BreakPoint) => breakPoint === 'sm';

const renderer = new marked.Renderer();

renderer.image = (href: string, title: string, text: string) => {
    return `
        <img src="${href}" alt="${title}" style="max-width: 100%; width: 100%;" />
    `;
};

marked.setOptions({
    'baseUrl': null,
    'breaks': false,
    'gfm': true,
    'headerIds': true,
    'headerPrefix': '',
    'highlight': null,
    'langPrefix': 'language-',
    'mangle': true,
    'pedantic': false,
    'sanitize': false,
    'sanitizer': null,
    'silent': false,
    'smartLists': false,
    'smartypants': false,
    'tables': true,
    'xhtml': false,
    renderer: renderer
});

export const markdownToHTML = (markdown: string) => {
    if (!markdown) {
        return '';
    } 

    return marked(markdown);
}