import type { PlatformUpdater, UpdateStatus } from './types';

class WebUpdater implements PlatformUpdater {
  private status: UpdateStatus = {
    checking: false,
    available: false,
    downloading: false,
    installing: false,
    readyToInstall: false,
  };

  private subscribers: Set<(status: UpdateStatus) => void> = new Set();

  subscribe(callback: (status: UpdateStatus) => void): () => void {
    this.subscribers.add(callback);
    callback(this.status);
    return () => {
      this.subscribers.delete(callback);
    };
  }

  getStatus(): UpdateStatus {
    return { ...this.status };
  }

  async checkForUpdates(): Promise<void> {
    // No-op: web app updates handled by server redeployment
  }

  async downloadAndInstall(): Promise<void> {
    // No-op for web
  }

  async restartAndInstall(): Promise<void> {
    // No-op for web
  }
}

export const webUpdater = new WebUpdater();
