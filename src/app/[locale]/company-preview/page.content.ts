import { t, type Dictionary } from "intlayer";

const content = {
  key: "company-preview",
  content: {
    title: t({ fr: "Aperçu de la carte", en: "Company card preview" }),
    loading: t({ fr: "Chargement…", en: "Loading…" }),
    error: t({ fr: "Impossible de charger les entreprises.", en: "Unable to load companies." }),
    empty: t({ fr: "Aucune entreprise disponible.", en: "No companies available." }),
  },
} satisfies Dictionary;

export default content;
