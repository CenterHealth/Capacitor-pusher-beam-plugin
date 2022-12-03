export interface PusherBeamPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
