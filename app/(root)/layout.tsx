import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex h-screen flex-col">
    
      <main className="flex-1 wrapper">
        {children}
      </main>
    </div>
  );
}
