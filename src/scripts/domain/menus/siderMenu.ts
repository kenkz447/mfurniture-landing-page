import { MenuItem } from 'qoobee';

import { ABOUT_URL, CONTACT_URL, DEALERS_URL, NEWS_URL } from '@/configs';

export const siderMenu: MenuItem[] = [{
    label: 'About',
    url: ABOUT_URL
}, {
    label: 'News',
    url: NEWS_URL
}, {
    label: 'Dealers',
    url: DEALERS_URL
}, {
    label: 'Contact',
    url: CONTACT_URL
}];