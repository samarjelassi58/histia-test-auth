import { t, type Dictionary } from "intlayer";
import type { Sector } from "@/components/sectors/sectors";

const sectors = {
  ARTIFICIAL_INTELLIGENCE: t({ fr: "Intelligence artificielle", en: "Artificial intelligence" }),
  ECOLOGY: t({ fr: "Écologie", en: "Ecology" }),
  FINANCE: t({ fr: "Finance", en: "Finance" }),
  SOFTWARE: t({ fr: "Logiciel", en: "Software" }),
  SPACE: t({ fr: "Spatial", en: "Space" }),
  HEALTHCARE: t({ fr: "Santé", en: "Healthcare" }),
  INDUSTRY: t({ fr: "Industrie", en: "Industry" }),
  CONSTRUCTION: t({ fr: "Construction", en: "Construction" }),
  ENERGY: t({ fr: "Énergie", en: "Energy" }),
  RESOURCES: t({ fr: "Ressources", en: "Resources" }),
  REAL_ESTATE: t({ fr: "Immobilier", en: "Real estate" }),
  HOSPITALITY: t({ fr: "Hôtellerie", en: "Hospitality" }),
  SOCIAL: t({ fr: "Social", en: "Social" }),
  NEW_TECHNOLOGIES: t({ fr: "Nouvelles technologies", en: "New technologies" }),
  EDUCATION: t({ fr: "Éducation", en: "Education" }),
  FOOD: t({ fr: "Alimentation", en: "Food" }),
  AGRICULTURE: t({ fr: "Agriculture", en: "Agriculture" }),
  SPORTS: t({ fr: "Sport", en: "Sports" }),
  MEDIA: t({ fr: "Médias", en: "Media" }),
  COMMUNICATIONS: t({ fr: "Communication", en: "Communications" }),
  CULTURE: t({ fr: "Culture", en: "Culture" }),
  ENTERTAINMENT: t({ fr: "Divertissement", en: "Entertainment" }),
  TRANSPORT: t({ fr: "Transport", en: "Transport" }),
  COMPUTER_HARDWARE: t({ fr: "Matériel informatique", en: "Computer hardware" }),
  SERVICES: t({ fr: "Services", en: "Services" }),
  CONSUMER_GOODS: t({ fr: "Biens de consommation", en: "Consumer goods" }),
  DISTRIBUTION: t({ fr: "Distribution", en: "Distribution" }),
  TELECOMMUNICATIONS: t({ fr: "Télécommunications", en: "Telecommunications" }),
  BIOTECHNOLOGY: t({ fr: "Biotechnologie", en: "Biotechnology" }),
  WEB3: t({ fr: "Web3", en: "Web3" }),
  LEGAL: t({ fr: "Juridique", en: "Legal" }),
  DEFENSE: t({ fr: "Défense", en: "Defense" }),
} satisfies Record<Sector, ReturnType<typeof t>>;

const content = {
  key: "company-card",
  content: {
    sectors,
    closed: t({ fr: "Fermée", en: "Closed" }),
    acquired: t({ fr: "Vendue", en: "Sold" }),
  },
} satisfies Dictionary;

export default content;
