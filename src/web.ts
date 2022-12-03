import { WebPlugin } from '@capacitor/core';

import type { PusherBeamPlugin } from './definitions';

export class PusherBeamWeb extends WebPlugin implements PusherBeamPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
