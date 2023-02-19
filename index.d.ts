/*!
    @e53e04ac/ipp5-html-content/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { DOMWindow } from 'jsdom';

import { EventEmitter } from 'event-emitter';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';

export declare namespace Ipp5HtmlContent {

    type Options = {
        readonly html: ValueOrGet<Buffer | string>;
    };

    type EventSpecs = Record<never, never>;

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _Ipp5HtmlContent: Get<_Self>;
        readonly window: Get<DOMWindow>;
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5HtmlContent = Ipp5HtmlContent.Self;

export declare const Ipp5HtmlContent: Ipp5HtmlContent.ConstructorWithCompanion;
