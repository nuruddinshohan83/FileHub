import React from "react"
import App from "./App.jsx"
import ReactDOM from "react-dom/client"

import { MantineProvider } from "@mantine/core"
import { BrowserRouter } from "react-router-dom"
import { Notifications } from "@mantine/notifications"
import AuthContextProvider from "./utils/contexts/AuthContextProvider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MantineProvider
      theme={{
        fontFamily: "sans-serif",
        fontFamilyMonospace: "sans-serif",
        headings: { fontFamily: " sans-serif" },
        colors: {
          base: [
            "#d6e0f9",
            "#c1d1f6",
            "#acc2f3",
            "#98b3f0",
            "#83a3ed",
            "#6e94ea",
            "#5985e7",
            "#4575e4",
            "#3066e1",
          ],
          // gray: [
          //     "#f8fafc",
          //     "#f1f5f9",
          //     "#e2e8f0",
          //     "#cbd5e1",
          //     "#94a3b8",
          //     "#64748b",
          //     "#475569",
          //     "#334155",
          // ],
        },
        colorScheme: "light",
      }}
      withGlobalStyles
      withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Notifications />
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthContextProvider>
      </QueryClientProvider>
    </MantineProvider>
  </BrowserRouter>
)
