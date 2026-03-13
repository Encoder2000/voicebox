import type { PlatformLifecycle } from './types';

class WebLifecycle implements PlatformLifecycle {
  onServerReady?: () => void;

  async startServer(_remote = false): Promise<string> {
    // Web/dev assumes server is running externally
    const serverUrl = (import.meta as any).env?.VITE_SERVER_URL || 'http://localhost:17493';
    this.onServerReady?.();
    return serverUrl;
  }

  async stopServer(): Promise<void> {
    // No-op for web - server is managed externally
  }

  async setKeepServerRunning(_keep: boolean): Promise<void> {
    // No-op for web
  }

  async setupWindowCloseHandler(): Promise<void> {
    // No-op for web - no window close handling needed
  }
}

export const webLifecycle = new WebLifecycle();
