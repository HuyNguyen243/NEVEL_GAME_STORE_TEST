import { LANGUAGE_TYPES } from "@/shared/types/languageTypes";

export class language {
  static name = "i18nextLng";
  static get() {
    const getLang = localStorage.getItem(this.name);
    return getLang || LANGUAGE_TYPES.EN;
  }

  static set(lang: string) {
    localStorage.setItem(this.name, lang);
  }
}
