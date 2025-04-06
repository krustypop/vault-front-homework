import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="main-layout bg-main-background min-h-screen min-w-screen flex justify-center items-center">
      {children}
    </main>
  )
}

export default MainLayout
