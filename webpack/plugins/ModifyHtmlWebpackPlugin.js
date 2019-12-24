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
                        .replace('<body>', `<body>\n<noscript>${this.noscriptMessage}</noscript>`)
                });
            });
        });
    }
}

module.exports = ModifyHtmlWebpackPlugin;