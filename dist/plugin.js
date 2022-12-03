var capacitorPusherBeam = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
