import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/app/App'
import { MainLayout } from '@/layouts/MainLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@/styles/index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <App />
      </MainLayout>
    </QueryClientProvider>
  </React.StrictMode>
)
