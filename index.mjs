/*!
    @e53e04ac/ipp5-html-content/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { JSDOM as JsdomJSDOM } from 'jsdom';
import { VirtualConsole as JsdomVirtualConsole } from 'jsdom';

import { EventEmitter } from 'event-emitter';
import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').Ipp5HtmlContent.Constructor} */
const constructor = ((options) => {

    const _options = ({
        html: hold(() => {
            return unwrap(options.html);
        }),
    });

    /** @type {import('.').Ipp5HtmlContent._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
    });

    /** @type {import('.').Ipp5HtmlContent.Self} */
    const self = ({
        ...EventEmitter({}),
        _Ipp5HtmlContent: (() => {
            return _self;
        }),
        window: hold(() => {
            return new JsdomJSDOM(_options.html(), {
                virtualConsole: new JsdomVirtualConsole({}),
            }).window;
        }),
    });

    return self;

});

/** @type {import('.').Ipp5HtmlContent.Companion} */
const companion = ({});

/** @type {import('.').Ipp5HtmlContent.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Ipp5HtmlContent };
