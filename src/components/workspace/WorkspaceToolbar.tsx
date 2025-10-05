import { memo } from "react"
import { Maximize2, Settings, SlidersHorizontal } from "lucide-react"

import { SidebarTrigger } from "@/components/sidebar-07"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

interface WorkspaceToolbarProps {
  className?: string
}

export const WorkspaceToolbar = memo(function WorkspaceToolbar({ className }: WorkspaceToolbarProps) {
  return (
    <header
      className={cn(
        "flex items-center justify-between gap-4 border-b border-border/60 bg-card/80 px-4 py-3 backdrop-blur",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <SidebarTrigger className="h-9 w-9" />
        <div className="flex flex-col">
          <h1 className="text-base font-semibold leading-tight">Workspace</h1>
          <p className="text-xs text-muted-foreground">BTCUSD · 1D · Bitstamp</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="outline" size="sm" className="rounded-full">
          <SlidersHorizontal className="mr-2 h-3.5 w-3.5" />
          Indicators
        </Button>
        <Button variant="outline" size="sm" className="rounded-full">
          <Settings className="mr-2 h-3.5 w-3.5" />
          Settings
        </Button>
        <Button variant="default" size="sm" className="rounded-full">
          <Maximize2 className="mr-2 h-3.5 w-3.5" />
          Fullscreen
        </Button>
      </div>
    </header>
  )
})
