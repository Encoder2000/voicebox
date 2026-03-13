import type { PlatformMetadata } from './types';

export const webMetadata: PlatformMetadata = {
  async getVersion(): Promise<string> {
    return (import.meta as any).env?.VITE_APP_VERSION || '0.1.0';
  },
  isTauri: false,
};
