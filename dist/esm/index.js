import { registerPlugin } from '@capacitor/core';
const PusherBeam = registerPlugin('PusherBeam', {
    web: () => import('./web').then(m => new m.PusherBeamWeb()),
});
export * from './definitions';
export { PusherBeam };
//# sourceMappingURL=index.js.map