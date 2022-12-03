'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const PusherBeam = core.registerPlugin('PusherBeam', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.PusherBeamWeb()),
});

class PusherBeamWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PusherBeamWeb: PusherBeamWeb
});

exports.PusherBeam = PusherBeam;
//# sourceMappingURL=plugin.cjs.js.map
