import { Loader2, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useServerHealth } from '@/lib/hooks/useServer';
import { useServerStore } from '@/stores/serverStore';
import { ModelProgress } from './ModelProgress';
import { useTranslation } from 'react-i18next';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export function ServerStatus() {
  const { data: health, isLoading, error } = useServerHealth();
  const serverUrl = useServerStore((state) => state.serverUrl);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('server.title', { defaultValue: 'Server Status' })}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground mb-1">{t('server.url', { defaultValue: 'Server URL' })}</div>
            <div className="font-mono text-sm">{serverUrl}</div>
          </div>
          
          <div className="space-y-1">
            <Label className="text-xs text-muted-foreground">{t('common.language', { defaultValue: 'Idioma' })}</Label>
            <Select value={i18n.language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[120px] h-8 text-xs">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es" className="text-xs">Español</SelectItem>
                <SelectItem value="en" className="text-xs">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Model download progress */}
        <div className="space-y-2">
          <ModelProgress modelName="qwen-tts-1.7B" displayName="Qwen TTS 1.7B" />
          <ModelProgress modelName="qwen-tts-0.6B" displayName="Qwen TTS 0.6B" />
          <ModelProgress modelName="whisper-base" displayName="Whisper Base" />
          <ModelProgress modelName="whisper-small" displayName="Whisper Small" />
          <ModelProgress modelName="whisper-medium" displayName="Whisper Medium" />
          <ModelProgress modelName="whisper-large" displayName="Whisper Large" />
        </div>

        {isLoading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm">{t('server.checking', { defaultValue: 'Checking connection...' })}</span>
          </div>
        ) : error ? (
          <div className="flex items-center gap-2">
            <XCircle className="h-4 w-4 text-destructive" />
            <span className="text-sm text-destructive">{t('server.failed', { message: error.message, defaultValue: `Connection failed: ${error.message}` })}</span>
          </div>
        ) : health ? (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm">{t('server.connected', { defaultValue: 'Connected' })}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={health.model_loaded || health.model_downloaded ? 'default' : 'secondary'}
              >
                {health.model_loaded || health.model_downloaded 
                  ? t('server.model_ready', { defaultValue: 'Model Ready' }) 
                  : t('server.no_model', { defaultValue: 'No Model' })}
              </Badge>
              <Badge variant={health.gpu_available ? 'default' : 'secondary'}>
                GPU: {health.gpu_available 
                  ? t('server.gpu_available', { defaultValue: 'Available' }) 
                  : t('server.gpu_not_available', { defaultValue: 'Not Available' })}
              </Badge>
              {health.vram_used_mb && (
                <Badge variant="outline">VRAM: {health.vram_used_mb.toFixed(0)} MB</Badge>
              )}
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
