// @ts-check

const getBuildConfig = require('./base/getBuildConfigs');

module.exports = getBuildConfig({
    definitions: {
        VERSION_HASH: '$Id$',
        SUB_ENV: 'production',
        FILE_HOST: 'http://landing-admin.mfurniture.vn',
        API_ENTRY: 'http://landing-admin.mfurniture.vn',
        SENTRY_ID: 'https://e51942a013484d4dbfab39db75aa25f5@sentry.io/1549017',
    },
    sourceMap: true,
    compression: true,
    gaID: 'UA-135627950-4'
});