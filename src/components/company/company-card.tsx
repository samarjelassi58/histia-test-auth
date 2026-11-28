import { useIntlayer } from "next-intlayer";
import { SectorTag } from "@/components/sectors/sector-tag";
import { CompanyStatus } from "./company-status";
import type { Company } from "./company";

type Props = {
  company: Company;
  locale: "fr" | "en";
};

export function CompanyCard({ company, locale }: Props) {
  const content = useIntlayer("company-card", locale);
  const badge = company.status === CompanyStatus.ACQUIRED
    ? content.acquired
    : company.status === CompanyStatus.CLOSED || company.status === CompanyStatus.INACTIVE
      ? content.closed
      : null;

  return (
    <article className="w-full max-w-[552px] rounded-[10px] bg-black/30 p-4 shadow-[0_0_30px_2px_rgba(255,255,255,0.15)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-semibold">
            {company.name.charAt(0)}
          </span>
          <h2 className="truncate text-sm font-semibold">{company.name}</h2>
        </div>
        {badge && <span className="rounded-xs bg-danger/10 px-2 py-1 text-xs text-danger">{badge}</span>}
      </div>
      <p className="mt-4 text-sx text-white/70">{company.description[locale]}</p>
      <div className="mt-3 flex flex-wrap gap-x-4">
        {company.sectors.map((sector) => (
          <SectorTag key={sector} sector={sector} label={content.sectors[sector].value} isMonochrome />
        ))}
      </div>
    </article>
  );
}
