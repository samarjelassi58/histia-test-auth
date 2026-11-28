import { CompanyStatus } from "@/components/company/company-status";
import type { Company } from "@/components/company/company";

const companies = [
  {
    id: "nova-sante",
    name: "Nova Santé",
    description: {
      fr: "Une plateforme qui facilite les rendez-vous de santé.",
      en: "A platform that makes healthcare appointments easier.",
    },
    sectors: ["HEALTHCARE", "SOFTWARE"],
    status: CompanyStatus.ACTIVE,
  },
  {
    id: "verde-energie",
    name: "Verde Énergie",
    description: {
      fr: "Des solutions pour accompagner la transition énergétique.",
      en: "Solutions supporting the energy transition.",
    },
    sectors: ["ENERGY", "ECOLOGY"],
    status: CompanyStatus.ACTIVE,
  },
  {
    id: "orbite-studio",
    name: "Orbite Studio",
    description: {
      fr: "Des outils numériques pour les projets spatiaux.",
      en: "Digital tools for space projects.",
    },
    sectors: ["SPACE", "SOFTWARE"],
    status: CompanyStatus.ACQUIRED,
  },
  {
    id: "atelier-lys",
    name: "Atelier Lys",
    description: {
      fr: "Un atelier créatif dédié aux projets culturels.",
      en: "A creative studio dedicated to cultural projects.",
    },
    sectors: ["CULTURE", "SERVICES"],
    status: CompanyStatus.CLOSED,
  },
] satisfies Company[];

export function GET() {
  return Response.json(companies);
}
