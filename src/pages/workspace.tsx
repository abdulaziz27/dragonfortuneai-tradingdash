import { motion } from "framer-motion"

import { TradingChart } from "@/components/workspace/TradingChart"
import { WorkspaceToolbar } from "@/components/workspace/WorkspaceToolbar"

export function WorkspacePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex h-full w-full min-h-0 min-w-0 flex-1 flex-col"
    >
      <WorkspaceToolbar />
      <div className="flex flex-1 w-full flex-col items-stretch gap-4 p-4">
        <section className="relative flex w-full flex-1 min-h-0 min-w-0 overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm">
          <div className="relative flex-1 min-h-0 min-w-0">
            <TradingChart className="absolute inset-0" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />
        </section>
      </div>
    </motion.div>
  )
}
