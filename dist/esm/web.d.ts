import { WebPlugin } from '@capacitor/core';
import type { PusherBeamPlugin } from './definitions';
export declare class PusherBeamWeb extends WebPlugin implements PusherBeamPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
