// import the original type declarations
import "react-i18next";
import en from "./lang-json/en.json";
import sin from "./lang-json/sin.json";

declare module "react-i18next" {
    interface Resources {
        en: { translation: typeof en };
        sin: { translation: typeof sin };
    }
}

declare module "react-i18next" {
    interface CustomTypeOptions {
        defaultNS: "en";
        resources: {
            en: typeof en;
            sin: typeof sin;
        };
    }
}
