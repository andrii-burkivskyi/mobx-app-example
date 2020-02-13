import Translation from "../../../../core/common/Translation.store";

export const BackendEntityI18n = new Translation({
    languages: {
        en: () => import("./i18n/en.json")
    },
    keys: {
        entityName: "entityName"
    }
})