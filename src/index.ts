import { registerPlugin } from '@capacitor/core';

import type { PusherBeamPlugin } from './definitions';

const PusherBeam = registerPlugin<PusherBeamPlugin>('PusherBeam', {
  web: () => import('./web').then(m => new m.PusherBeamWeb()),
});

export * from './definitions';
export { PusherBeam };
