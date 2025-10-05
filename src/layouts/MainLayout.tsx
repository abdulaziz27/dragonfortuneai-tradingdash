import { type ReactNode } from "react"

import { Sidebar, SidebarInset, SidebarProvider } from "@/components/sidebar-07"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background text-foreground">
        <Sidebar className="border-r border-border/60 bg-sidebar" />
        <SidebarInset className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
