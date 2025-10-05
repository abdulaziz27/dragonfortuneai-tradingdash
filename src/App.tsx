import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"

import { ThemeProvider } from "@/components/theme-provider"
import { MainLayout } from "@/layouts/MainLayout"
import { WorkspacePage } from "@/pages/workspace"

function LayoutShell() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

export function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" storageKey="trading-workspace-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutShell />}>
            <Route path="/workspace" element={<WorkspacePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/workspace" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
