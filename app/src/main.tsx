import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Importar config de i18n PRIMERO para garantizar inicialización antes de los componentes
import './i18n/config';

import App from './App';
import './index.css';
import { PlatformProvider } from './platform/PlatformContext';
import { devPlatform } from './platform/index';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PlatformProvider platform={devPlatform}>
        <App />
      </PlatformProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
