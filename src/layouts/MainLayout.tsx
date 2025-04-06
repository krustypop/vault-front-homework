import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="main-layout bg-main-background flex min-h-screen min-w-screen items-center justify-center">
      {children}
    </main>
  )
}
