import { t, type Dictionary } from "intlayer";

const content = {
  key: "code-helper",
  content: {
    account: t({ en: "Account", fr: "Compte" }),
    appCode: t({ en: "App code", fr: "Code de l'application" }),
    emailCode: t({ en: "Email code", fr: "Code par courriel" }),
    resetLink: t({ en: "Reset link", fr: "Lien de réinitialisation" }),
    recoveryCodes: t({ en: "Recovery codes", fr: "Codes de récupération" }),
    openLink: t({ en: "Open link", fr: "Ouvrir le lien" }),
    sent: t({ en: "sent", fr: "envoyé à" }),
    testPassword: t({ en: "Password for every test account:", fr: "Mot de passe pour tous les comptes de test :" }),
    loading: t({ en: "Loading…", fr: "Chargement…" }),
  },
} satisfies Dictionary;

export default content;
