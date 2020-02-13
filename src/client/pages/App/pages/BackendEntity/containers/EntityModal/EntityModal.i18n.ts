import Translation from "../../../../../../core/common/Translation.store";

export const EntityModalI18n = new Translation({
    languages: {
        en: () => import("./i18n/en.json")
    },
    keys: {
        createEntity: "createEntity",
        updateEntity: "updateEntity",
        submit: "submit",
        name: "name",
    }
})