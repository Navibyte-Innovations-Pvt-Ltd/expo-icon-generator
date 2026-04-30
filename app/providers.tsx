"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { GlitchgrabProvider, ReportButton } from "glitchgrab";

const GLITCHGRAB_TOKEN = process.env.NEXT_PUBLIC_GLITCHGRAB_TOKEN ?? "";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 1,
          },
          mutations: {
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <GlitchgrabProvider token={GLITCHGRAB_TOKEN}>
        {children}
        <ReportButton position="bottom-right" label="Report Bug" />
      </GlitchgrabProvider>
    </QueryClientProvider>
  );
}
