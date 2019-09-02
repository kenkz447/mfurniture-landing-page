import { MenuItem } from 'qoobee';

import { HOME_URL } from '@/configs';

export const headerMenu: MenuItem[] = [{
    label: 'Home',
    url: HOME_URL
}, {
    label: 'Sofa collection',
    url: '/collection/sofa'
}, {
    label: 'Chair collection',
    url: '/collection/chair'
}, {
    label: 'Table collection',
    url: '/collection/table'
}];