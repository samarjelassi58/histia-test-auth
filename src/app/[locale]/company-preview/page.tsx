import { Locales } from "intlayer";
import { notFound } from "next/navigation";
import { CompanyPreview } from "./company-preview";

export default async function CompanyPreviewPage({ params }: PageProps<"/[locale]/company-preview">) {
  const { locale } = await params;
  if (locale !== Locales.ENGLISH && locale !== Locales.FRENCH) {
    notFound();
  }

  return <CompanyPreview locale={locale} />;
}
