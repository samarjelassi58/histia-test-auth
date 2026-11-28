import { t, type Dictionary } from "intlayer";

const content = {
  key: "starter-home",
  content: {
    title: t({ en: "UI kit", fr: "Kit d'interface" }),
    inputPlaceholder: t({ en: "Input (unstyled base)", fr: "Champ de saisie (sans style)" }),
    password: t({ en: "Password", fr: "Mot de passe" }),
    passwordWithError: t({ en: "Password with error", fr: "Mot de passe avec erreur" }),
    passwordTooShort: t({ en: "This password is too short.", fr: "Ce mot de passe est trop court." }),
    showPassword: t({ en: "Show password", fr: "Afficher le mot de passe" }),
    hidePassword: t({ en: "Hide password", fr: "Masquer le mot de passe" }),
    primary: t({ en: "Primary", fr: "Principal" }),
    loading: t({ en: "Loading", fr: "Chargement" }),
    disabled: t({ en: "Disabled", fr: "Désactivé" }),
    danger: t({ en: "Danger", fr: "Danger" }),
  },
} satisfies Dictionary;

export default content;
