import type { CompanyStatus } from "./company-status";
import type { Sector } from "@/components/sectors/sectors";

export type Company = {
  id: string;
  name: string;
  description: { fr: string; en: string };
  sectors: Sector[];
  status: CompanyStatus;
};
