import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectorTag } from "@/components/sectors/sector-tag";
import { SECTORS } from "@/components/sectors/sectors";
import { PasswordInput } from "@/components/ui/password-input";
import { getIntlayer, Locales } from "intlayer";
import Link from "next/link";
import { notFound } from "next/navigation";

// Start page: preview of the building blocks copied from the Stolos web app. Replace it with your own screens.

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (locale !== Locales.ENGLISH && locale !== Locales.FRENCH) {
    notFound();
  }
  const content = getIntlayer("starter-home", locale);
  const visibilityLabels = { show: content.showPassword, hide: content.hidePassword };

  return (
    <main className="mx-auto flex w-full max-w-[36rem] flex-col gap-8 p-8">
      <header className="flex items-baseline justify-between">
        <h1 className="text-m font-semibold">{content.title}</h1>
        <Link className="text-sx text-primary underline" href={`/${locale}/code`}>
          /code
        </Link>
      </header>

      <section className="glassmorphism flex flex-col gap-6 rounded-m p-8">
        <h2 className="text-sm font-medium">.glassmorphism</h2>

        <Input
          placeholder={content.inputPlaceholder}
          className="rounded-sm border border-white/40 bg-black/10 px-4 py-2.5"
          inputClassName="h-7 text-lg placeholder:text-white/40"
        />
        <PasswordInput label={content.password} visibilityLabels={visibilityLabels} />
        <PasswordInput
          label={content.passwordWithError}
          defaultValue="secret"
          errorMessage={content.passwordTooShort}
          visibilityLabels={visibilityLabels}
        />

        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="lg" alignment="center" textSize="base">
            {content.primary}
          </Button>
          <Button variant="primary" size="lg" alignment="center" textSize="base" isLoading>
            {content.loading}
          </Button>
          <Button variant="primary" size="lg" alignment="center" textSize="base" disabled>
            {content.disabled}
          </Button>
          <Button variant="danger">{content.danger}</Button>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Button variant="ghostLight">ghostLight</Button>
          <Button variant="ghostMedium">ghostMedium</Button>
          <Button variant="ghostDark">ghostDark</Button>
          <Button variant="ghostMonochrome">ghostMonochrome</Button>
        </div>
      </section>

      <section className="glassmorphism flex flex-col gap-6 rounded-m p-8">
        <h2 className="text-sm font-medium">SectorTag</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {SECTORS.slice(0, 6).map((sector) => (
            <SectorTag
              key={sector}
              sector={sector}
              label={sector}
              variant="empty-large"
              isMonochrome
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {SECTORS.map((sector) => (
            <SectorTag
              key={sector}
              sector={sector}
              label={sector}
              variant="empty-large"
              bg="light-dim"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
