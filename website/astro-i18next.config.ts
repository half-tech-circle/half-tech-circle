export default {
  defaultLocale: "ja",
  locales: ["ja", "en"],
  load: ["server", "client"],
  i18nextServer: {
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  },
  i18nextClient: {
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  },
};