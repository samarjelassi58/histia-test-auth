"use client";

import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { useIntlayer } from "next-intlayer";
import { useState } from "react";
import { CompanyCard } from "@/components/company/company-card";
import type { Company } from "@/components/company/company";

async function fetchCompanies(): Promise<Company[]> {
  const response = await fetch("/api/companies");
  if (!response.ok) {
    throw new Error(`Failed to load companies: ${response.status}`);
  }
  return response.json();
}

function PreviewContent({ locale }: { locale: "fr" | "en" }) {
  const content = useIntlayer("company-preview", locale);
  const { data, isPending, isError } = useQuery({
    queryKey: ["companies"],
    queryFn: fetchCompanies,
  });

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[36rem] flex-col justify-center gap-6 p-8">
      <h1 className="text-m font-semibold">{content.title}</h1>
      {isPending && <p role="status">{content.loading}</p>}
      {isError && <p role="alert">{content.error}</p>}
      {data && data.length === 0 && <p>{content.empty}</p>}
      {data && data.length > 0 && <CompanyCard company={data[0]} locale={locale} />}
    </main>
  );
}

export function CompanyPreview({ locale }: { locale: "fr" | "en" }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <PreviewContent locale={locale} />
    </QueryClientProvider>
  );
}
