'use strict';

// @ts-check

class ModifyHtmlWebpackPlugin {
    constructor(options) {
        this.lang = options.lang;
        this.noscriptMessage = options.noscriptMessage;
    }

    apply(compiler) {
        compiler.hooks.compilation.tap('ModifyHtmlWebpackPlugin', compilation => {
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap('ModifyHtmlWebpackPlugin', ({ html }) => {
                return ({
                    html: html
                        .replace('<html>', `<html lang="${this.lang}">`)
                        .replace('<title>', `<meta name="p:domain_verify" content="ac31560091f308d48fb21c3bb8e8bc2c"/><title>`)
                        .replace('<title>', `<meta property="og:type" content="website" /><title>`)
                        .replace('<title>', `<meta property="og:image" content="https://landing.mfurniture.vn/uploads/7c79ba70035243b2a8c83f732aa88fec.jpg" /><title>`)
                        .replace('<title>', `<meta property="og:image:alt" content="M Collection" /><title>`)
                        .replace('<title>', `<meta property="og:title" content="[M]Furniture" /><title>`)
                        .replace('<title>', `<meta property="og:description" content="https://mfurniture.vn" /><title>`)
                        .replace('<body>', `<body>\n<noscript>${this.noscriptMessage}</noscript>`)
                });
            });
        });
    }
}

module.exports = ModifyHtmlWebpackPlugin;