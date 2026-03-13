import type { Platform } from './types';
import { webFilesystem } from './filesystem';
import { webUpdater } from './updater';
import { webAudio } from './audio';
import { webLifecycle } from './lifecycle';
import { webMetadata } from './metadata';

/**
 * Plataforma web/desarrollo para el entorno de app/.
 * En producción, tauri/ y web/ tienen sus propias implementaciones.
 * Este objeto permite el desarrollo standalone de la app sin Tauri.
 */
export const devPlatform: Platform = {
  filesystem: webFilesystem,
  updater: webUpdater,
  audio: webAudio,
  lifecycle: webLifecycle,
  metadata: webMetadata,
};
